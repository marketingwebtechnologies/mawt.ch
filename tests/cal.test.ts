import { test } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { verifierSignatureCal, lireReservation, formaterCreneau, numeroWhatsApp, numeroLisible, delaiRappelSecondes } from "../src/lib/cal/pur";
import { mailConfirmation, mailRappelVeille, messageWhatsAppAndrew } from "../src/lib/cal/textes";

const corps = {
  triggerEvent: "BOOKING_CREATED",
  payload: {
    type: "appel",
    uid: "abc123",
    startTime: "2026-11-11T12:30:00Z",
    location: "+41791281156",
    attendees: [{ name: "jenny Posligua", email: "jenny@example.ch", timeZone: "Europe/Zurich" }],
    responses: { name: { value: "jenny Posligua" }, email: { value: "jenny@example.ch" } },
  },
};

test("signature Cal : hmac hex du corps brut", () => {
  const brut = JSON.stringify(corps);
  const sig = createHmac("sha256", "s3cret").update(brut).digest("hex");
  assert.equal(verifierSignatureCal(brut, sig, "s3cret"), true);
  assert.equal(verifierSignatureCal(brut + " ", sig, "s3cret"), false);
  assert.equal(verifierSignatureCal(brut, null, "s3cret"), false);
  assert.equal(verifierSignatureCal(brut, sig, ""), false);
});

test("lecture de la réservation", () => {
  const r = lireReservation(corps);
  assert.equal(r.evenement, "creee");
  assert.equal(r.slug, "appel");
  assert.equal(r.prenom, "Jenny");
  assert.equal(r.email, "jenny@example.ch");
  assert.equal(r.telephone, "+41791281156");
  assert.equal(lireReservation({ triggerEvent: "BOOKING_CANCELLED", payload: { uid: "x" } }).evenement, "annulee");
  assert.equal(lireReservation({}).evenement, "autre");
});

test("créneau en heure suisse", () => {
  assert.deepEqual(formaterCreneau("2026-11-11T12:30:00Z"), { jour: "mercredi 11 novembre", heure: "13 h 30" });
  assert.deepEqual(formaterCreneau("2026-11-04T10:00:00Z"), { jour: "mercredi 4 novembre", heure: "11 h" });
});

test("numéros suisses", () => {
  assert.equal(numeroWhatsApp("079 854 94 20"), "41798549420");
  assert.equal(numeroWhatsApp("+41 79 128 11 56"), "41791281156");
  assert.equal(numeroWhatsApp("0041791281156"), "41791281156");
  assert.equal(numeroWhatsApp("123"), "");
  assert.equal(numeroLisible("+41791281156"), "079 128 11 56");
});

test("délai du rappel : 24 h avant, rien si l'appel est dans moins de 26 h", () => {
  const maintenant = Date.parse("2026-11-03T12:00:00Z");
  assert.equal(delaiRappelSecondes("2026-11-05T12:00:00Z", maintenant), 24 * 3600);
  assert.equal(delaiRappelSecondes("2026-11-04T13:00:00Z", maintenant), null);
  assert.equal(delaiRappelSecondes("pas une date", maintenant), null);
});

test("textes : confirmation, rappel et message WhatsApp", () => {
  const r = lireReservation(corps);
  const c = mailConfirmation(r);
  assert.equal(c.sujet, "Notre appel de mercredi 11 novembre, 13 h 30");
  assert.match(c.texte, /au 079 128 11 56/);
  assert.match(c.texte, /cal\.com\/reschedule\/abc123/);
  assert.match(c.html, /sig-name\.png/);
  assert.match(mailRappelVeille(r).texte, /on s'appelle demain à 13 h 30\. Toujours bon pour vous \?/);
  const wa = messageWhatsAppAndrew(r);
  assert.match(wa.texte, /^Bonjour Jenny, c'est Andrew de MAWT/);
  assert.match(wa.lien, /^https:\/\/wa\.me\/41791281156\?text=/);
  for (const t of [c.texte, mailRappelVeille(r).texte, wa.texte]) assert.doesNotMatch(t, /CHF|prix|tarif|—/);
});

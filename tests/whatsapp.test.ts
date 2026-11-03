import { test } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import {
  verifierSignatureMeta, extraireEvenements, delaiReponseSecondes, andrewALaMain, masquerNumero, normaliserNumero, vientDuSite,
} from "../src/lib/whatsapp/pur";

test("origine : seul le texte prérempli du bouton WhatsApp du guide ouvre le double", () => {
  assert.equal(vientDuSite("Bonjour, j'ai lu le guide MAWT et j'aimerais en discuter : les devis"), true);
  assert.equal(vientDuSite("bonjour  J’AI lu le Guide mawt"), true);
  assert.equal(vientDuSite("Salut Andrew, c'est Marc, on se voit ce soir ?"), false);
  assert.equal(vientDuSite("Bonjour MAWT, je souhaite parler d'un projet."), false);
  assert.equal(vientDuSite(""), false);
});

const SECRET = "secret-de-test";
const corps = JSON.stringify({ object: "whatsapp_business_account", entry: [] });
const bonneSignature = "sha256=" + createHmac("sha256", SECRET).update(corps, "utf8").digest("hex");

test("signature Meta : acceptée quand elle correspond, refusée sinon", () => {
  assert.equal(verifierSignatureMeta(corps, bonneSignature, SECRET), true);
  assert.equal(verifierSignatureMeta(corps + " ", bonneSignature, SECRET), false);
  assert.equal(verifierSignatureMeta(corps, "sha256=deadbeef", SECRET), false);
  assert.equal(verifierSignatureMeta(corps, null, SECRET), false);
  assert.equal(verifierSignatureMeta(corps, bonneSignature, ""), false);
});

const charge = {
  object: "whatsapp_business_account",
  entry: [{
    id: "1", changes: [{
      field: "messages",
      value: {
        messaging_product: "whatsapp",
        metadata: { display_phone_number: "41 76 636 33 33", phone_number_id: "123" },
        contacts: [{ profile: { name: "Jean Patron" }, wa_id: "41791234567" }],
        messages: [
          { from: "41791234567", id: "wamid.A", timestamp: "1793700000", type: "text", text: { body: "Bonjour, j'ai lu le guide MAWT" } },
          { from: "41791234567", id: "wamid.B", timestamp: "1793700001", type: "image", image: { id: "x" } },
          { from: "41766363333", to: "41791234567", id: "wamid.C", timestamp: "1793700002", type: "text", text: { body: "Je vous réponds moi-même" } },
        ],
      },
    }, {
      field: "smb_message_echoes",
      value: { message_echoes: [{ from: "41766363333", to: "41791234567", id: "wamid.D", timestamp: "1793700003", type: "text", text: { body: "Écho depuis l'appli" } }] },
    }, {
      field: "messages",
      value: { statuses: [{ id: "wamid.A", status: "delivered" }] },
    }],
  }],
};

test("extraction : messages entrants, échos d'Andrew, pièces jointes et statuts", () => {
  const ev = extraireEvenements(charge);
  assert.equal(ev.length, 5);
  assert.deepEqual(ev[0], { type: "entrant", de: "41791234567", nom: "Jean Patron", texte: "Bonjour, j'ai lu le guide MAWT", id: "wamid.A", ts: 1793700000000 });
  assert.deepEqual(ev[1], { type: "autre", sousType: "image" });
  assert.equal(ev[2].type, "echo");
  assert.equal(ev[3].type, "echo");
  if (ev[3].type === "echo") { assert.equal(ev[3].vers, "41791234567"); assert.equal(ev[3].texte, "Écho depuis l'appli"); }
  assert.deepEqual(ev[4], { type: "autre", sousType: "statuts" });
});

test("extraction : charge vide ou inattendue ne casse rien", () => {
  assert.deepEqual(extraireEvenements({}), []);
  assert.deepEqual(extraireEvenements(null), []);
  assert.deepEqual(extraireEvenements({ entry: [{ changes: [{ value: {} }] }] }), []);
});

test("délai : 30 s pour la première réponse, puis 10 s plus la longueur, plafond 25 s", () => {
  assert.equal(delaiReponseSecondes(0, 400), 30);
  assert.equal(delaiReponseSecondes(1, 0), 10);
  assert.equal(delaiReponseSecondes(1, 100), 15);
  assert.equal(delaiReponseSecondes(3, 200), 20);
  assert.equal(delaiReponseSecondes(2, 1000), 25);
});

test("Andrew a la main pendant 24 h après son dernier message", () => {
  const t = 1793700000000;
  assert.equal(andrewALaMain(null, t), false);
  assert.equal(andrewALaMain(t - 60_000, t), true);
  assert.equal(andrewALaMain(t - 23 * 3600_000, t), true);
  assert.equal(andrewALaMain(t - 25 * 3600_000, t), false);
});

test("numéros : normalisation et masquage pour les journaux", () => {
  assert.equal(normaliserNumero("+41 79 123 45 67"), "41791234567");
  assert.equal(masquerNumero("41791234567"), "41*******67");
  assert.equal(masquerNumero("123"), "***");
});

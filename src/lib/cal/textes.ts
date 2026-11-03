// Texts validated by Andrew on 03.11.2026 (« ok textes »), adapted to come from the site instead of Cal.
import { formaterCreneau, lienReplanifier, numeroLisible, numeroWhatsApp, type Reservation } from "./pur";

export type Mail = { sujet: string; texte: string; html: string };

const echapper = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Andrew's Outlook signature (images hosted on mawt.ch), same as « MAWT (aa@mawt.ch).htm ». */
export const SIGNATURE_HTML = `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;margin-top:18px;"><tr><td style="padding:0 20px 0 0;vertical-align:middle;border-right:2px solid #4FC59C;"><a href="https://mawt.ch" style="text-decoration:none;"><img src="https://mawt.ch/mawt-logo-email.png?v=3" width="110" height="25" alt="M&amp;WT" style="border:0;"></a></td><td style="padding:0 0 0 20px;vertical-align:middle;"><table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr><td colspan="2"><img src="https://mawt.ch/signature/sig-name.png" width="111" height="22" alt="Andrew Awad" style="border:0;"></td></tr><tr><td colspan="2" style="padding:1px 0 6px 0;"><img src="https://mawt.ch/signature/sig-role.png" width="57" height="17" alt="Fondateur" style="border:0;"></td></tr><tr><td style="padding:0 6px 3px 0;"><img src="https://mawt.ch/signature/icon-mail2.png" width="14" height="14" alt="" style="border:0;"></td><td style="padding:0 0 3px 0;"><a href="mailto:aa@mawt.ch"><img src="https://mawt.ch/signature/sig-email.png" width="80" height="18" alt="aa@mawt.ch" style="border:0;"></a></td></tr><tr><td style="padding:0 6px 3px 0;"><img src="https://mawt.ch/signature/icon-phone2.png" width="14" height="14" alt="" style="border:0;"></td><td style="padding:0 0 3px 0;"><a href="tel:+41766363333"><img src="https://mawt.ch/signature/sig-phone.png" width="95" height="18" alt="+41 76 636 33 33" style="border:0;"></a></td></tr><tr><td style="padding:0 6px 0 0;vertical-align:top;"><img src="https://mawt.ch/signature/icon-pin2.png" width="14" height="14" alt="" style="border:0;margin-top:2px;"></td><td><img src="https://mawt.ch/signature/sig-address1b.png" width="146" height="18" alt="Rue de la Fontenette 23" style="border:0;"></td></tr><tr><td></td><td style="padding:1px 0 0 0;"><img src="https://mawt.ch/signature/sig-address2b.png" width="83" height="18" alt="1227 Carouge" style="border:0;"></td></tr></table></td></tr></table>`;

const SIGNATURE_TEXTE = "Andrew Awad\nFondateur, MAWT\n+41 76 636 33 33 · mawt.ch";

function versHtml(paragraphes: string[]): string {
  const corps = paragraphes.map((p) => `<p style="margin:0 0 12px 0;">${echapper(p).replace(/(https:\/\/\S+)/g, '<a href="$1">$1</a>')}</p>`).join("");
  return `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#1d2b2e;">${corps}${SIGNATURE_HTML}</div>`;
}

function mail(sujet: string, paragraphes: string[]): Mail {
  return { sujet, texte: paragraphes.join("\n\n") + "\n\n" + SIGNATURE_TEXTE, html: versHtml(paragraphes) };
}

function appelAu(r: Reservation): string {
  const n = numeroLisible(r.telephone);
  return n ? `au ${n}` : "au numéro que vous avez indiqué";
}

/** Text 1, sent right after the booking. */
export function mailConfirmation(r: Reservation): Mail {
  const { jour, heure } = formaterCreneau(r.debut);
  return mail(`Notre appel de ${jour}, ${heure}`, [
    r.prenom ? `Bonjour ${r.prenom},` : "Bonjour,",
    `C'est noté, merci ! Notre appel est prévu ${jour} à ${heure}.`,
    `Pour qu'il ait bien lieu, ajoutez-le à votre agenda depuis l'invitation que vous venez de recevoir. Je vous appelle moi-même à l'heure prévue, ${appelAu(r)}.`,
    `Un empêchement ? Vous pouvez décaler en un clic ici : ${lienReplanifier(r.uid)}`,
    "Andrew",
  ]);
}

/** Text 3, sent 24 h before the call. */
export function mailRappelVeille(r: Reservation): Mail {
  const { heure } = formaterCreneau(r.debut);
  return mail(`Notre appel de demain, ${heure}`, [
    r.prenom ? `Bonjour ${r.prenom},` : "Bonjour,",
    `Petit rappel : on s'appelle demain à ${heure}. Toujours bon pour vous ?`,
    `Si ce moment ne vous arrange plus, aucun souci, vous pouvez le décaler ici : ${lienReplanifier(r.uid)}`,
    "Andrew",
  ]);
}

/** Text 2, Andrew's same-day personal message, ready to paste (or one tap via wa.me). */
export function messageWhatsAppAndrew(r: Reservation): { texte: string; lien: string } {
  const { jour, heure } = formaterCreneau(r.debut);
  const n = numeroLisible(r.telephone);
  const texte = `Bonjour${r.prenom ? ` ${r.prenom}` : ""}, c'est Andrew de MAWT. J'ai bien vu votre réservation pour ${jour} à ${heure}, merci. Je vous appelle${n ? ` au ${n}` : ""} ; si une visio vous arrange mieux, dites-le-moi simplement. À ${jour.split(" ")[0]} !`;
  const wa = numeroWhatsApp(r.telephone);
  return { texte, lien: wa ? `https://wa.me/${wa}?text=${encodeURIComponent(texte)}` : "" };
}

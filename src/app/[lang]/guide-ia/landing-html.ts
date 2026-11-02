// Meta landing for the free PDF guides (8 angles, same 12 trade examples). The cover, title and
// subtitle follow the ad through utm_content (or ?v=), as on /fr/500-chf. Posts to /api/guide.
// A download is NOT a call lead: the pixel fires a custom "GuideTelecharge" event, never "Lead",
// so the call campaign keeps learning on real prospects. Generated from
// mawt-microtest/creas/guides-pdf/page/index.html.
const landingHtml = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Guide gratuit pour les entrepreneurs · MAWT</title>
<style>
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-Regular.otf') format('opentype');font-weight:400;font-display:swap}
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-SemiBold.otf') format('opentype');font-weight:600;font-display:swap}
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-Bold.otf') format('opentype');font-weight:700;font-display:swap}
:root{--encre:#002B36;--corps:#33484D;--gris:#5E7175;--filet:#E7E4DF;--fond:#FBFBFB;--mint:#4FC59C;--mint-fonce:#1E9E72}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Gilroy',system-ui,sans-serif;color:var(--encre);background:#fff;font-size:18px;line-height:1.55}
header{padding:20px 24px;border-bottom:1px solid var(--filet)}
header img{height:26px;display:block}
main{max-width:1080px;margin:0 auto;padding:48px 24px 64px;display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:start}
.couv img{width:100%;max-width:420px;height:auto;display:block;border-radius:6px;box-shadow:0 18px 40px rgba(0,43,54,.18)}
.badge{display:inline-block;background:var(--mint);color:var(--encre);font-weight:700;font-size:13px;letter-spacing:.08em;padding:6px 12px;border-radius:5px}
.cible{margin-top:16px;font-weight:600;font-size:17px;color:var(--mint-fonce)}
h1{font-size:40px;line-height:1.15;font-weight:700;margin:6px 0 14px}
.st{font-size:20px;color:var(--corps);margin-bottom:24px}
ul.dedans{list-style:none;margin-bottom:28px}
ul.dedans li{padding:6px 0 6px 28px;position:relative;color:var(--corps)}
ul.dedans li::before{content:"";position:absolute;left:0;top:14px;width:12px;height:12px;background:var(--mint);border-radius:3px}
form{background:var(--fond);border:1px solid var(--filet);border-radius:10px;padding:24px}
label{display:block;font-weight:600;font-size:15px;margin:0 0 6px}
input{width:100%;font:inherit;font-size:18px;padding:13px 14px;border:1px solid #D8D5CF;border-radius:7px;background:#fff;color:var(--encre);margin-bottom:16px}
input:focus{outline:2px solid var(--mint);border-color:var(--mint)}
button{width:100%;font:inherit;font-weight:700;font-size:19px;background:var(--encre);color:#fff;border:0;border-radius:8px;padding:16px;cursor:pointer}
button:hover{background:#0b3f4d}
button[disabled]{opacity:.7;cursor:wait}
.rassure{font-size:13px;line-height:1.5;color:var(--gris);margin-top:12px;text-align:center}
.rassure a{color:var(--gris)}
.erreur{display:none;color:#A33;font-size:15px;margin:-6px 0 12px}
.merci{display:none;background:var(--fond);border:1px solid var(--filet);border-radius:10px;padding:28px}
.merci h2{font-size:26px;margin-bottom:10px}
.merci p{color:var(--corps)}
.merci a.dl{display:inline-block;margin-top:16px;background:var(--mint);color:var(--encre);font-weight:700;padding:14px 26px;border-radius:999px;text-decoration:none}
.merci .apres{margin-top:22px;font-size:15px}
.merci a.q{display:inline-flex;align-items:center;gap:10px;margin-top:8px;border:2px solid var(--mint);color:var(--encre);font-weight:600;padding:10px 20px;border-radius:999px;text-decoration:none}
.hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}
footer{border-top:1px solid var(--filet);padding:20px 24px;font-size:14px;color:var(--gris);text-align:center}
@media (max-width:820px){
  main{grid-template-columns:1fr;gap:28px;padding:28px 16px 48px}
  .couv{order:2}.texte{order:1}
  .couv img{max-width:300px;margin:0 auto}
  h1{font-size:30px}.st{font-size:18px}
}
</style>
<script>
(function(){
  try { if (localStorage.getItem("mawt-cookie-consent") === "essential") return; } catch(e) {}
  if (location.hostname.indexOf("mawt.ch") === -1) return;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','959258244767672');
  fbq('track','PageView');
  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","ynxcutb3fv");
  try {
    var pq = new URLSearchParams(location.search);
    clarity("set", "landing", "guide-ia");
    ["utm_source","utm_campaign","utm_content","v"].forEach(function(k){ var v = pq.get(k); if (v) clarity("set", k, v.slice(0, 80)); });
  } catch (e) {}
})();
function suivre(nom){ try { if (window.clarity) { clarity("event", nom); } } catch (e) {} }
</script>
</head>
<body>
<header><img src="/guide-ia/mawt-logo.svg" alt="MAWT" width="113" height="26"></header>
<main>
  <div class="couv"><img id="couv" src="/guide-ia/couv/d2-par-ou-commencer.webp" alt="Couverture du guide" width="420" height="594"></div>
  <div class="texte">
    <span class="badge">GUIDE GRATUIT · PDF</span>
    <p class="cible">Pour les entrepreneurs et dirigeants de PME</p>
    <h1 id="titre">Par où commencer avec l'IA dans votre PME</h1>
    <p class="st" id="st">12 exemples concrets, un par métier, et la méthode pour choisir le vôtre.</p>
    <ul class="dedans">
      <li>12 exemples concrets, un par métier : bâtiment, fiduciaire, RH, régie, commerce…</li>
      <li>Pour chacun : ce que fait l'IA, et ce qu'il vous reste à faire</li>
      <li>3 questions pour choisir votre première tâche</li>
    </ul>
    <form id="form" novalidate>
      <label for="prenom">Votre prénom</label>
      <input id="prenom" name="prenom" autocomplete="given-name" required maxlength="60">
      <label for="email">Votre e-mail</label>
      <input id="email" name="email" type="email" autocomplete="email" inputmode="email" required maxlength="200">
      <p class="erreur" id="erreur">Vérifiez votre prénom et votre e-mail.</p>
      <input class="hp" name="mawt_hp" id="mawt_hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <button type="submit" id="envoyer">Recevoir le guide gratuit</button>
      <p class="rassure">En demandant le guide, vous acceptez que MAWT vous recontacte par e-mail au sujet de l'IA dans votre entreprise. Désinscription en un clic, à tout moment. <a href="/fr/confidentialite" target="_blank" rel="noopener">Confidentialité</a></p>
    </form>
    <div class="merci" id="merci">
      <h2>C'est parti, <span id="nom"></span> !</h2>
      <p>Votre guide est prêt. Vous le recevez aussi par e-mail pour le garder.</p>
      <a class="dl" id="dl" href="/guide-ia/pdf/d2-par-ou-commencer.pdf" download>Télécharger le guide →</a>
      <p class="apres">Vous voulez en discuter ?</p>
      <a class="q" id="wa" href="https://wa.me/41766363333?text=Bonjour%2C%20j%27ai%20lu%20le%20guide%20MAWT%20et%20j%27aimerais%20en%20discuter%20%3A%20"><img src="/guide-ia/whatsapp.svg" alt="" width="22" height="22">Écrivez-moi sur WhatsApp →</a>
    </div>
  </div>
</main>
<footer>MAWT · Automatisation et IA pour les PME romandes · Rue de la Fontenette 23, 1227 Carouge</footer>
<script>
(function(){
  var G = {
    "a1": ["a1-concurrents", "12 tâches que vos concurrents ne font déjà plus à la main", "Un exemple par métier, pour voir ce qui se fait déjà dans les PME qui ont pris de l'avance."],
    "a2": ["a2-un-pourcent", "Vous utilisez l'IA à 1 %. Voici les 99 % restants", "Métier par métier : ce que fait l'IA quand on la branche sur vos outils."],
    "b1": ["b1-ce-qui-disparait", "Ce que l'IA va remplacer dans votre métier, et comment prendre les devants", "12 métiers, 12 tâches qui changent. Et ce qui reste entre vos mains."],
    "b2": ["b2-trois-choses", "Si vous ne faites pas ces 3 choses, l'IA vous remplacera vraiment", "Les 3 décisions à prendre maintenant, et 12 exemples concrets pour les appliquer."],
    "c1": ["c1-personne-ne-dit", "Ce que personne ne vous dit sur l'IA en entreprise", "Les idées reçues, ce qui est vrai, et 12 exemples concrets dans les PME."],
    "c2": ["c2-ce-qui-marche", "L'IA en PME : ce qui marche vraiment, et ce qui ne sert à rien", "12 exemples concrets, et les pièges à éviter avant de commencer."],
    "d1": ["d1-chatgpt-travaille", "Passer de ChatGPT à l'IA qui travaille pour vous", "Le guide pratique, avec 12 exemples par métier."],
    "d2": ["d2-par-ou-commencer", "Par où commencer avec l'IA dans votre PME", "12 exemples concrets, un par métier, et la méthode pour choisir le vôtre."]
  };
  var q = new URLSearchParams(location.search);
  var v = (q.get("v") || q.get("utm_content") || "d2").toLowerCase().slice(0, 2);
  if (!G[v]) v = "d2";
  var g = G[v];
  document.getElementById("couv").src = "/guide-ia/couv/" + g[0] + ".webp";
  document.getElementById("titre").textContent = g[1];
  document.getElementById("st").textContent = g[2];
  document.getElementById("dl").href = "/guide-ia/pdf/" + g[0] + ".pdf";
  document.title = g[1] + " · Guide gratuit MAWT";
  var utm = [];
  ["utm_source","utm_medium","utm_campaign","utm_content","fbclid"].forEach(function(k){ var x = q.get(k); if (x) utm.push(k + "=" + x.slice(0, 120)); });
  var eventId = "gd-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  var envoi = false;
  var form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (envoi) return;
    var p = document.getElementById("prenom"), m = document.getElementById("email"), err = document.getElementById("erreur");
    var prenom = p.value.trim(), email = m.value.trim();
    if (prenom.length < 2 || !/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)) { err.style.display = "block"; (prenom.length < 2 ? p : m).focus(); return; }
    err.style.display = "none";
    envoi = true;
    var bouton = document.getElementById("envoyer");
    bouton.disabled = true; bouton.textContent = "Envoi…";
    var finir = function () {
      document.getElementById("nom").textContent = prenom;
      form.style.display = "none";
      document.getElementById("merci").style.display = "block";
      suivre("guide_telecharge");
      if (window.fbq) { fbq("trackCustom", "GuideTelecharge", { guide: g[0] }, { eventID: eventId }); }
    };
    fetch("/api/guide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guide: g[0], prenom: prenom, email: email, utm: utm.join("&"), event_id: eventId, mawt_hp: document.getElementById("mawt_hp").value })
    }).then(function (r) { if (!r.ok) suivre("guide_erreur_api"); }).catch(function () { suivre("guide_erreur_api"); }).then(finir);
  });
  document.getElementById("dl").addEventListener("click", function () { suivre("guide_pdf_ouvert"); });
  document.getElementById("wa").addEventListener("click", function () { suivre("guide_whatsapp"); });
})();
</script>
</body>
</html>
`;

export default landingHtml;

// Generated from mawt-microtest/creas/landing/stop.html - do not edit by hand.
// Regenerate with `python scripts/make_outreach_pages.py` in the microtest project.
const landingHtml = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Ne plus recevoir de message · M&WT</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="any">
<style>
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-Regular.otf') format('opentype');font-weight:400;font-display:swap}
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-Bold.otf') format('opentype');font-weight:800;font-display:swap}
</style>
<style>
  :root{--petrole:#002B36;--creme:#FBFBFB;--mint:#4FC59C;--gris:#9DB3B8}
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;display:flex;flex-direction:column;font-family:'Gilroy',system-ui,sans-serif;background:var(--petrole);color:var(--creme);-webkit-font-smoothing:antialiased}
  header{padding:22px 20px 0;max-width:640px;width:100%;margin:0 auto}
  .logo{display:block;height:22px;width:auto}
  main{flex:1;display:flex;align-items:center;justify-content:center;padding:24px 20px}
  .carte{max-width:520px;text-align:center}
  h1{margin:0;font-size:clamp(26px,5vw,36px);line-height:1.15;font-weight:800}
  p{margin:16px 0 0;font-size:17px;line-height:1.5;color:var(--gris)}
  button{margin-top:28px;padding:15px 28px;border:none;border-radius:999px;background:var(--mint);color:var(--petrole);font:800 17px 'Gilroy',system-ui,sans-serif;cursor:pointer}
  button[disabled]{opacity:.6;cursor:default}
  .fait{display:none}
  body.ok .demande{display:none}
  body.ok .fait{display:block}
</style>
</head>
<body>
<header><img class="logo" src="/500-chf-assets/mawt-logo-blanc.svg" alt="M&WT"></header>
<main>
  <div class="carte demande">
    <h1>Ne plus recevoir de message de ma part</h1>
    <p>Un clic suffit. Vous ne recevrez plus d'e-mail de MAWT à cette adresse.</p>
    <button id="confirmer" type="button">Confirmer</button>
  </div>
  <div class="carte fait">
    <h1>C'est noté</h1>
    <p>Vous ne recevrez plus de message de ma part. Merci d'avoir pris le temps de répondre.</p>
  </div>
</main>
<script>
(function(){
  var q = new URLSearchParams(location.search);
  var jeton = /^[a-z0-9]{4,16}$/.test(q.get("c") || "") ? q.get("c") : "";
  var bouton = document.getElementById("confirmer");
  // La désinscription n'est enregistrée qu'au clic : les antivirus de messagerie
  // qui ouvrent les liens ne cliquent pas sur les boutons.
  bouton.addEventListener("click", function(){
    bouton.disabled = true;
    var corps = JSON.stringify({ jeton: jeton, variante: "a", evenement: "desinscription", detail: navigator.userAgent.slice(0, 120) });
    fetch("/api/outreach", { method: "POST", body: corps, headers: { "Content-Type": "text/plain" } })
      .catch(function(){})
      .then(function(){ document.body.classList.add("ok"); });
  });
})();
</script>
</body>
</html>
`;

export default landingHtml;

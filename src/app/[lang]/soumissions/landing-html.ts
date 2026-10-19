// Generated from mawt-microtest/creas/landing/outreach-video.html - do not edit by hand.
// Regenerate with `python scripts/make_outreach_pages.py` in the microtest project.
const landingHtml = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Vos soumissions, préparées par l'IA · M&WT</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="any">
<style>
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-Regular.otf') format('opentype');font-weight:400;font-display:swap}
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-SemiBold.otf') format('opentype');font-weight:600;font-display:swap}
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-Bold.otf') format('opentype');font-weight:800;font-display:swap}
</style>
<style>
  :root{
    --petrole:#002B36;
    --petrole-2:#073C49;
    --creme:#FBFBFB;
    --mint:#4FC59C;
    --gris:#9DB3B8;
  }
  *{box-sizing:border-box}
  body{margin:0;font-family:'Gilroy',system-ui,sans-serif;background:var(--petrole);color:var(--creme);-webkit-font-smoothing:antialiased}
  .conteneur{max-width:1040px;margin:0 auto;padding:0 20px}
  header{padding:22px 0 0}
  .logo{display:block;height:22px;width:auto}

  .hero{padding:40px 0 24px;text-align:center}
  .kicker{font-size:13px;font-weight:600;color:var(--mint);letter-spacing:.04em;text-transform:uppercase}
  h1{margin:14px auto 0;max-width:760px;font-size:clamp(30px,5.4vw,52px);line-height:1.08;font-weight:800}
  .hero p{margin:18px auto 0;max-width:620px;font-size:clamp(16px,2.2vw,19px);line-height:1.45;color:var(--gris)}

  .video{position:relative;margin:8px auto 0;max-width:1040px;aspect-ratio:16/9;background:#001F27;border-radius:14px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.35)}
  .video video{display:block;width:100%;height:100%;object-fit:cover}
  .son{position:absolute;right:18px;top:18px;display:flex;align-items:center;gap:10px;padding:12px 20px;border:none;border-radius:999px;background:var(--mint);color:var(--petrole);font:800 16px 'Gilroy',system-ui,sans-serif;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.3)}
  .son svg{width:18px;height:18px}
  .son[hidden]{display:none}

  .rdv{padding:56px 0 24px;text-align:center}
  .rdv h2{margin:0;font-size:clamp(24px,3.6vw,34px);line-height:1.15;font-weight:800}
  .rdv p{margin:12px auto 0;max-width:560px;font-size:16px;line-height:1.45;color:var(--gris)}
  .fleche{display:block;margin:18px auto 0;width:22px;height:22px;color:var(--mint)}
  #cal{position:relative;margin:24px auto 0;max-width:1040px;min-height:560px;background:var(--creme);border-radius:14px;overflow:hidden}
  #cal::before{content:"Chargement du calendrier…";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#5E7175;font-size:16px;z-index:0}
  #cal > *{position:relative;z-index:1}
  .cal-secours{display:inline-block;margin-top:16px;color:var(--mint);font-weight:600}

  footer{padding:28px 0 36px;text-align:center;font-size:13px;color:var(--gris)}
  footer a{color:var(--gris)}
  @media(max-width:640px){.hero{padding-top:28px}.video{border-radius:10px}.son{right:10px;top:10px;padding:8px 13px;font-size:13px;gap:7px}.son svg{width:15px;height:15px}#cal{border-radius:10px}}
</style>
</head>
<body>
<header><div class="conteneur"><img class="logo" src="/500-chf-assets/mawt-logo-blanc.svg" alt="M&WT"></div></header>

<main class="conteneur">
  <section class="hero">
    <div class="kicker">Entreprises du bâtiment</div>
    <h1>Encore une soumission à finir ce soir&nbsp;?</h1>
    <p>Trente secondes pour voir ce que l'IA peut préparer à votre place. Si ça vous parle, choisissez un créneau juste en dessous.</p>
  </section>

  <div class="video">
    <video id="film" playsinline muted autoplay preload="auto"></video>
    <button class="son" id="son" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>Regarder avec le son</button>
  </div>

  <section class="rdv" id="rendez-vous">
    <h2>Un appel de 30 minutes, gratuit et sans engagement</h2>
    <p>Vous posez vos questions sur l'IA, on vous répond. Choisissez le moment qui vous arrange.</p>
    <svg class="fleche" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16"/><path d="m5 13 7 7 7-7"/></svg>
    <div id="cal"></div>
    <a class="cal-secours" id="cal-secours" href="https://cal.com/rdv-mawt/appel" target="_blank" rel="noopener">Le calendrier ne s'affiche pas&nbsp;? Ouvrir dans un nouvel onglet</a>
  </section>
</main>

<footer><div class="conteneur">M&WT · <a href="https://mawt.ch/fr">mawt.ch</a></div></footer>

<script>
(function(){
  var q = new URLSearchParams(location.search);
  // Jeton propre à chaque e-mail envoyé (CRM) ; métier et vidéo fixés par la page.
  var jeton = /^[a-z0-9]{4,16}$/.test(q.get("c") || "") ? q.get("c") : "";
  var metier = "btp", variante = "c";
  var debut = Date.now();

  function suivre(evenement, detail){
    var corps = JSON.stringify({ jeton: jeton, metier: metier, variante: variante, evenement: evenement, detail: detail || "" });
    try {
      if (navigator.sendBeacon && navigator.sendBeacon("/api/outreach", new Blob([corps], { type: "text/plain" }))) return;
    } catch(e) {}
    try { fetch("/api/outreach", { method: "POST", body: corps, keepalive: true, headers: { "Content-Type": "text/plain" } }); } catch(e) {}
  }

  // Une visite ne compte que si la page est vraiment affichée une seconde dans un navigateur :
  // les antivirus de messagerie qui ouvrent les liens ne déclenchent pas ce signal.
  var vu = false;
  function visite(){ if (vu || document.visibilityState !== "visible") return; vu = true; suivre("visite", navigator.userAgent.slice(0, 120)); }
  setTimeout(visite, 1000);
  document.addEventListener("visibilitychange", function(){ if (!vu) setTimeout(visite, 1000); });
  window.addEventListener("pagehide", function(){ if (vu) suivre("depart", Math.round((Date.now() - debut) / 1000) + " s sur la page"); });

  // Vidéo : démarre sans le son (règle des navigateurs), le bouton relance au début avec le son.
  var film = document.getElementById("film"), son = document.getElementById("son");
  film.src = "/videos/" + metier + "-" + variante + ".mp4";
  film.poster = "/videos/" + metier + "-" + variante + ".jpg";
  var paliers = { "video-25": .25, "video-50": .5, "video-fin": .97 }, atteints = {};
  film.addEventListener("timeupdate", function(){
    if (film.muted || !film.duration) return;
    for (var k in paliers) if (!atteints[k] && film.currentTime / film.duration >= paliers[k]) { atteints[k] = 1; suivre(k); }
  });
  film.addEventListener("ended", function(){ if (film.muted) { film.currentTime = 0; film.play(); } else { son.hidden = false; son.lastChild.nodeValue = "Revoir"; } });
  son.addEventListener("click", function(){
    film.muted = false; film.loop = false; film.currentTime = 0; film.play();
    son.hidden = true;
    suivre(atteints.son ? "revoir" : "son"); atteints.son = 1;
  });
  film.loop = true;
  film.addEventListener("click", function(){ if (film.muted) son.click(); else if (film.paused) film.play(); else film.pause(); });

  // Calendrier Cal intégré, le jeton suit la réservation (métadonnée) pour relier le rendez-vous à l'e-mail.
  var lien = "rdv-mawt/appel";
  document.getElementById("cal-secours").href = "https://cal.com/" + lien + (jeton ? "?metadata[jeton]=" + jeton + "&metadata[metier]=" + metier : "");
  (function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init", "appel", { origin: "https://app.cal.com" });
  Cal.ns.appel("inline", { elementOrSelector: "#cal", calLink: lien, config: { layout: "month_view", theme: "light", lng: "fr","metadata[jeton]": jeton, "metadata[metier]": metier } });
  Cal.ns.appel("ui", { theme: "light", cssVarsPerTheme: { light: { "cal-brand": "#1E9E72" } }, hideEventTypeDetails: false, layout: "month_view" });
  var creneau = false;
  Cal.ns.appel("on", { action: "*", callback: function(e){
    var a = e && e.detail && e.detail.type;
    if (!a) return;
    if (a === "bookingSuccessful" || a === "bookingSuccessfulV2") suivre("rdv");
    // Seule une sélection faite par le visiteur compte : « slotsFetched » et consorts partent tout seuls au chargement.
    else if (!creneau && /select|click/i.test(a) && !/fetch|load|ready|view/i.test(a)) { creneau = true; suivre("cal-creneau", a); }
  }});
})();
</script>
</body>
</html>
`;

export default landingHtml;

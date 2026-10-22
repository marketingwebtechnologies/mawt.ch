// Page vidéo privée pour DG Expertise (plan d'intégration Diagora).
// Source de la page : clipper/films/diagora-djilloul/web/index.html (vidéo et affiche dans /public/plan-3sapckmuj1/).
const landingHtml = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow, noarchive">
  <meta name="referrer" content="no-referrer">
  <title>Diagora, vidéo explicative et estimation</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <style>
    @font-face { font-family: "Gilroy"; font-weight: 700; src: url("/500-chf-assets/fonts/SVN-Gilroy-Bold.otf") format("opentype"); font-display: swap; }
    @font-face { font-family: "Gilroy"; font-weight: 600; src: url("/500-chf-assets/fonts/SVN-Gilroy-SemiBold.otf") format("opentype"); font-display: swap; }
    :root {
      --deep: #001A21;
      --petrol: #002B36;
      --paper: #F4F1EA;
      --ring: rgba(79, 197, 156, 0.22);
      --mint: #4FC59C;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: var(--deep); }
    body {
      min-height: 100vh;
      background: radial-gradient(ellipse at 50% 30%, #063A47 0%, var(--petrol) 48%, var(--deep) 100%) fixed;
      font-family: "Gilroy", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      color: var(--paper);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 7vh 16px 10vh;
    }
    h1 {
      margin: 0 0 28px;
      font-weight: 700;
      font-size: 40px;
      line-height: 1.1;
      letter-spacing: -0.02em;
      text-align: center;
      text-wrap: balance;
    }
    .video {
      width: 100%;
      max-width: 1280px;
      aspect-ratio: 16 / 9;
      border-radius: 18px;
      overflow: hidden;
      background: var(--deep);
      box-shadow: 0 0 0 1px var(--ring), 0 40px 120px rgba(0, 10, 14, 0.7);
    }
    .video video { display: block; width: 100%; height: 100%; background: var(--deep); }

    /* Calendrier : actif seulement si CAL_LINK est renseigné (voir script). */
    .cal, .cal-bouton { display: none; }
    body.avec-cal .cal { display: block; margin-top: 9vh; }
    .cal {
      width: 100%;
      max-width: 1040px;
      min-height: 620px;
      border-radius: 18px;
      overflow: hidden;
      background: rgba(0, 26, 33, 0.55);
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06);
    }
    .cal iframe { border-radius: 18px; }
    .cal-bouton {
      width: 100%;
      max-width: 420px;
      height: 58px;
      margin-top: 36px;
      border: 0;
      border-radius: 14px;
      background: var(--mint);
      color: var(--petrol);
      font: 700 17px/1 "Gilroy", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      letter-spacing: -0.01em;
      cursor: pointer;
    }
    .cal-bouton:active { transform: translateY(1px); }

    @media (max-width: 720px) {
      body { padding: 28px 16px 48px; }
      h1 { font-size: 27px; margin-bottom: 18px; }
      .video { border-radius: 14px; }
      body.avec-cal .cal { display: none; }
      body.avec-cal .cal-bouton { display: block; }
    }
  </style>
</head>
<body>

  <h1>Vidéo explicative &amp; estimation</h1>

  <div class="video">
    <video id="film" controls playsinline preload="metadata" poster="/plan-3sapckmuj1/poster.jpg">
      <source src="/plan-3sapckmuj1/diagora-plan.mp4" type="video/mp4">
    </video>
  </div>

  <div class="cal" id="cal-rdv"></div>
  <button class="cal-bouton" type="button" data-cal-namespace="rdvPop" data-cal-config='{"layout":"month_view","theme":"dark"}'>Choisir un créneau pour qu'on s'appelle</button>

  <script>
    // Suivi de lecture (voir /api/diagora-plan) : rien n'est envoyé quand la page est ouverte avec ?moi=1.
    var SUIVI = new URLSearchParams(location.search).get("moi") === null;
    var debut = Date.now();
    function suivre(evenement, detail) {
      if (!SUIVI) return;
      var corps = JSON.stringify({ evenement: evenement, detail: detail || "" });
      try { if (navigator.sendBeacon && navigator.sendBeacon("/api/diagora-plan", new Blob([corps], { type: "text/plain" }))) return; } catch (e) {}
      try { fetch("/api/diagora-plan", { method: "POST", body: corps, keepalive: true, headers: { "Content-Type": "text/plain" } }); } catch (e) {}
    }
    // Une visite ne compte que si la page est vraiment affichée une seconde dans un navigateur :
    // les antivirus de messagerie qui ouvrent les liens ne déclenchent pas ce signal.
    var vu = false;
    function visite() { if (vu || document.visibilityState !== "visible") return; vu = true; suivre("visite", navigator.userAgent.slice(0, 120)); }
    setTimeout(visite, 1000);
    document.addEventListener("visibilitychange", function () { if (!vu) setTimeout(visite, 1000); });
    window.addEventListener("pagehide", function () { if (vu) suivre("depart", Math.round((Date.now() - debut) / 1000) + " s sur la page"); });
    var film = document.getElementById("film");
    var paliers = { "video-25": 0.25, "video-50": 0.5, "video-fin": 0.97 }, atteints = {};
    film.addEventListener("timeupdate", function () {
      if (!film.duration) return;
      for (var k in paliers) if (!atteints[k] && film.currentTime / film.duration >= paliers[k]) { atteints[k] = 1; suivre(k); }
    });
    var creneau = false;
    function surCal(e) {
      var a = e && e.detail && e.detail.type;
      if (!a) return;
      if (a === "bookingSuccessful" || a === "bookingSuccessfulV2") suivre("rdv");
      // Seule une sélection faite par le visiteur compte : « slotsFetched » et consorts partent tout seuls au chargement.
      else if (!creneau && /select|click/i.test(a) && !/fetch|load|ready|view/i.test(a)) { creneau = true; suivre("cal-creneau", a); }
    }

    // Lien Cal.com de l'événement dédié. Vide = pas de calendrier sur la page.
    var CAL_LINK = "rdv-mawt/diagora";

    if (CAL_LINK) {
      document.body.classList.add("avec-cal");
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      var ui = { theme: "dark", cssVarsPerTheme: { dark: { "cal-brand": "#4FC59C" } }, hideEventTypeDetails: false, layout: "month_view" };
      if (window.matchMedia("(min-width: 721px)").matches) {
        Cal("init", "rdv", { origin: "https://app.cal.com" });
        Cal.ns.rdv("inline", { elementOrSelector: "#cal-rdv", calLink: CAL_LINK, config: { layout: "month_view", theme: "dark" } });
        Cal.ns.rdv("ui", ui);
        Cal.ns.rdv("on", { action: "*", callback: surCal });
      } else {
        document.querySelector(".cal-bouton").setAttribute("data-cal-link", CAL_LINK);
        Cal("init", "rdvPop", { origin: "https://app.cal.com" });
        Cal.ns.rdvPop("ui", ui);
        Cal.ns.rdvPop("on", { action: "*", callback: surCal });
      }
    }
  </script>

</body>
</html>
`;

export default landingHtml;

// Generated from mawt-microtest/creas/landing/session-ia.html - do not edit by hand.
// Regenerate with `python scripts/make_session_ia.py` in the microtest project.
const landingHtml = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Session IA · 30 minutes gratuites pour vos questions · M&WT</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<style>
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-Regular.otf') format('opentype');font-weight:400;font-display:swap}
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-SemiBold.otf') format('opentype');font-weight:600;font-display:swap}
@font-face{font-family:'Gilroy';src:url('/500-chf-assets/fonts/SVN-Gilroy-Bold.otf') format('opentype');font-weight:800;font-display:swap}
</style>
<style>
  :root{
    --encre:#002B36;
    --fond:#FBFBFB;
    --mint:#4FC59C;
    --mint-fonce:#1E9E72;
    --gris:#5E7175;
    --corps:#33484D;
    --filet:#E7E4DF;
    --champ:#D8D5CF;
    --rouge:#B4472E;
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;font-family:'Gilroy','Manrope',system-ui,sans-serif;background:var(--fond);color:var(--encre);-webkit-font-smoothing:antialiased;min-height:100vh;min-height:100svh;display:flex;flex-direction:column}
  .conteneur{max-width:640px;margin:0 auto;padding:0 28px}

  header{position:fixed;top:0;left:0;right:0;z-index:45;background:var(--fond);border-bottom:1px solid var(--filet)}
  header .conteneur{height:56px;display:flex;align-items:center}
  main{padding-top:56px;flex:1;display:flex;flex-direction:column}
  .logo{display:block;height:22px;width:auto}

  /* Hero : une promesse, un bouton, rien d'autre */
  .hero{flex:1;padding:24px 28px 32px;display:flex;flex-direction:column;justify-content:center}
  .kicker{font-size:12px;font-weight:600;color:var(--gris);letter-spacing:.02em}
  h1{margin:16px 0 0;font-size:clamp(30px,8vw,40px);line-height:1.1;font-weight:800}
  .hero p{margin:20px 0 0;font-size:18px;line-height:1.45;color:var(--corps)}
  .duo{margin:28px 0 0;display:flex;align-items:center;gap:12px}
  .duo .visages{display:flex}
  .duo img,.duo .visage{width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--fond);background:var(--champ)}
  .duo img + img,.duo .visage + .visage{margin-left:-12px}
  .duo span{font-size:14px;color:var(--corps);line-height:1.35}
  .micro{display:block;margin-top:12px;font-size:13px;color:var(--gris);text-align:center}

  .cta{display:block;width:100%;margin-top:28px;padding:17px 0;background:var(--mint);color:var(--encre);font-family:inherit;font-weight:800;font-size:17px;text-align:center;border:none;border-radius:0;cursor:pointer;transition:background .15s ease,color .15s ease,transform .15s ease}
  @media(hover:hover){.cta:hover{background:var(--mint-fonce);color:var(--fond);transform:translateY(-2px)}}
  .cta:active{background:var(--mint-fonce);color:var(--fond);transform:translateY(0)}
  .cta:focus-visible{outline:3px solid var(--encre);outline-offset:2px}
  .cta[disabled]{opacity:.5;cursor:default;transform:none}

  footer{padding:12px 0 calc(12px + env(safe-area-inset-bottom));border-top:1px solid var(--filet)}
  footer .conteneur{display:flex;align-items:center;justify-content:space-between}
  footer .liens{display:flex;gap:16px}
  footer a{font-size:13px;color:var(--gris)}

  @media (min-width:700px){
    .conteneur{max-width:min(760px, calc(100% - 160px))}
    .hero{align-items:center;text-align:center;padding:24px 28px 48px}
    h1{font-size:48px;max-width:760px}
    .hero p{font-size:22px}
    .hero .cta{width:auto;padding:19px 56px;font-size:18px;margin-left:auto;margin-right:auto}
    .duo{justify-content:center}
  }

  /* Questionnaire plein écran, un écran par question */
  .quiz{position:fixed;top:0;left:0;right:0;height:100vh;height:100dvh;z-index:60;background:var(--fond);display:none;flex-direction:column;overflow:hidden}
  .quiz.ouvert{display:flex}
  .barre-progres{height:4px;background:var(--filet)}
  .barre-progres i{display:block;height:100%;width:0;background:var(--mint-fonce);transition:width .3s ease}
  .quiz-tete{display:flex;align-items:center;justify-content:space-between;padding:12px 20px}
  .quiz-tete .logo{height:18px}
  .fermer{width:40px;height:40px;border:none;background:none;font-size:26px;line-height:1;color:var(--gris);cursor:pointer;font-family:inherit}
  .ecrans{flex:1;min-height:0;position:relative;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
  .pied-quiz{flex:0 0 auto;position:sticky;bottom:0;z-index:2;display:flex;justify-content:space-between;align-items:center;padding:10px 20px calc(10px + env(safe-area-inset-bottom));background:#FFFFFF;border-top:1px solid var(--filet)}
  .ecran{position:absolute;inset:0;padding:24px 24px 40px;display:none;flex-direction:column;justify-content:center;max-width:640px;margin:0 auto;width:100%}
  .ecran.actif{display:flex;animation:entree .28s ease}
  .ecran.sortie{animation:sortie .22s ease forwards}
  @keyframes entree{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
  @keyframes sortie{to{opacity:0;transform:translateY(-28px)}}
  @media (prefers-reduced-motion: reduce){.ecran.actif,.ecran.sortie{animation:none}}
  .num{font-size:13px;font-weight:600;color:var(--mint-fonce)}
  .ecran h2{margin:8px 0 0;font-size:clamp(24px,6.5vw,32px);line-height:1.15;font-weight:800}
  .ecran .pourquoi{margin:10px 0 0;font-size:15px;line-height:1.45;color:var(--gris)}
  .options{margin:24px 0 0;display:flex;flex-direction:column;gap:10px}
  .option{display:flex;align-items:center;gap:14px;width:100%;padding:15px 16px;background:#FFFFFF;border:1.5px solid var(--champ);border-radius:10px;font-family:inherit;font-size:16px;line-height:1.3;color:var(--encre);text-align:left;cursor:pointer;transition:border-color .12s ease,background .12s ease,transform .12s ease}
  .option b{flex:0 0 28px;height:28px;display:inline-flex;align-items:center;justify-content:center;border:1.5px solid var(--champ);border-radius:6px;font-size:12px;font-weight:800;color:var(--gris)}
  @media(hover:hover){.option:hover{border-color:var(--mint-fonce)}}
  .option.choisi{border-color:var(--mint-fonce);background:#EEF9F4}
  .option.choisi b{background:var(--mint-fonce);border-color:var(--mint-fonce);color:#fff}
  .option:active{transform:scale(.99)}
  .option:focus-visible{outline:3px solid var(--encre);outline-offset:2px}
  .champ-groupe{margin-top:18px;display:flex;flex-direction:column;gap:6px}
  label{font-size:14px;font-weight:600}
  input,textarea{width:100%;padding:14px;font-size:16px;font-family:inherit;border:1px solid var(--champ);border-radius:8px;background:#FFFFFF;color:var(--encre)}
  textarea{min-height:110px;resize:vertical;line-height:1.4}
  input:focus,textarea:focus{outline:2px solid var(--mint);outline-offset:1px;border-color:var(--mint)}
  .erreur-msg{font-size:13px;color:var(--rouge);display:none}
  .invalide input,.invalide textarea{border-color:var(--rouge)}
  .invalide .erreur-msg{display:block}
  .suite{margin-top:22px;display:flex;align-items:center;gap:14px}
  .suite .cta{margin:0;width:auto;padding:14px 28px;font-size:16px}
  .suite small{font-size:13px;color:var(--gris)}
  .nav{display:flex;align-items:center;gap:8px}
  .retour{width:52px;height:44px;border:none;background:var(--mint);font-family:inherit;font-weight:800;font-size:18px;color:var(--encre);border-radius:8px;cursor:pointer}
  .retour[disabled]{background:var(--filet);color:var(--gris);cursor:default}
  .compteur{font-size:13px;color:var(--gris)}
  .modes{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0 4px}
  .choix-mode{padding:14px 12px;background:#FFFFFF;border:1.5px solid var(--champ);border-radius:10px;font-family:inherit;font-size:16px;font-weight:600;color:var(--encre);cursor:pointer;transition:border-color .12s ease,background .12s ease}
  .choix-mode.choisi{border-color:var(--mint-fonce);background:#EEF9F4}
  .modes.invalide .choix-mode{border-color:#C0392B}
  .engagement p{margin:14px 0 0;font-size:16px;line-height:1.5;color:var(--corps)}
  .engagement strong{color:var(--encre)}

  /* Écrans de fin */
  .fin h2{font-size:clamp(24px,6.5vw,30px)}
  .fin .recap{margin:18px 0 0;padding:16px 18px;background:#fff;border:1px solid var(--filet);border-radius:10px;font-size:15px;line-height:1.5;color:var(--corps)}
  .fin .recap q{quotes:"« " " »";font-weight:600;color:var(--encre)}
  .fin .succes-ou{margin:18px 0 0;font-size:15px;color:var(--corps)}
  a.cta{text-decoration:none;display:block}
  .erreur-envoi{color:var(--rouge);font-size:14px;font-weight:600;margin:10px 0 0}
  /* 03.11 : l'ebook est remis après le lead, sur les écrans de fin (playbook : jamais promis dans la pub) */
  .fin .ebook{margin:22px 0 0;display:flex;gap:14px;align-items:center;padding:14px 16px;background:#fff;border:1px solid var(--filet);border-radius:10px}
  .fin .ebook img{width:56px;height:79px;object-fit:cover;border-radius:4px;flex:none;box-shadow:0 2px 8px rgba(0,43,54,.18)}
  .fin .ebook div{min-width:0}
  .fin .ebook small{display:block;font-size:13px;color:var(--gris)}
  .fin .ebook b{display:block;margin:2px 0 6px;font-size:15px;line-height:1.3;color:var(--encre)}
  .fin .ebook a{font-weight:700;font-size:15px;color:var(--mint-fonce);text-decoration:none}
</style>
<script>
(function(){
  try { if (localStorage.getItem("mawt-cookie-consent") === "essential") return; } catch(e) {}
  if (location.hostname.indexOf("mawt.ch") === -1) return;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','959258244767672');
  fbq('track','PageView');
  /* OpenAI Ads (ChatGPT) : même consentement et même garde-fou de domaine que le pixel Meta. */
  !function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
  oaiq("init",{pixelId:"3H5JQLTccQPvtMvFYpXQvv"});
  oaiq("measure","page_viewed",{type:"contents"});
})();
</script>
<script>
(function(){
  try { if (localStorage.getItem("mawt-cookie-consent") === "essential") return; } catch(e) {}
  if (location.hostname.indexOf("mawt.ch") === -1) return;
  /* GA4, même propriété et même consentement que la landing 500 ; la file dataLayer existe dès maintenant */
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", "G-J3FHJ45Y5L");
  var chargerGA = function(){
    var g = document.createElement("script"); g.async = true;
    g.src = "https://www.googletagmanager.com/gtag/js?id=G-J3FHJ45Y5L";
    document.head.appendChild(g);
  };
  if (window.requestIdleCallback) { requestIdleCallback(chargerGA, { timeout: 3000 }); }
  else { setTimeout(chargerGA, 1500); }
  /* Microsoft Clarity : sessions + heatmaps */
  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","ynxcutb3fv");
  /* 04.11 : signal d'arrivée (trafic payant seulement) pour l'alerte du tableau de pilotage, avec la session Clarity à suivre en live */
  try {
    (function () {
      var q = new URLSearchParams(location.search);
      try { if (q.get("interne") === "1") localStorage.setItem("mawt-interne", "1"); if (localStorage.getItem("mawt-interne")) return; } catch (e) {}
      var src = (q.get("utm_source") || "").toLowerCase();
      if (navigator.webdriver || !(q.get("gclid") || q.get("fbclid") || /^(meta|facebook|instagram|google|chatgpt|openai)$/.test(src))) return;
      var envoye = false;
      var envoyer = function (m) {
        if (envoye) return; envoye = true;
        var corps = { page: "questions-ia", utm: location.search.slice(1, 600), ref: document.referrer.slice(0, 200), clarity_u: (m && m.userId) || "", clarity_s: (m && m.sessionId) || "", trace: window.__trace || "" };
        try { fetch("/api/arrivee", { method: "POST", keepalive: true, headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(corps) }); } catch (e) {}
      };
      try { clarity("metadata", function (m) { envoyer(m); }, false); } catch (e) {}
      setTimeout(function () { envoyer(null); }, 6000);
    })();
  } catch (e) {}
  /* Étiquettes de session (02.11) : la page et la pub d'origine, pour filtrer Clarity sans passer par l'URL */
  try {
    clarity("set", "landing", "questions-ia");
    /* 03.11 : identifiant de visite, pour retrouver l\'enregistrement Clarity depuis la feuille et l\'e-mail d\'alerte */
    window.__trace = window.__trace || ("t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6));
    clarity("set", "trace", window.__trace);
    var pq = new URLSearchParams(location.search);
    ["utm_source","utm_campaign","utm_content"].forEach(function(k){ var v = pq.get(k); if (v) clarity("set", k, v.slice(0, 80)); });
  } catch (e) {}
})();
/* Suivi des étapes : GA4 (événements) et Clarity (étiquettes de session) */
function suivre(evt, params){
  try { if (window.gtag) { gtag("event", evt, params || {}); } } catch(e) {}
  try { if (window.clarity) { clarity("event", evt); if (params && params.step) { clarity("set", "etape", params.step); } if (params && params.profil) { clarity("set", "profil", params.profil); } } } catch(e) {}
}
</script>
</head>
<body>
<header><div class="conteneur"><img class="logo" src="/500-chf-assets/mawt-logo.svg" alt="M&amp;WT"></div></header>

<main>
  <section class="hero" id="hero">
    <div class="conteneur">
      <span class="kicker">Session IA &middot; 30 minutes &middot; totalement gratuit</span>
      <h1 id="hero-titre">Vos questions sur l&rsquo;IA. On prend 30&nbsp;minutes pour vous.</h1>
      <p id="hero-texte">Pas un webinaire, pas un argumentaire. Vous posez vos questions, on prend le temps d&rsquo;y r&eacute;pondre, pour votre situation &agrave; vous.</p>
      <button class="cta" id="ouvrir" data-origine="hero">Poser mes questions</button>
      <span class="micro">Totalement gratuit, sans engagement. Trois r&eacute;ponses, puis visio ou t&eacute;l&eacute;phone, &agrave; votre choix.</span>
    </div>
  </section>
  <script>
  /* Miroir de la pub (31.10) : le haut de page reprend les mots de la pub d'origine (utm_content),
     sans changer le lien de la pub, donc sans réapprentissage côté Meta. Les autres visites gardent le texte par défaut. */
  (function(){
    var c = (new URLSearchParams(location.search).get("utm_content") || "").toLowerCase();
    var t = document.getElementById("hero-titre"), p = document.getElementById("hero-texte");
    if (c.slice(0, 2) === "c2") {
      /* 03.11 : titre validé par le microtest (c2, CTR 1,55 %), repris mot pour mot ; l'ebook est remis après le lead */
      t.innerHTML = "L&rsquo;IA en PME&#8239;: ce qui marche vraiment, et ce qui ne sert &agrave; rien";
      p.innerHTML = "On vous le dit pour votre entreprise, pas en g&eacute;n&eacute;ral&#8239;: 30&#8239;minutes de questions-r&eacute;ponses, gratuitement, en visio ou par t&eacute;l&eacute;phone.";
      document.documentElement.setAttribute("data-miroir", "c2");
    } else if (c.slice(0, 2) === "v3") {
      t.innerHTML = "Perdu avec l&rsquo;IA&#8239;?";
      p.innerHTML = "On regarde comment vous travaillez et on vous dit o&ugrave; elle vous aide vraiment. Pas un webinaire, pas un argumentaire&#8239;: 30&#8239;minutes pour vos questions, gratuitement.";
      document.documentElement.setAttribute("data-miroir", "v3");
    } else if (c.slice(0, 2) === "v4") {
      t.innerHTML = "Renonc&eacute; au logiciel sur mesure &agrave; cause du prix&#8239;?";
      p.innerHTML = "Avec l&rsquo;IA, ce n&rsquo;est plus la m&ecirc;me histoire. Dites-nous ce que vous voudriez automatiser&#8239;: 30&#8239;minutes, gratuitement.";
      document.documentElement.setAttribute("data-miroir", "v4");
    }
  })();
  </script>
</main>

<footer>
  <div class="conteneur">
    <img class="logo" src="/500-chf-assets/mawt-logo.svg" alt="M&amp;WT" style="height:14px">
    <div class="liens">
      <a href="https://mawt.ch/fr/legal">Mentions l&eacute;gales</a>
      <a href="https://mawt.ch/fr/cookies">Confidentialit&eacute;</a>
    </div>
  </div>
</footer>

<!-- Questionnaire -->
<div class="quiz" id="quiz" role="dialog" aria-modal="true" aria-label="Pr&eacute;parer la session">
  <div class="barre-progres"><i id="progres"></i></div>
  <div class="quiz-tete"><img class="logo" src="/500-chf-assets/mawt-logo.svg" alt="M&amp;WT"><button class="fermer" id="fermer" aria-label="Fermer">&times;</button></div>
  <form class="ecrans" id="form" novalidate autocomplete="on">

    <!-- 0 accueil -->
    <section class="ecran" data-id="accueil">
      <h2>Trois r&eacute;ponses, puis vous choisissez votre cr&eacute;neau.</h2>
      <p class="pourquoi">Moins d&rsquo;une minute. Vos questions, on les prend de vive voix.</p>
      <p class="pourquoi" id="reprise" hidden>Vos r&eacute;ponses pr&eacute;c&eacute;dentes sont gard&eacute;es, vous pouvez les modifier.</p>
      <div class="suite"><button type="button" class="cta" data-suivant>C&rsquo;est parti</button><small>Entr&eacute;e &#8629;</small></div>
    </section>

    <!-- 1 profil -->
    <section class="ecran" data-id="profil" data-champ="profil" data-type="unique">
      <h2>Ce qui vous d&eacute;crit le mieux</h2>
      <div class="options">
        <button type="button" class="option" data-valeur="entreprise"><b>A</b>Je dirige une entreprise et je veux savoir comment l&rsquo;IA peut m&rsquo;aider concr&egrave;tement</button>
        <button type="button" class="option" data-valeur="formation"><b>B</b>Je veux me former &agrave; l&rsquo;IA pour mon travail ou pour un projet personnel</button>
      </div>
    </section>

    <!-- ENTREPRISE -->
    <section class="ecran" data-id="taille" data-branche="entreprise" data-champ="taille" data-type="unique">
      <h2>Combien de personnes travaillent dans votre entreprise&#8239;?</h2>
      <div class="options">
        <button type="button" class="option" data-valeur="1-4"><b>A</b>1 &agrave; 4</button>
        <button type="button" class="option" data-valeur="5-20"><b>B</b>5 &agrave; 20</button>
        <button type="button" class="option" data-valeur="21-50"><b>C</b>21 &agrave; 50</button>
        <button type="button" class="option" data-valeur="50+"><b>D</b>Plus de 50</button>
      </div>
    </section>

<!-- FORMATION -->
<section class="ecran" data-id="investir" data-branche="formation" data-champ="investir" data-type="unique">
      <h2>Si la session vous donne un plan clair, seriez-vous pr&ecirc;t(e) &agrave; investir dans une formation&#8239;?</h2>
      <div class="options">
        <button type="button" class="option" data-valeur="oui"><b>A</b>Oui, si &ccedil;a correspond &agrave; mon besoin</button>
        <button type="button" class="option" data-valeur="oui-questions"><b>B</b>Oui, mais j&rsquo;aurai des questions</button>
        <button type="button" class="option" data-valeur="savoir-plus"><b>C</b>Je dois en savoir plus avant de me positionner</button>
        <button type="button" class="option" data-valeur="non"><b>D</b>Non, pas du tout</button>
      </div>
    </section>

<!-- COMMUN -->
    <section class="ecran" data-id="coordonnees" data-type="coordonnees">
      <h2 id="coord-titre">O&ugrave; vous joindre pour la session</h2>
      <p class="pourquoi">Derni&egrave;re &eacute;tape, 20 secondes, puis vous choisissez votre cr&eacute;neau.</p>
      <!-- 04.11 : visio ou appel choisi ici, au-dessus des deux champs (un seul écran) -->
      <div class="modes" role="group" aria-label="Format de la session">
        <button type="button" class="choix-mode" data-mode="visio">En visio</button>
        <button type="button" class="choix-mode" data-mode="telephone">Par t&eacute;l&eacute;phone</button>
      </div>
      <div class="champ-groupe" id="grp-mail"><label for="c-mail">Votre e-mail <span id="c-mail-opt" class="opt"></span></label><input id="c-mail" name="email" type="email" autocomplete="email" inputmode="email" placeholder="prenom@entreprise.ch"><span class="erreur-msg" data-msg-generique="Indiquez un e-mail valide." data-msg-pro="Pour une entreprise, indiquez l&rsquo;adresse de votre soci&eacute;t&eacute;, pas une adresse personnelle.">Indiquez un e-mail valide, c&rsquo;est l&agrave; qu&rsquo;arrive le lien.</span></div>
      <div class="champ-groupe" id="grp-tel"><label for="c-tel">Votre num&eacute;ro de t&eacute;l&eacute;phone <span id="c-tel-opt" class="opt"></span></label><input id="c-tel" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="079 &hellip;" required><span class="erreur-msg">Un num&eacute;ro suisse valide, c&rsquo;est lui qu&rsquo;on appelle&#8239;: +41 79 123 45 67 ou 079 123 45 67.</span></div>
      <p class="pourquoi" id="coord-aide">C&rsquo;est le num&eacute;ro qu&rsquo;on appelle &agrave; l&rsquo;heure que vous choisirez.</p>
      <div class="suite"><button type="button" class="cta" data-suivant id="coord-bouton">Choisir mon cr&eacute;neau</button></div>
    </section>

    <!-- FINS -->
    <section class="ecran fin" data-id="fin-creneau">
      <h2>Derni&egrave;re &eacute;tape&#8239;: choisissez votre cr&eacute;neau.</h2>
      <p class="succes-ou" id="creneau-aide">Cliquez sur un jour, puis sur une heure. Vos coordonn&eacute;es sont d&eacute;j&agrave; remplies.</p>
      <div id="cal-inline" style="min-height:520px;margin:12px 0"></div>
      <p class="pourquoi">Si l&rsquo;agenda ne s&rsquo;affiche pas&#8239;: <a class="cal-lien" href="https://cal.com/rdv-mawt/appel" target="_blank" rel="noopener">ouvrir l&rsquo;agenda dans un nouvel onglet</a>.</p>
      <div class="ebook" data-ebook></div>
    </section>

    <section class="ecran fin" data-id="fin-ressource">
      <h2>Merci pour vos r&eacute;ponses.</h2>
      <p class="succes-ou">Au vu de ce que vous d&eacute;crivez, une session de 30 minutes ne serait pas le bon format pour vous aujourd&rsquo;hui. Voici de quoi avancer seul(e), et la porte reste ouverte quand le moment viendra.</p>
      <div class="ebook" data-ebook></div>
    </section>

    <section class="ecran fin" data-id="fin-non">
      <h2>Pas de souci, on vous contacte.</h2>
      <p class="succes-ou">On revient vers vous, par t&eacute;l&eacute;phone ou par e-mail selon ce que vous avez indiqu&eacute;, pour convenir d&rsquo;un moment qui vous arrange. Pas de relance insistante&#8239;: un message, et vous d&eacute;cidez.</p>
      <div class="ebook" data-ebook></div>
    </section>

    <input type="hidden" name="origin" id="origine" value="hero">
    <input type="hidden" name="utm" id="utm" value="">
    <input type="text" name="mawt_hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;width:0;border:0;padding:0">
  </form>
  <div class="pied-quiz"><span class="compteur" id="compteur"></span><div class="nav"><button type="button" class="retour" id="retour" disabled aria-label="Question pr&eacute;c&eacute;dente">&uarr;</button><button type="button" class="retour" id="avancer" disabled aria-label="Question suivante">&darr;</button></div></div>
</div>

<script>
(function(){
  "use strict";
  var quiz = document.getElementById("quiz");
  var form = document.getElementById("form");
  var ecrans = Array.prototype.slice.call(form.querySelectorAll(".ecran"));
  var progres = document.getElementById("progres");
  var retour = document.getElementById("retour");
  var compteur = document.getElementById("compteur");
  var reponses = {};
  var pile = [];          /* historique des écrans visités, pour « Retour » */
  var courant = null;
  var envoye = false, envoiEnCours = false, eventId = "";
  var GRATUITS = /@(gmail|googlemail|hotmail|outlook|live|msn|yahoo|icloud|me|mac|bluewin|gmx|protonmail|proton|sunrise|hispeed|aol|free|orange|wanadoo|laposte)\\./i;

  /* UTM et identifiant de pub, pour relier chaque réponse à la pub qui l'a produite */
  (function(){
    var p = new URLSearchParams(location.search), out = [];
    ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","fbclid","ad_id","adset_id","campaign_id"].forEach(function(k){
      var v = p.get(k); if (v) out.push(k + "=" + v.slice(0, 80));
    });
    document.getElementById("utm").value = out.join("&");
  })();

  /* 02.11 : une seule saisie. Les réponses et les coordonnées restent dans le navigateur (30 jours)
     et sont remises en place si la personne revient ; l'e-mail donné pour le guide (clé commune
     « mawt-contact », écrite aussi par /guide-ia) est repris. Rien ne part ailleurs que dans ce navigateur. */
  var STOCK_JOURS = 30 * 86400000;
  function lireStock(cle){ try { var o = JSON.parse(localStorage.getItem(cle) || "null"); return (o && o.ts && Date.now() - o.ts < STOCK_JOURS) ? o : null; } catch (e) { return null; } }
  function ecrireStock(cle, o){ try { o.ts = Date.now(); localStorage.setItem(cle, JSON.stringify(o)); } catch (e) {} }
  function sauver(){ ecrireStock("mawt-questions-ia", { reponses: reponses }); }
  function sauverContact(){
    var c = lireStock("mawt-contact") || {};
    var mail = document.getElementById("c-mail").value.trim(), tel = document.getElementById("c-tel").value.trim();
    if (mail) c.email = mail; if (tel) c.phone = tel;
    if (mail || tel) ecrireStock("mawt-contact", c);
  }
  (function(){
    var repris = false, q = lireStock("mawt-questions-ia");
    if (q && q.reponses && typeof q.reponses === "object" && q.reponses.profil) {
      reponses = q.reponses; delete reponses.engagement; repris = true;
      ecrans.forEach(function(e){ if (e.getAttribute("data-type") === "texte") { var ta = e.querySelector("textarea"), ch = e.getAttribute("data-champ"); if (ta && ch && typeof reponses[ch] === "string") ta.value = reponses[ch]; } });
    }
    var c = lireStock("mawt-contact");
    if (c) {
      [["c-mail", c.email], ["c-tel", c.phone]].forEach(function(p){ var i = document.getElementById(p[0]); if (p[1] && !i.value) { i.value = p[1]; repris = true; } });
    }
    if (repris) { var r = document.getElementById("reprise"); if (r) r.hidden = false; }
    ["c-mail", "c-tel"].forEach(function(id){ document.getElementById(id).addEventListener("change", sauverContact); });
  })();

  function parcours(){
    window.__profilQuiz = reponses.profil || "";
    /* La liste des écrans de la branche choisie, dans l'ordre du DOM */
    var b = reponses.profil;
    return ecrans.filter(function(e){
      if (e.classList.contains("fin")) return false;
      var br = e.getAttribute("data-branche");
      return !br || br === b;
    });
  }
  function ecranParId(id){ return ecrans.filter(function(e){ return e.getAttribute("data-id") === id; })[0]; }

  function montrer(ecran){
    if (courant) { courant.classList.remove("actif"); }
    courant = ecran;
    ecran.classList.add("actif");
    form.scrollTop = 0;
    /* numérotation selon la branche */
    var num = ecran.querySelector(".num[data-num-e]");
    if (num) { num.textContent = reponses.profil === "formation" ? num.getAttribute("data-num-f") : num.getAttribute("data-num-e"); }
    var champ = ecran.getAttribute("data-champ");
    if (champ && reponses[champ] !== undefined) {
      var vals = [].concat(reponses[champ]);
      ecran.querySelectorAll(".option").forEach(function(o){ o.classList.toggle("choisi", vals.indexOf(o.getAttribute("data-valeur")) !== -1); });
      var btn = ecran.querySelector("[data-suivant]"); if (btn) btn.disabled = vals.length === 0;
    }
    if (ecran.getAttribute("data-id") === "coordonnees") { adapterCoordonnees(); }
    /* progression */
    var liste = parcours(), i = liste.indexOf(ecran);
    var total = liste.length;
    var fin = ecran.classList.contains("fin");
    progres.style.width = (fin ? 100 : Math.round((i / (total - 1)) * 100)) + "%";
    /* le compteur n'a de sens qu'une fois la branche connue : avant, le total serait faux */
    compteur.textContent = (!fin && i > 0 && reponses.profil) ? (i + " / " + (total - 1)) : "";
    retour.disabled = pile.length === 0 || fin;
    majAvancer();
    var premier = ecran.querySelector("textarea, input:not([type=hidden]), .option, .cta");
    if (premier && !fin) { setTimeout(function(){ premier.focus({ preventScroll: true }); }, 60); }
    suivre("quiz_step", { step: ecran.getAttribute("data-id"), profil: reponses.profil || "" });
  }

  /* « Suivant » n'est actif que si l'écran courant a sa réponse ; on ne saute jamais une question */
  var avancer = document.getElementById("avancer");
  function repondu(ecran){
    var type = ecran.getAttribute("data-type"), champ = ecran.getAttribute("data-champ");
    if (!type) return !ecran.classList.contains("fin");
    if (type === "unique") return !!reponses[champ];
    if (type === "multiple") return !!(reponses[champ] && reponses[champ].length);
    if (type === "coordonnees") {
      /* 04.11 : l'e-mail suffit, le numéro est facultatif. */
      var mail = document.getElementById("c-mail").value.trim(), tel = document.getElementById("c-tel").value.trim();
      return !!(reponses.mode && (reponses.mode === "visio" ? mail : tel));
    }
    return false;
  }
  /* 03.11 : une seule information, celle qui sert au rendez-vous choisi. Visio = e-mail (le lien y arrive),
     téléphone = numéro (on l'appelle). Plus de nom : Cal le demande une fois si la personne réserve. */
  function adapterCoordonnees(){
    /* 04.11 : visio ou appel choisi sur cet écran ; les deux champs restent visibles.
       Visio = e-mail obligatoire, numéro facultatif. Téléphone = numéro obligatoire, e-mail facultatif. */
    var mode = reponses.mode, visio = mode === "visio";
    document.querySelectorAll(".choix-mode").forEach(function(b){ b.classList.toggle("choisi", b.getAttribute("data-mode") === mode); });
    document.getElementById("c-mail").required = visio;
    document.getElementById("c-tel").required = mode === "telephone";
    document.getElementById("c-mail-opt").textContent = mode === "telephone" ? "(facultatif)" : "";
    document.getElementById("c-tel-opt").textContent = visio ? "(facultatif)" : "";
    /* changement de format : les erreurs affichées pour l'autre format ne valent plus */
    ["grp-mail", "grp-tel"].forEach(function(id){ document.getElementById(id).classList.remove("invalide"); });
    var modes = document.querySelector(".modes"); if (modes && mode) modes.classList.remove("invalide");
    var aide = document.getElementById("coord-aide");
    aide.hidden = !mode;
    aide.textContent = visio ? "Le lien de la visio arrive sur cet e-mail." : "C'est ce numéro qu'on appelle à l'heure choisie.";
    document.getElementById("coord-bouton").textContent = "Choisir mon créneau";
  }
  document.querySelectorAll(".choix-mode").forEach(function(b){
    b.addEventListener("click", function(){ reponses.mode = b.getAttribute("data-mode"); sauver(); adapterCoordonnees(); majAvancer(); });
  });
  function majAvancer(){
    avancer.disabled = envoiEnCours || !courant || courant.classList.contains("fin") || !repondu(courant);
  }
  function suivant(){
    var liste = parcours(), i = liste.indexOf(courant), id = courant.getAttribute("data-id");
    /* 02.11 : le lead part dès les coordonnées (avant, il partait après l'écran d'engagement,
       où six personnes sur dix abandonnaient après avoir tapé leur numéro). */
    if (id === "coordonnees") { return terminer(); }
    if (id === "engagement") {
      pile = [];
      if (reponses.engagement === "non") { suivre("engagement_non", { profil: reponses.profil || "" }); montrer(ecranParId("fin-non")); }
      else { suivre("engagement_oui", { profil: reponses.profil || "" }); montrer(ecranParId("fin-creneau")); majCal(); }
      return;
    }
    pile.push(courant);
    if (i + 1 < liste.length) { montrer(liste[i + 1]); }
  }
  function precedent(){
    var e = pile.pop();
    if (e) { montrer(e); }
  }

  /* Choix unique : on avance seul. Choix multiple : on coche, le bouton Continuer s'active. */
  form.addEventListener("click", function(ev){
    var opt = ev.target.closest(".option");
    if (!opt) return;
    var ecran = opt.closest(".ecran"), champ = ecran.getAttribute("data-champ"), type = ecran.getAttribute("data-type");
    if (type === "unique") {
      ecran.querySelectorAll(".option").forEach(function(o){ o.classList.remove("choisi"); });
      opt.classList.add("choisi");
      var v = opt.getAttribute("data-valeur");
      if (champ === "profil" && reponses.profil && reponses.profil !== v) {
        /* changement de branche : on oublie les réponses de l'autre branche */
        reponses = { profil: v };
        ecrans.forEach(function(e){ if (e.getAttribute("data-branche")) { e.querySelectorAll(".option").forEach(function(o){ o.classList.remove("choisi"); }); e.querySelectorAll("textarea").forEach(function(t){ t.value = ""; }); } });
      }
      reponses[champ] = v;
      sauver();
      setTimeout(suivant, 220);
    } else {
      var val = opt.getAttribute("data-valeur");
      if (val === "rien") { ecran.querySelectorAll(".option").forEach(function(o){ if (o !== opt) o.classList.remove("choisi"); }); }
      else { var rien = ecran.querySelector('.option[data-valeur="rien"]'); if (rien) rien.classList.remove("choisi"); }
      opt.classList.toggle("choisi");
      var choisis = Array.prototype.slice.call(ecran.querySelectorAll(".option.choisi")).map(function(o){ return o.getAttribute("data-valeur"); });
      reponses[champ] = choisis;
      sauver();
      ecran.querySelector("[data-suivant]").disabled = choisis.length === 0;
    }
    majAvancer();
  });

  function validerCoordonnees(ecran){
    var ok = true;
    /* 04.11 : sans choix visio ou appel, on ne sait pas quel champ compte */
    var modes = ecran.querySelector(".modes");
    if (modes) { modes.classList.toggle("invalide", !reponses.mode); if (!reponses.mode) ok = false; }
    ecran.querySelectorAll(".champ-groupe").forEach(function(g){
      var input = g.querySelector("input[required]");
      if (!input) { g.classList.remove("invalide"); return; } /* champ facultatif (e-mail) : jamais bloquant */
      var msg = g.querySelector(".erreur-msg");
      var v = input.value.trim(), invalide = !v;
      if (input.type === "tel") { invalide = !v; /* tout est accepté, seul le vide bloque (17.10) */ }
      if (input.type === "email") {
        /* Obligatoire seulement en visio (02.11) : le lien part par e-mail, il faut une adresse plausible.
           Toute adresse acceptée (16.10) : l’adresse perso est signalée côté serveur, jamais bloquée. */
        var at = v.indexOf("@");
        invalide = !(at > 0 && v.indexOf(".", at) > at + 1);
      }
      g.classList.toggle("invalide", invalide);
      if (invalide) ok = false;
    });
    return ok;
  }

  form.addEventListener("click", function(ev){
    var btn = ev.target.closest("[data-suivant]");
    if (!btn) return;
    var ecran = btn.closest(".ecran"), type = ecran.getAttribute("data-type");
    if (type === "texte") {
      var ta = ecran.querySelector("textarea"), grp = ecran.querySelector(".champ-groupe");
      var vide = ta.value.trim().length < 3;
      grp.classList.toggle("invalide", vide);
      if (vide) { ta.focus(); return; }
      reponses[ecran.getAttribute("data-champ")] = ta.value.trim();
      sauver();
    }
    if (type === "coordonnees" && !validerCoordonnees(ecran)) { signalerBlocage({ name: "", email: document.getElementById("c-mail").value.trim(), phone: document.getElementById("c-tel").value.trim(), profil: reponses.profil || "", taille: reponses.taille || "", utm: (document.getElementById("utm") || {}).value || "" }, "questions-ia"); return; }
    suivant();
  });

  /* Entrée avance sur les écrans à bouton ; Ctrl+Entrée dans la zone de texte */
  form.addEventListener("keydown", function(ev){
    if (ev.key !== "Enter") return;
    var ta = ev.target.tagName === "TEXTAREA";
    if (ta && !(ev.ctrlKey || ev.metaKey)) return;
    var btn = courant.querySelector("[data-suivant]");
    if (btn && !btn.disabled) { ev.preventDefault(); btn.click(); }
  });
  retour.addEventListener("click", precedent);
  avancer.addEventListener("click", function(){
    if (avancer.disabled) return;
    var type = courant.getAttribute("data-type");
    if (type === "coordonnees" && !validerCoordonnees(courant)) { signalerBlocage({ name: "", email: document.getElementById("c-mail").value.trim(), phone: document.getElementById("c-tel").value.trim(), profil: reponses.profil || "", taille: reponses.taille || "", utm: (document.getElementById("utm") || {}).value || "" }, "questions-ia"); return; }
    suivant();
  });
  /* les coordonnées : le bouton s'active au fil de la saisie */
  form.addEventListener("input", majAvancer);

  /* 03.11 : ebook remis après le lead, sur chaque écran de fin. Jamais promis dans la pub (playbook « Après validation ») :
     c2 pour les visites venues de la pub c2, sinon « Par où commencer ». Fichiers publics de /guide-ia, même pixel que la page ebook. */
  (function(){
    var c = (new URLSearchParams(location.search).get("utm_content") || "").toLowerCase();
    var e = c.slice(0, 2) === "c2" ? { slug: "c2-ce-qui-marche", titre: "L'IA en PME : ce qui marche vraiment, et ce qui ne sert à rien" }
                                   : { slug: "d2-par-ou-commencer", titre: "Par où commencer avec l'IA dans votre PME" };
    form.querySelectorAll("[data-ebook]").forEach(function(b){
      var img = document.createElement("img"); img.src = "/guide-ia/couv/" + e.slug + ".webp"; img.alt = ""; img.width = 56; img.height = 79; img.loading = "lazy";
      var d = document.createElement("div"), s = document.createElement("small"), t = document.createElement("b"), a = document.createElement("a");
      s.textContent = "En attendant, votre ebook"; t.textContent = e.titre;
      a.href = "/guide-ia/pdf/" + e.slug + ".pdf"; a.setAttribute("download", ""); a.textContent = "Télécharger l'ebook →";
      a.addEventListener("click", function(){ suivre("guide_telecharge", { ebook: e.slug, origine: "questions-ia" }); try { if (window.fbq) fbq("trackCustom", "GuideTelecharge", { content_name: e.slug, origine: "questions-ia" }); } catch (x) {} });
      d.appendChild(s); d.appendChild(t); d.appendChild(a); b.appendChild(img); b.appendChild(d);
    });
  })();

  /* Routage de fin */
  function destination(){
    if (reponses.engagement === "non") return "fin-non";
    if (reponses.profil === "entreprise") return "fin-creneau";
    var veut = reponses.investir === "oui" || reponses.investir === "oui-questions";
    return veut ? "fin-creneau" : "fin-ressource";
  }
  function qualification(){
    var d = destination();
    if (d !== "fin-creneau") return "non";
    return reponses.profil === "entreprise" ? "entreprise" : "formation";
  }

  /* Cal.com : modal intégré, nom et e-mail préremplis, la question dans les notes */
  var calPret = false;
  function chargerCal(){
    if (calPret) return; calPret = true;
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", { origin: "https://app.cal.com" });
    /* 02.11 : sans l'en-tête de l'événement, le calendrier est la première chose visible */
    Cal("ui", { theme: "light", cssVarsPerTheme: { light: { "cal-brand": "#1E9E72" } }, hideEventTypeDetails: true });
    Cal("on", { action: "bookingSuccessful", callback: function(){ if (window.oaiq) { oaiq("measure", "appointment_scheduled", { type: "customer_action" }); } } });
  }
  function majCal(){
    var lien = form.querySelector(".cal-lien");
    var d = new FormData(form);
    var visio = reponses.mode === "visio";
    lien.dataset.mail = d.get("email") || "";
    /* Plus de champ nom (03.11) : en visio, Cal reçoit la partie avant l'arobase, modifiable ; au téléphone, Cal demande le nom une fois. */
    lien.dataset.nom = visio ? (lien.dataset.mail.split("@")[0] || "").replace(/[._-]+/g, " ").replace(/\\b\\w/g, function(c){ return c.toUpperCase(); }) : "";
    /* Deux rendez-vous Cal : « appel » confirme par e-mail (visio), « appel-telephone » confirme par numéro (téléphone). */
    lien.dataset.cal = visio ? "rdv-mawt/appel" : "rdv-mawt/appel-telephone";
    lien.dataset.notes = "[Session IA " + reponses.profil + "]";
    var aide = document.getElementById("creneau-aide");
    if (aide) { aide.textContent = visio ? "Réservez directement : un jour, puis une heure. Votre e-mail est déjà rempli." : "Réservez directement : un jour, puis une heure. Votre numéro est déjà rempli."; }
    /* 02.11 : le numéro déjà saisi est transmis à Cal (lieu « téléphone du participant »), il n'est plus redemandé.
       Même normalisation que le serveur : 079… devient +4179…, 0041 devient +41. */
    var tel = (d.get("phone") || "").replace(/[\\s.\\-()]/g, "").replace(/^0041/, "+41").replace(/^00/, "+").replace(/^\\+410/, "+41");
    if (/^0[1-9]\\d{8}$/.test(tel)) { tel = "+41" + tel.slice(1); }
    lien.dataset.tel = tel;
    /* Visio : lieu Cal Video (« integrations:daily ») ; téléphone : le numéro déjà saisi. */
    /* Au téléphone (03.11), le rendez-vous « appel-telephone » confirme par numéro et son lieu est fixe (« Appel téléphonique ») :
       on ne transmet que le numéro, dans le champ de confirmation. */
    var lieu = visio ? JSON.stringify({ value: "integrations:daily", optionValue: "" }) : "";
    if (visio) { tel = ""; }
    lien.dataset.lieu = lieu;
    lien.href = "https://cal.com/" + lien.dataset.cal + "?name=" + encodeURIComponent(lien.dataset.nom) + "&email=" + encodeURIComponent(lien.dataset.mail) + "&notes=" + encodeURIComponent(lien.dataset.notes) + (lieu ? "&location=" + encodeURIComponent(lieu) : "") + (tel ? "&attendeePhoneNumber=" + encodeURIComponent(tel) : "");
    chargerCal();
    /* 02.11 : agenda intégré dans l'écran de merci, au lieu d'un nouvel onglet (perte non mesurée). */
    var zone = document.getElementById("cal-inline");
    if (zone && !zone.dataset.pret) {
      zone.dataset.pret = "1";
      var config = { name: lien.dataset.nom, email: lien.dataset.mail, notes: lien.dataset.notes, theme: "light" };
      if (lieu) { config.location = lieu; }
      if (tel) { config.attendeePhoneNumber = tel; }
      try { Cal("inline", { elementOrSelector: "#cal-inline", calLink: lien.dataset.cal, layout: "month_view", config: config }); } catch (e) {}
    }
  }
  form.addEventListener("click", function(e){
    var a = e.target.closest(".cal-lien");
    if (!a || !window.Cal) return;
    e.preventDefault();
    suivre("cal_open", { profil: reponses.profil || "" });
    var cfg = { name: a.dataset.nom || "", email: a.dataset.mail || "", notes: a.dataset.notes || "", theme: "light" };
    if (a.dataset.lieu) { cfg.location = a.dataset.lieu; }
    if (a.dataset.tel) { cfg.attendeePhoneNumber = a.dataset.tel; }
    Cal("modal", { calLink: a.dataset.cal || "rdv-mawt/appel", config: cfg });
  });

  /* Envoi de secours : si l'API du site ne répond pas, la réponse part directement
     vers la feuille Google (Apps Script), hors Vercel. Retourne true si le navigateur
     a accepté l'envoi. */
  var URL_SECOURS = "__LEADS_BACKUP_URL__";
  /* Signal d'analyse sur les champs e-mail et téléphone (16.10, demande utilisateur) :
     à la sortie du champ, la valeur saisie (décision utilisateur 17.10), une fois par valeur. */
  (function(){ if (window.__saisieBranchee) return; window.__saisieBranchee = true;
    var vus = {};
    function utmVal(){ var u = document.querySelector("input[name=utm]"); return u ? u.value : ""; }
    function envoyer(champ, input, page){
      var v = (input.value || "").trim(); if (!v) return;
      var cle = champ + "|" + v; if (vus[cle]) return; vus[cle] = true;
      var corps = { page: page, trace: (window.__trace || ""), champ: champ, valeur: v.slice(0, 200), format_ok: false, utm: utmVal(), profil: (window.__profilQuiz || "") };
      if (champ === "email") { var m = /@([A-Za-z0-9.-]+\.[A-Za-z]{2,})$/.exec(v); corps.domaine = m ? m[1].toLowerCase() : ""; corps.format_ok = !!m; }
      else { var n = v.replace(/[\\s.\\-()]/g, "").replace(/^0041/, "+41").replace(/^00/, "+").replace(/^\\+410/, "+41"); corps.format_ok = /^\\+41[1-9]\\d{8}$/.test(n) || /^0[1-9]\\d{8}$/.test(n) || /^\\+[1-9]\\d{7,14}$/.test(n); }
      try { fetch("/api/saisie", { method: "POST", keepalive: true, headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(corps) }); } catch (e) {}
    }
    document.querySelectorAll("input[type=email]").forEach(function(i){ i.addEventListener("blur", function(){ envoyer("email", i, "questions-ia"); }); });
    document.querySelectorAll("input[type=tel]").forEach(function(i){ i.addEventListener("blur", function(){ envoyer("phone", i, "questions-ia"); }); });
  })();
  /* Coordonnées refusées par la validation : on les garde quand même (sheet « Leads site »,
     source navigateur-bloque, e-mail d'alerte), la personne a cliqué pour les envoyer. Une fois par contenu. */
  var dejaSignale = {};
  function signalerBlocage(champs, page){
    var cle = JSON.stringify(champs);
    if (dejaSignale[cle] || !(champs.email || champs.phone)) return;
    /* 03.11 : les parcours de test remplissent le pot de miel ; leurs blocages ne vont pas dans la feuille */
    if (Array.prototype.some.call(document.querySelectorAll('input[name=mawt_hp]'), function(i){ return i.value; })) return;
    dejaSignale[cle] = true;
    envoiSecours(Object.assign({ source: "navigateur-bloque", trace: (window.__trace || "") }, champs), page, "validation refusee");
  }
  function envoiSecours(donnees, page, erreur){
    if (!URL_SECOURS || URL_SECOURS.indexOf("http") !== 0) return false;
    var corps = JSON.stringify(Object.assign({ source: "navigateur-secours", page: page, erreur: String(erreur || ""), horodatage: new Date().toISOString(), url: location.href }, donnees));
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(URL_SECOURS, new Blob([corps], { type: "text/plain;charset=utf-8" }))) return true;
      fetch(URL_SECOURS, { method: "POST", mode: "no-cors", keepalive: true, headers: { "Content-Type": "text/plain;charset=utf-8" }, body: corps });
      return true;
    } catch (e) { return false; }
  }
  function erreurEnvoi(msg){
    var e = courant.querySelector(".erreur-envoi");
    if (!e) { e = document.createElement("p"); e.className = "erreur-envoi"; courant.appendChild(e); }
    e.textContent = msg || "L'envoi a échoué. Réessayez, ou écrivez-nous directement.";
  }

  function terminer(){
    if (envoye || envoiEnCours) return;
    sauverContact();
    var d = new FormData(form), donnees = {};
    d.forEach(function(v, k){ donnees[k] = v; });
    Object.keys(reponses).forEach(function(k){ donnees[k] = Array.isArray(reponses[k]) ? reponses[k].join(",") : reponses[k]; });
    donnees.qualification = qualification();
    // Shared with the server copy sent to the Conversions API, so Meta counts the lead once.
    // Generated once per visit: a retry after an error keeps the same id, so the pixels never count it twice.
    if (!eventId) eventId = "l5-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
    donnees.event_id = eventId;
    var dest = destination();
    var reel = location.hostname.indexOf("mawt.ch") !== -1;
    function fini(){
      envoye = true; envoiEnCours = false;
      /* Lead enregistré : l'écran d'engagement vient après, et ne conditionne plus l'envoi */
      /* 04.11 : plus de question de presence, agenda tout de suite (Andrew : le plus simple possible) */
      pile = []; montrer(ecranParId(dest)); if (dest === "fin-creneau") { majCal(); }
      suivre("form_submit", { profil: donnees.profil, qualification: donnees.qualification });
      if (window.fbq) {
        if (donnees.qualification === "entreprise") { fbq("track", "Lead", { content_name: "session-ia-entreprise" }, { eventID: donnees.event_id }); }
        else if (donnees.qualification === "formation") { fbq("trackCustom", "LeadFormation", { content_name: "session-ia-formation" }, { eventID: donnees.event_id }); }
        else { fbq("trackCustom", "LeadNonQualifie", { profil: donnees.profil || "" }, { eventID: donnees.event_id }); }
      }
      if (window.oaiq && donnees.qualification === "entreprise") { oaiq("measure", "lead_created", { type: "customer_action" }, { event_id: donnees.event_id }); }
    }
    if (!reel) { fini(); return; }
    /* Un seul envoi à la fois : les taps sur l'option, la flèche ou Entrée pendant la réponse du serveur sont ignorés
       (26.10.2026 : un lead est parti trois fois en deux secondes et a été compté trois fois par les pixels). */
    envoiEnCours = true; majAvancer();
    function reessayable(msg){ envoiEnCours = false; majAvancer(); erreurEnvoi(msg); courant.querySelectorAll(".option, [data-suivant]").forEach(function(o){ o.disabled = false; }); }
    courant.querySelectorAll(".option, [data-suivant]").forEach(function(o){ o.disabled = true; });
    fetch("/api/questions-ia", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(donnees) })
      .then(function(r){ return r.json(); })
      .then(function(rep){
        if (rep && rep.success) fini();
        else if (envoiSecours(donnees, "questions-ia", rep && rep.error)) fini();
        else reessayable(rep && rep.error);
      })
      .catch(function(err){
        if (envoiSecours(donnees, "questions-ia", err)) fini();
        else reessayable(null);
      });
  }

  /* Ouverture et fermeture */
  var posScroll = 0;
  function ouvrir(origine){
    document.getElementById("origine").value = origine || "hero";
    suivre("cta_click", { origin: origine || "hero" });
    quiz.classList.add("ouvert");
    posScroll = window.scrollY || 0;
    document.body.style.overflow = "hidden";
    if (!courant) { montrer(ecranParId("accueil")); } else { montrer(courant); }
  }
  function fermerQuiz(){
    quiz.classList.remove("ouvert");
    document.body.style.overflow = "";
    window.scrollTo(0, posScroll);
  }
  document.querySelectorAll("[data-origine]").forEach(function(b){ b.addEventListener("click", function(){ ouvrir(b.getAttribute("data-origine")); }); });
  document.getElementById("fermer").addEventListener("click", fermerQuiz);
  document.addEventListener("keydown", function(e){ if (e.key === "Escape" && quiz.classList.contains("ouvert")) fermerQuiz(); });
  if (location.hash === "#session") { ouvrir("lien"); }
})();
</script>
</body>
</html>
`;

export default landingHtml;

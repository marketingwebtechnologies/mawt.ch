// Generated from mawt-microtest/creas/landing/landing-500.html - do not edit by hand.
// Regenerate via the microtest project when the prototype changes.
const landingHtml = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Perdu avec l'IA ? − 500 CHF par employé, chaque semaine · M&WT</title>
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
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{
    margin:0;
    font-family:'Gilroy','Manrope',system-ui,sans-serif;
    background:var(--fond);
    color:var(--encre);
    -webkit-font-smoothing:antialiased;
  }
  .conteneur{max-width:640px;margin:0 auto;padding:0 28px}

  /* En-tête */
  header{position:fixed;top:0;left:0;right:0;z-index:45;background:var(--fond);border-bottom:1px solid var(--filet)}
  header .conteneur{height:56px;display:flex;align-items:center}
  main{padding-top:56px}
  .logo{display:block;height:22px;width:auto}

  /* Hero */
  .hero{padding:88px 28px 48px}
  .kicker{font-size:12px;font-weight:600;color:var(--gris)}
  h1{margin:16px 0 0;font-size:clamp(40px,11vw,56px);line-height:1.02;font-weight:800}
  .hero p{margin:20px 0 0;font-size:18px;line-height:1.45;color:var(--corps)}
  .chiffre{margin:12px 0 0;font-size:clamp(56px,16vw,84px);line-height:1;font-weight:800;color:var(--mint-fonce)}
  .promesse{margin:20px 0 0;font-size:18px;font-weight:600;color:var(--encre)}
  .micro{display:block;margin-top:12px;font-size:13px;color:var(--gris);text-align:center}

  /* Boutons */
  .cta{
    display:block;width:100%;margin-top:28px;padding:17px 0;
    background:var(--mint);color:var(--encre);
    font-family:inherit;font-weight:800;font-size:17px;text-align:center;
    border:none;border-radius:0;cursor:pointer;
    transition:background .15s ease,color .15s ease,transform .15s ease;
  }
  @media(hover:hover){
    .cta:hover{background:var(--mint-fonce);color:var(--fond);transform:translateY(-2px)}
  }
  .cta:active{background:var(--mint-fonce);color:var(--fond);transform:translateY(0)}
  .cta:focus-visible{outline:3px solid var(--encre);outline-offset:2px}

  /* Sections douleur */
  .douleur{padding:64px 0;border-top:1px solid var(--filet)}
  .douleur svg{display:block;color:var(--encre)}
  h2{margin:16px 0 0;font-size:clamp(26px,7.5vw,32px);line-height:1.15;font-weight:800}
  .douleur p{margin:16px 0 0;font-size:16px;line-height:1.55;color:var(--corps)}
  .douleur .resultat{font-size:18px;line-height:1.45;font-weight:600;color:var(--encre)}
  .douleur .resultat strong{color:var(--mint-fonce);font-weight:800}

  /* Carrousel fondu pilote par le defilement */
  .defile-espace{height:340vh;position:relative}
  .diapo{will-change:opacity,transform}
  .defile-ecran{position:sticky;top:56px;height:calc(100vh - 56px);height:calc(100svh - 56px);overflow:hidden;border-top:1px solid var(--filet)}
  .diapo{position:absolute;inset:0;display:flex;align-items:center;opacity:0;pointer-events:none;will-change:opacity,transform}
  .diapo.active{pointer-events:auto}
  .diapo.douleur{border-top:none;padding:0}
  .diapo .conteneur{width:100%}
  .points{position:absolute;right:16px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:8px}
  .point{width:8px;height:8px;border-radius:50%;background:var(--champ);transition:background .3s}
  .point.actif{background:var(--mint-fonce)}
  .sans-defile .defile-espace{height:auto}
  .sans-defile .defile-ecran{position:static;height:auto;overflow:visible}
  .sans-defile .diapo{position:static;opacity:1 !important;transform:none !important;pointer-events:auto;padding:64px 0}
  .sans-defile .diapo + .diapo{border-top:1px solid var(--filet)}
  .sans-defile .points{display:none}

  /* Apparition au scroll */
  .revele{opacity:0;transform:translateY(24px);transition:opacity .45s ease,transform .45s ease}
  .revele.visible{opacity:1;transform:none}
  @media (prefers-reduced-motion: reduce){
    .revele{opacity:1;transform:none;transition:none}
  }

  /* Formulaire final */
  .section-form{padding:64px 0;background:#FFFFFF;border-top:1px solid var(--filet)}
  .section-form h2{margin-top:0}
  .champ-groupe{margin-top:18px;display:flex;flex-direction:column;gap:6px}
  label{font-size:14px;font-weight:600}
  input,select{
    width:100%;padding:14px;font-size:16px;font-family:inherit;
    border:1px solid var(--champ);border-radius:8px;background:var(--fond);color:var(--encre);
  }
  input:focus,select:focus{outline:2px solid var(--mint);outline-offset:1px;border-color:var(--mint)}
  .succes-ou{margin:18px 0 0;font-size:15px;color:var(--corps)}
  a.cta{text-decoration:none;display:block}
  .erreur-msg{font-size:13px;color:#B4472E;display:none}
  .invalide input,.invalide select{border-color:#B4472E}
  .invalide .erreur-msg{display:block}

  /* Footer */
  footer{padding:32px 0 120px;border-top:1px solid var(--filet)}
  footer .liens{margin-top:10px;display:flex;gap:16px}
  footer a{font-size:13px;color:var(--gris)}

  /* Desktop : la page respire, le hero devient monumental */
  @media (min-width:700px){
    .conteneur{max-width:min(760px, calc(100% - 160px))}
    .hero{min-height:calc(100vh - 57px);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:128px 28px 72px}
    h1{font-size:88px}
    .chiffre{font-size:150px;margin-top:8px}
    .hero p{font-size:22px}
    .promesse{font-size:22px}
    .hero .cta{width:auto;padding:19px 56px;font-size:18px}
    .douleur{padding:104px 0}
    .douleur .conteneur{max-width:min(640px, calc(100% - 160px))}
    .douleur svg{width:46px;height:46px}
    h2{font-size:40px}
    .douleur p{font-size:18px}
    .douleur .resultat{font-size:21px}
    .douleur .cta{width:auto;padding:17px 44px;font-size:17px}
    .section-form{padding:104px 0}
    .section-form .conteneur{max-width:min(520px, calc(100% - 160px))}
    .section-form .cta{width:100%}
  }

  /* Barre collante */
  .barre{
    position:fixed;left:0;right:0;bottom:0;z-index:40;
    background:#FFFFFF;border-top:1px solid var(--filet);
    transform:translateY(100%);transition:transform .3s ease;
  }
  .barre.visible{transform:none}
  .barre .conteneur{display:flex;align-items:center;gap:12px;padding-top:10px;padding-bottom:calc(10px + env(safe-area-inset-bottom))}
  .barre span{flex:1;font-size:13px;font-weight:600;color:var(--corps)}
  .barre button{
    padding:12px 18px;background:var(--mint);color:var(--encre);
    font-family:inherit;font-weight:800;font-size:14px;border:none;border-radius:0;cursor:pointer;white-space:nowrap;
    transition:background .15s ease,color .15s ease;
  }
  @media(hover:hover){.barre button:hover{background:var(--mint-fonce);color:var(--fond)}}
  .barre button:active{background:var(--mint-fonce);color:var(--fond)}

  /* Popup */
  .voile{
    position:fixed;inset:0;z-index:50;background:rgba(0,43,54,.45);
    display:none;
  }
  .voile.ouvert{display:block}
  .feuille{
    position:fixed;z-index:60;top:50%;left:50%;
    width:calc(100% - 32px);max-width:480px;
    background:var(--fond);border-radius:12px;
    padding:20px 24px 28px;
    transform:translate(-50%,-46%);opacity:0;pointer-events:none;
    transition:opacity .2s ease,transform .2s ease;
    max-height:88vh;max-height:88svh;overflow-y:auto;overscroll-behavior:contain;
  }
  .feuille.ouvert{transform:translate(-50%,-50%);opacity:1;pointer-events:auto}
  @media (prefers-reduced-motion: reduce){
    .feuille,.barre{transition:none}
  }
  .poignee{display:none}
  .autre-groupe[hidden]{display:none}
  .feuille-titre{display:flex;align-items:center;justify-content:space-between}
  .feuille-titre h3{margin:0;font-size:22px;font-weight:800}
  .fermer{width:36px;height:36px;border:none;background:none;font-size:24px;line-height:1;color:var(--gris);cursor:pointer;font-family:inherit}
  .indice-origine{font-size:12px;color:var(--mint-fonce);font-weight:600}
  .succes{display:none;padding:32px 0;text-align:center}
  .succes p{font-size:17px;line-height:1.5;font-weight:600;margin:0}
  .feuille.envoye form{display:none}
  .feuille.envoye .succes{display:block}
  .section-form.envoye form{display:none}
  .section-form.envoye .succes{display:block}
</style>
<script>
(function(){
  try { if (localStorage.getItem("mawt-cookie-consent") === "essential") return; } catch(e) {}
  if (location.hostname.indexOf("mawt.ch") === -1) return;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','959258244767672');
  fbq('track','PageView');
})();
</script>
<script>
(function(){
  try { if (localStorage.getItem("mawt-cookie-consent") === "essential") return; } catch(e) {}
  if (location.hostname.indexOf("mawt.ch") === -1) return;
  /* GA4, charge quand le fil principal est libre pour ne pas retarder
     la reaction au premier tap. La file dataLayer existe des maintenant,
     donc aucun evenement envoye entre-temps n'est perdu. */
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
})();
function suivre(nom, params){ if (window.gtag) { gtag("event", nom, params || {}); } }
</script>
<script>
/* Moniteur d'erreurs client : remonte vers /api/js-error, GA4 et Clarity.
   Plafonne a 3 envois par session pour ne jamais devenir un probleme lui-meme. */
(function(){
  var envoyes = 0;
  function remonter(kind, message, source, line, column, stack){
    if (envoyes >= 3) return;
    envoyes++;
    var charge = {
      kind: kind,
      message: String(message || "").slice(0, 500),
      source: String(source || "").slice(0, 300),
      line: parseInt(line, 10) || 0,
      column: parseInt(column, 10) || 0,
      stack: String(stack || "").slice(0, 1500),
      page: location.pathname + location.search.slice(0, 120),
      ua: navigator.userAgent.slice(0, 400),
      viewport: window.innerWidth + "x" + window.innerHeight
    };
    try {
      if (window.gtag) { gtag("event", "js_error", { message: charge.message, source: charge.source, line: charge.line }); }
      if (window.clarity) { clarity("set", "js_error", charge.message.slice(0, 100)); }
    } catch (e) {}
    try {
      var corps = JSON.stringify(charge);
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/js-error", new Blob([corps], { type: "application/json" }));
      } else {
        fetch("/api/js-error", { method: "POST", headers: { "Content-Type": "application/json" }, body: corps, keepalive: true });
      }
    } catch (e) {}
  }
  window.addEventListener("error", function(e){
    if (e && e.target && e.target !== window && (e.target.src || e.target.href)) {
      remonter("resource", "Ressource non chargee: " + (e.target.src || e.target.href), e.target.tagName, 0, 0, "");
      return;
    }
    remonter("error", e.message, e.filename, e.lineno, e.colno, e.error && e.error.stack);
  }, true);
  window.addEventListener("unhandledrejection", function(e){
    var r = e.reason;
    remonter("unhandledrejection", (r && r.message) || String(r), "", 0, 0, r && r.stack);
  });
})();
</script>
</head>
<body>

<header>
  <div class="conteneur"><a href="#" aria-label="Haut de page" onclick="window.scrollTo({top:0,behavior:'smooth'});return false"><img class="logo" src="/500-chf-assets/mawt-logo.svg" alt="M&amp;WT"></a></div>
</header>

<main>
  <section class="hero conteneur" id="hero">
    <span class="kicker">Pour les dirigeants et responsables des op&eacute;rations</span>
    <h1>Perdu avec l&rsquo;IA&#8239;?</h1>
    <p>Vous perdez&#8239;:</p>
    <div class="chiffre">&minus;&#8239;500&#8239;CHF</div>
    <p>par employ&eacute;, chaque semaine, sans&nbsp;le&nbsp;voir.</p>
    <p class="promesse">R&eacute;cup&eacute;rez-les, sans embaucher.</p>
    <button class="cta" data-origine="hero">R&eacute;server l&rsquo;appel, c&rsquo;est gratuit</button>
    <span class="micro">Appel de 30 minutes. On vous rappelle sous 24&#8239;h ouvr&eacute;es.</span>
  </section>

  <div class="defile" id="douleurs"><div class="defile-espace"><div class="defile-ecran">
  <article class="douleur diapo" id="copier-coller">
    <div class="conteneur">
      <svg width="40" height="40" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,40V168H168V88H88V40Z" fill="var(--mint)"/><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"/></svg>
      <h2>Vous payez vos &eacute;quipes &agrave; ressaisir&#8239;?</h2>
      <p>Vos collaborateurs recopient les m&ecirc;mes commandes d&rsquo;un outil &agrave; l&rsquo;autre, deux heures par jour, six jours sur sept. Ces heures-l&agrave;, vous les payez plein tarif. Chez un client r&eacute;el, &ccedil;a faisait 14 heures par semaine.</p>
      <p class="resultat">Aujourd&rsquo;hui elles se traitent toutes seules. <strong>14 heures rendues &agrave; son &eacute;quipe</strong>, chaque semaine, sans un franc de salaire en plus.</p>
      <button class="cta" data-origine="copier-coller">Arr&ecirc;ter de payer la ressaisie</button>
    </div>
  </article>

  <article class="douleur diapo" id="tete">
    <div class="conteneur">
      <svg width="40" height="40" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M240,124a48,48,0,0,1-32,45.27h0V176a40,40,0,0,1-80,0,40,40,0,0,1-80,0v-6.73h0a48,48,0,0,1,0-90.54V72a40,40,0,0,1,80,0,40,40,0,0,1,80,0v6.73A48,48,0,0,1,240,124Z" fill="var(--mint)"/><path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"/></svg>
      <h2>Votre entreprise s&rsquo;arr&ecirc;te quand vous partez&#8239;?</h2>
      <p>Les prix, l&rsquo;&eacute;tat des chantiers, ce qui a &eacute;t&eacute; promis &agrave; qui&#8239;: tout est dans votre t&ecirc;te. Une semaine d&rsquo;absence co&ucirc;te une semaine de retard, et vos vacances se passent au t&eacute;l&eacute;phone.</p>
      <p class="resultat">On sort ces informations de votre t&ecirc;te et de vos carnets. L&rsquo;&eacute;quipe avance <strong>sans vous interrompre</strong>, m&ecirc;me quand vous n&rsquo;&ecirc;tes pas l&agrave;.</p>
      <button class="cta" data-origine="tete">Sortir &ccedil;a de ma t&ecirc;te</button>
    </div>
  </article>

  <article class="douleur diapo" id="questions">
    <div class="conteneur">
      <svg width="40" height="40" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M231.66,213.73a8,8,0,0,1-9.93,9.93L194,215.5A72.05,72.05,0,0,1,92.06,175.89h0c1.31.07,2.62.11,3.94.11a72,72,0,0,0,67.93-95.88h0A72,72,0,0,1,223.5,186Z" fill="var(--mint)"/><path d="M232.07,186.76a80,80,0,0,0-62.5-114.17A80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a80.39,80.39,0,0,0,25.18,7.35,80,80,0,0,0,108.34,40.65l24.71,7.27a16,16,0,0,0,19.87-19.86ZM62,159.5a8.28,8.28,0,0,0-2.26.32L32,168l8.17-27.76a8,8,0,0,0-.63-6,64,64,0,1,1,26.26,26.26A8,8,0,0,0,62,159.5Zm153.79,28.73L224,216l-27.76-8.17a8,8,0,0,0-6,.63,64.05,64.05,0,0,1-85.87-24.88A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.75,92.48A8,8,0,0,0,215.82,188.23Z"/></svg>
      <h2>Tout passe par vous&#8239;?</h2>
      <p>C&rsquo;est o&ugrave;&#8239;? C&rsquo;est combien&#8239;? C&rsquo;est pour quand&#8239;? Chaque devis, chaque client, chaque employ&eacute; attend votre r&eacute;ponse. Vous ne prenez pas plus de clients parce que vous ne pouvez pas &ecirc;tre partout.</p>
      <p class="resultat">Les r&eacute;ponses deviennent accessibles sans vous. Vous r&eacute;cup&eacute;rez <strong>des journ&eacute;es enti&egrave;res</strong>, et la capacit&eacute; de dire oui.</p>
      <button class="cta" data-origine="questions">R&eacute;cup&eacute;rer mes journ&eacute;es</button>
    </div>
  </article>
  <div class="points" aria-hidden="true"><span class="point"></span><span class="point"></span><span class="point"></span></div>
</div></div></div>

  <section class="section-form revele" id="contact">
    <div class="conteneur">
      <h2>Premier pas&#8239;: un appel de 30 minutes.</h2>
      <p style="margin:16px 0 0;font-size:16px;line-height:1.55;color:var(--corps)">Vous repartez avec une vue claire de ce qui vous fait perdre du temps, et de ce que &ccedil;a rapporterait de le r&eacute;cup&eacute;rer.</p>
      <form id="form-final" novalidate>
        <div class="champ-groupe">
          <label for="f-nom">Votre nom</label>
          <input id="f-nom" name="name" type="text" autocomplete="name" required>
          <span class="erreur-msg">Indiquez votre nom.</span>
        </div>
        <div class="champ-groupe">
          <label for="f-tel">Votre num&eacute;ro de t&eacute;l&eacute;phone</label>
          <input id="f-tel" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="079 &hellip;" required>
          <span class="erreur-msg">Un num&eacute;ro suisse valide, c&rsquo;est lui qu&rsquo;on appelle&#8239;: +41 79 123 45 67 ou 079 123 45 67.</span>
        </div>
        <div class="champ-groupe">
          <label for="f-mail">Votre e-mail</label>
          <input id="f-mail" name="email" type="email" autocomplete="email" required>
          <span class="erreur-msg">Indiquez un e-mail valide.</span>
        </div>
        <div class="champ-groupe">
          <label for="f-taille">Combien de personnes travaillent dans votre entreprise&#8239;?</label>
          <select id="f-taille" name="team" required>
            <option value="">Choisissez</option>
            <option value="1-4">1 &agrave; 4</option>
            <option value="5-20">5 &agrave; 20</option>
            <option value="21-50">21 &agrave; 50</option>
            <option value="50+">Plus de 50</option>
          </select>
          <span class="erreur-msg">Indiquez la taille de votre entreprise.</span>
        </div>
        <div class="champ-groupe">
          <label for="f-pain">Qu&rsquo;est-ce qui vous fait perdre le plus de temps&#8239;?</label>
          <select id="f-pain" name="pain">
            <option value="copier-coller">Mes &eacute;quipes ressaisissent les m&ecirc;mes donn&eacute;es</option>
            <option value="tete">Tout est dans ma t&ecirc;te</option>
            <option value="questions">Tout passe par moi</option>
            <option value="autre">Autre chose</option>
          </select>
        </div>
        <div class="champ-groupe autre-groupe" hidden>
          <label for="f-autre">Pr&eacute;cisez en quelques mots</label>
          <input id="f-autre" name="pain_detail" type="text" maxlength="200">
        </div>
        <input type="hidden" name="origin" value="footer-form">
        <input type="text" name="mawt_hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;width:0;border:0;padding:0">
        <button type="submit" class="cta">R&eacute;server l&rsquo;appel</button>
        <span class="micro">On vous appelle sous 24&#8239;h ouvr&eacute;es, depuis un num&eacute;ro suisse.</span>
      </form>
      <div class="succes"><p>Merci. On vous appelle sous 24&#8239;h ouvr&eacute;es, depuis un num&eacute;ro suisse.</p><p class="succes-ou">Vous voulez choisir le moment&#8239;?</p><a class="cta cal-lien" href="https://cal.com/rdv-mawt/appel" target="_blank" rel="noopener">Choisir mon cr&eacute;neau maintenant</a></div>
    </div>
  </section>
</main>

<footer>
  <div class="conteneur">
    <img class="logo" src="/500-chf-assets/mawt-logo.svg" alt="M&amp;WT" style="height:18px">
    <div class="liens">
      <a href="https://mawt.ch/fr/legal">Mentions l&eacute;gales</a>
      <a href="https://mawt.ch/fr/cookies">Confidentialit&eacute;</a>
    </div>
  </div>
</footer>

<div class="barre" id="barre" aria-hidden="true">
  <div class="conteneur">
    <span>&minus;&#8239;500&#8239;CHF / employ&eacute; / semaine, sans le voir</span>
    <button data-origine="barre">R&eacute;server l&rsquo;appel</button>
  </div>
</div>

<div class="voile" id="voile"></div>
<div class="feuille" id="feuille" role="dialog" aria-modal="true" aria-labelledby="feuille-h">
  <div class="poignee" aria-hidden="true"></div>
  <div class="feuille-titre">
    <h3 id="feuille-h">R&eacute;server l&rsquo;appel</h3>
    <button class="fermer" id="fermer" aria-label="Fermer">&times;</button>
  </div>
  <form id="form-popup" novalidate>
    <div class="champ-groupe">
      <label for="p-nom">Votre nom</label>
      <input id="p-nom" name="name" type="text" autocomplete="name" required>
      <span class="erreur-msg">Indiquez votre nom.</span>
    </div>
    <div class="champ-groupe">
      <label for="p-tel">Votre num&eacute;ro de t&eacute;l&eacute;phone</label>
      <input id="p-tel" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="079 &hellip;" required>
      <span class="erreur-msg">Un num&eacute;ro suisse valide, c&rsquo;est lui qu&rsquo;on appelle&#8239;: +41 79 123 45 67 ou 079 123 45 67.</span>
    </div>
    <div class="champ-groupe">
      <label for="p-mail">Votre e-mail</label>
      <input id="p-mail" name="email" type="email" autocomplete="email" required>
      <span class="erreur-msg">Indiquez un e-mail valide.</span>
    </div>
    <div class="champ-groupe">
      <label for="p-taille">Combien de personnes travaillent dans votre entreprise&#8239;?</label>
      <select id="p-taille" name="team" required>
        <option value="">Choisissez</option>
        <option value="1-4">1 &agrave; 4</option>
        <option value="5-20">5 &agrave; 20</option>
        <option value="21-50">21 &agrave; 50</option>
        <option value="50+">Plus de 50</option>
      </select>
      <span class="erreur-msg">Indiquez la taille de votre entreprise.</span>
    </div>
    <div class="champ-groupe">
      <label for="p-pain">Qu&rsquo;est-ce qui vous fait perdre le plus de temps&#8239;?</label>
      <select id="p-pain" name="pain">
        <option value="copier-coller">Mes &eacute;quipes ressaisissent les m&ecirc;mes donn&eacute;es</option>
        <option value="tete">Tout est dans ma t&ecirc;te</option>
        <option value="questions">Tout passe par moi</option>
        <option value="autre">Autre chose</option>
      </select>
      <span class="indice-origine" id="indice-origine" hidden>Pr&eacute;s&eacute;lectionn&eacute; selon le bouton cliqu&eacute;</span>
    </div>
    <div class="champ-groupe autre-groupe" hidden>
      <label for="p-autre">Pr&eacute;cisez en quelques mots</label>
      <input id="p-autre" name="pain_detail" type="text" maxlength="200">
    </div>
    <input type="hidden" name="origin" id="p-origine" value="">
    <input type="text" name="mawt_hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;width:0;border:0;padding:0">
    <button type="submit" class="cta">R&eacute;server l&rsquo;appel</button>
    <span class="micro">On vous appelle sous 24&#8239;h ouvr&eacute;es, depuis un num&eacute;ro suisse.</span>
  </form>
  <div class="succes"><p>Merci. On vous appelle sous 24&#8239;h ouvr&eacute;es, depuis un num&eacute;ro suisse.</p><p class="succes-ou">Vous voulez choisir le moment&#8239;?</p><a class="cta cal-lien" href="https://cal.com/rdv-mawt/appel" target="_blank" rel="noopener">Choisir mon cr&eacute;neau maintenant</a></div>
</div>

<script>
(function(){
  "use strict";

  /* Apparition au scroll, une seule fois par section */
  var reveles = document.querySelectorAll(".revele");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    reveles.forEach(function(el){ obs.observe(el); });
  } else {
    reveles.forEach(function(el){ el.classList.add("visible"); });
  }

  /* Barre collante : apparait apres le hero */
  var barre = document.getElementById("barre");
  var hero = document.getElementById("hero");
  var obsBarre = new IntersectionObserver(function(entries){
    var horsChamp = !entries[0].isIntersecting;
    barre.classList.toggle("visible", horsChamp);
    barre.setAttribute("aria-hidden", String(!horsChamp));
  }, { threshold: 0 });
  obsBarre.observe(hero);

  /* Carrousel fondu pilote par le defilement */
  var espace = document.querySelector(".defile-espace");
  var diapos = Array.prototype.slice.call(document.querySelectorAll(".diapo"));
  var points = Array.prototype.slice.call(document.querySelectorAll(".point"));
  var reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    && window.location.search.indexOf("anim=1") === -1;
  if (reduit || !espace) {
    document.documentElement.classList.add("sans-defile");
  } else {
    var attente = false;
    var hautEspace = 0, topEspace = 0, totalEspace = 0;
    var dernieresOpacites = [], dernierPoint = -1;
    var mesurer = function(){
      /* Lectures de mise en page groupees, hors de la boucle de defilement */
      var r = espace.getBoundingClientRect();
      topEspace = r.top + (window.scrollY || window.pageYOffset || 0);
      hautEspace = espace.offsetHeight;
      totalEspace = hautEspace - window.innerHeight;
    };
    var majDefile = function(){
      attente = false;
      var y = window.scrollY || window.pageYOffset || 0;
      var brut = Math.min(Math.max(y - topEspace, 0), totalEspace);
      var idx = totalEspace > 0 ? (brut / totalEspace) * (diapos.length - 1) : 0;
      for (var i = 0; i < diapos.length; i++) {
        var d = diapos[i];
        var e = idx - i;
        /* Fenetres d'opacite disjointes : une diapo disparait completement avant que la suivante apparaisse */
        var o = Math.max(0, Math.min(1, (0.45 - Math.abs(e)) / 0.33));
        var oArrondi = Math.round(o * 100) / 100;
        if (dernieresOpacites[i] !== oArrondi) {
          dernieresOpacites[i] = oArrondi;
          d.style.opacity = oArrondi;
          d.style.transform = "translate3d(0," + Math.round(e * -36) + "px,0)";
          d.classList.toggle("active", oArrondi > 0.5);
        }
      }
      var pointActif = Math.round(idx);
      if (pointActif !== dernierPoint) {
        dernierPoint = pointActif;
        for (var j = 0; j < points.length; j++) { points[j].classList.toggle("actif", j === pointActif); }
      }
    };
    var demande = function(){ if (!attente) { attente = true; requestAnimationFrame(majDefile); } };
    mesurer();
    window.addEventListener("scroll", demande, { passive: true });
    window.addEventListener("resize", function(){ mesurer(); demande(); }, { passive: true });
    window.addEventListener("orientationchange", function(){ setTimeout(function(){ mesurer(); demande(); }, 200); });
    majDefile();
  }

  /* Popup */
  var voile = document.getElementById("voile");
  var feuille = document.getElementById("feuille");
  var champOrigine = document.getElementById("p-origine");
  function majAutre(form){
    var sel = form.querySelector('select[name="pain"]');
    var grp = form.querySelector(".autre-groupe");
    if (sel && grp) { grp.hidden = sel.value !== "autre"; }
  }
  document.querySelectorAll("form").forEach(function(f){
    var sel = f.querySelector('select[name="pain"]');
    if (sel) { sel.addEventListener("change", function(){ majAutre(f); }); }
  });
  var posScrollAvant = 0;
  var selectPain = document.getElementById("p-pain");
  var indice = document.getElementById("indice-origine");
  var dernierFocus = null;

  function ouvrir(origine){
    dernierFocus = document.activeElement;
    champOrigine.value = origine;
    var mappe = ["copier-coller","tete","questions"].indexOf(origine) !== -1;
    if (mappe) { selectPain.value = origine; }
    majAutre(document.getElementById("form-popup"));
    indice.hidden = !mappe;
    voile.classList.add("ouvert");
    feuille.classList.add("ouvert");
    posScrollAvant = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = "fixed";
    document.body.style.top = (-posScrollAvant) + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.getElementById("p-nom").focus();
    /* Tracking : cta_click + popup_open partent ici (GA4 + pixel) */
  }
  function fermer(){
    voile.classList.remove("ouvert");
    feuille.classList.remove("ouvert");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, posScrollAvant);
    if (dernierFocus) { dernierFocus.focus(); }
  }

  document.querySelectorAll("[data-origine]").forEach(function(btn){
    btn.addEventListener("click", function(){
      var o = btn.getAttribute("data-origine");
      suivre("cta_click", { origin: o });
      ouvrir(o);
    });
  });
  document.getElementById("fermer").addEventListener("click", fermer);
  voile.addEventListener("click", fermer);
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && feuille.classList.contains("ouvert")) { fermer(); }
  });

  /* Piege de focus dans le popup */
  feuille.addEventListener("keydown", function(e){
    if (e.key !== "Tab") return;
    var focusables = feuille.querySelectorAll("button, input, select");
    var premier = focusables[0], dernier = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === premier) { e.preventDefault(); dernier.focus(); }
    else if (!e.shiftKey && document.activeElement === dernier) { e.preventDefault(); premier.focus(); }
  });

  /* Validation et faux envoi (le vrai envoi = action serveur Next.js) */
  function brancher(form, conteneur){
  var calPret = false;
  function chargerCal(){
    if (calPret) return;
    calPret = true;
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", { origin: "https://app.cal.com" });
    Cal("ui", { theme: "light", cssVarsPerTheme: { light: { "cal-brand": "#1E9E72" } }, hideEventTypeDetails: false });
  }
  function majCal(form, conteneur){
    var lien = conteneur.querySelector(".cal-lien");
    if (!lien) return;
    var d = new FormData(form);
    lien.dataset.nom = d.get("name") || "";
    lien.dataset.mail = d.get("email") || "";
    lien.href = "https://cal.com/rdv-mawt/appel?name=" + encodeURIComponent(lien.dataset.nom)
      + "&email=" + encodeURIComponent(lien.dataset.mail);
    chargerCal();
  }
  document.addEventListener("click", function(e){
    var a = e.target.closest(".cal-lien");
    if (!a || !window.Cal) return;
    e.preventDefault();
    suivre("cal_open", {});
    Cal("modal", { calLink: "rdv-mawt/appel", config: { name: a.dataset.nom || "", email: a.dataset.mail || "" } });
  });
  function alertErreur(form, msg){
    var e = form.querySelector(".erreur-envoi");
    if (!e) {
      e = document.createElement("p");
      e.className = "erreur-envoi";
      e.style.cssText = "color:#B4423A;font-size:14px;font-weight:600;margin:10px 0 0";
      form.appendChild(e);
    }
    e.textContent = msg || "L'envoi a échoué. Réessayez, ou appelez-nous directement.";
  }
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var ok = true;
      form.querySelectorAll(".champ-groupe").forEach(function(g){
        var input = g.querySelector("input[required], select[required]");
        if (!input) return;
        var vide = !input.value.trim();
        var num = input.value.replace(/[\\s.\\-()]/g, "");
        var telInvalide = input.type === "tel" && !(/^\\+41[1-9]\\d{8}$/.test(num) || /^0[1-9]\\d{8}$/.test(num));
        var mailInvalide = input.type === "email" && input.value.indexOf("@") === -1;
        var invalide = vide || telInvalide || mailInvalide;
        g.classList.toggle("invalide", invalide);
        if (invalide) ok = false;
      });
      if (!ok) return;
      var bouton = form.querySelector('button[type="submit"]');
      var reel = location.hostname.indexOf("mawt.ch") !== -1;
      if (!reel) { majCal(form, conteneur); conteneur.classList.add("envoye"); return; }
      bouton.disabled = true;
      var donnees = {};
      new FormData(form).forEach(function(v, k){ donnees[k] = v; });
      fetch("/api/landing-500", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donnees)
      }).then(function(r){ return r.json(); }).then(function(rep){
        if (rep && rep.success) { majCal(form, conteneur); conteneur.classList.add("envoye");
          suivre("form_submit", { origin: donnees.origin || "", pain: donnees.pain || "" });
          if (window.fbq) { fbq("track", "Lead", { content_name: donnees.origin || "landing-500" }); }
        }
        else { alertErreur(form, rep && rep.error); bouton.disabled = false; }
      }).catch(function(){ alertErreur(form, null); bouton.disabled = false; });
    });
  }
  brancher(document.getElementById("form-popup"), feuille);
  var sectionForm = document.getElementById("form-final").parentElement.parentElement;
  brancher(document.getElementById("form-final"), sectionForm);
})();
</script>
</body>
</html>
`;

export default landingHtml;

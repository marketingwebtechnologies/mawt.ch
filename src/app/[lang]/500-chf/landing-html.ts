// Generated from mawt-microtest/creas/landing/landing-500.html - do not edit by hand.
// Regenerate via the microtest project when the prototype changes.
const landingHtml = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Perdu avec l'IA ? Posez-nous vos questions · M&WT</title>
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

  /* Accroche et réassurance (page courte) */
  .accroche{margin:20px 0 0;font-size:20px;line-height:1.4;font-weight:600;color:var(--encre)}
  .rassure{padding:28px 0 8px;border-top:1px solid var(--filet)}
  .rassure ul{list-style:none;margin:0;padding:0;display:grid;gap:14px}
  .rassure li{position:relative;padding-left:30px;font-size:16px;line-height:1.5;color:var(--corps)}
  .rassure li::before{content:"";position:absolute;left:0;top:7px;width:16px;height:16px;border-radius:50%;background:var(--mint)}
  .rassure li strong{color:var(--encre)}
  @media (min-width:700px){
    .accroche{font-size:26px;max-width:720px}
    .rassure{padding:48px 0 16px}
    .rassure ul{grid-template-columns:repeat(3,1fr);gap:28px}
    .rassure li{font-size:17px}
  }

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
  .refus{display:none;padding:32px 0;text-align:center}
  .refus p{font-size:17px;line-height:1.5;font-weight:600;margin:0}
  .feuille.refuse form,.section-form.refuse form{display:none}
  .feuille.refuse .refus,.section-form.refuse .refus{display:block}
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
    <h1 id="accroche-titre">Perdu avec l&rsquo;IA&#8239;?</h1>
    <p class="accroche" id="accroche-texte">Vous voulez enfin profiter de vos proches et arr&ecirc;ter de travailler le soir ou le week-end&#8239;?</p>
    <p class="promesse">Posez-nous vos questions. 30&#8239;minutes au t&eacute;l&eacute;phone, gratuites.</p>
    <button class="cta" data-origine="hero">Poser mes questions</button>
    <span class="micro">On vous rappelle sous 24&#8239;h ouvr&eacute;es, depuis un num&eacute;ro suisse.</span>
  </section>

  <section class="rassure" id="rassure">
    <div class="conteneur">
      <ul>
        <li><strong>Un vrai &eacute;change</strong> avec quelqu&rsquo;un qui l&rsquo;a d&eacute;j&agrave; fait pour des entreprises romandes.</li>
        <li><strong>Des r&eacute;ponses pour votre cas</strong>, pas un argumentaire&#8239;: ce qui marche, ce qui ne sert &agrave; rien, par o&ugrave; commencer.</li>
        <li><strong>Rien &agrave; pr&eacute;parer</strong>, rien &agrave; installer, aucun engagement.</li>
      </ul>
    </div>
  </section>


  <section class="section-form revele" id="contact">
    <div class="conteneur">
      <h2>Posez-nous vos questions.</h2>
      <p style="margin:16px 0 0;font-size:16px;line-height:1.55;color:var(--corps)">Laissez votre num&eacute;ro, on vous rappelle pour un &eacute;change de 30&#8239;minutes. Vous repartez avec des r&eacute;ponses concr&egrave;tes pour votre entreprise.</p>
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
          <label for="f-role">Laquelle de ces situations vous d&eacute;crit le mieux&#8239;?</label>
          <select id="f-role" name="role" required>
            <option value="">Choisissez</option>
            <option value="dirigeant">Je dirige l&rsquo;entreprise (dirigeant, associ&eacute;, g&eacute;rant)</option>
            <option value="direction">Je fais partie de la direction (op&eacute;rations, finances, administration)</option>
            <option value="salarie">Je suis salari&eacute;(e) dans l&rsquo;entreprise</option>
            <option value="independant">Je suis ind&eacute;pendant(e), sans &eacute;quipe</option>
            <option value="autre">Autre situation</option>
          </select>
          <span class="erreur-msg">Indiquez votre situation.</span>
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
        <input type="hidden" name="utm" value="">
        <input type="text" name="mawt_hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;width:0;border:0;padding:0">
        <button type="submit" class="cta">R&eacute;server l&rsquo;appel</button>
        <span class="micro">On vous appelle sous 24&#8239;h ouvr&eacute;es, depuis un num&eacute;ro suisse.</span>
      </form>
      <div class="succes"><p>Merci. On vous appelle sous 24&#8239;h ouvr&eacute;es, depuis un num&eacute;ro suisse.</p><p class="succes-ou">Vous voulez choisir le moment&#8239;?</p><a class="cta cal-lien" href="https://cal.com/rdv-mawt/appel" target="_blank" rel="noopener">Choisir mon cr&eacute;neau maintenant</a></div><div class="refus"><p>Merci pour votre demande.</p><p class="succes-ou">Cet appel s&rsquo;adresse aux personnes qui dirigent une entreprise ou une &eacute;quipe. Nous gardons vos coordonn&eacute;es et revenons vers vous si nous pouvons vous aider.</p></div>
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
    <span>30&#8239;minutes au t&eacute;l&eacute;phone, gratuites</span>
    <button data-origine="barre">Poser mes questions</button>
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
      <label for="p-role">Laquelle de ces situations vous d&eacute;crit le mieux&#8239;?</label>
      <select id="p-role" name="role" required>
        <option value="">Choisissez</option>
        <option value="dirigeant">Je dirige l&rsquo;entreprise (dirigeant, associ&eacute;, g&eacute;rant)</option>
        <option value="direction">Je fais partie de la direction (op&eacute;rations, finances, administration)</option>
        <option value="salarie">Je suis salari&eacute;(e) dans l&rsquo;entreprise</option>
        <option value="independant">Je suis ind&eacute;pendant(e), sans &eacute;quipe</option>
        <option value="autre">Autre situation</option>
      </select>
      <span class="erreur-msg">Indiquez votre situation.</span>
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
    <input type="hidden" name="utm" value="">
    <input type="text" name="mawt_hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;width:0;border:0;padding:0">
    <button type="submit" class="cta">R&eacute;server l&rsquo;appel</button>
    <span class="micro">On vous appelle sous 24&#8239;h ouvr&eacute;es, depuis un num&eacute;ro suisse.</span>
  </form>
  <div class="succes"><p>Merci. On vous appelle sous 24&#8239;h ouvr&eacute;es, depuis un num&eacute;ro suisse.</p><p class="succes-ou">Vous voulez choisir le moment&#8239;?</p><a class="cta cal-lien" href="https://cal.com/rdv-mawt/appel" target="_blank" rel="noopener">Choisir mon cr&eacute;neau maintenant</a></div><div class="refus"><p>Merci pour votre demande.</p><p class="succes-ou">Cet appel s&rsquo;adresse aux personnes qui dirigent une entreprise ou une &eacute;quipe. Nous gardons vos coordonn&eacute;es et revenons vers vous si nous pouvons vous aider.</p></div>
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
  /* Même accroche pour tout le monde (décision 15.10 : « reste sur Perdu avec l'IA »).
     Seul le menu « ce qui vous prend du temps » est présélectionné pour la pub ressaisie (v6). */
  (function(){
    var c = (new URLSearchParams(location.search).get("utm_content") || "").toLowerCase();
    if (c.slice(0, 2) === "v6") { document.querySelectorAll("select[name=pain]").forEach(function(sel){ sel.value = "copier-coller"; sel.dispatchEvent(new Event("change")); }); }
  })();
  /* UTM et identifiant de pub, pour relier chaque lead à la pub qui l'a produite (comme questions-ia) */
  (function(){
    var p = new URLSearchParams(location.search), out = [];
    ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","fbclid","ad_id","adset_id","campaign_id"].forEach(function(k){
      var v = p.get(k); if (v) out.push(k + "=" + v.slice(0, 80));
    });
    var val = out.join("&");
    document.querySelectorAll("input[name=utm]").forEach(function(i){ i.value = val; });
  })();
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
  /* Envoi de secours : si l'API du site ne répond pas, la réponse part directement
     vers la feuille Google (Apps Script), hors Vercel. Retourne true si le navigateur
     a accepté l'envoi. */
  var URL_SECOURS = "__LEADS_BACKUP_URL__";
  function envoiSecours(donnees, page, erreur){
    if (!URL_SECOURS || URL_SECOURS.indexOf("http") !== 0) return false;
    var corps = JSON.stringify(Object.assign({ source: "navigateur-secours", page: page, erreur: String(erreur || ""), horodatage: new Date().toISOString(), url: location.href }, donnees));
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(URL_SECOURS, new Blob([corps], { type: "text/plain;charset=utf-8" }))) return true;
      fetch(URL_SECOURS, { method: "POST", mode: "no-cors", keepalive: true, headers: { "Content-Type": "text/plain;charset=utf-8" }, body: corps });
      return true;
    } catch (e) { return false; }
  }
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
      var donnees = {};
      new FormData(form).forEach(function(v, k){ donnees[k] = v; });
      // Shared with the server copy sent to the Conversions API, so Meta counts the lead once.
      donnees.event_id = "l5-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
      // Only decision makers count as a lead: the others are stored but never
      // fire the pixel Lead event, so Meta stops optimising toward them.
      var qualifie = donnees.role === "dirigeant" || donnees.role === "direction";
      function terminer(){
        if (qualifie) { majCal(form, conteneur); conteneur.classList.add("envoye"); }
        else { conteneur.classList.add("refuse"); }
      }
      if (!reel) { terminer(); return; }
      bouton.disabled = true;
      fetch("/api/landing-500", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donnees)
      }).then(function(r){ return r.json(); }).then(function(rep){
        if (rep && rep.success) { terminer();
          suivre("form_submit", { origin: donnees.origin || "", pain: donnees.pain || "", role: donnees.role || "" });
          if (window.fbq) {
            if (qualifie) { fbq("track", "Lead", { content_name: donnees.origin || "landing-500" }, { eventID: donnees.event_id }); }
            else { fbq("trackCustom", "LeadNonQualifie", { role: donnees.role || "" }, { eventID: donnees.event_id }); }
          }
        }
        else if (envoiSecours(donnees, "500-chf", rep && rep.error)) { terminer(); }
        else { alertErreur(form, rep && rep.error); bouton.disabled = false; }
      }).catch(function(err){
        if (envoiSecours(donnees, "500-chf", err)) { terminer(); }
        else { alertErreur(form, null); bouton.disabled = false; }
      });
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

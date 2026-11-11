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
  /* 04.11 : contact visible en bas de chaque landing (e-mail, numéro, adresse cliquables) */
  footer .conteneur{flex-wrap:wrap}
  .contact-mawt{font-style:normal;display:flex;flex-direction:column;gap:6px;margin-top:14px;flex-basis:100%;font-size:13px;line-height:1.5}
  .contact-mawt a{color:inherit;text-decoration:underline;text-decoration-color:currentColor;text-decoration-thickness:1px;text-underline-offset:3px;opacity:.85}
  .contact-mawt span{display:block}
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
  /* Premier écran complet (07.11, étude « pages qui convertissent ») : qui, résultat, visuel du travail, bouton, preuve */
  .hero-visuel{margin:24px auto 0;width:100%;max-width:300px}
  .hero-visuel video{width:100%;border-radius:18px;display:block;box-shadow:0 12px 32px rgba(0,43,54,.10)}
  .preuve{margin-top:18px}
  .preuve-chiffre{margin:0;font-size:14px;line-height:1.4;color:var(--corps)}
  .preuve-chiffre strong{color:var(--encre)}
  .logos{margin-top:12px;display:flex;flex-wrap:wrap;align-items:center;gap:12px 24px}
  .logos img{height:20px;width:auto;opacity:.8}
  .logos img.haut{height:30px}
  html[data-miroir="f8"] .hero{padding-top:28px}
  html[data-miroir="f8"] h1{font-size:clamp(34px,9vw,56px)}
  html[data-miroir="f8"] .hero p.accroche{font-size:18px;font-weight:500;color:var(--corps)}
  html[data-miroir="f8"] .hero .promesse{display:none}
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
  /* 09.11 : avant / après et bloc surprise */
  .avant-apres{margin-top:22px;display:grid;gap:12px}
  .avant-apres > div{border:1px solid var(--filet);border-radius:12px;padding:16px 18px;background:#FFFFFF}
  .avant-apres span{display:block;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--gris)}
  .avant-apres .apres{border-color:var(--mint)}
  .avant-apres .apres span{color:var(--mint-fonce)}
  .avant-apres p{margin:8px 0 0;font-size:15px;line-height:1.5}
  .douleur .cta{margin-top:24px}
  /* 09.11 : deux photos avant / après, bulles animées sur la seconde (mots d'Andrew) */
  .duo{margin-top:24px;display:grid;gap:22px}
  .photo{position:relative;margin:0}
  .photo img{display:block;width:100%;height:auto;aspect-ratio:3/2;object-fit:cover;border-radius:14px}
  .photo figcaption{margin-top:10px;font-size:14px;font-weight:600;color:var(--gris)}
  .photo.apres figcaption{color:var(--mint-fonce)}
  /* 09.11 : panneau ChatGPT, même design que la démo de la vidéo ; la liste des tâches monte ligne après ligne et chaque ligne reçoit sa coche */
  .gpt{position:absolute;right:4%;top:50%;transform:translateY(-50%);width:52%;max-width:300px;background:#fff;border-radius:16px;box-shadow:0 14px 36px rgba(0,20,30,.32);font-family:'Segoe UI',system-ui,sans-serif;color:#0D0D0D;overflow:hidden;pointer-events:none}
  .gpt-tete{display:flex;align-items:center;gap:6px;padding:9px 12px 7px;font-size:12px;font-weight:600}
  .gpt-tete img{width:15px;height:15px}
  .gpt-tete small{font-size:10px;color:#8F8F8F}
  .gpt-fil{height:138px;padding:0 10px 10px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden}
  .gpt-liste{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
  .gpt-liste li{display:flex;align-items:center;gap:8px;padding:6px 8px;border:1.5px solid #E5E5E5;border-radius:11px;background:#fff;font-size:11px;font-weight:600;line-height:1.2;max-height:40px;opacity:0;transform:translateY(10px);transition:opacity .35s ease,transform .35s ease,max-height .4s ease,padding .4s ease,margin .4s ease,border-width .4s ease}
  .gpt-liste li.visible{opacity:1;transform:none}
  .gpt-liste li.sort{max-height:0;padding-top:0;padding-bottom:0;border-width:0;margin-top:-6px;opacity:0;transform:none}
  .gpt-liste b{flex:1;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ic{flex:none;width:22px;height:22px;border-radius:6px;background:#FF5588;color:#fff;font-size:7px;font-weight:700;display:flex;align-items:center;justify-content:center;letter-spacing:.02em}
  .ic.mail{background:#0D0D0D;font-size:12px}
  .vu{flex:none;width:16px;height:16px;border-radius:50%;background:#E5E5E5;position:relative;transform:scale(.6);transition:background .25s ease,transform .3s cubic-bezier(.34,1.56,.64,1)}
  .vu::after{content:"";position:absolute;left:5px;top:2px;width:4px;height:8px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);opacity:0;transition:opacity .2s ease .1s}
  li.fait .vu{background:#19C37D;transform:none}
  li.fait .vu::after{opacity:1}
  .gpt-saisie{display:none}
  @media (prefers-reduced-motion: reduce){.gpt-liste li{transform:none;transition:opacity .35s ease,max-height .4s ease,padding .4s ease,margin .4s ease,border-width .4s ease}.vu{transform:none;transition:background .25s ease}}
  /* 09.11 (Andrew) : les deux photos côte à côte sur ordinateur, sur une largeur élargie pour que le panneau reste lisible ; sur mobile l'une après l'autre */
  @media (min-width:900px){
    .duo{grid-template-columns:1fr 1fr;position:relative;left:50%;transform:translateX(-50%);width:min(1040px, calc(100vw - 96px))}
    .duo .gpt{width:50%}
  }
  #surprise{background:var(--encre);border-top:none}
  #surprise[hidden]{display:none}
  html[data-surprise="1"] #surprise[hidden]{display:block}
  #surprise .kicker{color:var(--mint)}
  #surprise h2{color:#FFFFFF}
  #surprise p{color:#D5E3E0}
  #surprise .capture{display:block;width:calc(100% - 56px);max-width:980px;height:auto;margin:28px auto 0}

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
  /* 03.11 : choix téléphone / visio dans le formulaire */
  .champ-groupe.modes{clear:both;margin-top:10px}
  .champ-groupe[hidden]{display:none !important}
  .modes-choix{display:flex;gap:8px;flex-wrap:wrap}
  .mode{flex:1 1 170px;display:flex;align-items:center;gap:9px;border:1px solid #D8D5CF;border-radius:8px;padding:11px 12px;cursor:pointer;font-weight:600;font-size:15px;line-height:1.3;margin:0}
  .mode input{width:auto;margin:0;flex:none;accent-color:#1E9E72}
  .mode:has(input:checked){border-color:#1E9E72;background:#F1FAF6}
  .opt{font-weight:400;color:#5E7175;font-size:13px}
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
    /* f8 sur ordinateur : texte à gauche, démo à droite, tout dans le premier écran */
    html[data-miroir="f8"] .hero.conteneur{max-width:1120px;min-height:0;display:grid;grid-template-columns:1fr 380px;column-gap:64px;align-items:center;text-align:left;padding:72px 28px 56px}
    html[data-miroir="f8"] .hero > *:not(.hero-visuel){grid-column:1}
    html[data-miroir="f8"] .hero-visuel{grid-column:2;grid-row:1 / span 7;max-width:380px;margin:0}
    html[data-miroir="f8"] h1{font-size:64px}
    html[data-miroir="f8"] .hero p.accroche{font-size:21px}
    html[data-miroir="f8"] .hero .cta{justify-self:start}
    .preuve-chiffre{font-size:15px}
    .logos img{height:24px}
    .logos img.haut{height:36px}
    .douleur{padding:104px 0}
    .douleur .conteneur{max-width:min(640px, calc(100% - 160px))}
    .douleur svg{width:46px;height:46px}
    h2{font-size:40px}
    .douleur p{font-size:18px}
    .douleur .resultat{font-size:21px}
    .douleur .cta{width:auto;padding:17px 44px;font-size:17px}
    .avant-apres{grid-template-columns:1fr 1fr;gap:20px}
    .duo{gap:28px}
    .gpt{width:46%;max-width:none;border-radius:20px}
    .gpt-tete{padding:12px 16px 9px;font-size:14px}
    .gpt-tete img{width:18px;height:18px}
    .gpt-fil{height:176px;padding:0 14px 12px}
    .gpt-liste{gap:8px}
    .gpt-liste li{font-size:13px;padding:8px 10px;border-radius:13px;max-height:48px;gap:10px}
    .gpt-liste li.sort{margin-top:-8px}
    .ic{width:28px;height:28px;border-radius:8px;font-size:8px}
    .ic.mail{font-size:15px}
    .vu{width:18px;height:18px}
    .vu::after{left:6px;top:2px;width:4px;height:9px}
    .gpt-saisie{display:flex;align-items:center;gap:8px;margin:0 14px 14px;padding:8px 10px 8px 14px;border:1.5px solid #E3E3E3;border-radius:999px;font-size:12px;color:#8F8F8F}
    .gpt-saisie span{flex:1}
    .gpt-saisie i{width:22px;height:22px;border-radius:50%;background:#0D0D0D;color:#fff;font-style:normal;font-size:13px;display:flex;align-items:center;justify-content:center}
    .avant-apres p{font-size:16px}
    #surprise .capture{margin-top:40px}
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
        var corps = { page: "500-chf", utm: location.search.slice(1, 600), ref: document.referrer.slice(0, 200), clarity_u: (m && m.userId) || "", clarity_s: (m && m.sessionId) || "", trace: window.__trace || "" };
        try { fetch("/api/arrivee", { method: "POST", keepalive: true, headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(corps) }); } catch (e) {}
      };
      try { clarity("metadata", function (m) { envoyer(m); }, false); } catch (e) {}
      setTimeout(function () { envoyer(null); }, 6000);
    })();
  } catch (e) {}
  /* 03.11 : identifiant de visite, pour retrouver l'enregistrement Clarity depuis la feuille et l'e-mail d'alerte */
  try { window.__trace = window.__trace || ("t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6)); clarity("set", "trace", window.__trace); } catch (e) {}
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
    <button class="cta" data-origine="hero">Choisir mon cr&eacute;neau de 30&#8239;min</button>
    <div class="preuve">
      <p class="preuve-chiffre"><strong>Ils nous ont fait confiance&#8239;:</strong> Swixit, fiduciaire &middot; Mellender, immobilier &middot; Crown, club de sport.</p>
      <div class="logos" aria-label="Ils nous ont fait confiance">
        <img src="/google-landing-assets/swixit-logo.png" alt="Swixit" width="114" height="33">
        <img src="/google-landing-assets/mellender-logo.png" alt="Mellender Real Estate" width="120" height="30">
        <img src="/google-landing-assets/crown-logo.svg" alt="Crown Wellness Club" width="74" height="48" class="haut">
      </div>
    </div>
    <div class="hero-visuel">
      <video src="/500-chf-assets/demo-soumission-devis-email.mp4" autoplay muted loop playsinline preload="auto" aria-label="D&eacute;monstration : l'assistant remplit une soumission, pr&eacute;pare un devis et envoie l'e-mail"></video>
    </div>
  </section>
  <script>
  /* Miroir de la pub (31.10) : le haut de page reprend les mots de la pub d'origine (utm_content),
     sans changer le lien de la pub, donc sans réapprentissage côté Meta. Les autres visites gardent le texte par défaut. */
  (function(){
    var c = (new URLSearchParams(location.search).get("utm_content") || "").toLowerCase();
    if (c.slice(0, 2) === "f8" || c.indexOf("surprise") === 0) {
      document.getElementById("accroche-titre").innerHTML = "O&ugrave; perdez-vous une journ&eacute;e par semaine&#8239;?";
      document.querySelector("#hero .kicker").innerHTML = "Soumissions et devis &middot; 30&#8239;min offertes";
      document.getElementById("accroche-texte").innerHTML = "Votre ChatGPT, branch&eacute; sur vos e-mails et vos anciens devis, remplit vos soumissions. Vous validez.";
      if (c.indexOf("surprise") === 0) {
        /* 09.11 : miroir de la vidéo « surprise » (titre de la bande, phrase de la voix, bloc site offert plus bas) */
        document.getElementById("accroche-titre").innerHTML = "Vos soumissions en 1&#8239;min";
        document.querySelector("#hero .kicker").innerHTML = "Patrons de PME romandes &middot; 30&#8239;min offertes";
        document.getElementById("accroche-texte").innerHTML = "Votre ChatGPT lit vos e-mails, cr&eacute;e vos devis et remplit vos soumissions. Vous validez.";
        document.documentElement.setAttribute("data-surprise", "1");
      }
      document.documentElement.setAttribute("data-miroir", "f8");
    }
  })();
  </script>

  <!-- 09.11 : bloc de réassurance retiré à la demande d'Andrew -->
  <!-- 09.11 : le gain personnel du patron, un cas concret par section (mots validés : soumissions, devis, e-mails, soirées) -->
  <section class="douleur revele">
    <div class="conteneur">
      <h2>Fini les soir&eacute;es pass&eacute;es sur l&rsquo;admin.</h2>
      <p>Les soumissions et les devis se font dans la journ&eacute;e, par votre ChatGPT. Vous relisez, vous validez, vous rentrez &agrave; l&rsquo;heure.</p>
      <div class="duo">
        <figure class="photo">
          <img src="/500-chf-assets/cuisine-22h.webp" alt="Un patron seul &agrave; sa table de cuisine &agrave; 22 h, le visage &eacute;clair&eacute; par l&rsquo;&eacute;cran de son ordinateur" width="1440" height="960" loading="lazy">
          <figcaption>22&#8239;h, la soumission pour demain.</figcaption>
        </figure>
        <figure class="photo apres">
          <img src="/500-chf-assets/cuisine-17h30.webp" alt="Le m&ecirc;me patron &agrave; 17&#8239;h&#8239;30, veste &agrave; l&rsquo;&eacute;paule, qui regarde son t&eacute;l&eacute;phone en souriant ; &agrave; c&ocirc;t&eacute; de lui, son ChatGPT liste les t&acirc;ches faites" width="1440" height="960" loading="lazy">
          <div class="gpt" aria-hidden="true">
            <div class="gpt-tete"><img src="/500-chf-assets/chatgpt-logo.svg" alt="" width="18" height="18">ChatGPT <small>&#9662;</small></div>
            <div class="gpt-fil"><ul class="gpt-liste" data-taches="Devis fait|Rapport fait|E-mail r&eacute;pondu|Soumission remplie"></ul></div>
            <div class="gpt-saisie"><span>Poser une question</span><i>&uarr;</i></div>
          </div>
          <figcaption>17&#8239;h&#8239;30, relue et envoy&eacute;e.</figcaption>
        </figure>
      </div>
      <button class="cta" data-origine="soirees">Choisir mon cr&eacute;neau de 30&#8239;min</button>
    </div>
  </section>

  <section class="douleur revele">
    <div class="conteneur">
      <h2>Vos e-mails ne s&rsquo;empilent plus.</h2>
      <p>Il lit vos e-mails, rep&egrave;re les demandes de devis et pr&eacute;pare chaque r&eacute;ponse, devis joint. Vous envoyez.</p>
      <div class="avant-apres">
        <div class="avant"><span>Avant</span><p>Trois demandes de devis dans la bo&icirc;te, trois r&eacute;ponses &agrave; &eacute;crire, et le week-end pour rattraper.</p></div>
        <div class="apres"><span>Apr&egrave;s</span><p>&laquo;&#8239;Quoi de neuf dans mes e-mails&#8239;?&#8239;&raquo; Les trois r&eacute;ponses sont pr&ecirc;tes. Vous validez.</p></div>
      </div>
      <button class="cta" data-origine="emails">Choisir mon cr&eacute;neau de 30&#8239;min</button>
    </div>
  </section>

  <section class="douleur revele">
    <div class="conteneur">
      <h2>Pas de logiciel &agrave; apprendre.</h2>
      <p>Rien &agrave; installer, personne &agrave; former. On branche votre ChatGPT sur vos e-mails et vos anciens devis, et vous continuez de travailler comme aujourd&rsquo;hui.</p>
      <button class="cta" data-origine="logiciel">Choisir mon cr&eacute;neau de 30&#8239;min</button>
    </div>
  </section>

  <section class="douleur revele" id="surprise" hidden>
    <div class="conteneur">
      <span class="kicker">La surprise de la vid&eacute;o</span>
      <h2>Votre site internet offert.</h2>
      <p>Pour tout accompagnement, votre site internet d&rsquo;une valeur de 3&#8239;000&#8239;CHF est offert. Comme celui de Crown Wellness Club, r&eacute;alis&eacute; par MAWT.</p>
    </div>
    <img class="capture" src="/google-landing-assets/crown-site.webp" alt="Page d&rsquo;accueil du site de Crown Wellness Club" width="1440" height="900" loading="lazy">
    <div class="conteneur"><button class="cta" data-origine="surprise">Choisir mon cr&eacute;neau de 30&#8239;min</button></div>
  </section>

  <section class="section-form revele" id="contact">
    <div class="conteneur">
      <h2>Posez-nous vos questions.</h2>
      <p style="margin:16px 0 0;font-size:16px;line-height:1.55;color:var(--corps)">Dites-nous comment vous joindre, puis choisissez votre cr&eacute;neau pour un &eacute;change de 30&#8239;minutes. Vous repartez avec des r&eacute;ponses concr&egrave;tes pour votre entreprise.</p>
      <form id="form-final" novalidate>
        <div class="champ-groupe modes">
          <label>Comment pr&eacute;f&eacute;rez-vous l&rsquo;&eacute;change&#8239;?</label>
          <div class="modes-choix">
            <label class="mode"><input type="radio" name="mode" value="telephone" id="f-mode-tel" checked> Par t&eacute;l&eacute;phone, on vous appelle</label>
            <label class="mode"><input type="radio" name="mode" value="visio" id="f-mode-visio"> En visio, invitation par e-mail</label>
          </div>
        </div>
        <div class="champ-groupe" data-grp="tel">
          <label for="f-tel">Votre num&eacute;ro de t&eacute;l&eacute;phone</label>
          <input id="f-tel" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="079 &hellip;" required>
          <span class="erreur-msg">Un num&eacute;ro suisse valide, c&rsquo;est lui qu&rsquo;on appelle&#8239;: +41 79 123 45 67 ou 079 123 45 67.</span>
        </div>
        <div class="champ-groupe" data-grp="mail">
          <label for="f-mail">Votre e-mail <span class="opt"></span></label>
          <input id="f-mail" name="email" type="email" autocomplete="email">
          <span class="erreur-msg">Indiquez un e-mail valide.</span>
        </div>
        <div class="champ-groupe">
          <label for="f-role">Laquelle de ces situations vous d&eacute;crit le mieux&#8239;?</label>
          <select id="f-role" name="role">
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
          <select id="f-taille" name="team">
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
            <option value="soumissions">Les soumissions et les devis</option>
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
        <span class="micro">Cr&eacute;neau au choix juste apr&egrave;s.</span>
      </form>
      <div class="succes"><p>Merci. Derni&egrave;re &eacute;tape&#8239;: choisissez votre cr&eacute;neau.</p><p class="succes-ou" data-aide-creneau>Vos coordonn&eacute;es sont d&eacute;j&agrave; remplies.</p><a class="cta cal-lien" href="https://cal.com/rdv-mawt/appel-telephone" target="_blank" rel="noopener">Choisir mon cr&eacute;neau maintenant</a></div><div class="refus"><p>Merci pour votre demande.</p><p class="succes-ou">Cet appel s&rsquo;adresse aux personnes qui dirigent une entreprise ou une &eacute;quipe. Nous gardons vos coordonn&eacute;es et revenons vers vous si nous pouvons vous aider.</p></div>
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
    <address class="contact-mawt"><a href="mailto:aa@mawt.ch">aa@mawt.ch</a><a href="tel:+41766363333">+41 76 636 33 33</a><a href="https://www.google.com/maps/search/?api=1&amp;query=MAWT%2C%20Rue%20de%20la%20Fontenette%2023%2C%201227%20Carouge" target="_blank" rel="noopener"><span>Rue de la Fontenette 23</span><span>1227 Carouge (Gen&egrave;ve)</span></a></address>
  </div>
</footer>

<div class="barre" id="barre" aria-hidden="true">
  <div class="conteneur">
    <span>30&#8239;minutes au t&eacute;l&eacute;phone, gratuites</span>
    <button data-origine="barre">Choisir mon cr&eacute;neau</button>
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
    <div class="champ-groupe modes">
          <label>Comment pr&eacute;f&eacute;rez-vous l&rsquo;&eacute;change&#8239;?</label>
          <div class="modes-choix">
            <label class="mode"><input type="radio" name="mode" value="telephone" id="p-mode-tel" checked> Par t&eacute;l&eacute;phone, on vous appelle</label>
            <label class="mode"><input type="radio" name="mode" value="visio" id="p-mode-visio"> En visio, invitation par e-mail</label>
          </div>
        </div>
    <div class="champ-groupe" data-grp="tel">
      <label for="p-tel">Votre num&eacute;ro de t&eacute;l&eacute;phone</label>
      <input id="p-tel" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="079 &hellip;" required>
      <span class="erreur-msg">Un num&eacute;ro suisse valide, c&rsquo;est lui qu&rsquo;on appelle&#8239;: +41 79 123 45 67 ou 079 123 45 67.</span>
    </div>
    <div class="champ-groupe" data-grp="mail">
      <label for="p-mail">Votre e-mail <span class="opt"></span></label>
      <input id="p-mail" name="email" type="email" autocomplete="email">
      <span class="erreur-msg">Indiquez un e-mail valide.</span>
    </div>
    <div class="champ-groupe">
      <label for="p-role">Laquelle de ces situations vous d&eacute;crit le mieux&#8239;?</label>
      <select id="p-role" name="role">
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
      <select id="p-taille" name="team">
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
        <option value="soumissions">Les soumissions et les devis</option>
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
    <span class="micro">Cr&eacute;neau au choix juste apr&egrave;s.</span>
  </form>
  <div class="succes"><p>Merci. Derni&egrave;re &eacute;tape&#8239;: choisissez votre cr&eacute;neau.</p><p class="succes-ou" data-aide-creneau>Vos coordonn&eacute;es sont d&eacute;j&agrave; remplies.</p><a class="cta cal-lien" href="https://cal.com/rdv-mawt/appel-telephone" target="_blank" rel="noopener">Choisir mon cr&eacute;neau maintenant</a></div><div class="refus"><p>Merci pour votre demande.</p><p class="succes-ou">Cet appel s&rsquo;adresse aux personnes qui dirigent une entreprise ou une &eacute;quipe. Nous gardons vos coordonn&eacute;es et revenons vers vous si nous pouvons vous aider.</p></div>
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

  /* 09.11 : panneau ChatGPT de la section « soirées » : la liste des tâches monte ligne après ligne et chaque ligne se coche */
  (function(){
    var ul = document.querySelector(".gpt-liste");
    if (!ul) return;
    var taches = ul.getAttribute("data-taches").split("|");
    var icones = {};
    icones["E-mail répondu"] = ["@", "ic mail"];
    icones["Rapport fait"] = ["DOC", "ic"];
    function ligne(t){
      var li = document.createElement("li");
      var ic = icones[t] || ["PDF", "ic"];
      var s = document.createElement("span"); s.className = ic[1]; s.textContent = ic[0];
      var b = document.createElement("b"); b.textContent = t;
      var v = document.createElement("i"); v.className = "vu";
      li.appendChild(s); li.appendChild(b); li.appendChild(v);
      return li;
    }
    /* Avec « réduire les animations » (réglage Windows ou macOS), la liste défile quand même, en fondu seulement : voir le CSS prefers-reduced-motion. */
    var i = 0, visibles = 3;
    function pas(){
      var li = ligne(taches[i % taches.length]); i++;
      ul.appendChild(li);
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ li.classList.add("visible"); }); });
      setTimeout(function(){ li.classList.add("fait"); }, 750);
      if (ul.children.length > visibles) {
        var premier = ul.children[0];
        premier.classList.add("sort");
        setTimeout(function(){ if (premier.parentNode) premier.parentNode.removeChild(premier); }, 450);
      }
    }
    pas();
    setInterval(pas, 1600);
  })();

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
    var pre = c.slice(0, 2) === "v6" ? "copier-coller" : (c.slice(0, 2) === "f8" || c.indexOf("surprise") === 0) ? "soumissions" : "";
    if (pre) { document.querySelectorAll("select[name=pain]").forEach(function(sel){ sel.value = pre; sel.dispatchEvent(new Event("change")); }); }
  })();
  /* UTM et identifiant de pub, pour relier chaque lead à la pub qui l'a produite (comme questions-ia) */
  (function(){
    var p = new URLSearchParams(location.search), out = [];
    ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","fbclid","ad_id","adset_id","campaign_id"].forEach(function(k){
      var v = p.get(k); if (v) out.push(k + "=" + v.slice(0, /clid$|braid$/.test(k) ? 300 : 80));
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
    var pm = document.querySelector("#form-popup input[name=mode]:checked"); document.getElementById(pm && pm.value === "visio" ? "p-mail" : "p-tel").focus();
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
  /* 03.11 : une seule saisie. Le visiteur dit comment il veut l'échange, et ne donne que ce qui sert :
     téléphone = numéro (e-mail facultatif), visio = e-mail. Plus de nom : Cal le demande une fois.
     Coordonnées gardées 30 jours dans ce navigateur (clé commune mawt-contact) et reprises au retour. */
  function lireContact(){ try { var o = JSON.parse(localStorage.getItem("mawt-contact") || "null"); return (o && o.ts && Date.now() - o.ts < 30 * 86400000) ? o : {}; } catch (e) { return {}; } }
  function sauverContact(form){ try { var c = lireContact(), d = new FormData(form); if (d.get("email")) c.email = String(d.get("email")).trim(); if (d.get("phone")) c.phone = String(d.get("phone")).trim(); c.ts = Date.now(); localStorage.setItem("mawt-contact", JSON.stringify(c)); } catch (e) {} }
  function modeDe(form){ var r = form.querySelector("input[name=mode]:checked"); return r ? r.value : "telephone"; }
  function adapterMode(form){
    var visio = modeDe(form) === "visio";
    var gTel = form.querySelector("[data-grp=tel]"), gMail = form.querySelector("[data-grp=mail]");
    if (gTel) { gTel.hidden = visio; gTel.querySelector("input").required = !visio; if (visio) gTel.classList.remove("invalide"); }
    if (gMail) { gMail.querySelector("input").required = visio; var o = gMail.querySelector(".opt"); if (o) o.textContent = visio ? "" : "(facultatif)"; if (!visio) gMail.classList.remove("invalide"); }
  }
  document.querySelectorAll("form").forEach(function(f){
    var c = lireContact();
    f.querySelectorAll("input[type=tel]").forEach(function(i){ if (c.phone && !i.value) i.value = c.phone; i.addEventListener("change", function(){ sauverContact(f); }); });
    f.querySelectorAll("input[type=email]").forEach(function(i){ if (c.email && !i.value) i.value = c.email; i.addEventListener("change", function(){ sauverContact(f); }); });
    f.querySelectorAll("input[name=mode]").forEach(function(r){ r.addEventListener("change", function(){ adapterMode(f); }); });
    adapterMode(f);
  });

  function brancher(form, conteneur){
  var calPret = false;
  function chargerCal(){
    if (calPret) return;
    calPret = true;
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", { origin: "https://app.cal.com" });
    Cal("ui", { theme: "light", cssVarsPerTheme: { light: { "cal-brand": "#1E9E72" } }, hideEventTypeDetails: false });
    Cal("on", { action: "bookingSuccessful", callback: function(){ if (window.oaiq) { oaiq("measure", "appointment_scheduled", { type: "customer_action" }); } } });
  }
  function majCal(form, conteneur){
    var lien = conteneur.querySelector(".cal-lien");
    if (!lien) return;
    var d = new FormData(form), visio = modeDe(form) === "visio";
    var mail = String(d.get("email") || "").trim();
    var tel = String(d.get("phone") || "").replace(/[\\s.\\-()]/g, "").replace(/^0041/, "+41").replace(/^00/, "+").replace(/^\\+410/, "+41");
    if (/^0[1-9]\\d{8}$/.test(tel)) { tel = "+41" + tel.slice(1); }
    /* Visio : rendez-vous Cal « appel » (confirmation par e-mail, nom déduit de l'adresse, modifiable).
       Téléphone : rendez-vous « appel-telephone » (confirmation par numéro, e-mail masqué). */
    lien.dataset.nom = visio ? (mail.split("@")[0] || "").replace(/[._-]+/g, " ").replace(/\\b\\w/g, function(c){ return c.toUpperCase(); }) : "";
    lien.dataset.mail = mail; lien.dataset.tel = visio ? "" : tel;
    lien.dataset.cal = visio ? "rdv-mawt/appel" : "rdv-mawt/appel-telephone";
    lien.dataset.lieu = visio ? JSON.stringify({ value: "integrations:daily", optionValue: "" }) : "";
    lien.href = "https://cal.com/" + lien.dataset.cal + "?name=" + encodeURIComponent(lien.dataset.nom) + "&email=" + encodeURIComponent(mail)
      + (lien.dataset.lieu ? "&location=" + encodeURIComponent(lien.dataset.lieu) : "") + (lien.dataset.tel ? "&attendeePhoneNumber=" + encodeURIComponent(lien.dataset.tel) : "");
    var aide = conteneur.querySelector("[data-aide-creneau]");
    if (aide) { aide.textContent = visio ? "Votre e-mail est déjà rempli." : "Votre numéro est déjà rempli."; }
    chargerCal();
  }
  document.addEventListener("click", function(e){
    var a = e.target.closest(".cal-lien");
    if (!a || !window.Cal) return;
    e.preventDefault();
    suivre("cal_open", {});
    var cfg = { name: a.dataset.nom || "", email: a.dataset.mail || "", theme: "light" };
    if (a.dataset.lieu) { cfg.location = a.dataset.lieu; }
    if (a.dataset.tel) { cfg.attendeePhoneNumber = a.dataset.tel; }
    Cal("modal", { calLink: a.dataset.cal || "rdv-mawt/appel", config: cfg });
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
    document.querySelectorAll("input[type=email]").forEach(function(i){ i.addEventListener("blur", function(){ envoyer("email", i, "500-chf"); }); });
    document.querySelectorAll("input[type=tel]").forEach(function(i){ i.addEventListener("blur", function(){ envoyer("phone", i, "500-chf"); }); });
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
        var num = input.value.replace(/[\\s.\\-()]/g, "").replace(/^0041/, "+41").replace(/^00/, "+").replace(/^\\+410/, "+41");
        var telInvalide = false; /* téléphone : tout est accepté, seul le vide bloque (17.10) */
        var mailInvalide = false; /* e-mail jamais bloquant (17.10) */
        var invalide = vide || telInvalide || mailInvalide;
        g.classList.toggle("invalide", invalide);
        if (invalide) ok = false;
      });
      if (!ok) { var b = {}; new FormData(form).forEach(function(v, k){ if (k !== "mawt_hp") b[k] = String(v).trim(); }); signalerBlocage(b, "500-chf"); return; }
      var bouton = form.querySelector('button[type="submit"]');
      var reel = location.hostname.indexOf("mawt.ch") !== -1;
      var donnees = {};
      new FormData(form).forEach(function(v, k){ donnees[k] = v; });
      // Shared with the server copy sent to the Conversions API, so Meta counts the lead once.
      donnees.event_id = "l5-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
      // Only decision makers count as a lead: the others are stored but never
      // fire the pixel Lead event, so Meta stops optimising toward them.
      var qualifie = !donnees.role || donnees.role === "dirigeant" || donnees.role === "direction"; /* rôle facultatif depuis le 17.10 : sans réponse, on rappelle */
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
          if (window.oaiq && qualifie) { oaiq("measure", "lead_created", { type: "customer_action" }, { event_id: donnees.event_id }); }
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

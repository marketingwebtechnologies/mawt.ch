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
  .engagement p{margin:14px 0 0;font-size:16px;line-height:1.5;color:var(--corps)}
  .engagement strong{color:var(--encre)}

  /* Écrans de fin */
  .fin h2{font-size:clamp(24px,6.5vw,30px)}
  .fin .recap{margin:18px 0 0;padding:16px 18px;background:#fff;border:1px solid var(--filet);border-radius:10px;font-size:15px;line-height:1.5;color:var(--corps)}
  .fin .recap q{quotes:"« " " »";font-weight:600;color:var(--encre)}
  .fin .succes-ou{margin:18px 0 0;font-size:15px;color:var(--corps)}
  a.cta{text-decoration:none;display:block}
  .erreur-envoi{color:var(--rouge);font-size:14px;font-weight:600;margin:10px 0 0}
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
/* Suivi : GA4 si présent (consentement géré par le site), sinon silence. */
function suivre(evt, params){
  try { if (window.gtag) { gtag("event", evt, params || {}); } } catch(e) {}
}
</script>
</head>
<body>
<header><div class="conteneur"><img class="logo" src="/500-chf-assets/mawt-logo.svg" alt="M&amp;WT"></div></header>

<main>
  <section class="hero" id="hero">
    <div class="conteneur">
      <span class="kicker">Session IA &middot; 30 minutes &middot; totalement gratuit</span>
      <h1>Vos questions sur l&rsquo;IA. On prend 30&nbsp;minutes pour vous.</h1>
      <p>Pas un webinaire, pas un argumentaire. Vous posez vos questions, on prend le temps d&rsquo;y r&eacute;pondre, pour votre situation &agrave; vous.</p>
      <button class="cta" id="ouvrir" data-origine="hero">R&eacute;server mes 30 minutes</button>
      <span class="micro">Totalement gratuit, sans engagement. Deux minutes de questions pour pr&eacute;parer l&rsquo;appel.</span>
    </div>
  </section>
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
      <h2>Afin de pr&eacute;parer notre appel, nous aurions quelques questions.</h2>
      <p class="pourquoi">Deux minutes. Chaque r&eacute;ponse sert &agrave; construire la session autour de vous, pas autour d&rsquo;un expos&eacute; g&eacute;n&eacute;ral.</p>
      <div class="suite"><button type="button" class="cta" data-suivant>Commencer</button><small>Entr&eacute;e &#8629;</small></div>
    </section>

    <!-- 1 profil -->
    <section class="ecran" data-id="profil" data-champ="profil" data-type="unique">
      <span class="num">1</span>
      <h2>Ce qui vous d&eacute;crit le mieux</h2>
      <div class="options">
        <button type="button" class="option" data-valeur="entreprise"><b>A</b>Je dirige une entreprise et je veux savoir comment l&rsquo;IA peut m&rsquo;aider concr&egrave;tement</button>
        <button type="button" class="option" data-valeur="formation"><b>B</b>Je veux me former &agrave; l&rsquo;IA pour mon travail ou pour un projet personnel</button>
      </div>
    </section>

    <!-- ENTREPRISE -->
    <section class="ecran" data-id="taille" data-branche="entreprise" data-champ="taille" data-type="unique">
      <span class="num">2</span>
      <h2>Combien de personnes travaillent dans votre entreprise&#8239;?</h2>
      <div class="options">
        <button type="button" class="option" data-valeur="1-4"><b>A</b>1 &agrave; 4</button>
        <button type="button" class="option" data-valeur="5-20"><b>B</b>5 &agrave; 20</button>
        <button type="button" class="option" data-valeur="21-50"><b>C</b>21 &agrave; 50</button>
        <button type="button" class="option" data-valeur="50+"><b>D</b>Plus de 50</button>
      </div>
    </section>

    <section class="ecran" data-id="secteur" data-branche="entreprise" data-champ="secteur" data-type="unique">
      <span class="num">3</span>
      <h2>Votre secteur</h2>
            <div class="options">
        <button type="button" class="option" data-valeur="services"><b>A</b>Services, conseil, fiduciaire</button>
        <button type="button" class="option" data-valeur="construction"><b>B</b>Construction, artisanat, technique</button>
        <button type="button" class="option" data-valeur="commerce"><b>C</b>Commerce, n&eacute;goce, logistique</button>
        <button type="button" class="option" data-valeur="placement"><b>D</b>Placement, ressources humaines</button>
        <button type="button" class="option" data-valeur="autre"><b>E</b>Autre</button>
      </div>
    </section>


    <section class="ecran" data-id="blocages-e" data-branche="entreprise" data-champ="blocages" data-type="multiple">
      <span class="num">4</span>
      <h2>Ce qui vous a retenu jusqu&rsquo;ici</h2>
      <p class="pourquoi">Plusieurs r&eacute;ponses possibles. Il n&rsquo;y a pas de bonne r&eacute;ponse.</p>
      <div class="options">
        <button type="button" class="option" data-valeur="par-ou-commencer"><b>A</b>Je ne sais pas par o&ugrave; commencer</button>
        <button type="button" class="option" data-valeur="casser"><b>B</b>Peur de casser ce qui marche</button>
        <button type="button" class="option" data-valeur="temps"><b>C</b>Personne chez moi n&rsquo;a le temps</button>
        <button type="button" class="option" data-valeur="deja-essaye"><b>D</b>J&rsquo;ai d&eacute;j&agrave; essay&eacute; un outil, abandonn&eacute;</button>
        <button type="button" class="option" data-valeur="cout"><b>E</b>Le co&ucirc;t</button>
        <button type="button" class="option" data-valeur="confiance"><b>F</b>Je ne fais pas confiance aux r&eacute;sultats</button>
      </div>
      <div class="suite"><button type="button" class="cta" data-suivant disabled>Continuer</button></div>
    </section>


    <section class="ecran" data-id="delai" data-branche="entreprise" data-champ="delai" data-type="unique">
      <span class="num">5</span>
      <h2>Si la session montre un gain net, vous voudriez agir&#8239;:</h2>
      <div class="options">
        <button type="button" class="option" data-valeur="ce-mois"><b>A</b>Ce mois-ci</button>
        <button type="button" class="option" data-valeur="3-mois"><b>B</b>Dans les 3 mois</button>
        <button type="button" class="option" data-valeur="renseigne"><b>C</b>Je me renseigne pour l&rsquo;instant</button>
      </div>
    </section>

    <!-- FORMATION -->
    <section class="ecran" data-id="situation" data-branche="formation" data-champ="situation" data-type="unique">
      <span class="num">2</span>
      <h2>Votre situation aujourd&rsquo;hui</h2>
      <div class="options">
        <button type="button" class="option" data-valeur="dirigeant"><b>A</b>Dirigeant(e) ou chef d&rsquo;&eacute;quipe, je veux me former moi-m&ecirc;me</button>
        <button type="button" class="option" data-valeur="employe"><b>B</b>Employ&eacute;(e), je veux utiliser l&rsquo;IA dans mon travail</button>
        <button type="button" class="option" data-valeur="independant"><b>C</b>Ind&eacute;pendant(e)</button>
        <button type="button" class="option" data-valeur="projet"><b>D</b>En projet de lancement</button>
        <button type="button" class="option" data-valeur="reconversion"><b>E</b>&Eacute;tudiant(e), en reconversion, sans activit&eacute;</button>
      </div>
    </section>

    <section class="ecran" data-id="stade" data-branche="formation" data-champ="stade" data-type="unique">
      <span class="num">3</span>
      <h2>O&ugrave; en &ecirc;tes-vous avec l&rsquo;IA&#8239;?</h2>
      <div class="options">
        <button type="button" class="option" data-valeur="entend-parler"><b>A</b>J&rsquo;en entends beaucoup parler, mais je ne sais pas par o&ugrave; commencer</button>
        <button type="button" class="option" data-valeur="usage-simple"><b>B</b>L&rsquo;IA r&eacute;pond &agrave; mes questions ou corrige mes e-mails, pas plus</button>
        <button type="button" class="option" data-valeur="essaye-sans-suite"><b>C</b>J&rsquo;ai essay&eacute; d&rsquo;aller plus loin, &ccedil;a n&rsquo;a pas pris</button>
        <button type="button" class="option" data-valeur="quotidien"><b>D</b>Je l&rsquo;utilise tous les jours, je veux passer un cap</button>
      </div>
    </section>

    <section class="ecran" data-id="objectif" data-branche="formation" data-champ="objectif" data-type="unique">
      <span class="num">4</span>
      <h2>Ce que vous voulez en faire</h2>
      <div class="options">
        <button type="button" class="option" data-valeur="efficace"><b>A</b>&Ecirc;tre plus efficace dans mon travail</button>
        <button type="button" class="option" data-valeur="activite"><b>B</b>Monter une activit&eacute; ou un projet</button>
        <button type="button" class="option" data-valeur="culture"><b>C</b>Me former, sans projet pr&eacute;cis pour l&rsquo;instant</button>
      </div>
    </section>

    <section class="ecran" data-id="blocages-f" data-branche="formation" data-champ="blocages" data-type="multiple">
      <span class="num">5</span>
      <h2>Vos principaux blocages aujourd&rsquo;hui</h2>
      <p class="pourquoi">Plusieurs r&eacute;ponses possibles.</p>
      <div class="options">
        <button type="button" class="option" data-valeur="par-ou-commencer"><b>A</b>Je ne sais pas par o&ugrave; commencer</button>
        <button type="button" class="option" data-valeur="technique"><b>B</b>La partie technique m&rsquo;intimide</button>
        <button type="button" class="option" data-valeur="pour-moi"><b>C</b>Je ne sais pas si c&rsquo;est fait pour moi</button>
        <button type="button" class="option" data-valeur="temps"><b>D</b>Le temps</button>
        <button type="button" class="option" data-valeur="outils"><b>E</b>Trop d&rsquo;outils, je ne sais pas lesquels</button>
      </div>
      <div class="suite"><button type="button" class="cta" data-suivant disabled>Continuer</button></div>
    </section>


    <section class="ecran" data-id="investir" data-branche="formation" data-champ="investir" data-type="unique">
      <span class="num">6</span>
      <h2>Si la session vous donne un plan clair, seriez-vous pr&ecirc;t(e) &agrave; investir dans une formation&#8239;?</h2>
      <div class="options">
        <button type="button" class="option" data-valeur="oui"><b>A</b>Oui, si &ccedil;a correspond &agrave; mon besoin</button>
        <button type="button" class="option" data-valeur="oui-questions"><b>B</b>Oui, mais j&rsquo;aurai des questions</button>
        <button type="button" class="option" data-valeur="savoir-plus"><b>C</b>Je dois en savoir plus avant de me positionner</button>
        <button type="button" class="option" data-valeur="non"><b>D</b>Non, pas du tout</button>
      </div>
    </section>

    <section class="ecran" data-id="budget" data-branche="formation" data-champ="budget" data-type="unique">
      <span class="num">7</span>
      <h2>Le budget que vous pourriez mobiliser</h2>
      <p class="pourquoi">Il n&rsquo;y a pas de bonne r&eacute;ponse. &Ccedil;a nous aide &agrave; vous conseiller les bonnes options pendant la session.</p>
      <div class="options">
        <button type="button" class="option" data-valeur="<500"><b>A</b>Moins de 500 CHF</button>
        <button type="button" class="option" data-valeur="500-1500"><b>B</b>Entre 500 et 1&#8239;500 CHF</button>
        <button type="button" class="option" data-valeur="1500-3000"><b>C</b>Entre 1&#8239;500 et 3&#8239;000 CHF</button>
        <button type="button" class="option" data-valeur=">3000"><b>D</b>Plus de 3&#8239;000 CHF</button>
        <button type="button" class="option" data-valeur="inconnu"><b>E</b>Je ne sais pas encore</button>
      </div>
    </section>

    <!-- COMMUN -->
    <section class="ecran" data-id="coordonnees" data-type="coordonnees">
      <span class="num" data-num-e="6" data-num-f="8">6</span>
      <h2>O&ugrave; vous joindre pour la session</h2>
      <div class="champ-groupe"><label for="c-nom">Votre nom</label><input id="c-nom" name="name" type="text" autocomplete="name" required><span class="erreur-msg">Indiquez votre nom.</span></div>
      <div class="champ-groupe"><label for="c-mail">Votre e-mail <span class="mail-pro-indice" hidden>professionnel</span></label><input id="c-mail" name="email" type="email" autocomplete="email" inputmode="email" required><span class="erreur-msg" data-msg-generique="Indiquez un e-mail valide." data-msg-pro="Pour une entreprise, indiquez l&rsquo;adresse de votre soci&eacute;t&eacute;, pas une adresse personnelle.">Indiquez un e-mail valide.</span></div>
      <div class="champ-groupe"><label for="c-tel">Votre num&eacute;ro de t&eacute;l&eacute;phone</label><input id="c-tel" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="079 &hellip;" required><span class="erreur-msg">Un num&eacute;ro suisse valide, c&rsquo;est lui qu&rsquo;on appelle&#8239;: +41 79 123 45 67 ou 079 123 45 67.</span></div>
      <div class="suite"><button type="button" class="cta" data-suivant>OK</button></div>
    </section>

    <section class="ecran engagement" data-id="engagement" data-champ="engagement" data-type="unique">
      <span class="num" data-num-e="7" data-num-f="9">7</span>
      <h2>Derni&egrave;re chose, et c&rsquo;est important.</h2>
      <p>La session est un vrai cr&eacute;neau, tenu par l&rsquo;un de nous, pas un appel de masse. Elle est <strong>nominative, unique, et ne peut pas &ecirc;tre reprogramm&eacute;e</strong>.</p>
      <p>Une absence non pr&eacute;venue&#8239;: <strong>plus aucun appel possible avec nous, d&eacute;finitivement</strong>.</p>
      <p>Vous confirmez que vous serez pr&eacute;sent(e) au cr&eacute;neau que vous allez r&eacute;server&#8239;?</p>
      <div class="options">
        <button type="button" class="option" data-valeur="oui"><b>A</b>Oui, je m&rsquo;engage &agrave; &ecirc;tre pr&eacute;sent(e)</button>
        <button type="button" class="option" data-valeur="non"><b>B</b>Non, ce n&rsquo;est pas le bon moment pour moi</button>
      </div>
    </section>

    <!-- FINS -->
    <section class="ecran fin" data-id="fin-creneau">
      <h2>Merci. Voici ce qu&rsquo;on a retenu&#8239;:</h2>
      <div class="recap" id="recap"></div>
      <p class="succes-ou">Choisissez votre cr&eacute;neau maintenant, pendant que c&rsquo;est frais. Vous recevrez un rappel la veille.</p>
      <a class="cta cal-lien" href="https://cal.com/rdv-mawt/appel" target="_blank" rel="noopener">Choisir mon cr&eacute;neau</a>
    </section>

    <section class="ecran fin" data-id="fin-ressource">
      <h2>Merci pour vos r&eacute;ponses.</h2>
      <p class="succes-ou">Au vu de ce que vous d&eacute;crivez, une session de 30 minutes ne serait pas le bon format pour vous aujourd&rsquo;hui. On vous envoie par e-mail de quoi avancer seul(e), et la porte reste ouverte quand le moment viendra.</p>
    </section>

    <section class="ecran fin" data-id="fin-non">
      <h2>Pas de souci.</h2>
      <p class="succes-ou">La session demande d&rsquo;&ecirc;tre l&agrave;, et vous &ecirc;tes la seule personne &agrave; pouvoir dire si c&rsquo;est le moment. Revenez quand ce sera le cas, cette page ne bouge pas.</p>
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
  var envoye = false;
  var GRATUITS = /@(gmail|googlemail|hotmail|outlook|live|msn|yahoo|icloud|me|mac|bluewin|gmx|protonmail|proton|sunrise|hispeed|aol|free|orange|wanadoo|laposte)\\./i;

  /* UTM et identifiant de pub, pour relier chaque réponse à la pub qui l'a produite */
  (function(){
    var p = new URLSearchParams(location.search), out = [];
    ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","fbclid","ad_id","adset_id","campaign_id"].forEach(function(k){
      var v = p.get(k); if (v) out.push(k + "=" + v.slice(0, 80));
    });
    document.getElementById("utm").value = out.join("&");
  })();

  function parcours(){
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
    /* e-mail pro exigé seulement côté entreprise */
    var indice = ecran.querySelector(".mail-pro-indice");
    if (indice) { indice.hidden = reponses.profil !== "entreprise"; }
    var champ = ecran.getAttribute("data-champ");
    if (champ && reponses[champ] !== undefined) {
      var vals = [].concat(reponses[champ]);
      ecran.querySelectorAll(".option").forEach(function(o){ o.classList.toggle("choisi", vals.indexOf(o.getAttribute("data-valeur")) !== -1); });
      var btn = ecran.querySelector("[data-suivant]"); if (btn) btn.disabled = vals.length === 0;
    }
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
    if (type === "coordonnees") return !!(document.getElementById("c-nom").value.trim() && document.getElementById("c-mail").value.trim() && document.getElementById("c-tel").value.trim());
    return false;
  }
  function majAvancer(){
    avancer.disabled = !courant || courant.classList.contains("fin") || !repondu(courant);
  }
  function suivant(){
    var liste = parcours(), i = liste.indexOf(courant);
    if (courant.getAttribute("data-id") === "engagement") { return terminer(); }
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
      setTimeout(suivant, 220);
    } else {
      var val = opt.getAttribute("data-valeur");
      if (val === "rien") { ecran.querySelectorAll(".option").forEach(function(o){ if (o !== opt) o.classList.remove("choisi"); }); }
      else { var rien = ecran.querySelector('.option[data-valeur="rien"]'); if (rien) rien.classList.remove("choisi"); }
      opt.classList.toggle("choisi");
      var choisis = Array.prototype.slice.call(ecran.querySelectorAll(".option.choisi")).map(function(o){ return o.getAttribute("data-valeur"); });
      reponses[champ] = choisis;
      ecran.querySelector("[data-suivant]").disabled = choisis.length === 0;
    }
    majAvancer();
  });

  function validerCoordonnees(ecran){
    var ok = true;
    ecran.querySelectorAll(".champ-groupe").forEach(function(g){
      var input = g.querySelector("input[required]");
      var msg = g.querySelector(".erreur-msg");
      var v = input.value.trim(), invalide = !v;
      if (input.type === "tel") { var n = v.replace(/[\\s.\\-()]/g, ""); invalide = !(/^\\+41[1-9]\\d{8}$/.test(n) || /^0[1-9]\\d{8}$/.test(n)); }
      if (input.type === "email") {
        invalide = v.indexOf("@") === -1 || v.indexOf(".") === -1;
        var perso = !invalide && reponses.profil === "entreprise" && GRATUITS.test(v);
        if (msg) { msg.textContent = perso ? msg.getAttribute("data-msg-pro").replace("&rsquo;", "’").replace("&eacute;", "é") : msg.getAttribute("data-msg-generique"); }
        invalide = invalide || perso;
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
    }
    if (type === "coordonnees" && !validerCoordonnees(ecran)) return;
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
    if (type === "coordonnees" && !validerCoordonnees(courant)) return;
    suivant();
  });
  /* les coordonnées : le bouton s'active au fil de la saisie */
  form.addEventListener("input", majAvancer);

  /* Routage de fin */
  function destination(){
    if (reponses.engagement === "non") return "fin-non";
    if (reponses.profil === "entreprise") return "fin-creneau";
    var veut = reponses.investir === "oui" || reponses.investir === "oui-questions";
    var budget = reponses.budget && reponses.budget !== "<500";
    return (veut && budget) ? "fin-creneau" : "fin-ressource";
  }
  function qualification(){
    var d = destination();
    if (d !== "fin-creneau") return "non";
    return reponses.profil === "entreprise" ? "entreprise" : "formation";
  }

  function recap(){
    var r = document.getElementById("recap");
    var lignes = [];
    var SECTEURS = { "services": "services, conseil, fiduciaire", "construction": "construction, artisanat, technique", "commerce": "commerce, négoce, logistique", "placement": "placement, ressources humaines" };
    if (reponses.profil === "entreprise") {
      var TAILLES = { "1-4": "1 à 4", "5-20": "5 à 20", "21-50": "21 à 50", "50+": "plus de 50" };
      lignes.push("Une entreprise de " + (TAILLES[reponses.taille] || reponses.taille) + " personnes" + (SECTEURS[reponses.secteur] ? ", " + SECTEURS[reponses.secteur] : "") + ".");
      lignes.push(reponses.delai === "renseigne" ? "Vous vous renseignez, on ne vous vendra rien pendant la session." : "Vous voulez agir " + (reponses.delai === "ce-mois" ? "ce mois-ci" : "dans les 3 mois") + ", la session partira de là.");
    } else {
      lignes.push("Vous voulez vous former à l’IA. On vous dira quoi apprendre en premier, et dans quel ordre.");
    }
    r.innerHTML = lignes.map(function(l){ return "<p style=\\"margin:0 0 8px\\">" + l + "</p>"; }).join("");
  }

  /* Cal.com : modal intégré, nom et e-mail préremplis, la question dans les notes */
  var calPret = false;
  function chargerCal(){
    if (calPret) return; calPret = true;
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", { origin: "https://app.cal.com" });
    Cal("ui", { theme: "light", cssVarsPerTheme: { light: { "cal-brand": "#1E9E72" } }, hideEventTypeDetails: false });
  }
  function majCal(){
    var lien = form.querySelector(".cal-lien");
    var d = new FormData(form);
    lien.dataset.nom = d.get("name") || ""; lien.dataset.mail = d.get("email") || "";
    lien.dataset.notes = "[Session IA " + reponses.profil + "]";
    lien.href = "https://cal.com/rdv-mawt/appel?name=" + encodeURIComponent(lien.dataset.nom) + "&email=" + encodeURIComponent(lien.dataset.mail) + "&notes=" + encodeURIComponent(lien.dataset.notes);
    chargerCal();
  }
  form.addEventListener("click", function(e){
    var a = e.target.closest(".cal-lien");
    if (!a || !window.Cal) return;
    e.preventDefault();
    suivre("cal_open", { profil: reponses.profil || "" });
    Cal("modal", { calLink: "rdv-mawt/appel", config: { name: a.dataset.nom || "", email: a.dataset.mail || "", notes: a.dataset.notes || "" } });
  });

  function erreurEnvoi(msg){
    var e = courant.querySelector(".erreur-envoi");
    if (!e) { e = document.createElement("p"); e.className = "erreur-envoi"; courant.appendChild(e); }
    e.textContent = msg || "L'envoi a échoué. Réessayez, ou écrivez-nous directement.";
  }

  function terminer(){
    if (envoye) return;
    var d = new FormData(form), donnees = {};
    d.forEach(function(v, k){ donnees[k] = v; });
    Object.keys(reponses).forEach(function(k){ donnees[k] = Array.isArray(reponses[k]) ? reponses[k].join(",") : reponses[k]; });
    donnees.qualification = qualification();
    var dest = destination();
    var reel = location.hostname.indexOf("mawt.ch") !== -1;
    function fini(){
      envoye = true;
      if (dest === "fin-creneau") { recap(); majCal(); }
      pile = []; montrer(ecranParId(dest));
      suivre("form_submit", { profil: donnees.profil, qualification: donnees.qualification });
      if (window.fbq) {
        if (donnees.qualification === "entreprise") { fbq("track", "Lead", { content_name: "session-ia-entreprise" }); }
        else if (donnees.qualification === "formation") { fbq("trackCustom", "LeadFormation", { content_name: "session-ia-formation" }); }
        else { fbq("trackCustom", "LeadNonQualifie", { profil: donnees.profil || "" }); }
      }
    }
    if (!reel) { fini(); return; }
    courant.querySelectorAll(".option").forEach(function(o){ o.disabled = true; });
    fetch("/api/session-ia", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(donnees) })
      .then(function(r){ return r.json(); })
      .then(function(rep){ if (rep && rep.success) fini(); else { erreurEnvoi(rep && rep.error); courant.querySelectorAll(".option").forEach(function(o){ o.disabled = false; }); } })
      .catch(function(){ erreurEnvoi(null); courant.querySelectorAll(".option").forEach(function(o){ o.disabled = false; }); });
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

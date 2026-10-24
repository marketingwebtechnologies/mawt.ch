// Return page for the Meta authorization of MAWT's internal tools (Facebook Login of the "Claude MCP"
// app, Instagram business login of the "Messagerie MAWT" app). Facebook puts the access token in the URL
// fragment and Instagram a one-time code in the query; the page only reads them in the browser and hands it
// to the MAWT tool running on the operator's own computer (http://localhost:<port>), never shown
// on screen. The tool is chosen by the OAuth `state` ("local-<port>-<nonce>"); any other state is
// refused, so the page cannot be used to forward a token to a third-party site.
const PAGE = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<meta name="referrer" content="no-referrer">
<title>Connexion Meta · MAWT</title>
<style>
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#002B36;color:#FBFBFB;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}
  .c{max-width:420px;margin:16px;padding:32px 28px;border-radius:14px;background:rgba(255,255,255,.06);text-align:center}
  h1{font-size:20px;margin:0 0 10px;color:#4FC59C}
  p{font-size:15px;line-height:1.5;margin:0;opacity:.9}
</style>
</head>
<body>
<div class="c"><h1 id="t">Connexion en cours…</h1><p id="m">Un instant.</p></div>
<script>
(function () {
  var p = new URLSearchParams(location.hash.slice(1));
  var q = new URLSearchParams(location.search);
  var etat = p.get("state") || q.get("state") || "";
  var t = document.getElementById("t"), m = document.getElementById("m");
  var fin = function (titre, texte) { t.textContent = titre; m.textContent = texte; };
  if (q.get("error") || p.get("error")) {
    return fin("Connexion annulée", "Aucune autorisation n'a été donnée. Vous pouvez fermer cette page.");
  }
  var outil = /^local-(\\d{4,5})-[A-Za-z0-9_-]{8,64}$/.exec(etat);
  // Facebook Login renvoie un jeton dans le fragment ; Instagram Login renvoie un code à usage unique dans la requête.
  var code = q.get("code");
  if (!outil || (!p.get("access_token") && !code)) {
    return fin("Connexion Meta", "Cette page sert aux outils internes de MAWT. Vous pouvez la fermer.");
  }
  history.replaceState(null, "", location.pathname);
  fin("Connexion réussie", "Retour vers l'outil MAWT…");
  var transmis = code ? new URLSearchParams({ code: code, state: etat }) : p;
  location.replace("http://localhost:" + outil[1] + "/oauth/retour#" + transmis.toString());
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(PAGE, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex, nofollow",
      "X-Frame-Options": "DENY",
    },
  });
}

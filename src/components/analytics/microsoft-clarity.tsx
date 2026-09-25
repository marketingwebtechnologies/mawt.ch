"use client";

import { useEffect, useRef } from "react";

const CLARITY_PROJECT_ID = "ynxcutb3fv";
const COOKIE_CONSENT_KEY = "mawt-cookie-consent";

/**
 * Microsoft Clarity (heatmaps + session recordings), same consent policy as
 * GA4 and the Meta pixel: loads unless the visitor opted for essential-only
 * cookies. Clarity follows App Router navigations on its own.
 */
export function MicrosoftClarity() {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    if (localStorage.getItem(COOKIE_CONSENT_KEY) === "essential") return;
    loadedRef.current = true;
    if (document.getElementById("ms-clarity")) return;
    const script = document.createElement("script");
    script.id = "ms-clarity";
    script.innerHTML = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_PROJECT_ID}");`;
    document.head.appendChild(script);
  }, []);

  return null;
}

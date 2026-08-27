import { useEffect } from "react";

let scriptPromise = null;
function loadInstagramScript() {
  if (window.instgrm) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = resolve;
    document.body.appendChild(script);
  });
  return scriptPromise;
}

export default function InstagramEmbed({ url, title }) {
  useEffect(() => {
    loadInstagramScript().then(() => {
      window.instgrm?.Embeds?.process();
    });
  }, [url]);

  return (
    <div className="rounded-2xl overflow-hidden border border-ink/10 bg-white">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: 0, width: "100%", minHeight: "400px" }}
      >
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </blockquote>
    </div>
  );
}
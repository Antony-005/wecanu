export default function YouTubeEmbed({ id, title }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-ink/10 bg-black">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
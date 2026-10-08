// Splits text into letters that rise through a mask on load, staggered. Server-safe (CSS keyframes only).
export default function Letters({ text, delay = 0, step = 0.04, className = "" }: { text: string; delay?: number; step?: number; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden="true"><span className="rise-in" style={{ animationDelay: `${delay + i * step}s` }}>{ch === " " ? "\u00a0" : ch}</span></span>
      ))}
    </span>
  );
}

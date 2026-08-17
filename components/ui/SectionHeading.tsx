export function SectionHeading({
  kicker,
  title,
  italicWord,
  description,
  align = "left",
  tone = "ink",
}: {
  kicker: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "ink" | "paper";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const toneClass = tone === "paper" ? "text-paper" : "text-ink";
  const kickerTone = tone === "paper" ? "text-mustard" : "text-brick";
  const descTone = tone === "paper" ? "text-paper/75" : "text-ink-soft";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <span
        className={`font-detail text-xs font-bold uppercase tracking-[0.25em] ${kickerTone}`}
      >
        {kicker}
      </span>
      <h2
        className={`font-display text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl ${toneClass}`}
      >
        {title}{" "}
        {italicWord ? (
          <span className="italic text-brick">{italicWord}</span>
        ) : null}
      </h2>
      {description ? (
        <p className={`max-w-xl text-base leading-relaxed sm:text-lg ${descTone}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

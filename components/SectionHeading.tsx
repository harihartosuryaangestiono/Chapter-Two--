type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c77795]">{eyebrow}</p>
      ) : null}
      <h3 className="mt-3 font-display text-4xl text-[#80576A] sm:text-5xl">{title}</h3>
      {description ? <p className="mt-3 text-base text-[#80576A]/70">{description}</p> : null}
    </div>
  );
}

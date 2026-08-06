interface SectionProps {
  children: React.ReactNode;
  id?: string;
  alt?: boolean;
  narrow?: boolean;
  className?: string;
}

export function Section({ children, id, alt, narrow, className }: SectionProps) {
  const sectionClasses = [
    "mk-section",
    alt ? "mk-section-alt" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const containerClass = narrow ? "mk-container-narrow" : "mk-container";

  return (
    <section id={id} className={sectionClasses}>
      <div className={containerClass}>{children}</div>
    </section>
  );
}

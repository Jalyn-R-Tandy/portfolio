interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex justify-center items-center border-b border-deep-space-blue/20 ${className}`}
    >
      {children}
    </section>
  )
}
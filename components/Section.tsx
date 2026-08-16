import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {id === "sobre"
              ? "Sobre mim"
              : id === "experiencia"
                ? "Trajetória"
                : id === "habilidades"
                  ? "O que eu sei fazer"
                  : id === "projetos"
                    ? "Portfólio"
                    : "Contato"}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink md:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-lg leading-relaxed text-body">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

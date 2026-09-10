import Section from "@/components/Section";
import { personal } from "@/data/personal";

export default function About() {
  return (
    <Section
      id="sobre"
      title="Organização, atendimento e trabalho bem feito."
      subtitle="Experiência prática em rotina administrativa e contato direto com o público, com foco em organização, resolução de problemas e atendimento de qualidade."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-5 text-base leading-relaxed text-body">
          {personal.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="w-full">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Meus diferenciais
          </p>
          <ul className="mt-6 space-y-3">
            {personal.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-ink"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

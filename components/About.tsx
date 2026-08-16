import { Check } from "lucide-react";
import Section from "@/components/Section";
import { personal } from "@/data/personal";

export default function About() {
  return (
    <Section
      id="sobre"
      title="Um profissional de rotina, organização e gente."
      subtitle="Experiência prática em ambiente de escritório e uma missão simples: fazer o trabalho bem feito e atender bem."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-5 text-base leading-relaxed text-body">
          {personal.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="self-start rounded-2xl border border-line bg-accent-soft p-8">
          <h3 className="font-serif text-xl font-semibold text-accent">
            Meus diferenciais
          </h3>
          <ul className="mt-6 space-y-4">
            {personal.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

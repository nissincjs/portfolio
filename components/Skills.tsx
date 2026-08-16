import Section from "@/components/Section";
import { personal } from "@/data/personal";

export default function Skills() {
  return (
    <Section
      id="habilidades"
      title="Habilidades"
      subtitle="O que eu sei fazer bem — do atendimento à rotina administrativa, passando pelo computador."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {personal.skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-line p-7 transition-colors hover:border-accent/40"
          >
            <h3 className="font-serif text-lg font-semibold text-accent">
              {group.category}
            </h3>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-body"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

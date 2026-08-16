import { Briefcase } from "lucide-react";
import Section from "@/components/Section";
import { personal } from "@/data/personal";

export default function Experience() {
  return (
    <Section
      id="experiencia"
      title="Experiência profissional"
      subtitle="Atuação prática em escritório e anos de contato direto com o público."
    >
      <div className="space-y-12">
        {personal.experience.map((job) => (
          <div key={job.role} className="relative border-l-2 border-line pl-8">
            <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-white">
              <Briefcase className="h-2.5 w-2.5 text-white" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-xl font-semibold text-ink">{job.role}</h3>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                {job.period}
              </span>
            </div>

            <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-body">{job.description}</p>

            <ul className="mt-4 space-y-2">
              {job.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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

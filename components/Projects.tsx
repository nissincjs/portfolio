import { ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";
import { personal } from "@/data/personal";

export default function Projects() {
  return (
    <Section
      id="projetos"
      title="Trabalhos e portfólio"
      subtitle="Exemplos de organização e trabalho prático que desenvolvi no dia a dia. (Você pode trocar pelos seus exemplos reais.)"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {personal.projects.map((project) => (
          <a
            key={project.title}
            href="#contato"
            className="group flex flex-col justify-between rounded-2xl border border-line p-7 transition-colors hover:border-accent/40"
          >
            <div>
              <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                {project.tag}
              </span>
              <h3 className="mt-4 flex items-center gap-2 font-serif text-lg font-semibold text-ink">
                {project.title}
                <ArrowUpRight className="h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

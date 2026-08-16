import { ArrowDown, Sparkles } from "lucide-react";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-start px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          {personal.availability}
        </span>

        <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ink md:text-6xl">
          Olá, eu sou <span className="text-accent">{personal.name}.</span>
        </h1>

        <p className="mt-3 font-serif text-2xl font-medium text-body md:text-3xl">
          {personal.role} · {personal.focus}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body">
          {personal.headline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contato"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Fale comigo
          </a>
          <a
            href="#projetos"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Ver meu trabalho
          </a>
        </div>

        <a
          href="#sobre"
          className="mt-16 inline-flex items-center gap-2 text-sm font-medium text-body transition-colors hover:text-accent"
        >
          <ArrowDown className="h-4 w-4" />
          Conheça um pouco sobre mim
        </a>
      </div>
    </section>
  );
}

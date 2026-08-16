import Image from "next/image";
import { ArrowDown, Sparkles, User } from "lucide-react";
import { personal } from "@/data/personal";

export default function Hero() {
  const hasPhoto = personal.photo !== "";

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 pb-24 pt-16 md:flex-row md:items-start md:justify-between md:pb-32 md:pt-24">
        <div className="flex flex-col items-start">
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
            className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-body transition-colors hover:text-accent"
          >
            <ArrowDown className="h-4 w-4" />
            Conheça um pouco sobre mim
          </a>
        </div>

        <div className="shrink-0">
          {hasPhoto ? (
            <Image
              src={personal.photo}
              alt={personal.fullName}
              width={288}
              height={360}
              priority
              className="h-72 w-72 rounded-3xl object-cover shadow-lg md:h-80 md:w-80"
            />
          ) : (
            <div className="flex h-72 w-72 items-center justify-center rounded-3xl border-2 border-dashed border-line bg-accent-soft md:h-80 md:w-80">
              <div className="px-6 text-center">
                <User className="mx-auto h-12 w-12 text-accent/40" />
                <p className="mt-4 text-sm font-medium text-body">
                  Sua foto aqui
                </p>
                <p className="mt-1 text-xs text-body/70">
                  Coloque em public/foto.jpg
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

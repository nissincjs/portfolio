import { Mail, MessageCircle, ExternalLink, Clock } from "lucide-react";
import Section from "@/components/Section";
import { personal } from "@/data/personal";

const rawOptions = [
  {
    label: "WhatsApp",
    value: personal.contacts.whatsappDisplay,
    href: personal.contacts.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "E-mail",
    value: personal.contacts.email,
    href: `mailto:${personal.contacts.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: personal.contacts.linkedin.replace("https://www.linkedin.com/in/", "linkedin.com/in/"),
    href: personal.contacts.linkedin,
    icon: ExternalLink,
  },
];

export default function Contact() {
  const contactOptions = rawOptions.filter((option) => option.href !== "");
  const columns =
    contactOptions.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <Section
      id="contato"
      title="Vamos conversar?"
      subtitle="Respondo rápido. Estou disponível para entrevistas e para começar a trabalhar em home office ou presencialmente em Vianópolis/GO."
    >
      <div className={`grid gap-6 ${columns}`}>
        {contactOptions.map((option) => (
          <a
            key={option.label}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-line p-7 transition-colors hover:border-accent/40 hover:bg-accent-soft"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white">
              <option.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-serif text-lg font-semibold text-ink">
              {option.label}
            </h3>
            <p className="mt-1 break-all text-sm text-body group-hover:text-accent">
              {option.value}
            </p>
          </a>
        ))}
      </div>

      <p className="mt-8 inline-flex items-center gap-2 text-sm text-body">
        <Clock className="h-4 w-4 text-accent" />
        {personal.availability} · {personal.focus}
      </p>
    </Section>
  );
}

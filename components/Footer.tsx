import { personal } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-body md:flex-row">
        <p>
          © {new Date().getFullYear()} {personal.fullName}
        </p>
        <p>
          {personal.role} · {personal.focus}
        </p>
      </div>
    </footer>
  );
}

import { ArrowUpRight } from "lucide-react";
import type { Publication } from "@/content/portfolio";

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <a
      href={publication.href}
      target="_blank"
      rel="noreferrer"
      className="group grid gap-5 border-b border-white/12 py-6 transition hover:border-primary md:grid-cols-[120px_1fr_32px]"
    >
      <p className="text-3xl font-black text-primary">{publication.year}</p>
      <div>
        <h3 className="text-xl font-black leading-tight text-paper">{publication.title}</h3>
        <p className="mt-2 text-sm font-bold uppercase text-soft/62">{publication.venue}</p>
      </div>
      <ArrowUpRight
        aria-hidden="true"
        className="text-soft/50 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
      />
    </a>
  );
}

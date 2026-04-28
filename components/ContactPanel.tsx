import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { sourceLinks } from "@/content/portfolio";

export function ContactPanel() {
  return (
    <div className="grid overflow-hidden border border-white/10 bg-paper text-ink lg:grid-cols-[0.9fr_1.1fr]">
      <div className="bg-primary p-6 md:p-10">
        <p className="text-sm font-black uppercase">Contact</p>
        <h2 className="mt-6 text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
          Connect with the lab
        </h2>
      </div>

      <div className="p-6 md:p-10">
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="mailto:ejrouse@umich.edu"
            className="flex min-h-32 flex-col justify-between border border-ink/10 p-5 transition hover:border-primary hover:bg-primary/10"
          >
            <Mail aria-hidden="true" />
            <span className="text-lg font-black">ejrouse@umich.edu</span>
          </a>
          <div className="flex min-h-32 flex-col justify-between border border-ink/10 p-5">
            <MapPin aria-hidden="true" />
            <span className="text-lg font-black">Ford Robotics Building, Ann Arbor</span>
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          {sourceLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-t border-ink/10 py-4 text-lg font-black transition hover:text-primary"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden="true"
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

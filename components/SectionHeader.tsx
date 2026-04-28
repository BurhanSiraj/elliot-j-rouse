type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function SectionHeader({ eyebrow, title, intro }: SectionHeaderProps) {
  return (
    <div className="mb-10 grid gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:items-end">
      <p className="text-sm font-black uppercase text-primary">{eyebrow}</p>
      <div>
        <h2 className="max-w-4xl text-4xl font-black uppercase leading-none tracking-normal text-paper md:text-6xl">
          {title}
        </h2>
        {intro ? <p className="mt-5 max-w-3xl text-lg leading-8 text-soft/78">{intro}</p> : null}
      </div>
    </div>
  );
}

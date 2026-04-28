import Image from "next/image";
import { ContactPanel } from "@/components/ContactPanel";
import { Hero } from "@/components/Hero";
import { OverlayMenu } from "@/components/OverlayMenu";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationCard } from "@/components/PublicationCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { expertise, honors, navItems, projects, publications } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <OverlayMenu navItems={navItems} />
      <main>
        <Hero />

        <section id="work" className="bg-ink py-24 md:py-32">
          <div className="section-shell">
            <Reveal>
              <SectionHeader
                eyebrow="Research work"
                title="Robotic systems for human mobility"
                intro="A portfolio of platforms and studies at the intersection of prosthetics, orthoses, locomotion science, and control."
              />
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.05}>
                  <ProjectCard project={project} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="bg-paper py-24 text-ink md:py-32">
          <div className="section-shell">
            <Reveal>
              <div className="mb-12 max-w-5xl">
                <p className="text-sm font-black uppercase text-primary">Expertise</p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
                  Science, engineering, and translation
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="min-h-64 bg-paper p-6 transition hover:bg-primary hover:text-ink md:p-8">
                    <span className="text-sm font-black uppercase text-copper">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="mt-10 text-2xl font-black uppercase leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 opacity-75">{item.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="bg-panel py-24 md:py-32">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
            <Reveal>
              <div className="sticky top-28">
                <p className="text-sm font-black uppercase text-primary">Publications</p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
                  Recent and featured research
                </h2>
                <p className="mt-6 text-lg leading-8 text-soft/75">
                  Selected work showing the portfolio direction for the first version, with
                  source links kept close to the research.
                </p>
              </div>
            </Reveal>

            <div>
              {publications.map((publication, index) => (
                <Reveal key={publication.title} delay={index * 0.05}>
                  <PublicationCard publication={publication} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="honors" className="bg-ink py-24 md:py-32">
          <div className="section-shell">
            <Reveal>
              <SectionHeader
                eyebrow="Honors"
                title="Recognized work, placed in context"
                intro="Honors are presented as a regular content section rather than a fixed hero tab."
              />
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {honors.map((honor, index) => (
                <Reveal key={`${honor.year}-${honor.title}`} delay={index * 0.05}>
                  <article className="min-h-72 border border-white/10 bg-panel p-6 primary-ring">
                    <p className="text-5xl font-black text-primary">{honor.year}</p>
                    <h3 className="mt-8 text-2xl font-black uppercase leading-tight text-paper">
                      {honor.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-soft/72">{honor.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-paper py-24 text-ink md:py-32">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden border border-ink/10 bg-soft">
                <Image
                  src="/media/working-with-grad-students.jpg"
                  alt="Elliott Rouse working with graduate students in a lab setting"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p className="text-sm font-black uppercase text-primary">About</p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-normal md:text-6xl">
                  A research portfolio for human-centered robotics
                </h2>
                <p className="mt-7 text-xl leading-9 text-ink/72">
                  Elliott J. Rouse is an Associate Professor in Robotics and Mechanical
                  Engineering at the University of Michigan and director of the Neurobionics
                  Lab. His work brings together precision machine design, biomechanics,
                  controls, human perception, and rehabilitation technology.
                </p>
                <p className="mt-6 text-xl leading-9 text-ink/72">
                  The site is designed as an editorial research portfolio: visual first,
                  technically credible, and easy to scan for collaborators, students, labs,
                  and partners interested in the next generation of wearable robotics.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="lab" className="bg-ink py-24 md:py-32">
          <div className="section-shell">
            <Reveal>
              <SectionHeader
                eyebrow="Lab"
                title="A new generation of wearable robotics"
                intro="The Neurobionics Lab studies how the nervous system controls dynamic movement and uses that knowledge to develop robotic technologies for mobility."
              />
            </Reveal>

            <Reveal>
              <div className="relative min-h-[560px] overflow-hidden border border-white/10">
                <Image
                  src="/media/lab-panorama.jpeg"
                  alt="Panoramic view of the University of Michigan Neurobionics Lab"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/45" />
                <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-10">
                  <p className="text-sm font-black uppercase text-primary">Research environment</p>
                  <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-paper md:text-5xl">
                    Where movement science becomes assistive technology
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="bg-ink pb-24 md:pb-32">
          <div className="section-shell">
            <Reveal>
              <ContactPanel />
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

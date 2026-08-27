import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import { projects, type Project } from "@/lib/projects";
import theaPortrait from "@/assets/thea-portrait.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Thea Svantorp — UI & Interaction Designer",
      },
      {
        name: "description",
        content:
          "Thea Svantorp is a UI and interaction designer crafting calm, considered digital products with a Scandinavian sensibility.",
      },
      { property: "og:title", content: "Thea Svantorp — UI & Interaction Designer" },
      {
        property: "og:description",
        content:
          "UI and interaction design with a Scandinavian sensibility — calm, considered, and quietly confident.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});





function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = root.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Index() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground">
      {/* ---------- Navigation ---------- */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            className="display-font text-sm tracking-[0.18em] uppercase text-foreground"
          >
            Thea Svantorp
          </a>
          <nav className="flex items-center gap-7 text-[13px] text-muted-foreground">
            <a href="#work" className="link-underline hidden sm:inline">
              Arbeider
            </a>
            <a href="#about" className="link-underline hidden sm:inline">
              Om meg
            </a>
            <a
              href="mailto:hello@theasvantorp.com"
              className="link-underline text-foreground"
            >
              Ta kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section
        id="top"
        className="relative flex min-h-screen flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="reveal text-[13px] tracking-[0.22em] uppercase text-muted-foreground">
            PRODUKTDESGINER
          </p>
          <p className="reveal text-[13px] tracking-[0.22em] uppercase text-muted-foreground">
            DESIGNER
          </p>
          <h1 className="reveal display-font mt-6 text-balance text-[15vw] leading-[0.92] text-foreground sm:text-[12vw] md:text-[9.5rem]">
            Hei!
          </h1>
          <div className="reveal mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              Jeg er Thea! En Oslo-basert designer som lager digitale produkter som gjør det enklere for folk å gjøre det de er gode på!
            </p>
            <a
              href="#work"
              className="link-underline inline-flex w-fit items-center gap-2 text-sm text-foreground"
            >
              Utvalgte prosjekter
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Selected work ---------- */}
      <section id="work" className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-16 flex items-baseline justify-between border-b border-border pb-6">
            <h2 className="display-font text-2xl tracking-[0.04em] text-foreground">
              Utvalgte prosjekter
            </h2>
            <span className="text-[13px] text-muted-foreground">
              03 — 2024 / 2025
            </span>
          </div>

          <div className="flex flex-col gap-28 md:gap-40">
            {projects.map((project, i) => (
              <ProjectRow key={project.index} project={project} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section
        id="about"
        className="border-t border-border px-6 py-24 md:px-10 md:py-36"
      >
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-12 md:gap-10">
          <div className="reveal md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={theaPortrait.url}
                alt="Portrett av Thea Svantorp"
                width={1080}
                height={1440}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7 md:self-center">
            <p className="text-[13px] tracking-[0.22em] uppercase text-muted-foreground">
              OM MEG
            </p>
            <h2 className="display-font mt-5 text-balance text-3xl leading-tight text-foreground md:text-4xl">
              Enkle grensesnitt som varer.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Jeg heter Thea, er opprinnelig fra Trondheim, og har bodd på St.
                Hanshaugen i Oslo siden jeg var ferdig på NTNU i 2018. Jeg designer
                digitale produkter som gjør en forskjell for de som bruker dem —
                ikke bare løser kortsiktige problemer. Jeg jobber strategisk, og
                liker enkle, fokuserte grensesnitt uten at de blir sterile.
              </p>
              <p>
                Når jeg ikke jobber, tilbringer jeg aller helst tiden med mannen min og våre to
                barn, gjerne i aktivitet og utendørs. Jeg elsker å lære nye ting, og å lage mat
                til venner og familie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article
      className={`reveal grid items-center gap-8 md:grid-cols-12 md:gap-12 ${
        flip ? "md:[direction:rtl]" : ""
      }`}
    >
      <div className="md:col-span-7 md:[direction:ltr]">
        <Link
          to="/prosjekt/$slug"
          params={{ slug: project.slug }}
          className="group relative block overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.alt}
            width={project.tall ? 810 : 1440}
            height={1080}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] ${
              project.tall ? "aspect-[8/10]" : "aspect-[16/10]"
            }`}
          />
        </Link>
      </div>
      <div className="md:col-span-5 md:[direction:ltr]">
        <div className="flex items-baseline justify-between">
          <span className="display-font text-sm tracking-[0.18em] text-muted-foreground">
            {project.index}
          </span>
          <span className="text-[13px] text-muted-foreground">{project.year}</span>
        </div>
        <h3 className="display-font mt-5 text-3xl leading-tight text-foreground md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 text-[13px] tracking-[0.08em] uppercase text-muted-foreground">
          {project.discipline}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <Link
          to="/prosjekt/$slug"
          params={{ slug: project.slug }}
          className="link-underline mt-8 inline-flex flex-col items-start text-sm text-foreground"
        >
          <span>Se mer</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

    </article>
  );
}

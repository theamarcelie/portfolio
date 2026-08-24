import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import projectAurora from "@/assets/project-aurora.jpg";
import projectSaga from "@/assets/project-saga.jpg";
import projectLumen from "@/assets/project-lumen.jpg";
import aboutTexture from "@/assets/about-texture.jpg";

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

type Project = {
  index: string;
  title: string;
  discipline: string;
  year: string;
  summary: string;
  image: string;
  alt: string;
  tall?: boolean;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Samtaler for helsepersonell",
    discipline: "Finance platform · UI & interaction",
    year: "2025",
    summary:
      "A consumer finance dashboard reimagined around calm. Quiet hierarchy, generous whitespace, and a motion language that turns dense data into something readable.",
    image: projectAurora,
    alt: "Aurora finance dashboard interface on a warm off-white desk",
  },
  {
    index: "02",
    title: "Min arbeidsdag",
    discipline: "APP FOR HJEMMESYLEPLEIEN", 
    year: "2025",
    summary:
      "A meditation companion built on restraint. One gesture, one breath at a time — organic shapes and a soft, clay-toned palette guide the user inward.",
    image: projectSaga,
    alt: "Saga wellness app interface in a flatlay on cream paper",
    tall: true,
  },
  {
    index: "03",
    title: "Lumen",
    discipline: "Reading experience · Product design",
    year: "2024",
    summary:
      "An editorial reading app that treats long-form text the way a good magazine does. Airy margins, considered type, and a rhythm that respects attention.",
    image: projectLumen,
    alt: "Lumen reading app on a tablet resting on warm linen",
  },
];


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
              Work
            </a>
            <a href="#about" className="link-underline hidden sm:inline">
              About
            </a>
            <a
              href="mailto:hello@theasvantorp.com"
              className="link-underline text-foreground"
            >
              Contact
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
              Utvalgte arbeider↓
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
              Prosjekter jeg har jobbet med
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
                src={aboutTexture}
                alt="An abstract mid-century still life in clay and ink"
                width={1440}
                height={1080}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7 md:self-center">
            <p className="text-[13px] tracking-[0.22em] uppercase text-muted-foreground">
              About
            </p>
            <h2 className="display-font mt-5 text-balance text-3xl leading-tight text-foreground md:text-4xl">
              Design that earns its place by saying less.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I design interfaces and interactions with a Scandinavian
                sensibility — mid-century restraint with a softer, feminine edge.
                Whitespace is a material; hierarchy is an act of care.
              </p>
              <p>
                My work spans consumer finance, wellness, and editorial products.
                I care about the quiet moments: a transition that breathes, a
                label placed exactly where the eye expects it, a system that
                stays consistent without becoming sterile.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 text-sm">
              <div>
                <dt className="text-muted-foreground">Discipline</dt>
                <dd className="mt-1 text-foreground">UI / Interaction</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Based in</dt>
                <dd className="mt-1 text-foreground">Oslo, Norway</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Practice</dt>
                <dd className="mt-1 text-foreground">Independent</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Available</dt>
                <dd className="mt-1 text-foreground">Selectively, 2026</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <footer
        id="contact"
        className="border-t border-border px-6 py-24 md:px-10 md:py-32"
      >
        <div className="reveal mx-auto max-w-6xl">
          <p className="text-[13px] tracking-[0.22em] uppercase text-muted-foreground">
            Let's make something quiet
          </p>
          <a
            href="mailto:hello@theasvantorp.com"
            className="display-font mt-6 block text-balance text-4xl leading-tight text-foreground md:text-6xl"
          >
            hello@theasvantorp.com
          </a>
          <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span className="display-font tracking-[0.18em] uppercase text-foreground">
              Thea Svantorp
            </span>
            <div className="flex items-center gap-7">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline"
              >
                Instagram
              </a>
              <a
                href="https://www.dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline"
              >
                Dribbble
              </a>
            </div>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
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
        <div className="group relative overflow-hidden">
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
        </div>
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
        <a
          href="#work"
          className="link-underline mt-8 inline-flex items-center gap-2 text-sm text-foreground"
        >
          View case study
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { getProjectBySlug, projects } from "@/lib/projects";

export const Route = createFileRoute("/prosjekt/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Prosjektet finnes ikke — Thea Svantorp" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Thea Svantorp`;
    const description = project.intro.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

function ProjectNotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 md:px-10">
      <h1 className="display-font text-3xl text-foreground">
        Dette prosjektet finnes ikke
      </h1>
      <Link to="/" className="link-underline mt-6 w-fit text-sm text-foreground">
        Tilbake til forsiden
      </Link>
    </main>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            to="/"
            className="display-font text-sm tracking-[0.18em] uppercase text-foreground"
          >
            Thea Svantorp
          </Link>
          <Link to="/" className="link-underline text-[13px] text-muted-foreground">
            ← Tilbake
          </Link>
        </div>
      </header>

      <main className="px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
        <article className="mx-auto max-w-6xl">
          {/* Title block */}
          <div className="border-b border-border pb-10">
            <div className="flex items-baseline justify-between">
              <span className="display-font text-sm tracking-[0.18em] text-muted-foreground">
                {project.index}
              </span>
              <span className="text-[13px] text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="display-font mt-6 text-balance text-4xl leading-[1.05] text-foreground md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-[13px] tracking-[0.12em] uppercase text-muted-foreground">
              {project.discipline}
            </p>
          </div>

          {/* Intro + meta */}
          <div className="grid gap-12 py-14 md:grid-cols-12 md:gap-10">
            <p className="text-pretty text-lg leading-relaxed text-foreground md:col-span-7 md:text-xl">
              {project.intro}
            </p>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm md:col-span-4 md:col-start-9">
              {project.meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-muted-foreground">{item.label}</dt>
                  <dd className="mt-1 text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero image */}
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.alt}
              width={1440}
              height={1080}
              className="w-full object-cover"
            />
          </div>

          {/* Sections */}
          <div className="mt-20 flex flex-col gap-16 md:mt-28 md:gap-24">
            {project.sections.map((section) => (
              <section
                key={section.heading}
                className="grid gap-6 border-t border-border pt-10 md:grid-cols-12 md:gap-10"
              >
                <h2 className="display-font text-xl text-foreground md:col-span-4">
                  {section.heading}
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 ? (
            <div className="mt-20 border-t border-border pt-10 md:mt-28">
              <p className="text-[13px] tracking-[0.22em] uppercase text-muted-foreground">
                Utvalgte skjermbilder
              </p>
              <div className="mt-10 flex flex-col gap-16 md:gap-24">
                {project.gallery.map((item) => (
                  <figure key={item.src}>
                    <div className="overflow-hidden bg-secondary">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full object-contain"
                      />
                    </div>
                    <figcaption className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : null}
        </article>

        {/* Next projects */}
        <div className="mx-auto mt-28 max-w-6xl border-t border-border pt-10">
          <p className="text-[13px] tracking-[0.22em] uppercase text-muted-foreground">
            Andre prosjekter
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/prosjekt/$slug"
                params={{ slug: other.slug }}
                className="group block"
              >
                <div className="overflow-hidden">
                  <img
                    src={other.image}
                    alt={other.alt}
                    width={1440}
                    height={900}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="display-font mt-5 text-2xl text-foreground">
                  {other.title}
                </h3>
                <p className="mt-2 text-[13px] tracking-[0.08em] uppercase text-muted-foreground">
                  {other.discipline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

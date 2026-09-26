import { useEffect } from 'react'

const projects = [
  {
    number: '01',
    title: 'UrbanMove',
    description:
        'UrbanMove is a full-stack electric scooter rental platform that enables users to locate, rent, and manage scooter rides through a modern web application.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.JS',
      'Express.JS',
      'PostgreSQL',
    ],
    repositoryUrl: 'https://github.com/Tarik-Shuta/UrbanMove',
  },
  {
    number: '02',
    title: 'EClubs',
    description:
        'EClubs is a web-based student club management platform that streamlines club operations through automated attendance tracking, activity management, and centralized access to club information for students and administrators.',
    tags: ['Vue', 'Tailwind CSS', 'TypeScript', 'PrimeVue'],
    repositoryUrl: 'https://github.com/VenomTS/EClubs-Frontend',
  },
  /*{
    number: '03',
    title: 'Number Guessing Game',
    description:
        'Number Guessing Game is a console-based game developed in Assembly language where players guess a randomly generated number with feedback after each attempt.',
    tags: ['Assembly'],
    repositoryUrl:
        'https://github.com/Tarik-Shuta/Number-Guessing-Game-Assembly',
  },*/
]

function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const sections =
        document.querySelectorAll<HTMLElement>('[data-reveal]')

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            entry.target.classList.remove(
                'opacity-0',
                'translate-y-8',
            )

            entry.target.classList.add(
                'opacity-100',
                'translate-y-0',
            )

            observer.unobserve(entry.target)
          })
        },
        {
          threshold: 0.12,
        },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
      <main className="relative min-h-screen overflow-hidden bg-[#050907] text-ink">
        {/* Background */}
        <div
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
            aria-hidden="true"
        >
          {/* Base gradient */}
          <div
              className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_-10%,rgba(74,222,128,0.12),transparent_42%),linear-gradient(180deg,#07110d_0%,#050907_50%,#030605_100%)]
          "
          />

          {/* Grid */}
          <div
              className="
            absolute inset-0
            opacity-30
            [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
            [background-size:72px_72px]
            [mask-image:radial-gradient(circle_at_50%_25%,black,transparent_75%)]
          "
          />

          {/* Left green orb */}
          <div
              className="
            absolute -top-48 -left-48
            size-[38rem]
            rounded-full
            bg-emerald-500/20
            blur-[130px]
            motion-safe:animate-[float-one_18s_ease-in-out_infinite_alternate]
          "
          />

          {/* Right green orb */}
          <div
              className="
            absolute top-[28%] -right-64
            size-[42rem]
            rounded-full
            bg-green-400/15
            blur-[150px]
            motion-safe:animate-[float-two_22s_ease-in-out_infinite_alternate]
          "
          />

          {/* Bottom cyan orb */}
          <div
              className="
            absolute -bottom-64 left-[20%]
            size-[38rem]
            rounded-full
            bg-cyan-400/8
            blur-[150px]
            motion-safe:animate-[float-three_25s_ease-in-out_infinite_alternate]
          "
          />

          {/* Hero spotlight */}
          <div
              className="
            absolute -top-[35rem] left-1/2
            size-[80rem]
            -translate-x-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(74,222,128,0.08),transparent_65%)]
            motion-safe:animate-pulse
          "
          />

          {/* Vignette */}
          <div
              className="
            absolute inset-0
            bg-[linear-gradient(90deg,rgba(0,0,0,0.3),transparent_20%,transparent_80%,rgba(0,0,0,0.3))]
          "
          />

          <div
              className="
            absolute inset-0
            bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.3))]
          "
          />
        </div>

        {/* Page content */}
        <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-295 sm:w-[calc(100%-3rem)]">
          {/* Navigation */}
          <nav
              className="flex items-center justify-between py-7"
              aria-label="Main navigation"
          >
            <button
                className="
              text-lg font-bold tracking-tighter
              transition-opacity duration-200
              hover:opacity-70
            "
                type="button"
                onClick={() => scrollToSection('top')}
            >
              Tarik<span className="text-accent">.</span>
            </button>

            <button
                className="
              group font-mono text-xs font-bold tracking-widest
              text-muted uppercase
              transition-colors duration-200
              hover:text-accent
            "
                type="button"
                onClick={() => scrollToSection('contact')}
            >
              Let&apos;s talk{' '}
              <span
                  aria-hidden="true"
                  className="
                inline-block transition-transform duration-200
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
              >
              ↗
            </span>
            </button>
          </nav>

          {/* Hero */}
          <section
              id="top"
              className="
            flex min-h-[calc(100vh-84px)]
            flex-col justify-center
            py-20
          "
          >
            <h1
                className="
              max-w-4xl
              text-5xl leading-[0.94] font-medium
              tracking-[-0.07em]
              text-ink
              sm:text-7xl
              lg:text-8xl
            "
            >
              Hey, I&apos;m Tarik Šuta

              <span className="block">
              and I turn ideas into{' '}
                <span
                    className="
                  relative
                  text-accent
                  drop-shadow-[0_0_25px_rgba(74,222,128,0.18)]
                "
                >
                software.
              </span>
            </span>
            </h1>

            <p
                className="
              mt-7 max-w-2xl
              text-lg leading-relaxed
              text-muted
              sm:text-xl
            "
            >
              I&apos;m a software engineering student at the
              International University of Sarajevo, interested in
              creating useful digital experiences and becoming a better
              developer with every project.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                  className="
                group rounded-full
                bg-accent
                px-5 py-3
                text-sm font-bold
                text-canvas
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_10px_35px_rgba(74,222,128,0.15)]
                active:translate-y-0
              "
                  type="button"
                  onClick={() => scrollToSection('projects')}
              >
                View my projects{' '}
                <span
                    aria-hidden="true"
                    className="
                  inline-block transition-transform duration-300
                  group-hover:translate-y-1
                "
                >
                ↓
              </span>
              </button>

              <button
                  className="
                rounded-full
                border border-white/10
                bg-white/[0.025]
                px-5 py-3
                text-sm font-bold
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-white/20
                hover:bg-white/[0.05]
              "
                  type="button"
                  onClick={() => scrollToSection('about')}
              >
                More about me
              </button>
            </div>
          </section>

          {/* Projects */}
          <section
              id="projects"
              data-reveal
              className="
            translate-y-8
            border-t border-white/10
            py-20
            opacity-0
            transition-all duration-700 ease-out
            sm:py-28
          "
          >
            <div className="mb-11 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs font-bold tracking-[0.14em] text-accent uppercase">
                  Selected work
                </p>

                <h2 className="mt-3 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
                  Projects I&apos;ve built.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-muted">
                I&apos;ll keep this section updated as I build and
                improve things.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {projects.map((project) => (
                  <article
                      key={project.number}
                      className="
                  group relative
                  overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.025]
                  p-7
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1.5
                  hover:border-accent/25
                  hover:bg-white/[0.04]
                  hover:shadow-[0_24px_80px_rgba(0,0,0,0.3)]
                  sm:p-8
                "
                  >
                    {/* Card background glow */}
                    <div
                        className="
                    pointer-events-none
                    absolute -right-24 -bottom-24
                    size-64
                    rounded-full
                    bg-emerald-500/10
                    blur-3xl
                    transition-all duration-500
                    group-hover:scale-125
                    group-hover:bg-emerald-400/15
                  "
                    />

                    <p className="relative font-mono text-xs text-accent">
                      {project.number}
                    </p>

                    <h3 className="relative mt-14 text-2xl font-medium tracking-tighter">
                      {project.title}
                    </h3>

                    <p className="relative mt-3 leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <ul
                        className="relative mt-7 flex flex-wrap gap-2"
                        aria-label="Technologies used"
                    >
                      {project.tags.map((tag) => (
                          <li
                              key={tag}
                              className="
                        rounded-md
                        border border-white/10
                        bg-white/[0.025]
                        px-2 py-1
                        font-mono text-[0.68rem]
                        text-muted
                        transition-colors duration-200
                        group-hover:border-white/15
                      "
                          >
                            {tag}
                          </li>
                      ))}
                    </ul>

                    <a
                        className="
                    relative mt-8
                    inline-flex size-10
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    text-muted
                    transition-all duration-300
                    hover:scale-105
                    hover:border-accent
                    hover:bg-accent
                    hover:text-canvas
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-accent
                  "
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        title="View repository on GitHub"
                    >
                      <svg className="size-5" aria-hidden="true">
                        <use
                            href={`${import.meta.env.BASE_URL}icons.svg#github-icon`}
                        />
                      </svg>
                    </a>
                  </article>
              ))}
            </div>
          </section>

          {/* About */}
          <section
              id="about"
              data-reveal
              className="
            grid
            translate-y-8
            gap-10
            border-t border-white/10
            py-20
            opacity-0
            transition-all duration-700 ease-out
            sm:grid-cols-[0.8fr_1.2fr]
            sm:py-28
          "
          >
            <p className="font-mono text-xs font-bold tracking-[0.14em] text-accent uppercase">
              About me
            </p>

            <div>
              <h2 className="text-3xl leading-tight font-medium tracking-[-0.055em] sm:text-4xl">
                Curious by nature, focused on turning ideas into working
                software.
              </h2>

              <p className="mt-6 max-w-xl leading-relaxed text-muted">
                I am a Software Engineering student passionate about web
                development and building practical software solutions.
                Experienced in developing full-stack applications with
                modern technologies, including frontend, backend,
                databases, and APIs. I enjoy solving problems, learning
                new technologies, and continuously improving my skills
                while contributing to meaningful projects and growing
                as a developer.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section
              id="contact"
              data-reveal
              className="
            translate-y-8
            border-t border-white/10
            py-20
            opacity-0
            transition-all duration-700 ease-out
            sm:py-28
          "
          >
            <p className="font-mono text-xs font-bold tracking-[0.14em] text-accent uppercase">
              Get in touch
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl leading-[0.98] font-medium tracking-[-0.065em] sm:text-6xl">
              Have an idea? Let&apos;s make it{' '}
              <span className="text-accent">real.</span>
            </h2>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                  className="
                rounded-full
                bg-accent
                px-5 py-3
                text-sm font-bold
                text-canvas
                no-underline
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_10px_35px_rgba(74,222,128,0.15)]
              "
                  href="mailto:tariksuta4@gmail.com"
              >
                tariksuta4@gmail.com{' '}
                <span aria-hidden="true">↗</span>
              </a>

              <a
                  className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/10
                bg-white/[0.025]
                px-5 py-3
                text-sm font-bold
                no-underline
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-accent/40
                hover:bg-white/[0.05]
              "
                  href="https://github.com/Tarik-Shuta"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Tarik Šuta's GitHub profile"
              >
                <svg className="size-4" aria-hidden="true">
                  <use
                      href={`${import.meta.env.BASE_URL}icons.svg#github-icon`}
                  />
                </svg>

                GitHub
              </a>
            </div>
          </section>

          <footer
              className="
            flex flex-col gap-3
            border-t border-white/10
            py-7
            text-xs text-faint
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
          >
            <p>© {new Date().getFullYear()} Tarik Šuta</p>
          </footer>
        </div>
      </main>
  )
}

export default Home
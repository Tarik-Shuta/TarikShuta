import { useEffect, useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'UrbanMove',
    description:
      'UrbanMove is a full-stack electric scooter rental platform that enables users to locate, rent, and manage scooter rides through a modern web application.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.JS', 'Express.JS', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'EClubs',
    description: 'Use this space to briefly explain the product, your contribution, and the result.',
    tags: ['Vue', 'Tailwind CSS', 'TypeScript', 'PrimeVue'],
  },
  {
    number: '03',
    title: 'Project name',
    description: 'Add another project that shows a different skill or the kind of work you want to do more of.',
    tags: ['Python', 'UI/UX', 'Full stack'],
  },
]

function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    const sections = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      observer.disconnect()
    }
  }, [])

  return (
    <main className="portfolio relative overflow-hidden">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-[1180px] sm:w-[calc(100%-3rem)]">
        <nav className="flex items-center justify-between py-7" aria-label="Main navigation">
          <a className="brand-mark text-lg font-bold tracking-[-0.05em] no-underline" href="#top">
            Tarik<span className="text-accent">.</span>
          </a>
          <a className="nav-link font-mono text-xs font-bold tracking-[0.1em] text-muted uppercase" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <section id="top" className="hero-section flex min-h-[calc(100vh-84px)] flex-col justify-center py-20">
          <p className="hero-kicker mb-5 flex items-center gap-2 font-mono text-xs font-bold tracking-[0.14em] text-accent uppercase">
            <span className="status-dot size-2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(159,232,112,0.12)]" />
            Software engineering student
          </p>

          <h1 className="hero-title max-w-4xl text-5xl leading-[0.94] font-medium tracking-[-0.07em] text-ink sm:text-7xl lg:text-8xl">
            Hey, I&apos;m Tarik Šuta. <span className="block">I build things for the <span className="text-accent">web.</span></span>
          </h1>

          <p className="hero-copy mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            I&apos;m a software engineering student at the International University of Sarajevo, interested in creating useful
            digital experiences and becoming a better developer with every project.
          </p>

          <div className="hero-actions mt-10 flex flex-wrap gap-3">
            <a className="button-primary rounded-full px-5 py-3 text-sm font-bold no-underline" href="#projects">
              View my projects <span aria-hidden="true">↓</span>
            </a>
            <a className="button-secondary rounded-full px-5 py-3 text-sm font-bold no-underline" href="#about">
              More about me
            </a>
          </div>
        </section>

        <section id="projects" data-reveal className="reveal border-t border-white/10 py-20 sm:py-28">
          <div className="mb-11 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker font-mono text-xs font-bold tracking-[0.14em] text-accent uppercase">Selected work</p>
              <h2 className="mt-3 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">Projects I&apos;ve built.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">I&apos;ll keep this section updated as I build and improve things.</p>
          </div>

          <div className="project-grid grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="project-card group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-7 sm:p-8">
                <div className="card-orb absolute -right-16 -bottom-20 size-52 rounded-full bg-evergreen/30 blur-sm" />
                <p className="relative font-mono text-xs text-accent">{project.number}</p>
                <h3 className="relative mt-14 text-2xl font-medium tracking-[-0.05em]">{project.title}</h3>
                <p className="relative mt-3 leading-relaxed text-muted">{project.description}</p>
                <ul className="relative mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tech-tag rounded-md border border-white/10 bg-white/[0.025] px-2 py-1 font-mono text-[0.68rem] text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="about" data-reveal className="reveal grid gap-10 border-t border-white/10 py-20 sm:grid-cols-[0.8fr_1.2fr] sm:py-28">
          <p className="section-kicker font-mono text-xs font-bold tracking-[0.14em] text-accent uppercase">About me</p>
          <div>
            <h2 className="text-3xl leading-tight font-medium tracking-[-0.055em] sm:text-4xl">
              Curious by nature, focused on turning ideas into working software.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              I am a Software Engineering student passionate about web development and building practical software solutions. Experienced in
              developing full-stack applications with modern technologies, including frontend, backend, databases, and APIs. I enjoy solving
              problems, learning new technologies, and continuously improving my skills while contributing to meaningful projects and growing as a developer.
            </p>
          </div>
        </section>

        <section id="contact" data-reveal className="reveal border-t border-white/10 py-20 sm:py-28">
          <p className="section-kicker font-mono text-xs font-bold tracking-[0.14em] text-accent uppercase">Get in touch</p>
          <h2 className="mt-4 max-w-3xl text-4xl leading-[0.98] font-medium tracking-[-0.065em] sm:text-6xl">
            Have an idea? Let&apos;s make it <span className="text-accent">real.</span>
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-primary rounded-full px-5 py-3 text-sm font-bold no-underline" href="mailto:tariksuta4@gmail.com">
              tariksuta4@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold no-underline"
              href="https://github.com/Tarik-Shuta"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Tarik Šuta's GitHub profile"
            >
              <svg className="size-4" aria-hidden="true"><use href="/icons.svg#github-icon" /></svg>
              GitHub
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tarik Šuta</p>
          <p>Built with React &amp; Tailwind CSS</p>
        </footer>
      </div>
    </main>
  )
}

export default Home

function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-[min(100%-2rem,1180px)] flex-col justify-center py-20 sm:w-[min(100%-3rem,1180px)]">
      <p className="mb-5 flex items-center gap-2 font-mono text-xs font-bold tracking-[0.14em] text-accent uppercase">
        <span className="size-2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(159,232,112,0.12)]" />
        Available for work
      </p>

      <h1 className="max-w-4xl text-5xl leading-[0.94] font-medium tracking-[-0.07em] text-ink sm:text-7xl lg:text-8xl">
        I build digital experiences with <span className="text-accent">purpose.</span>
      </h1>

      <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
        Designer and developer focused on clear ideas, thoughtful details, and useful products.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          className="rounded-full bg-accent px-5 py-3 text-sm font-bold text-canvas no-underline transition hover:-translate-y-0.5 hover:bg-accent-bright"
          href="#work"
        >
          See my work
        </a>
        <a
          className="rounded-full border border-white/20 bg-white/[0.025] px-5 py-3 text-sm font-bold text-ink no-underline transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          href="mailto:hello@example.com"
        >
          Get in touch
        </a>
      </div>
    </main>
  )
}
export default Home;

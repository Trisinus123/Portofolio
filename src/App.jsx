import { useState } from 'react'
import { profile, nav, skills, filters, projects, education, certificates, experience, posts } from './data'
import './styles.css'

const btn = 'inline-block rounded-full border-2 px-8 py-2.5 text-base font-bold no-underline hover:opacity-90'
const btnMain = `${btn} border-accent bg-accent text-accent-ink`
const btnAlt = `${btn} border-line bg-transparent text-ink`

function Section({ id, title, className = '', children }) {
  return (
    <section id={id} className={`border-t border-line py-20 ${className}`}>
      <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight after:mx-auto after:mt-3 after:block after:h-1.5 after:w-14 after:rounded-sm after:bg-accent md:text-[40px] md:leading-[1.1]">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Photo() {
  if (profile.photo) {
    return (
      <div className="relative order-first aspect-square w-[240px] justify-self-center overflow-hidden rounded-full bg-accent md:order-none md:w-[360px] md:justify-self-center">
        <img
          src={profile.photo}
          alt={`Foto ${profile.name}`}
          className="absolute bottom-0 left-[44%] w-[84%] -translate-x-1/2"
        />
      </div>
    )
  }
  return (
    <div className="order-first aspect-square w-[240px] justify-self-center overflow-hidden rounded-full bg-accent md:order-none md:w-[360px] md:justify-self-center">
      <svg viewBox="0 0 335 335" role="img" aria-label="Foto profil (placeholder)" className="block h-full w-full">
        <path d="M30 335C30 240 80 190 167 190S304 240 304 335Z" fill="#a9b4c4" />
        <rect x="145" y="140" width="44" height="60" fill="#c9c4dc" />
        <ellipse cx="167" cy="100" rx="52" ry="70" fill="#c9c4dc" />
      </svg>
    </div>
  )
}
function Card({ small, title, desc, extra, link, linkText }) {
  return (
    <article className="flex flex-col gap-2.5 rounded-2xl border border-line bg-soft p-6">
      {small && <small className="font-medium text-accent">{small}</small>}
      <h3 className="text-[22px] font-bold leading-tight">{title}</h3>
      <p className="text-muted">{desc}</p>
      {extra && <small className="font-medium text-accent">{extra}</small>}
      {link && <a href={link} className="mt-auto pt-1.5 font-bold text-accent">{linkText}</a>}
    </article>
  )
}

function CertList() {
  return (
    <ul className="mx-auto max-w-[900px] divide-y divide-line overflow-hidden rounded-2xl border border-line bg-soft">
      {certificates.map((c) => (
        <li key={c.title} className="flex items-center gap-4 px-5 py-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="9" r="6" />
              <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold leading-snug">{c.title}</h3>
            <p className="text-sm text-muted">{c.issuer}</p>
          </div>
          <span className="shrink-0 text-sm font-medium text-muted">{c.year}</span>
          {c.link && (
            <a href={c.link} className="shrink-0 text-sm font-bold text-accent">Lihat</a>
          )}
        </li>
      ))}
    </ul>
  )
}

const grid = 'grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]'

export default function App() {
  const [filter, setFilter] = useState('semua')
  const shown = projects.filter((p) => filter === 'semua' || p.type === filter)

  return (
    <div className="mx-auto max-w-[1600px] px-6 font-sans text-base leading-relaxed md:px-[6.4vw]">
      <header className="flex min-h-20 flex-wrap items-center justify-between gap-x-10 gap-y-3 py-3">
        <a href="#beranda" className="text-[19px] font-extrabold text-accent no-underline">{profile.logo}</a>
        <nav aria-label="Navigasi utama" className="flex flex-wrap gap-x-8 gap-y-1 text-base md:gap-x-12">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="font-medium no-underline hover:text-accent">{label}</a>
          ))}
        </nav>
      </header>

      <main>
        <div id="beranda" className="grid items-center gap-10 pb-16 pt-4 md:min-h-[calc(100vh-80px)] md:grid-cols-2 md:gap-8">
          <div>
            <p className="mb-1 text-[21px] font-bold text-accent">Halo Semua 👋, Saya</p>
            <h1 className="text-[40px] font-extrabold leading-[1.15] tracking-tight md:text-[48px]">{profile.name}</h1>
            <p className={`mt-1 ${profile.company ? 'text-lg text-muted' : 'text-2xl text-ink'}`}>
              {profile.role}{' '}
              {profile.company && <a href={profile.companyUrl} className="text-2xl text-ink underline underline-offset-4">{profile.company}</a>}
            </p>
            <p className="mb-8 mt-6 max-w-[640px] text-base text-muted">{profile.intro}</p>
            <a href="#kontak" className={btnMain}>Hubungi Saya</a>
          </div>
          <Photo />
        </div>

        <Section id="tentang" title="Tentang Saya">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
            <div className="space-y-3.5 text-muted">{profile.about.map((t) => <p key={t}>{t}</p>)}</div>
            <div className="flex flex-wrap content-start gap-2.5">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-line bg-soft px-4 py-2 text-[15px] font-medium">{s}</span>
              ))}
            </div>
          </div>
        </Section>

        <Section id="project" title="Project">
          <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter proyek">
            {filters.map(([id, label]) => (
              <button
                key={id}
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
                className={`cursor-pointer rounded-full border-[1.5px] px-[18px] py-2 text-[15px] font-medium ${
                  filter === id ? 'border-accent bg-accent text-accent-ink' : 'border-line bg-transparent text-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className={grid}>
            {shown.map((p) => <Card key={p.title} title={p.title} desc={p.desc} extra={p.stack} link={p.link} linkText={p.linkText} />)}
          </div>
        </Section>

        <Section id="pendidikan" title="Pendidikan">
          <div className="mx-auto max-w-[900px]">
            {education.map((e) => <Card key={e.title} title={e.title} small={e.place} desc={e.desc} />)}
          </div>
        </Section>

        <Section id="sertifikasi" title="Sertifikasi">
          <CertList />
        </Section>

        <Section id="pengalaman" title="Pengalaman">
          <ul className="border-l-[3px] border-line pl-5">
            {experience.map((x) => (
              <li key={x.title} className="relative pb-8 pl-5 before:absolute before:-left-[29px] before:top-2 before:size-[15px] before:rounded-full before:border-[3px] before:border-bg before:bg-accent">
                <h3 className="text-[22px] font-bold leading-tight">{x.title}</h3>
                <small className="text-muted">{x.date}</small>
                <p className="mt-1.5 max-w-[60em] text-muted">{x.desc}</p>
              </li>
            ))}
          </ul>
        </Section>

        {posts.length > 0 && (
          <Section id="blog" title="Blog">
            <div className={grid}>
              {posts.map((p) => <Card key={p.title} small={p.date} title={p.title} desc={p.desc} link={p.link} linkText="Baca selengkapnya" />)}
            </div>
          </Section>
        )}

        <Section id="kontak" title="Kontak">
          <p className="mx-auto mb-8 max-w-[34em] text-center text-lg text-muted">Punya proyek atau peluang kerja sama? Kirim pesan, saya biasanya membalas dalam satu hari.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className={btnMain}>{profile.email}</a>
            <a href={profile.github} className={btnAlt}>GitHub</a>
            <a href={profile.linkedin} className={btnAlt}>LinkedIn</a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line pb-12 pt-7 text-[15px] text-muted">© 2026 {profile.name}</footer>
    </div>
  )
}
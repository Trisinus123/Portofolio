import { useState } from 'react'
import { profile, nav, skills, filters, projects, education, certificates, experience, posts } from './data'
import './styles.css'

const container = 'mx-auto max-w-[1600px] px-6 md:px-[6.4vw]'
const btn = 'inline-block rounded-full border-2 px-8 py-2.5 text-base font-bold no-underline hover:opacity-90'
const btnMain = `${btn} border-accent bg-accent text-accent-ink`

// alt = true -> latar abu kebiruan, false -> putih. Latar melebar penuh ke kiri dan kanan layar.
function Section({ id, title, alt = false, children }) {
  return (
    <section id={id} className={`py-20 ${alt ? 'bg-alt' : 'bg-bg'}`}>
      <div className={container}>
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight after:mx-auto after:mt-3 after:block after:h-1.5 after:w-14 after:rounded-sm after:bg-accent md:text-[40px] md:leading-[1.1]">
          {title}
        </h2>
        {children}
      </div>
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
    <article className="flex flex-col gap-2.5 rounded-2xl border border-line bg-soft p-6 shadow-sm">
      {small && <small className="font-medium text-accent">{small}</small>}
      <h3 className="text-[22px] font-bold leading-tight">{title}</h3>
      <p className="text-muted">{desc}</p>
      {extra && <small className="font-medium text-accent">{extra}</small>}
      {link && <a href={link} className="mt-auto pt-1.5 font-bold text-accent">{linkText}</a>}
    </article>
  )
}

// Kartu pendidikan dengan logo kampus di sebelah kiri
function EducationCard({ logo, title, place, desc }) {
  return (
    <article className="flex items-center gap-5 rounded-2xl border border-line bg-soft p-6 shadow-sm md:gap-6">
      {logo && <img src={logo} alt="" className="size-16 shrink-0 object-contain md:size-20" />}
      <div>
        {place && <small className="font-medium text-accent">{place}</small>}
        <h3 className="mt-1 text-[22px] font-bold leading-tight">{title}</h3>
        <p className="mt-1.5 text-muted">{desc}</p>
      </div>
    </article>
  )
}

function ProjectCard({ image, title, desc, link, linkText }) {
  return (
    <article>
      <div className="aspect-[21/10] overflow-hidden rounded-2xl border border-line bg-alt shadow-sm">
        {image ? (
          <img src={image} alt={`Tampilan ${title}`} loading="lazy" className="h-full w-full object-cover object-top" />
        ) : (
          <div className="grid h-full place-items-center text-sm text-muted">Gambar belum ditambahkan</div>
        )}
      </div>
      <h3 className="mt-6 text-2xl font-bold leading-tight">{title}</h3>
      <p className="mt-3 text-base text-muted">{desc}</p>
      {link && <a href={link} className="mt-3 inline-block font-bold text-accent">{linkText}</a>}
    </article>
  )
}

function CertList() {
  return (
    <ul className="mx-auto max-w-[900px] divide-y divide-line overflow-hidden rounded-2xl border border-line bg-soft shadow-sm">
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

const icons = {
  instagram: (
    <>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  email: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
}

function SocialLinks() {
  const items = [
    { name: 'instagram', label: 'Instagram', href: profile.instagram },
    { name: 'github', label: 'GitHub', href: profile.github },
    { name: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
    { name: 'email', label: 'Email', href: `mailto:${profile.email}` },
  ].filter((i) => i.href)

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((i) => (
        <a
          key={i.name}
          href={i.href}
          aria-label={i.label}
          title={i.label}
          target={i.name === 'email' ? undefined : '_blank'}
          rel={i.name === 'email' ? undefined : 'noopener noreferrer'}
          className="grid size-14 place-items-center rounded-full border-2 border-line bg-soft text-ink transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-ink"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {icons[i.name]}
          </svg>
        </a>
      ))}
    </div>
  )
}

const grid = 'grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]'

export default function App() {
  const [filter, setFilter] = useState('semua')
  const shown = projects.filter((p) => filter === 'semua' || p.type === filter)

  return (
    <div className="bg-bg font-sans text-base leading-relaxed">
      <header className={`${container} flex min-h-20 flex-wrap items-center justify-between gap-x-10 gap-y-3 py-3`}>
        <a href="#beranda" className="text-[19px] font-extrabold text-accent no-underline">{profile.logo}</a>
        <nav aria-label="Navigasi utama" className="flex flex-wrap gap-x-8 gap-y-1 text-base md:gap-x-12">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="font-medium no-underline hover:text-accent">{label}</a>
          ))}
        </nav>
      </header>

      <main>
        {/* Beranda: putih */}
        <div id="beranda" className={`${container} grid items-center gap-10 pb-16 pt-4 md:min-h-[calc(100vh-80px)] md:grid-cols-2 md:gap-8`}>
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

        <Section id="tentang" title="Tentang Saya" alt>
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
          <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter proyek">
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
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {shown.map((p) => (
              <ProjectCard key={p.title} image={p.image} title={p.title} desc={p.desc} link={p.link} linkText={p.linkText} />
            ))}
          </div>
        </Section>

        <Section id="pendidikan" title="Pendidikan" alt>
          <div className="mx-auto max-w-[900px] space-y-5">
            {education.map((e) => (
              <EducationCard key={e.title} logo={e.logo} title={e.title} place={e.place} desc={e.desc} />
            ))}
          </div>
        </Section>

        <Section id="sertifikasi" title="Sertifikasi">
          <CertList />
        </Section>

        <Section id="pengalaman" title="Pengalaman" alt>
          <ul className="border-l-[3px] border-line pl-5">
            {experience.map((x) => (
              <li key={x.title} className="relative pb-8 pl-5 before:absolute before:-left-[29px] before:top-2 before:size-[15px] before:rounded-full before:border-[3px] before:border-alt before:bg-accent">
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

        {/* Kontak selang-seling otomatis: abu kalau ada Blog di atasnya, putih kalau tidak */}
        <Section id="kontak" title="Kontak" alt={posts.length > 0}>
          <p className="mb-8 text-center text-2xl font-bold">Hubungi Saya</p>
          <SocialLinks />
        </Section>
      </main>

      <footer className="border-t border-line bg-alt py-8 text-center text-[15px] text-muted">
      <div className={container}>© 2026 {profile.name}</div>
      </footer>
    </div>
  )
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/reveal';

const projects = [
  {
    title: 'Aster Atelier',
    category: 'Digital Direction · Luxury Commerce',
    image:
      'https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=2000&q=80',
    span: 'col-span-12'
  },
  {
    title: 'Northbound Residences',
    category: 'Brand System · Hospitality',
    image:
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=1600&q=80',
    span: 'col-span-12 md:col-span-6'
  },
  {
    title: 'Hedra Capital',
    category: 'Product Narrative · Finance',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    span: 'col-span-12 md:col-span-6'
  },
  {
    title: 'Lumen Framework',
    category: 'Experience Architecture · SaaS',
    image:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=2000&q=80',
    span: 'col-span-12'
  }
];

const clients = ['Aesop', 'Airbnb', 'Notion', 'Stripe', 'Moncler', 'Vogue', 'Sonos', 'Patagonia', 'Figma'];

const awards = ['Awwwards Site of the Day · 2024', 'CSS Design Awards · UX Innovation', 'Behance Interaction Feature'];

export default function Home() {
  const utcTime = new Date().toUTCString().slice(17, 22);
  const localTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-bg/60 px-6 py-5 backdrop-blur-md md:px-12">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between text-[0.69rem] uppercase tracking-editorial">
          <Link href="/" className="link-underline">
            Hardik Sharma
          </Link>
          <div className="flex gap-5 md:gap-8">
            <a href="#work" className="link-underline">
              Work
            </a>
            <a href="#about" className="link-underline">
              About
            </a>
            <a href="#contact" className="link-underline">
              Contact
            </a>
            <Link href="/archive" className="link-underline">
              Archive
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto flex min-h-[88vh] max-w-[1400px] flex-col justify-center px-6 pb-16 pt-28 md:px-12">
        <Reveal>
          <h1 className="max-w-5xl font-[var(--font-serif)] text-[clamp(2.8rem,6.5vw,7.5rem)] leading-[0.96] text-charcoal">
            Hardik Sharma is a design strategist crafting digital experiences at the intersection of culture and commerce.
          </h1>
        </Reveal>
        <Reveal className="mt-10 max-w-2xl text-sm leading-relaxed text-charcoal/70 md:text-base" delay={0.15}>
          He partners with ambitious teams to shape clear narratives, premium interfaces, and systems that are as intentional as
          they are expressive. His process balances editorial restraint with product rigor.
        </Reveal>
        <motion.div
          initial={{ scaleY: 0.2, opacity: 0.4 }}
          animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, repeatType: 'mirror', ease: 'easeInOut' }}
          className="mt-14 h-16 w-px origin-top bg-charcoal/40"
        />
      </section>

      <section id="work" className="mx-auto max-w-[1400px] px-6 py-10 md:px-12">
        <Reveal className="mb-10 text-[0.68rem] uppercase tracking-editorial text-charcoal/60">Selected Work</Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <Reveal key={project.title} className={`${project.span}`} delay={index * 0.1}>
              <motion.article whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-[2px]">
                <div className="grain relative aspect-[16/10] overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-6 text-bg"
                >
                  <p className="font-[var(--font-serif)] text-2xl">{project.title}</p>
                  <p className="mt-1 text-[0.67rem] uppercase tracking-editorial">{project.category}</p>
                </motion.div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2 md:px-12">
        <Reveal className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal/10">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1300&q=80"
            alt="Hardik Sharma portrait"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover grayscale"
          />
        </Reveal>
        <div>
          <Reveal className="text-[0.68rem] uppercase tracking-editorial text-charcoal/60">About</Reveal>
          <Reveal className="mt-5 max-w-xl font-[var(--font-serif)] text-3xl leading-tight md:text-4xl" delay={0.1}>
            Hardik builds elegant digital products through narrative precision and uncompromising attention to detail.
          </Reveal>
          <Reveal className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-charcoal/75 md:text-base" delay={0.2}>
            <p>
              Over the last decade, he has led multidisciplinary teams across strategy, design, and development—translating
              abstract business goals into tactile digital experiences.
            </p>
            <p>
              His work is defined by systems thinking, cinematic pacing, and a deep understanding of how people move through
              interfaces. Every project is approached as an editorial artifact: intentional, concise, and emotionally resonant.
            </p>
          </Reveal>

          <Reveal className="mt-10" delay={0.3}>
            <h3 className="mb-4 text-[0.68rem] uppercase tracking-editorial text-charcoal/60">Selected Clients</h3>
            <div className="grid grid-cols-3 gap-y-3 text-sm text-charcoal/80">
              {clients.map((client) => (
                <span key={client}>{client}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12" delay={0.4}>
            <h3 className="mb-4 text-[0.68rem] uppercase tracking-editorial text-charcoal/60">Recognition</h3>
            <div className="divide-y divide-charcoal/20 border-y border-charcoal/20 text-sm text-charcoal/80">
              {awards.map((award) => (
                <p key={award} className="py-3">
                  {award}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="contact" className="border-t border-charcoal/20 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <a
              href="mailto:hardik@example.com"
              className="inline-block font-[var(--font-serif)] text-[clamp(3rem,10vw,9rem)] leading-none transition-colors hover:text-olive"
            >
              Let&apos;s Talk
            </a>
          </Reveal>
          <Reveal className="mt-8 flex gap-8 text-[0.68rem] uppercase tracking-editorial text-charcoal/70" delay={0.15}>
            <a className="link-underline hover:text-slate" href="https://instagram.com">
              Instagram
            </a>
            <a className="link-underline hover:text-slate" href="https://linkedin.com">
              LinkedIn
            </a>
            <a className="link-underline hover:text-slate" href="https://twitter.com">
              Twitter
            </a>
          </Reveal>
          <Reveal className="mt-14 flex flex-col gap-2 text-xs uppercase tracking-editorial text-charcoal/60 md:flex-row md:justify-between" delay={0.2}>
            <p>Hardik Sharma © 2024</p>
            <p>
              UTC {utcTime} · Local {localTime}
            </p>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}

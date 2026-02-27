import Link from 'next/link';

export default function ArchivePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-6 py-20 md:px-12">
      <p className="text-[0.68rem] uppercase tracking-editorial text-charcoal/60">Archive</p>
      <h1 className="mt-8 max-w-3xl font-[var(--font-serif)] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.94]">
        A running index of experiments, prototypes, and studies.
      </h1>
      <p className="mt-8 max-w-xl text-sm text-charcoal/70 md:text-base">
        This space is reserved for works in progress and fragments from ongoing explorations.
      </p>
      <Link href="/" className="link-underline mt-14 w-fit text-[0.68rem] uppercase tracking-editorial">
        Back Home
      </Link>
    </main>
  );
}

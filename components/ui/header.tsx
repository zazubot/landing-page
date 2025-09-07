import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-neutral-100),var(--color-neutral-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/join"
                className="btn-sm bg-green-800 text-neutral-200 shadow-sm hover:bg-green-900"
              >
                Book a demo
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="btn-sm bg-white text-neutral-800 shadow-sm hover:bg-neutral-50"
              >
                Pricing table
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

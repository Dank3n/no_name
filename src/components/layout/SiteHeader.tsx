"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/config";
import BrandLogo from "@/components/brand/BrandLogo";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import SocialLinks from "@/components/layout/SocialLinks";
import OpenNowBadge from "@/components/layout/OpenNowBadge";
import { useLocale } from "@/contexts/LocaleContext";
import { PawPrint } from "lucide-react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { ui, dir } = useLocale();
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "border-[var(--color-gold)]/20 bg-black/95 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
          : "border-[var(--color-gold)]/10 bg-black/90"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" onClick={closeMenu} className="shrink-0 text-left">
          <BrandLogo size="sm" align="left" />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <OpenNowBadge compact className="hidden sm:inline-flex" />
          <span
            className="hidden items-center text-[var(--color-gold)] sm:inline-flex"
            title={ui("nav.petFriendly")}
            aria-label={ui("nav.petFriendly")}
          >
            <PawPrint className="h-4 w-4" />
          </span>
          <LanguageSwitcher variant="header" />
          <button
            type="button"
            className="flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label={ui("a11y.menu")}
            aria-expanded={open}
          >
            <span className={`h-0.5 w-6 bg-[var(--color-gold)] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-[var(--color-gold)] transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-[var(--color-gold)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          dir={dir}
          className="border-t border-[var(--color-gold)]/10 bg-black/98 px-4 py-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className={`block w-full py-3 text-start text-xs tracking-[0.25em] uppercase ${
                  isActive(item.href)
                    ? "text-[var(--color-gold)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                }`}
              >
                {ui(`nav.${item.id}`)}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 py-3 text-[11px] tracking-[0.2em] text-[var(--color-gold)] uppercase sm:hidden">
              <PawPrint className="h-4 w-4" />
              <span>{ui("nav.petFriendly")}</span>
            </div>
            <div className="mt-4 border-t border-[var(--color-gold)]/10 pt-4">
              <SocialLinks size="sm" showLabel />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

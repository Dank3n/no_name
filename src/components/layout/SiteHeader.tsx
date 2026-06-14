"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";
import BrandLogo from "@/components/brand/BrandLogo";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import SocialLinks from "@/components/layout/SocialLinks";
import { useLocale } from "@/contexts/LocaleContext";
import { PawPrint } from "lucide-react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { ui, dir } = useLocale();

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-gold)]/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <button type="button" onClick={() => scrollTo("hero")} className="shrink-0 text-left">
          <BrandLogo size="sm" align="left" />
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="text-[10px] tracking-[0.25em] text-[var(--color-text-muted)] uppercase transition hover:text-[var(--color-gold)]"
              >
                {ui(`nav.${item.id}`)}
              </button>
            ))}
            <span
              className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.22em] text-[var(--color-gold)] uppercase"
              title={ui("nav.petFriendly")}
              aria-label={ui("nav.petFriendly")}
            >
              <PawPrint className="h-3.5 w-3.5" />
              {ui("nav.petFriendly")}
            </span>
          </nav>
          <SocialLinks size="sm" />
          <LanguageSwitcher variant="header" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
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
          className="border-t border-[var(--color-gold)]/10 bg-black/98 px-4 py-4 md:hidden"
        >
          {siteConfig.navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="block w-full py-3 text-start text-xs tracking-[0.25em] text-[var(--color-text-muted)] uppercase hover:text-[var(--color-gold)]"
            >
              {ui(`nav.${item.id}`)}
            </button>
          ))}
          <div className="mt-2 flex items-center gap-2 py-3 text-[11px] tracking-[0.2em] text-[var(--color-gold)] uppercase">
            <PawPrint className="h-4 w-4" />
            <span>{ui("nav.petFriendly")}</span>
          </div>
          <div className="mt-4 border-t border-[var(--color-gold)]/10 pt-4">
            <SocialLinks size="sm" showLabel />
          </div>
        </nav>
      )}
    </header>
  );
}

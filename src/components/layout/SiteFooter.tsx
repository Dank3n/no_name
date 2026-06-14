"use client";

import { siteConfig } from "@/data/config";
import BrandLogo from "@/components/brand/BrandLogo";
import GoldWaves from "@/components/decor/GoldWaves";
import SocialLinks from "@/components/layout/SocialLinks";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useLocale } from "@/contexts/LocaleContext";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const { contact, brand } = siteConfig;
  const { ui, t, dir } = useLocale();
  const firstHoursRow = contact.hours[0];

  return (
    <footer className="relative border-t border-[var(--color-gold)]/10 bg-black">
      <div className="absolute top-0 right-0 left-0 -translate-y-full rotate-180">
        <GoldWaves variant="divider" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6" dir={dir}>
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-6 sm:items-start">
            <BrandLogo size="md" align="center" className="sm:items-start" />
            <SocialLinks size="md" showLabel />
            <LanguageSwitcher variant="footer" />
          </div>

          <div className="text-center text-sm text-[var(--color-text-muted)] sm:text-end">
            <p>{contact.address}</p>
            <p className="mt-2">
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-[var(--color-gold-light)] transition hover:text-[var(--color-emerald)]"
              >
                {contact.phone}
              </a>
            </p>
            {firstHoursRow && (
              <p className="mt-2 text-xs tracking-[0.2em] text-[var(--color-gold)]/75 uppercase">
                {t(firstHoursRow.days)}: {t(firstHoursRow.time)}
              </p>
            )}
          </div>
        </div>

        <div className="gold-line mx-auto mt-10 max-w-xs" />
        <p className="mt-6 text-center text-[10px] tracking-[0.3em] text-[var(--color-text-muted)] uppercase">
          © {year} {brand.primary} · {brand.secondary} · {ui("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

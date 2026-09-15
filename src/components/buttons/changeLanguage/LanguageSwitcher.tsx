"use client";

import { useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { resolveLocale, type Locale } from "@/lib/i18n/locale";
import Image from "next/image";
import { useNavTheme } from "@/components/providers/NavThemeProvider";

const LOCALE_LABELS: Record<Locale, string> = {
    en: "English",
    ar: "العربية",
};

function readLocaleCookie(): Locale {
    const match = document.cookie.match(/(?:^|; )locale=([^;]+)/);
    return resolveLocale(match?.[1]);
}

function setLocaleCookie(locale: Locale) {
    document.cookie = `locale=${locale}; path=/; max-age=31536000`;
}

function subscribeToNothing() {
    return () => { };
}

function getServerLocale(): Locale {
    return "en";
}

function FlagIcon({ locale }: { locale: Locale }) {
    return (
        <Image
            src={locale === "en" ? "/images/logos/language/english.svg" : "/images/logos/language/saudi.webp"}
            alt={LOCALE_LABELS[locale]}
            width={20}
            height={20}
        />
    )
}

export default function LanguageSwitcher({ forceDark = false }: { forceDark?: boolean }) {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useSyncExternalStore(subscribeToNothing, readLocaleCookie, getServerLocale);
    const targetLocale: Locale = locale === "en" ? "ar" : "en";
    const isDark = useNavTheme();
    const t = useTranslations("Common.language");
    const switchLocale = () => {
        setLocaleCookie(targetLocale);
        router.refresh();
    };

    return (
        <button
            type="button"
            onClick={switchLocale}
            className={`flex flex-row items-center gap-2 text-white font-inter text-6 3xl:text-5 no-focus-ring ${(forceDark || isDark || pathname !== "/") && "text-black!"}`}
            aria-label={t("switchTo", { language: LOCALE_LABELS[targetLocale] })}
        >
            <FlagIcon locale={targetLocale} />
            <span>{LOCALE_LABELS[targetLocale]}</span>
        </button>
    );
}

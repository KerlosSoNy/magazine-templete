export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export function resolveLocale(value?: string | null): Locale {
    return (locales as readonly string[]).includes(value ?? "") ? (value as Locale) : "en";
}

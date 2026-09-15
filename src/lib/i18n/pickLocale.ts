import { resolveLocale } from '@/lib/i18n/locale';

export type LocalizedText = {
    en: string;
    ar: string;
};

export function pickLocale(value: LocalizedText, locale: string): string {
    return value[resolveLocale(locale)];
}

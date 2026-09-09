'use client';

import { useRouter } from 'next/navigation';

const locales = ['en', 'ar'] as const;

function setLocaleCookie(locale: string) {
    document.cookie = `locale=${locale}; path=/; max-age=31536000`;
}

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
    const router = useRouter();

    function changeLocale(locale: string) {
        setLocaleCookie(locale);
        console.log('Locale changed to:', currentLocale + ' -> ' + locale);
        router.refresh();
    }

    return (
        <div>
            {locales.map((loc) => (
                <button key={loc} onClick={() => changeLocale(loc)}>
                    {loc.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
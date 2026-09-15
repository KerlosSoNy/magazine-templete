import { getLocale, getTranslations } from 'next-intl/server'
import type { Locale } from '@/lib/i18n/locale'
import type { LocalizedText } from '@/lib/i18n/pickLocale'
import { pickLocale } from '@/lib/i18n/pickLocale'
import BoardMemberCard from './Cards/BoardMemberCard'

const boardMembers: { name: string; title: LocalizedText; image: string }[] = [
    {
        name: 'Isam M. Al Muhaidib',
        title: { en: 'AMG Senior VP, Industrial Investment Division', ar: 'نائب الرئيس الأول لمجموعة المهيدب، قسم الاستثمار الصناعي' },
        image: '/images/about/board/Isam.png',
    },
    {
        name: 'Richard Kassaby',
        title: { en: 'AMG Chief Financial Officer', ar: 'المدير المالي التنفيذي لمجموعة المهيدب' },
        image: '/images/about/board/Richard.png',
    },
    {
        name: 'Kamel El-Khatib',
        title: { en: 'AMG VP, Food & Consumer Investment Division', ar: 'نائب الرئيس لمجموعة المهيدب، قسم استثمارات الأغذية والمستهلكين' },
        image: '/images/about/board/Kamel.png',
    },
    {
        name: 'Sayer Al-Shammari',
        title: { en: 'AMG VP, Real Estate Investment Division', ar: 'نائب الرئيس لمجموعة المهيدب، قسم الاستثمار العقاري' },
        image: '/images/about/board/Sayer.png',
    },
]

const executiveManagement: { name: string; title: LocalizedText; image: string }[] = [
    { name: 'Ahmed Fahmy', title: { en: 'Managing Partner', ar: 'شريك إداري' }, image: '/images/about/board/Ahmed.png' },
    { name: 'Mourad Ashour', title: { en: 'Managing Partner', ar: 'شريك إداري' }, image: '/images/about/board/Mourad.png' },
]

export default async function BoardOfDirectors() {
    const t = await getTranslations('AboutPage.boardOfDirectors')
    const locale = (await getLocale()) as Locale

    return (
        <div data-nav-bg="black" className="w-screen flex flex-col items-center py-16 xl:py-24 px-4 sm:px-8 lg:px-0 bg-main relative max-w-full overflow-hidden">
            <div className="container flex flex-col items-center z-2">
                <h2 className="text-3 xl:text-1 font-bold text-white text-center">{t('heading')}</h2>
                <p className="max-w-156 text-5 text-white/80 text-center mt-3 leading-5">{t('subheading')}</p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
                    {boardMembers.map((member) => (
                        <BoardMemberCard key={member.name} name={member.name} image={member.image} title={pickLocale(member.title, locale)} />
                    ))}
                </div>

                <h2 className="text-3 xl:text-1 font-bold text-white text-center mt-16">{t('executiveHeading')}</h2>

                <div className="grid grid-cols-2 gap-6 mt-10 w-full lg:w-[calc(50%-0.75rem)]">
                    {executiveManagement.map((member) => (
                        <BoardMemberCard key={member.name} name={member.name} image={member.image} title={pickLocale(member.title, locale)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { DarkCalendarIcon } from '@/components/icons/icons'
import type { Locale } from '@/lib/i18n/locale'
import type { LocalizedText } from '@/lib/i18n/pickLocale'
import { pickLocale } from '@/lib/i18n/pickLocale'
import MilestoneCard from './Cards/MilestoneCard'
import { AboutUsIconLegacySection } from '@/components/icons/aboutUs'

const milestones: { year: string; title: LocalizedText; points: LocalizedText[] }[] = [
    {
        year: '2021',
        title: { en: 'Ideation', ar: 'التأسيس والانطلاقة' },
        points: [
            { en: 'First Business Excellence expertise initiated within Al-Muhaidib Group as custodian of best practices', ar: 'انطلاق أولى خبرات التميّز المؤسسي داخل مجموعة المهيدب كجهة أمينة على أفضل الممارسات' },
            { en: 'First steps going live with 4 projects within an investment vertical', ar: 'الخطوات الأولى للتنفيذ الفعلي بأربعة مشاريع ضمن أحد قطاعات الاستثمار' },
            { en: 'Value recognized by clients creating pull for more support', ar: 'قيمة معترف بها من العملاء أوجدت طلباً متزايداً على مزيد من الدعم' },
        ],
    },
    {
        year: '2022',
        title: { en: 'Scaling', ar: 'التوسع' },
        points: [
            { en: 'Completed over 10 projects within the Food & Consumer sector', ar: 'إنجاز أكثر من 10 مشاريع ضمن قطاع الأغذية والمستهلكين' },
            { en: 'Recognized from Al-Muhaidib group for its impactful efforts', ar: 'تقدير من مجموعة المهيدب لجهودها المؤثرة' },
            { en: 'Initiated additional services', ar: 'إطلاق خدمات إضافية' },
        ],
    },
    {
        year: '2023',
        title: { en: 'Expansion', ar: 'التمدد' },
        points: [
            { en: 'Expanded the team to increase reach of value creation', ar: 'توسيع الفريق لزيادة نطاق تحقيق القيمة' },
            { en: 'Completed over 27 projects', ar: 'إنجاز أكثر من 27 مشروعاً' },
            { en: 'Refining the services into specialized pillars to tailor for needs', ar: 'صقل الخدمات ضمن محاور متخصصة لتلبية الاحتياجات' },
        ],
    },
    {
        year: '2024',
        title: { en: 'Carve-out', ar: 'الاستقلال المؤسسي' },
        points: [
            { en: 'Firm legal establishment & successful initiation of operations', ar: 'التأسيس القانوني للشركة والبدء الناجح للعمليات' },
            { en: 'Completed over 17 projects', ar: 'إنجاز أكثر من 17 مشروعاً' },
            { en: "Set and commenced the firm's long-term strategy", ar: 'وضع الاستراتيجية طويلة الأمد للشركة والشروع في تنفيذها' },
            { en: "Firm's first Board of Directors assembly for direction and guidance", ar: 'أول اجتماع لمجلس إدارة الشركة لتحديد التوجهات وتقديم الإرشاد' },
        ],
    },
]

export default function Legacy() {
    const t = useTranslations('AboutPage.legacy')
    const locale = useLocale() as Locale
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })
    const y = useTransform(scrollYProgress, [0, 1], [-80, 80])

    return (
        <div ref={sectionRef} className="w-screen flex flex-col items-center py-16 lg:py-24 bg-white relative px-4 sm:px-8 lg:px-0">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <AboutUsIconLegacySection />
            </div>

            <h2 className="text-3 md:text-2 lg:text-1 font-bold text-text-secondary text-center leading-3 md:leading-2 lg:leading-1 z-2">
                {t('headingLine1')}<br />
                {t('headingLine2Prefix')} <span className="text-main">{t('headingHighlight')}</span>
            </h2>
            <span className="text-6 md:text-5 font-bold text-text-secondary text-center mt-4 z-2">{t('subheading')}</span>

            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14 items-start z-2">
                <div className="lg:sticky lg:top-24 w-full max-w-114.25 lg:max-w-none lg:w-[457.06px] justify-self-center lg:justify-self-end">
                    <div className="relative h-72 sm:h-90 lg:h-[677.77px] lg:min-h-[677.77px] rounded-xl overflow-hidden">
                        <motion.div style={{ y }} className="absolute inset-x-0 -top-24 -bottom-24">
                            <Image
                                src="/images/about/hand.jpg"
                                alt={t("imageAlt")}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="relative flex flex-col gap-20">
                    <div className="absolute inset-s-5 top-4 bottom-3.5 w-px bg-[#EAE9E9]" />
                    {milestones.map((milestone) => (
                        <div key={milestone.year} className="relative flex gap-4 items-start">
                            <span className="relative z-10 mt-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAE9E9]">
                                <DarkCalendarIcon />
                            </span>
                            <MilestoneCard
                                year={milestone.year}
                                title={pickLocale(milestone.title, locale)}
                                points={milestone.points.map((point) => pickLocale(point, locale))}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
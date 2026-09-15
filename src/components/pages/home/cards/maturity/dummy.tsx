import type { LocalizedText } from '@/lib/i18n/pickLocale'

export interface MaturityItem {
    title: LocalizedText
    description: LocalizedText
    percentage: number
    icon: React.ReactNode
}

export const maturityData: MaturityItem[] = [
    {
        title: { en: "Strategy & Vision", ar: "الاستراتيجية والرؤية" },
        description: {
            en: "Align AI with core business goals and define a clear roadmap.",
            ar: "مواءمة الذكاء الاصطناعي مع أهداف العمل الأساسية وتحديد خارطة طريق واضحة.",
        },
        percentage: 65,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="1" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        title: { en: "Data & Infrastructure", ar: "البيانات والبنية التحتية" },
        description: {
            en: "Evaluate your data quality and cloud infrastructure readiness.",
            ar: "تقييم جودة بياناتك ومدى جاهزية البنية التحتية السحابية لديك.",
        },
        percentage: 45,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="12" cy="5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 5V19C5 20.3807 8.13401 21.5 12 21.5C15.866 21.5 19 20.3807 19 19V5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 12C5 13.3807 8.13401 14.5 12 14.5C15.866 14.5 19 13.3807 19 12" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        title: { en: "Talent & Skills", ar: "المواهب والمهارات" },
        description: {
            en: "Assess your workforce's AI literacy and technical capabilities.",
            ar: "تقييم إلمام فريق عملك بالذكاء الاصطناعي وقدراته التقنية.",
        },
        percentage: 30,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="9" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 20C2 16.6863 5.13401 14 9 14C12.866 14 16 16.6863 16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M18 14.5C20.3696 15.1747 22 17.3625 22 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: { en: "Processes & Automation", ar: "العمليات والأتمتة" },
        description: {
            en: "Identify opportunities for RPA and intelligent process automation.",
            ar: "تحديد فرص أتمتة العمليات الآلية والأتمتة الذكية للعمليات.",
        },
        percentage: 80,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.36.36.9.99 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: { en: "Innovation Culture", ar: "ثقافة الابتكار" },
        description: {
            en: "Measure your organization's ability to experiment and scale AI.",
            ar: "قياس قدرة مؤسستك على تجربة الذكاء الاصطناعي وتوسيع نطاقه.",
        },
        percentage: 55,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 21H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 3C8.13401 3 5 6.13401 5 10C5 12.3811 6.19893 14.4818 8 15.7326V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V15.7326C17.8011 14.4818 19 12.3811 19 10C19 6.13401 15.866 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

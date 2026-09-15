import type { JobPosition, WhyJoinUsStep } from './types'

export const whyJoinUsSteps: WhyJoinUsStep[] = [
    {
        number: '01',
        title: {
            en: 'Your CV is your first impression',
            ar: 'سيرتك الذاتية هي انطباعك الأول',
        },
        description: {
            en: 'Tailor it to the role. Highlight specific achievements with numbers and outcomes not just responsibilities.',
            ar: 'خصصها لتناسب الوظيفة، وأبرز إنجازاتك بالأرقام والنتائج الملموسة وليس فقط المسؤوليات.',
        },
        icon: 'file',
    },
    {
        number: '02',
        title: {
            en: 'Meet the Recruiter',
            ar: 'قابل فريق التوظيف',
        },
        description: {
            en: 'Our AI recruiter is designed to be conversational. Speak naturally, be authentic, and let your personality come through.',
            ar: 'تم تصميم مسؤول التوظيف لدينا المعتمد على الذكاء الاصطناعي ليكون تفاعليًا وودودًا. تحدث بشكل طبيعي، وكن صادقًا، ودع شخصيتك تظهر.',
        },
        icon: 'video',
    },
    {
        number: '03',
        title: {
            en: 'The assignment',
            ar: 'المهمة التقييمية',
        },
        description: {
            en: 'Treat the real-world assignment like your first task on the job. Show your thinking, your process, and a flavour of who you are — not just the answer.',
            ar: 'تعامل مع المهمة العملية وكأنها أول مَهمّة لك في الوظيفة. أظهر طريقة تفكيرك وأسلوب عملك ولمحة عن شخصيتك، وليس فقط الإجابة النهائية.',
        },
        icon: 'checklist',
    },
    {
        number: '04',
        title: {
            en: "Top Management want your 'why'",
            ar: 'الإدارة العليا تريد معرفة دافعك',
        },
        description: {
            en: 'Be ready to articulate your long-term ambition and why Minds Advisory is the right place to build it. Think big, speak clearly.',
            ar: 'كن مستعدًا للتعبير عن طموحك طويل المدى ولماذا تعتبر مايندز أدفايزوري المكان المناسب لتحقيقه. فكر بطموح وتحدث بوضوح.',
        },
        icon: 'user',
    },
]

export const jobPositions: JobPosition[] = [
    {
        id: 'senior-business-development',
        title: {
            en: 'Senior Businesses Development',
            ar: 'أخصائي أول تطوير الأعمال',
        },
        department: {
            en: 'Businesses Development',
            ar: 'تطوير الأعمال',
        },
        isOpen: true,
        employmentType: 'Full time',
        workMode: 'On Site',
        description: {
            en: 'Lead strategic initiatives to drive business growth, build strong client relationships, and identify new market opportunities. Collaborate cross-functionally to develop and execute innovative sales strategies that expand our market presence and maximize revenue potential.',
            ar: 'قيادة المبادرات الاستراتيجية لدفع نمو الأعمال، وبناء علاقات قوية مع العملاء، وتحديد فرص السوق الجديدة. التعاون مع مختلف الفرق لتطوير وتنفيذ استراتيجيات مبيعات مبتكرة توسّع حضورنا في السوق وتعظّم إمكانات الإيرادات.',
        },
    },
    {
        id: 'content-marketing',
        title: {
            en: 'Content Marketing',
            ar: 'تسويق المحتوى',
        },
        department: {
            en: 'Marketing Strategy',
            ar: 'استراتيجية التسويق',
        },
        isOpen: true,
        employmentType: 'Part time',
        workMode: 'Remote',
        description: {
            en: 'Create and manage engaging content across various platforms, analyze content performance, and optimize strategies to enhance brand awareness and audience engagement. Collaborate with the design team to ensure visual consistency and quality across all content.',
            ar: 'إنشاء وإدارة محتوى جذاب عبر مختلف المنصات، وتحليل أداء المحتوى، وتحسين الاستراتيجيات لتعزيز الوعي بالعلامة التجارية وتفاعل الجمهور. التعاون مع فريق التصميم لضمان الاتساق البصري والجودة في جميع المحتويات.',
        },
    },
    {
        id: 'business-insights',
        title: {
            en: 'Business Insights',
            ar: 'تحليلات الأعمال',
        },
        department: {
            en: 'Businesses Development',
            ar: 'تطوير الأعمال',
        },
        isOpen: true,
        employmentType: 'Contract',
        workMode: 'Hybrid',
        description: {
            en: 'Utilize data analysis techniques to interpret complex datasets, providing actionable insights that support decision-making across departments. Develop reports and dashboards to communicate findings effectively and facilitate data-driven strategies.',
            ar: 'استخدام تقنيات تحليل البيانات لتفسير مجموعات البيانات المعقدة، وتقديم رؤى قابلة للتنفيذ تدعم اتخاذ القرار في مختلف الأقسام. إعداد تقارير ولوحات بيانات لتوصيل النتائج بفعالية وتسهيل الاستراتيجيات المبنية على البيانات.',
        },
    },
    {
        id: 'junior-graphic-designer',
        title: {
            en: 'Junior Graphic Designer',
            ar: 'مصمم جرافيك مبتدئ',
        },
        department: {
            en: 'Design',
            ar: 'التصميم',
        },
        isOpen: false,
        employmentType: 'Part time',
        workMode: 'Remote',
        description: {
            en: 'Assist in the creation of visual content for various projects, collaborate with the design team to bring concepts to life, and help maintain brand consistency across all platforms.',
            ar: 'المساعدة في إنشاء محتوى بصري لمختلف المشاريع، والتعاون مع فريق التصميم لترجمة الأفكار إلى واقع، والمساهمة في الحفاظ على اتساق العلامة التجارية عبر جميع المنصات.',
        },
    },
]

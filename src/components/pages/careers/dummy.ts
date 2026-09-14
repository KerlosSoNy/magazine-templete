import type { JobPosition, WhyJoinUsStep } from './types'

export const whyJoinUsSteps: WhyJoinUsStep[] = [
    {
        number: '01',
        title: 'Your CV is your first impression',
        description: 'Tailor it to the role. Highlight specific achievements with numbers and outcomes not just responsibilities.',
        icon: 'file',
    },
    {
        number: '02',
        title: 'Meet the Recruiter',
        description: 'Our AI recruiter is designed to be conversational. Speak naturally, be authentic, and let your personality come through.',
        icon: 'video',
    },
    {
        number: '03',
        title: 'The assignment',
        description: 'Treat the real-world assignment like your first task on the job. Show your thinking, your process, and a flavour of who you are — not just the answer.',
        icon: 'checklist',
    },
    {
        number: '04',
        title: "Top Management want your 'why'",
        description: 'Be ready to articulate your long-term ambition and why Minds Advisory is the right place to build it. Think big, speak clearly.',
        icon: 'user',
    },
]

export const jobPositions: JobPosition[] = [
    {
        id: 'senior-business-development',
        title: 'Senior Businesses Development',
        department: 'Businesses Development',
        isOpen: true,
        employmentType: 'Full time',
        workMode: 'On Site',
        description:
            'Lead strategic initiatives to drive business growth, build strong client relationships, and identify new market opportunities. Collaborate cross-functionally to develop and execute innovative sales strategies that expand our market presence and maximize revenue potential.',
    },
    {
        id: 'content-marketing',
        title: 'Content Marketing',
        department: 'Marketing Strategy',
        isOpen: true,
        employmentType: 'Part time',
        workMode: 'Remote',
        description:
            'Create and manage engaging content across various platforms, analyze content performance, and optimize strategies to enhance brand awareness and audience engagement. Collaborate with the design team to ensure visual consistency and quality across all content.',
    },
    {
        id: 'business-insights',
        title: 'Business Insights',
        department: 'Businesses Development',
        isOpen: true,
        employmentType: 'Contract',
        workMode: 'Hybrid',
        description:
            'Utilize data analysis techniques to interpret complex datasets, providing actionable insights that support decision-making across departments. Develop reports and dashboards to communicate findings effectively and facilitate data-driven strategies.',
    },
    {
        id: 'junior-graphic-designer',
        title: 'Junior Graphic Designer',
        department: 'Design',
        isOpen: false,
        employmentType: 'Part time',
        workMode: 'Remote',
        description:
            'Assist in the creation of visual content for various projects, collaborate with the design team to bring concepts to life, and help maintain brand consistency across all platforms.',
    },
]

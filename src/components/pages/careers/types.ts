import type { LocalizedText } from '@/lib/i18n/pickLocale'

export type EmploymentType = 'Full time' | 'Part time' | 'Contract'
export type WorkMode = 'On Site' | 'Remote' | 'Hybrid'

export interface JobPosition {
    id: string
    title: LocalizedText
    department: LocalizedText
    isOpen: boolean
    employmentType: EmploymentType
    workMode: WorkMode
    description: LocalizedText
}

export interface WhyJoinUsStep {
    number: string
    title: LocalizedText
    description: LocalizedText
    icon: 'file' | 'video' | 'checklist' | 'user'
}

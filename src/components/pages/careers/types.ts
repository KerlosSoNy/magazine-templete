export type EmploymentType = 'Full time' | 'Part time' | 'Contract'
export type WorkMode = 'On Site' | 'Remote' | 'Hybrid'

export interface JobPosition {
    id: string
    title: string
    department: string
    isOpen: boolean
    employmentType: EmploymentType
    workMode: WorkMode
    description: string
}

export interface WhyJoinUsStep {
    number: string
    title: string
    description: string
    icon: 'file' | 'video' | 'checklist' | 'user'
}

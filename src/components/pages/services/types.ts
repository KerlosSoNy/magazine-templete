import type { LocalizedText } from '@/lib/i18n/pickLocale'

export interface OfferStage {
    title: LocalizedText
    description: LocalizedText
    icon: string
    outcomes: LocalizedText
    gains: LocalizedText
    iconBg?: string
}

export interface ServiceSubItem {
    icon: string
    title: LocalizedText
    description: LocalizedText
}

export interface ServiceCategory {
    key: string
    label: LocalizedText
    tabIcon: string
    bigIcon: string
    photo: string
    subtitle: LocalizedText
    description: LocalizedText
    items: ServiceSubItem[]
}

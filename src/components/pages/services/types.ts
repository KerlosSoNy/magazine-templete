export interface OfferStage {
    title: string
    description: string
    icon: string
    outcomes: string
    gains: string
    iconBg?: string
}

export interface ServiceSubItem {
    icon: string
    title: string
    description: string
}

export interface ServiceCategory {
    key: string
    label: string
    tabIcon: string
    bigIcon: string
    photo: string
    subtitle: string
    description: string
    items: ServiceSubItem[]
}

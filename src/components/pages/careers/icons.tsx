interface IconProps {
    className?: string
}

export function ClearIcon({ className = 'size-6 text-text-secondary' }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function ArrowRightIcon({ className = 'size-6' }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function ArrowUpRightIcon({ className = 'size-6' }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M9 7H17V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function SuitcaseIcon({ className = 'size-6' }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 7V5.5C9 4.67 9.67 4 10.5 4H13.5C14.33 4 15 4.67 15 5.5V7M4.5 7H19.5C20.33 7 21 7.67 21 8.5V18C21 18.83 20.33 19.5 19.5 19.5H4.5C3.67 19.5 3 18.83 3 18V8.5C3 7.67 3.67 7 4.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 13H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export function UploadIcon({ className = 'size-6' }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16V4M12 4L7 9M12 4L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 16V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function EmailIcon({ className = 'size-6' }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20C20.55 6 21 6.45 21 7V17C21 17.55 20.55 18 20 18H4C3.45 18 3 17.55 3 17V7C3 6.45 3.45 6 4 6Z" stroke="#515151" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M3.5 7L12 13L20.5 7" stroke="#515151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function FileIcon({ className = 'size-10' }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5H24L30 11V33C30 34.1 29.1 35 28 35H12C10.9 35 10 34.1 10 33V7C10 5.9 10.9 5 12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M24 5V11H30" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M14 20H26M14 25H26M14 15H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export function VideoIcon({ className = 'size-10' }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="11" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M25 17L34 12V28L25 23" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    )
}

export function ChecklistIcon({ className = 'size-10' }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="5" width="28" height="32" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13 15L15.5 17.5L20 13M13 25L15.5 27.5L20 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 15H29M24 25H29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

export function UserCircleIcon({ className = 'size-10' }: IconProps) {
    return (
        <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="20" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9.5 31C11.5 26.5 15.5 24 20 24C24.5 24 28.5 26.5 30.5 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}

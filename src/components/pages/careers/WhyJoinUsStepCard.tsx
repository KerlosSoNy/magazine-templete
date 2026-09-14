import { ChecklistIcon, FileIcon, UserCircleIcon, VideoIcon } from './icons'
import type { WhyJoinUsStep } from './types'

const STEP_ICONS: Record<WhyJoinUsStep['icon'], typeof FileIcon> = {
    file: FileIcon,
    video: VideoIcon,
    checklist: ChecklistIcon,
    user: UserCircleIcon,
}

export default function WhyJoinUsStepCard({ step, isLast }: { step: WhyJoinUsStep; isLast: boolean }) {
    const Icon = STEP_ICONS[step.icon]

    return (
        <div className={`relative flex flex-col gap-6 py-8 md:py-10 ${isLast ? '' : 'border-b border-[#9fb7b4]'}`}>
            <span className="text-[56px] md:text-[80px] leading-[0.9] font-bold uppercase text-white">
                {step.number}
            </span>
            <h3 className="text-4 md:text-3 font-bold leading-3 text-white capitalize max-w-120 pr-14">
                {step.title}
            </h3>
            <p className="text-6 md:text-5 text-white max-w-120">{step.description}</p>
            <Icon className="absolute inset-e-0 top-8 md:top-10 size-8 md:size-10 text-white" />
        </div>
    )
}

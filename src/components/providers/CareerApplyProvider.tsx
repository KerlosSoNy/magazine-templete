'use client'

import { createContext, useContext, useState } from 'react'
import type { JobPosition } from '@/components/pages/careers/types'
import ApplyFormPopup from '@/components/pages/careers/ApplyFormPopup'
import UploadCvPopup from '@/components/pages/careers/UploadCvPopup'

type ApplyStep = 'form' | 'upload' | null

interface CareerApplyContextValue {
    openApplyForm: (job: JobPosition) => void
    openUploadCv: () => void
}

const CareerApplyContext = createContext<CareerApplyContextValue | null>(null)

export function CareerApplyProvider({ children }: { children: React.ReactNode }) {
    const [step, setStep] = useState<ApplyStep>(null)
    const [activeJob, setActiveJob] = useState<JobPosition | null>(null)

    function openApplyForm(job: JobPosition) {
        setActiveJob(job)
        setStep('form')
    }

    function openUploadCv() {
        setActiveJob(null)
        setStep('upload')
    }

    function close() {
        setStep(null)
    }

    return (
        <CareerApplyContext.Provider value={{ openApplyForm, openUploadCv }}>
            {children}
            <ApplyFormPopup
                isOpen={step === 'form'}
                job={activeJob}
                onClose={close}
                onContinue={() => setStep('upload')}
            />
            <UploadCvPopup isOpen={step === 'upload'} onClose={close} />
        </CareerApplyContext.Provider>
    )
}

export function useCareerApply() {
    const context = useContext(CareerApplyContext)
    if (!context) {
        throw new Error('useCareerApply must be used within a CareerApplyProvider')
    }
    return context
}

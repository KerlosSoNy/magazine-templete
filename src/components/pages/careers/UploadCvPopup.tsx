'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Popup from '@/components/shared/popup'
import { ClearIcon, UploadIcon } from './icons'

interface UploadCvPopupProps {
    isOpen: boolean
    onClose: () => void
}

const MAX_SIZE_MB = 20
const ACCEPTED_TYPES = ['application/pdf', 'image/jpeg', 'image/png']

export default function UploadCvPopup({ isOpen, onClose }: UploadCvPopupProps) {
    const t = useTranslations('CareersPage.uploadCvPopup')
    const tCommonPopup = useTranslations('Common.popup')
    const inputRef = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<File | null>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [error, setError] = useState('')

    function handleFile(selected: File | null) {
        if (!selected) return
        if (!ACCEPTED_TYPES.includes(selected.type)) {
            setError(t('errors.invalidType'))
            return
        }
        if (selected.size > MAX_SIZE_MB * 1024 * 1024) {
            setError(t('errors.tooLarge', { size: MAX_SIZE_MB }))
            return
        }
        setError('')
        setFile(selected)
    }

    function handleClose() {
        setFile(null)
        setError('')
        setIsDragging(false)
        onClose()
    }

    function handleSubmit() {
        if (!file) {
            setError(t('errors.required'))
            return
        }
        console.log('Uploading CV', file.name)
        handleClose()
    }

    return (
        <Popup isOpen={isOpen} onClose={handleClose} animationKey="career-upload-cv">
            <div className="bg-white flex flex-col gap-8 p-6 md:p-10 rounded-2xl w-[92vw] max-w-150 relative">
                <button
                    type="button"
                    onClick={handleClose}
                    aria-label={tCommonPopup('close')}
                    className="absolute inset-e-3 top-3 md:inset-e-5 md:top-5 p-2 rounded"
                >
                    <ClearIcon />
                </button>

                <div className="flex flex-col gap-5 pe-8">
                    <span className="text-5 text-main">{t('applyNow')}</span>
                    <h2 className="text-3 font-bold text-text-secondary">{t('title')}</h2>
                    <p className="text-6 text-text-disabled">{t('subtitle')}</p>
                </div>

                <input
                    ref={inputRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                />

                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    onDragOver={(e) => {
                        e.preventDefault()
                        setIsDragging(true)
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={(e) => {
                        e.preventDefault()
                        setIsDragging(false)
                        handleFile(e.dataTransfer.files?.[0] ?? null)
                    }}
                    className={`bg-secondary-bg border border-dashed rounded-lg h-68 flex flex-col items-center justify-center gap-5 text-center px-6 transition-colors ${isDragging ? 'border-main' : 'border-text-disabled'}`}
                >
                    <div className="relative w-17.5 h-16.5 shrink-0">
                        <Image src="/images/careers/pdf-icon.svg" alt="" fill sizes="64px" className="object-contain" />
                        <span className="absolute inset-s-11 top-10 bg-white rounded-lg p-1 shadow-sm flex items-center justify-center">
                            <UploadIcon className="size-4.5 text-main" />
                        </span>
                    </div>
                    <span className="text-5 text-text-secondary break-all">
                        {file ? file.name : t('dropzoneCta')}
                    </span>
                    <span className="text-7 text-text-disabled">{t('supportFormat')}</span>
                </button>

                {error && <p className="text-6 text-red-500">{error}</p>}

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-main rounded-lg h-14 w-full flex items-center justify-center gap-2 font-bold text-5 text-white capitalize"
                >
                    <UploadIcon />
                    {t('uploadButton')}
                </button>
            </div>
        </Popup>
    )
}

import React from 'react'
import { useTranslations } from 'next-intl'
import BookForm from './bookForm'

export default function BookContainer({ setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const t = useTranslations('Common.bookForm')
    return (
        <div className="bg-white max-h-194 overflow-y-auto h-194 w-160.25 flex flex-col rounded-lg p-10">
            <div className="flex w-full flex-row items-center justify-between">
                <span className="text-2 font-bold text-text-secondary">{t('title')}</span>
                <button onClick={() => setIsOpen(false)} title={t('close')} className="focus:outline-none -me-4 -mt-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8L16 16" stroke="#15131A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 8L8 16" stroke="#15131A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <span className="text-5 text-text-secondary leading-5 mt-2.5">{t('subtitle')}</span>
            <BookForm />
        </div>
    )
}

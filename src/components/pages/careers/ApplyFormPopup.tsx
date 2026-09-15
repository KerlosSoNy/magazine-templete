'use client'

import { useFormik } from 'formik'
import { useLocale, useTranslations } from 'next-intl'
import Popup from '@/components/shared/popup'
import TextField from '@/components/inputs/Textfield'
import SelectField from '@/components/inputs/Selectfield'
import TextareaField from '@/components/inputs/Textareafield'
import CheckboxField from '@/components/inputs/checkBox'
import DateField from '@/components/pages/contactUs/getInTouch/DateField'
import { careerApplySchema } from '@/lib/validation/careerApplyValidation'
import { pickLocale } from '@/lib/i18n/pickLocale'
import type { JobPosition } from './types'
import { ArrowRightIcon, ClearIcon, EmailIcon, SuitcaseIcon, UploadIcon } from './icons'

interface ApplyFormPopupProps {
    isOpen: boolean
    job: JobPosition | null
    onClose: () => void
    onContinue: () => void
}

const currentYear = new Date().getFullYear()
const GRADUATION_YEAR_OPTIONS = Array.from({ length: 10 }, (_, index) => {
    const year = String(currentYear - index)
    return { value: year, label: year }
})

const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    university: '',
    major: '',
    graduationYear: '',
    birthday: '',
    gender: '',
    yearsOfExperience: '',
    employer: '',
    currentJobTitle: '',
    availability: '',
    currentSalary: '',
    expectedSalary: '',
    englishProficiency: '',
    otherLanguages: '',
    linkedin: '',
    whatMakesYouPartOfTeam: '',
    howDidYouKnowAboutUs: '',
}

export default function ApplyFormPopup({ isOpen, job, onClose, onContinue }: ApplyFormPopupProps) {
    const locale = useLocale()
    const t = useTranslations('CareersPage.applyForm')
    const tFields = useTranslations('CareersPage.applyForm.fields')
    const tUniversity = useTranslations('CareersPage.applyForm.universityOptions')
    const tEnglishProficiency = useTranslations('CareersPage.applyForm.englishProficiencyOptions')
    const tOtherLanguages = useTranslations('CareersPage.applyForm.otherLanguagesOptions')
    const tReferralSource = useTranslations('CareersPage.applyForm.referralSourceOptions')
    const tEmploymentType = useTranslations('CareersPage.employmentType')
    const tWorkMode = useTranslations('CareersPage.workMode')
    const tCommonGetInTouch = useTranslations('Common.getInTouch.form')
    const tCommonBook = useTranslations('Common.bookForm.fields')
    const tCommonSocial = useTranslations('Common.social')
    const tCommonPopup = useTranslations('Common.popup')

    const UNIVERSITY_OPTIONS = [
        { value: 'King Saud University', label: tUniversity('kingSaud') },
        { value: 'King Abdulaziz University', label: tUniversity('kingAbdulaziz') },
        { value: 'King Fahd University of Petroleum & Minerals', label: tUniversity('kfupm') },
        { value: 'Princess Nourah bint Abdulrahman University', label: tUniversity('princessNourah') },
        { value: 'Other', label: t('otherOption') },
    ]

    const ENGLISH_PROFICIENCY_OPTIONS = [
        { value: 'Basic', label: tEnglishProficiency('basic') },
        { value: 'Intermediate', label: tEnglishProficiency('intermediate') },
        { value: 'Advanced', label: tEnglishProficiency('advanced') },
        { value: 'Fluent', label: tEnglishProficiency('fluent') },
        { value: 'Native', label: tEnglishProficiency('native') },
    ]

    const OTHER_LANGUAGES_OPTIONS = [
        { value: 'None', label: tOtherLanguages('none') },
        { value: 'Arabic', label: tOtherLanguages('arabic') },
        { value: 'French', label: tOtherLanguages('french') },
        { value: 'German', label: tOtherLanguages('german') },
        { value: 'Other', label: t('otherOption') },
    ]

    const REFERRAL_SOURCE_OPTIONS = [
        { value: 'LinkedIn', label: tReferralSource('linkedin') },
        { value: 'Company Website', label: tReferralSource('companyWebsite') },
        { value: 'Employee Referral', label: tReferralSource('employeeReferral') },
        { value: 'Job Board', label: tReferralSource('jobBoard') },
        { value: 'Social Media', label: tReferralSource('socialMedia') },
        { value: 'Other', label: t('otherOption') },
    ]

    const formik = useFormik({
        initialValues,
        validationSchema: careerApplySchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log({ job: job?.title, ...values })
            setSubmitting(false)
            resetForm()
            onContinue()
        },
    })

    if (!job) return null

    return (
        <Popup isOpen={isOpen} onClose={onClose} animationKey="career-apply-form">
            <div className="bg-white flex flex-col gap-8 p-6 md:p-10 rounded-2xl w-[92vw] max-w-200 max-h-[88vh] relative">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label={tCommonPopup('close')}
                    className="absolute inset-e-3 top-3 md:inset-e-5 md:top-5 p-2 rounded"
                >
                    <ClearIcon />
                </button>

                <div className="flex flex-col gap-3.5 pe-8">
                    <span className="text-5 text-main">{t('applyNow')}</span>
                    <h2 className="text-3 font-bold text-text-secondary">{pickLocale(job.title, locale)}</h2>
                    <div className="flex items-center gap-2 text-text-secondary">
                        <SuitcaseIcon className="size-6" />
                        <span className="text-5">{tEmploymentType(job.employmentType)}</span>
                        <span className="text-5">/</span>
                        <span className="text-5">{tWorkMode(job.workMode)}</span>
                    </div>
                </div>

                <form onSubmit={formik.handleSubmit} className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-8 pe-1">
                    <div className="flex flex-col gap-6">
                        <p className="text-3 font-bold text-text-secondary capitalize">{t('basicInfo')}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                name="fullName"
                                label={tFields('fullName')}
                                placeholder={tFields('fullName')}
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.fullName}
                            />
                            <TextField
                                name="email"
                                label={tFields('email')}
                                icon={<EmailIcon />}
                                placeholder={tCommonGetInTouch('email')}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.email}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                name="phone"
                                label={tCommonBook('phone')}
                                type="tel"
                                placeholder="+966"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.phone}
                            />
                            <TextField
                                name="address"
                                label={tFields('address')}
                                placeholder={tFields('address')}
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.address}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SelectField
                                id="university"
                                name="university"
                                label={tFields('university')}
                                value={formik.values.university}
                                onChange={formik.handleChange}
                                options={UNIVERSITY_OPTIONS}
                                error={formik.errors.university}
                            />
                            <TextField
                                name="major"
                                label={tFields('major')}
                                placeholder={tFields('major')}
                                value={formik.values.major}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.major}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SelectField
                                id="graduationYear"
                                name="graduationYear"
                                label={tFields('graduationYear')}
                                value={formik.values.graduationYear}
                                onChange={formik.handleChange}
                                options={GRADUATION_YEAR_OPTIONS}
                                error={formik.errors.graduationYear}
                            />
                            <DateField
                                name="birthday"
                                label={tFields('birthday')}
                                value={formik.values.birthday}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.birthday}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-wrap gap-8 md:gap-24">
                                <CheckboxField
                                    id="gender-male"
                                    name="gender"
                                    label={tFields('genderMale')}
                                    checked={formik.values.gender === 'male'}
                                    onChange={() => formik.setFieldValue('gender', 'male')}
                                />
                                <CheckboxField
                                    id="gender-female"
                                    name="gender"
                                    label={tFields('genderFemale')}
                                    checked={formik.values.gender === 'female'}
                                    onChange={() => formik.setFieldValue('gender', 'female')}
                                />
                            </div>
                            {formik.errors.gender && (
                                <p className="text-6 text-red-500">{formik.errors.gender}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <p className="text-3 font-bold text-text-secondary capitalize">{t('workExperience')}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                name="yearsOfExperience"
                                label={tFields('yearsOfExperience')}
                                placeholder={tFields('yearsOfExperience')}
                                value={formik.values.yearsOfExperience}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.yearsOfExperience}
                            />
                            <TextField
                                name="employer"
                                label={tFields('employer')}
                                placeholder={tFields('employer')}
                                value={formik.values.employer}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.employer}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                name="currentJobTitle"
                                label={tFields('currentJobTitle')}
                                placeholder={tFields('currentJobTitle')}
                                value={formik.values.currentJobTitle}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.currentJobTitle}
                            />
                            <TextField
                                name="availability"
                                label={tFields('availability')}
                                placeholder={tFields('availability')}
                                value={formik.values.availability}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.availability}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                name="currentSalary"
                                label={tFields('currentSalary')}
                                type="number"
                                placeholder={tFields('currentSalary')}
                                value={formik.values.currentSalary}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.currentSalary}
                            />
                            <TextField
                                name="expectedSalary"
                                label={tFields('expectedSalary')}
                                type="number"
                                placeholder={tFields('expectedSalary')}
                                value={formik.values.expectedSalary}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.expectedSalary}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SelectField
                                id="englishProficiency"
                                name="englishProficiency"
                                label={tFields('englishProficiency')}
                                value={formik.values.englishProficiency}
                                onChange={formik.handleChange}
                                options={ENGLISH_PROFICIENCY_OPTIONS}
                                error={formik.errors.englishProficiency}
                            />
                            <SelectField
                                id="otherLanguages"
                                name="otherLanguages"
                                label={tFields('otherLanguages')}
                                value={formik.values.otherLanguages}
                                onChange={formik.handleChange}
                                options={OTHER_LANGUAGES_OPTIONS}
                                error={formik.errors.otherLanguages}
                            />
                        </div>

                        <TextField
                            name="linkedin"
                            label={tCommonSocial('linkedin')}
                            placeholder={tCommonSocial('linkedin')}
                            value={formik.values.linkedin}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.linkedin}
                        />

                        <TextareaField
                            id="whatMakesYouPartOfTeam"
                            label={tFields('whatMakesYouPartOfTeam')}
                            placeholder={tFields('whatMakesYouPartOfTeam')}
                            value={formik.values.whatMakesYouPartOfTeam}
                            onChange={(value) => formik.setFieldValue('whatMakesYouPartOfTeam', value)}
                            maxLength={200}
                            error={formik.errors.whatMakesYouPartOfTeam}
                        />

                        <SelectField
                            id="howDidYouKnowAboutUs"
                            name="howDidYouKnowAboutUs"
                            label={tFields('howDidYouKnowAboutUs')}
                            value={formik.values.howDidYouKnowAboutUs}
                            onChange={formik.handleChange}
                            options={REFERRAL_SOURCE_OPTIONS}
                            error={formik.errors.howDidYouKnowAboutUs}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6.75">
                        <button
                            type="button"
                            onClick={onContinue}
                            className="flex-1 h-14 rounded-lg border border-[#9fb7b4] bg-[#e8eeed] flex items-center justify-center gap-2 font-bold text-5 text-main capitalize"
                        >
                            <UploadIcon />
                            {t('uploadCvButton')}
                        </button>
                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="flex-1 h-14 rounded-lg bg-main flex items-center justify-center gap-2 font-bold text-5 text-white capitalize disabled:opacity-70"
                        >
                            {t('submit')}
                            <ArrowRightIcon />
                        </button>
                    </div>
                </form>
            </div>
        </Popup>
    )
}

'use client'

import { useFormik } from 'formik'
import Popup from '@/components/shared/popup'
import TextField from '@/components/inputs/Textfield'
import SelectField from '@/components/inputs/Selectfield'
import TextareaField from '@/components/inputs/Textareafield'
import CheckboxField from '@/components/inputs/checkBox'
import DateField from '@/components/pages/contactUs/getInTouch/DateField'
import { careerApplySchema } from '@/lib/validation/careerApplyValidation'
import type { JobPosition } from './types'
import { ArrowRightIcon, ClearIcon, EmailIcon, SuitcaseIcon, UploadIcon } from './icons'

interface ApplyFormPopupProps {
    isOpen: boolean
    job: JobPosition | null
    onClose: () => void
    onContinue: () => void
}

const UNIVERSITY_OPTIONS = [
    { value: 'King Saud University', label: 'King Saud University' },
    { value: 'King Abdulaziz University', label: 'King Abdulaziz University' },
    { value: 'King Fahd University of Petroleum & Minerals', label: 'King Fahd University of Petroleum & Minerals' },
    { value: 'Princess Nourah bint Abdulrahman University', label: 'Princess Nourah bint Abdulrahman University' },
    { value: 'Other', label: 'Other' },
]

const currentYear = new Date().getFullYear()
const GRADUATION_YEAR_OPTIONS = Array.from({ length: 10 }, (_, index) => {
    const year = String(currentYear - index)
    return { value: year, label: year }
})

const ENGLISH_PROFICIENCY_OPTIONS = [
    { value: 'Basic', label: 'Basic' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' },
    { value: 'Fluent', label: 'Fluent' },
    { value: 'Native', label: 'Native' },
]

const OTHER_LANGUAGES_OPTIONS = [
    { value: 'None', label: 'None' },
    { value: 'Arabic', label: 'Arabic' },
    { value: 'French', label: 'French' },
    { value: 'German', label: 'German' },
    { value: 'Other', label: 'Other' },
]

const REFERRAL_SOURCE_OPTIONS = [
    { value: 'LinkedIn', label: 'LinkedIn' },
    { value: 'Company Website', label: 'Company Website' },
    { value: 'Employee Referral', label: 'Employee Referral' },
    { value: 'Job Board', label: 'Job Board' },
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Other', label: 'Other' },
]

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
                    aria-label="Close"
                    className="absolute right-3 top-3 md:right-5 md:top-5 p-2 rounded"
                >
                    <ClearIcon />
                </button>

                <div className="flex flex-col gap-3.5 pr-8">
                    <span className="text-5 text-main">Apply Now</span>
                    <h2 className="text-3 font-bold text-text-secondary">{job.title}</h2>
                    <div className="flex items-center gap-2 text-text-secondary">
                        <SuitcaseIcon className="size-6" />
                        <span className="text-5">{job.employmentType}</span>
                        <span className="text-5">/</span>
                        <span className="text-5">{job.workMode}</span>
                    </div>
                </div>

                <form onSubmit={formik.handleSubmit} className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-8 pr-1">
                    <div className="flex flex-col gap-6">
                        <p className="text-3 font-bold text-text-secondary capitalize">Basic Info</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                name="fullName"
                                label="Your Name"
                                placeholder="Your Name"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.fullName}
                            />
                            <TextField
                                name="email"
                                label="Email"
                                icon={<EmailIcon />}
                                placeholder="example@info.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.email}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                name="phone"
                                label="Phone"
                                type="tel"
                                placeholder="+966"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.phone}
                            />
                            <TextField
                                name="address"
                                label="Address"
                                placeholder="Your Address"
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
                                label="University"
                                value={formik.values.university}
                                onChange={formik.handleChange}
                                options={UNIVERSITY_OPTIONS}
                                error={formik.errors.university}
                            />
                            <TextField
                                name="major"
                                label="Major"
                                placeholder="Major"
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
                                label="Graduation Year"
                                value={formik.values.graduationYear}
                                onChange={formik.handleChange}
                                options={GRADUATION_YEAR_OPTIONS}
                                error={formik.errors.graduationYear}
                            />
                            <DateField
                                name="birthday"
                                label="Birthday"
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
                                    label="Male"
                                    checked={formik.values.gender === 'male'}
                                    onChange={() => formik.setFieldValue('gender', 'male')}
                                />
                                <CheckboxField
                                    id="gender-female"
                                    name="gender"
                                    label="Female"
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
                        <p className="text-3 font-bold text-text-secondary capitalize">Work Experience</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                name="yearsOfExperience"
                                label="Years Of Experience"
                                placeholder="Years Of Experience"
                                value={formik.values.yearsOfExperience}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.yearsOfExperience}
                            />
                            <TextField
                                name="employer"
                                label="Employer"
                                placeholder="Employer"
                                value={formik.values.employer}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.employer}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                name="currentJobTitle"
                                label="Current Job Title"
                                placeholder="Current Job Title"
                                value={formik.values.currentJobTitle}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.currentJobTitle}
                            />
                            <TextField
                                name="availability"
                                label="Availability"
                                placeholder="Availability"
                                value={formik.values.availability}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.availability}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField
                                name="currentSalary"
                                label="Current Salary"
                                type="number"
                                placeholder="Current Salary"
                                value={formik.values.currentSalary}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.currentSalary}
                            />
                            <TextField
                                name="expectedSalary"
                                label="Expected Salary"
                                type="number"
                                placeholder="Expected Salary"
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
                                label="English proficiency"
                                value={formik.values.englishProficiency}
                                onChange={formik.handleChange}
                                options={ENGLISH_PROFICIENCY_OPTIONS}
                                error={formik.errors.englishProficiency}
                            />
                            <SelectField
                                id="otherLanguages"
                                name="otherLanguages"
                                label="Other Languages.."
                                value={formik.values.otherLanguages}
                                onChange={formik.handleChange}
                                options={OTHER_LANGUAGES_OPTIONS}
                                error={formik.errors.otherLanguages}
                            />
                        </div>

                        <TextField
                            name="linkedin"
                            label="LinkedIn"
                            placeholder="LinkedIn"
                            value={formik.values.linkedin}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.linkedin}
                        />

                        <TextareaField
                            id="whatMakesYouPartOfTeam"
                            label="What Makes you part of our team?"
                            placeholder="What Makes you part of our team?"
                            value={formik.values.whatMakesYouPartOfTeam}
                            onChange={(value) => formik.setFieldValue('whatMakesYouPartOfTeam', value)}
                            maxLength={200}
                            error={formik.errors.whatMakesYouPartOfTeam}
                        />

                        <SelectField
                            id="howDidYouKnowAboutUs"
                            name="howDidYouKnowAboutUs"
                            label="How did you know about us"
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
                            Upload CV
                        </button>
                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="flex-1 h-14 rounded-lg bg-main flex items-center justify-center gap-2 font-bold text-5 text-white capitalize disabled:opacity-70"
                        >
                            Submit
                            <ArrowRightIcon />
                        </button>
                    </div>
                </form>
            </div>
        </Popup>
    )
}

"use client";

import DarkField from "@/components/inputs/darkInput";
import { getInTouchSchema } from "@/lib/validation/getInTouchValidation";
import { useFormik } from "formik";
import { EmailIcon } from "../../../icons/getInTouch";

interface FormValues {
    fullName: string;
    email: string;
    company: string;
    roleInCompany: string;
    inquiry: string;
}

const initialValues: FormValues = {
    fullName: "",
    email: "",
    company: "",
    roleInCompany: "",
    inquiry: "",
};

const INQUIRY_MAX_LENGTH = 200;




export default function GetInTouchForm() {
    const formik = useFormik<FormValues>({
        initialValues,
        validationSchema: getInTouchSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                // submit logic here
                console.log(values);
                resetForm();
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col max-w-145 gap-4 w-full">
            <div className="grid grid-cols-2 gap-4">
                <DarkField
                    name="fullName"
                    placeholder="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.fullName}
                />
                <DarkField
                    name="email"
                    placeholder="example@info.com"
                    icon={<EmailIcon />}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                />
                <DarkField
                    name="company"
                    placeholder="Company"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.company}
                />
                <DarkField
                    name="roleInCompany"
                    placeholder="Role in Company"
                    value={formik.values.roleInCompany}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.roleInCompany}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="inquiry" className="sr-only">
                    Your Inquiry
                </label>
                <textarea
                    id="inquiry"
                    name="inquiry"
                    rows={5}
                    maxLength={INQUIRY_MAX_LENGTH}
                    placeholder="Your Inquiry"
                    value={formik.values.inquiry}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-invalid={!!formik.errors.inquiry}
                    aria-describedby={formik.errors.inquiry ? "inquiry-error" : undefined}
                    className={`w-full rounded-lg border h-31.75 bg-[#0E3832] py-4 px-6 text-7 text-white placeholder:text-white/60 focus:border-0 focus:ring-0 focus:outline-none resize-none ${formik.errors.inquiry ? "border-red-400" : "border-white/15"}`}
                />
                <div className="flex items-center justify-between">
                    {formik.errors.inquiry ? (
                        <p id="inquiry-error" className="mt-1 text-6 text-red-400">
                            {formik.errors.inquiry}
                        </p>
                    ) : (
                        <span />
                    )}
                    <p className="text-right text-7 text-text-disabled">
                        {formik.values.inquiry.length}/{INQUIRY_MAX_LENGTH}
                    </p>
                </div>
            </div>

            <button type="submit" className="bg-white rounded-lg h-14 w-full flex items-center justify-center">
                <span className="font-bold text-5 text-main">Send A Message</span>
            </button>
        </form>
    );
}

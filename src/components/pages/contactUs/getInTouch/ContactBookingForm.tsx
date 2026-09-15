"use client";

import SelectField from "@/components/inputs/Selectfield";
import TextField from "@/components/inputs/Textfield";
import { contactBookingSchema } from "@/lib/validation/contactBookingValidation";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import DateField from "./DateField";
import { CallOutlineIcon, EmailOutlineIcon } from "./icons";

interface FormValues {
    fullName: string;
    phone: string;
    email: string;
    date: string;
    timeSlot: string;
    industry: string;
    serviceOfInterest: string;
}

const initialValues: FormValues = {
    fullName: "",
    phone: "+966",
    email: "",
    date: "",
    timeSlot: "",
    industry: "",
    serviceOfInterest: "",
};

const TIME_SLOT_OPTIONS = [
    { value: "9:00 - 10:00", label: "9:00 - 10:00" },
    { value: "10:00 - 11:00", label: "10:00 - 11:00" },
    { value: "11:00 - 12:00", label: "11:00 - 12:00" },
];

export default function ContactBookingForm() {
    const tCommonFields = useTranslations("Common.bookForm.fields");
    const tCommonBookForm = useTranslations("Common.bookForm");
    const tCommonOptions = useTranslations("Common.bookForm.options");
    const t = useTranslations("ContactUsPage.form");

    const industries = tCommonOptions.raw("industries") as string[];
    const services = t.raw("options.services") as string[];

    const INDUSTRY_OPTIONS = industries.map((label) => ({ value: label, label }));
    const SERVICE_OPTIONS = services.map((label) => ({ value: label, label }));

    const formik = useFormik<FormValues>({
        initialValues,
        validationSchema: contactBookingSchema,
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
        <form onSubmit={formik.handleSubmit} className="flex flex-col max-w-200 xl:max-w-145 gap-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                    name="fullName"
                    label={tCommonFields("fullName")}
                    placeholder={tCommonFields("fullName")}
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.fullName}
                />
                <TextField
                    name="phone"
                    label={tCommonFields("phone")}
                    type="tel"
                    placeholder="+966"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.phone}
                />
                <TextField
                    name="email"
                    label={tCommonFields("email")}
                    icon={<EmailOutlineIcon />}
                    placeholder="example@info.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                />
                <DateField
                    name="date"
                    label={t("fields.date")}
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.date}
                />
                <SelectField
                    id="timeSlot"
                    name="timeSlot"
                    label={t("fields.timeSlot")}
                    value={formik.values.timeSlot}
                    onChange={formik.handleChange}
                    options={TIME_SLOT_OPTIONS}
                    error={formik.errors.timeSlot}
                />
                <SelectField
                    id="industry"
                    name="industry"
                    label={t("fields.industry")}
                    value={formik.values.industry}
                    onChange={formik.handleChange}
                    options={INDUSTRY_OPTIONS}
                    error={formik.errors.industry}
                />
            </div>

            <SelectField
                id="serviceOfInterest"
                name="serviceOfInterest"
                label={tCommonFields("serviceOfInterest")}
                value={formik.values.serviceOfInterest}
                onChange={formik.handleChange}
                options={SERVICE_OPTIONS}
                error={formik.errors.serviceOfInterest}
            />

            <button
                type="submit"
                disabled={formik.isSubmitting}
                className="bg-main rounded-lg h-14 w-full flex items-center justify-center gap-2 disabled:opacity-70"
            >
                <span className="text-white"><CallOutlineIcon /></span>
                <span className="font-bold text-5 text-white">{tCommonBookForm("title")}</span>
            </button>
        </form>
    );
}

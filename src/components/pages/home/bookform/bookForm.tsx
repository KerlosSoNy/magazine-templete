import CheckboxField from "@/components/inputs/checkBox";
import SelectField from "@/components/inputs/Selectfield";
import TextField from "@/components/inputs/Textfield";
import { contactFormSchema } from "@/lib/validation/bookValidation";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";

interface FormValues {
    fullName: string;
    phone: string;
    email: string;
    date: string;
    timeSlot: string;
    industry: string;
    serviceOfInterest: string;
    agreeToPrivacyPolicy: boolean;
}

const initialValues: FormValues = {
    fullName: '',
    phone: '+',
    email: '',
    date: '',
    timeSlot: '',
    industry: '',
    serviceOfInterest: '',
    agreeToPrivacyPolicy: false,
};


export default function BookForm() {
    const t = useTranslations("Common.bookForm.fields");
    const tOptions = useTranslations("Common.bookForm.options");
    const timeSlots = tOptions.raw("timeSlots") as string[];
    const industries = tOptions.raw("industries") as string[];
    const services = tOptions.raw("services") as string[];

    const formik = useFormik<FormValues>({
        initialValues,
        validationSchema: contactFormSchema,
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
        <form onSubmit={formik.handleSubmit} className="mt-6 gap-4 flex flex-col">
            <TextField
                label={t("fullName")}
                name="fullName"
                placeholder={t("fullName")}
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.fullName}
            />
            <TextField
                label={t("phone")}
                name="phone"
                placeholder={t("fullName")}
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.phone}
            />
            <TextField
                label={t("email")}
                name="email"
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                }
                placeholder={t("email")}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
            />
            <SelectField
                name="timeSlot"
                id="Time-Slot"
                label={t("timeSlot")}
                value={formik.values.timeSlot}
                onChange={formik.handleChange}
                options={timeSlots.map((label) => ({ value: label, label }))}
                error={formik.errors.timeSlot}
            />
            <SelectField
                name="industry"
                id="Industry"
                label={t("industry")}
                value={formik.values.industry}
                onChange={formik.handleChange}
                options={[
                    { value: '', label: t("selectIndustry") },
                    ...industries.map((label) => ({ value: label, label })),
                ]}
                error={formik.errors.industry}
            />
            <SelectField
                name="serviceOfInterest"
                id="serviceOfInterest"
                label={t("serviceOfInterest")}
                value={formik.values.serviceOfInterest}
                onChange={formik.handleChange}
                options={[
                    { value: '', label: t("selectService") },
                    ...services.map((label) => ({ value: label, label })),
                ]}
                error={formik.errors.serviceOfInterest}
            />
            <CheckboxField
                id="agreeToPrivacyPolicy"
                name="agreeToPrivacyPolicy"
                checked={formik.values.agreeToPrivacyPolicy}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.agreeToPrivacyPolicy}
                label={
                    <>
                        {t("privacyAgree")}{" "}
                        <a href="/privacy-policy" className="underline text-primary-600">
                            {t("privacyPolicy")}
                        </a>{" "}
                        {t("privacyPermission")}
                    </>
                }
            />
            <button type="submit" className="bg-main rounded-lg h-12 w-30 flex items-center justify-center gap-1.5">
                <span className="font-bold text-6 text-white">{t("submit")}</span>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                    <path d="M0.750041 5.75L14.0834 5.75M9.08338 0.75L14.0834 5.75L9.08337 10.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </form>
    )
}

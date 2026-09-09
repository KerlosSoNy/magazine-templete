import CheckboxField from "@/components/inputs/checkBox";
import SelectField from "@/components/inputs/Selectfield";
import TextField from "@/components/inputs/Textfield";
import { contactFormSchema } from "@/lib/validation/bookValidation";
import { useFormik } from "formik";

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
                label="Full Name"
                name="fullName"
                placeholder="Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.fullName}
            />
            <TextField
                label="Phone"
                name="phone"
                placeholder="Full Name"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.phone}
            />
            <TextField
                label="Email"
                name="email"
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                }
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
            />
            <SelectField
                name="timeSlot"
                id="Time-Slot"
                label="Time Slot"
                value={formik.values.timeSlot}
                onChange={formik.handleChange}
                options={[
                    { value: "New York", label: "New York" },
                    { value: "Los Angeles", label: "Los Angeles" },
                    { value: "San Francisco", label: "San Francisco" },]}
                error={formik.errors.timeSlot}
            />
            <SelectField
                name="industry"
                id="Industry"
                label="industry"
                value={formik.values.industry}
                onChange={formik.handleChange}
                options={[
                    { value: '', label: 'Select Industry' },
                    { value: 'Agriculture', label: 'Agriculture' },
                    { value: 'Banking', label: 'Banking' },
                    { value: 'Construction', label: 'Construction' },
                ]}
                error={formik.errors.industry}
            />
            <SelectField
                name="serviceOfInterest"
                id="serviceOfInterest"
                label="Service Of Interest"
                value={formik.values.serviceOfInterest}
                onChange={formik.handleChange}
                options={[
                    { value: '', label: 'Select Service' },
                    { value: 'Agriculture', label: 'Agriculture' },
                    { value: 'Banking', label: 'Banking' },
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
                        I here by agree to and accept{" "}
                        <a href="/privacy-policy" className="underline text-primary-600">
                            Privacy Policy
                        </a>{" "}
                        and give permission to access my personal data.
                    </>
                }
            />
            <button type="submit" className="bg-main rounded-lg h-12 w-30 flex items-center justify-center gap-1.5">
                <span className="font-bold text-6 text-white">Submit</span>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.750041 5.75L14.0834 5.75M9.08338 0.75L14.0834 5.75L9.08337 10.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </form>
    )
}

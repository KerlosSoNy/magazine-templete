import * as yup from 'yup';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

function isValidPhoneNumber(value: string | undefined, defaultRegion = 'SA'): boolean {
  if (!value) return false;
  try {
    const parsed = phoneUtil.parse(value, defaultRegion);
    return phoneUtil.isValidNumber(parsed);
  } catch {
    return false;
  }
}

export const contactBookingSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters')
    .matches(/^[a-zA-Z\s'-]+$/, 'Full name contains invalid characters'),

  phone: yup
    .string()
    .trim()
    .required('Phone number is required')
    .test('is-valid-phone', 'Enter a valid phone number', (value) => isValidPhoneNumber(value, 'SA')),

  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Enter a valid email address'),

  date: yup
    .date()
    .required('Please pick a date')
    .min(new Date(new Date().setHours(0, 0, 0, 0)), 'Date cannot be in the past')
    .typeError('Please pick a valid date'),

  timeSlot: yup.string().required('Please choose a time slot'),

  industry: yup.string().required('Please select an industry'),

  serviceOfInterest: yup.string().required('Please select a service of interest'),
});

export type ContactBookingFormValues = yup.InferType<typeof contactBookingSchema>;

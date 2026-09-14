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

export const careerApplySchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required('Your name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),

  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Enter a valid email address'),

  phone: yup
    .string()
    .trim()
    .required('Phone number is required')
    .test('is-valid-phone', 'Enter a valid phone number', (value) => isValidPhoneNumber(value, 'SA')),

  address: yup.string().trim().required('Address is required'),

  university: yup.string().required('Please select your university'),

  major: yup.string().trim().required('Major is required'),

  graduationYear: yup.string().required('Please select your graduation year'),

  birthday: yup
    .date()
    .required('Please pick your birthday')
    .typeError('Please pick a valid date'),

  gender: yup.string().oneOf(['male', 'female']).required('Please select your gender'),

  yearsOfExperience: yup.string().trim().required('Years of experience is required'),

  employer: yup.string().trim().required('Employer is required'),

  currentJobTitle: yup.string().trim().required('Current job title is required'),

  availability: yup.string().trim().required('Availability is required'),

  currentSalary: yup.string().trim().optional(),

  expectedSalary: yup.string().trim().optional(),

  englishProficiency: yup.string().required('Please select your English proficiency'),

  otherLanguages: yup.string().optional(),

  linkedin: yup.string().trim().optional(),

  whatMakesYouPartOfTeam: yup
    .string()
    .trim()
    .required('This field is required')
    .max(200, 'Maximum 200 characters'),

  howDidYouKnowAboutUs: yup.string().required('Please select an option'),
});

export type CareerApplyFormValues = yup.InferType<typeof careerApplySchema>;

import * as yup from 'yup';

export const getInTouchSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),

  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Enter a valid email address'),

  company: yup
    .string()
    .trim()
    .required('Company is required'),

  roleInCompany: yup
    .string()
    .trim()
    .required('Role in company is required'),

  inquiry: yup
    .string()
    .trim()
    .required('Please tell us about your inquiry')
    .max(200, 'Inquiry must be less than 200 characters'),
});

export type GetInTouchFormValues = yup.InferType<typeof getInTouchSchema>;

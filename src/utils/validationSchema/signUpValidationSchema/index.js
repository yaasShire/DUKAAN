import * as yup from 'yup'

export const signupValidationSchema = yup.object().shape({
    fullName: yup
        .string()
        .min(12, ({ min }) => `Full name must be at least ${min} characters`)
        .required('Full name is Required'),
    phoneNumber: yup
        .string()
        .min(9, ({ min }) => `Phone number must be at least ${min} characters`)
        .required('Phone number is required'),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required('email is required'),
    city: yup
        .string()
        .required('City is required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match').required('confirm password is required')
})
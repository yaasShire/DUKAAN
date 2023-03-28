import * as yup from 'yup'

export const editProfileValidation = yup.object().shape({
    fullName: yup
        .string()
        .min(6, ({ min }) => `Full name must be at least ${min} characters`),
    phoneNumber: yup
        .string()
        .min(6, ({ min }) => `Phone number must be at least ${min} characters`),
    email: yup
        .string()
        .email("Please enter a valid email"),
    city: yup
        .string()
        .min(5, ({ min }) => `City must be at least ${min} characters`)

})

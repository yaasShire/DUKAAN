import * as yup from 'yup'

export const editProfileValidation = yup.object().shape({
    name: yup
        .string()
        .min(6, ({ min }) => `Full name must be at least ${min} characters`),
    phone_number: yup
        .string()
        .min(6, ({ min }) => `Phone number must be at least ${min} characters`),
    email: yup
        .string()
        .email("Please enter a valid email")

})

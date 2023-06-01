import * as yup from 'yup'

export const forgetPasswordValidation = yup.object().shape({

    name: yup
        .string()
        .min(9, ({ min }) => `name must be at least ${min} characters`)
        .required('name is required'),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required('email is required'),

})

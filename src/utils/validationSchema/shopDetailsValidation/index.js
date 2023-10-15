import * as yup from 'yup'

export const shopDetailsValidation = yup.object().shape({
    shopName: yup
        .string()
        .min(6, ({ min }) => `Shop name must be at least ${min} characters`)
        .required('required'),
    shopEmail: yup
        .string()
        .email("Please enter a valid shop email")
        .required('required'),
    shopNumber: yup
        .string()
        .min(8, ({ min }) => `Shop number must be at least ${min} length`)
        .required('required')
})

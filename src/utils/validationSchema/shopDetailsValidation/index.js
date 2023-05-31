import * as yup from 'yup'

export const shopDetailsValidation = yup.object().shape({
    shopName: yup
        .string()
        .min(6, ({ min }) => `Shop name must be at least ${min} characters`)
        .required('Shop name is Required'),
    shopEmail: yup
        .string()
        .email("Please enter a valid shop email")
        .required('Shop email is required'),
    shopNumber: yup
        .string()
        .min(8, ({ min }) => `Shop number must be at least ${min} length`)
        .required('Shop number is required')
})

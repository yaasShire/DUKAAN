import * as yup from 'yup'

export const shopLocationValidation = yup.object().shape({
    country: yup
        .string()
        .min(5, ({ min }) => `Country must be at least ${min} characters`)
        .required('Country is Required'),
    state: yup
        .string()
        .min(5, ({ min }) => `State must be at least ${min} characters`)
        .required('State is required'),
    city: yup
        .string()
        .min(5, ({ min }) => `city must be at least ${min} characters`)
        .required('City is required'),
    nearestLANMark: yup
        .string()
        .min(5, ({ min }) => `Nearest LAN mark must be at least ${min} characters`)
        .required('Nearest LAN mark is required')
})

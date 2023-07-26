import * as yup from 'yup'

export const shopLocationValidation = yup.object().shape({
    country: yup
        .string()
        .required('required'),
    state: yup
        .string()
        .required('required'),
    city: yup
        .string()
        .required('required'),
    region: yup
        .string()
        .required('required'),
    nearestLANMark: yup
        .string()
        .required('required'),
})

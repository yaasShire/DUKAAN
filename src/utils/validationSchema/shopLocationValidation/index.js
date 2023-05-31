import * as yup from 'yup'

export const shopLocationValidation = yup.object().shape({
    country: yup
        .string()
        .required('Country is Required'),
    state: yup
        .string()
        .required('State is required'),
    city: yup
        .string()
        .required('City is required'),
    region: yup
        .string()
        .required('Region is required'),
    nearestLANMark: yup
        .string()
        .required('Nearest LAN mark is required'),
})

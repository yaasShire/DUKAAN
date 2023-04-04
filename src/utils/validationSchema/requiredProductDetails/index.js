import * as yup from 'yup'

export const requiredProductDetails = yup.object().shape({
    productName: yup
        .string()
        .required('required'),
    productBrand: yup
        .string()
        .required('required'),
    yearOfMake: yup
        .string()
        .required('required')
})

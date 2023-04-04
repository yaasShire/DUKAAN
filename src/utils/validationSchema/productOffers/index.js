import * as yup from 'yup'

export const productOfferDetails = yup.object().shape({
    quantity: yup
        .string()
        .required('required'),
    price: yup
        .string()
        .required('required'),
    sellerSKU: yup
        .string()
        .required('required')
})

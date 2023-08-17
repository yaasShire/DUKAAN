import * as yup from 'yup'

export const productOfferDetails = yup.object().shape({
    description: yup
        .string()
        .required('required')
})

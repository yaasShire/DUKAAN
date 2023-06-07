import * as yup from 'yup'

export const productDetailUpdate = yup.object().shape({
    productDetail: yup
        .string()
        .required('required'),
})

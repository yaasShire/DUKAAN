import * as yup from 'yup'

export const forgetPasswordValidation = yup.object().shape({

    phoneNumber: yup
        .string()
        .min(9, ({ min }) => `Phone number must be at least ${min} characters`)
        .required('Phone number is required'),

})

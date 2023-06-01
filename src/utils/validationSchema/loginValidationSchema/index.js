import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({

    // phoneNumber: yup
    //     .string()
    //     .min(9, ({ min }) => `Phone number must be at least ${min} characters`)
    //     .required('Phone number is required'),
    password: yup
        .string()
        .required('Password is required'),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required('email is required'),

})

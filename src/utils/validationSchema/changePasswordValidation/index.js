import * as yup from 'yup'
export const changePasswordValidation = yup.object().shape({
    old_password: yup
        .string()
        .required('Current Password is required'),
    new_password: yup
        .string()
        .min(8, ({ min }) => `New Password must be at least ${min} characters`)
        .required('Password is required'),
})

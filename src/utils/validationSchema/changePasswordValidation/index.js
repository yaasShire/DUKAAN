import * as yup from 'yup'
export const changePasswordValidation = yup.object().shape({
    currentPassword: yup
        .string()
        .required('Current Password is required'),
    newPassword: yup
        .string()
        .min(8, ({ min }) => `New Password must be at least ${min} characters`)
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
        .required('Re-typing password is required')
})

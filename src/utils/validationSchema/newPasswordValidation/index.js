import * as yup from 'yup'

export const newPasswordValidation = yup.object().shape({
    newPassword: yup
        .string()
        .min(8, ({ min }) => `New Password must be at least ${min} characters`)
        .required('New Password is required'),
    confirmNewPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), null], 'Passwords must match').required('confirm password is required')

})

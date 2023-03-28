import * as yup from 'yup'

export const addShopPersonalInfoValidation = yup.object().shape({
    ownerName: yup
        .string()
        .min(12, ({ min }) => `Owner name must be at least ${min} characters`)
        .required('Owner name is Required'),
    ownerEmail: yup
        .string()
        .email("Please enter a valid owner email")
        .required('Owner email is required'),
    ownerPhoneNumber: yup
        .string()
        .required('Owner phone number is required'),
    ownerAddress: yup
        .string()
        .min(8, ({ min }) => `Owner address must be at least ${min} characters`)
        .required('Owner address is required')
})

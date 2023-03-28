import * as yup from 'yup'

export const updateShopDataValidation = yup.object().shape({
    ownerName: yup
        .string()
        .min(8, ({ min }) => `Owner name must be at least ${min} characters`),
    ownerPhoneNumber: yup
        .string()
        .min(9, ({ min }) => `Owner Phone number must be at least ${min} characters`)
        .required('Phone number is required'),
    ownerEmail: yup
        .string()
        .email("Please enter a valid owner email")
        .required('Owner email is required'),
    ownerAddress: yup
        .string()
        .min(9, ({ min }) => `Owner address must be at least ${min} characters`)
        .required('City is required'),
    shopName: yup
        .string()
        .min(9, ({ min }) => `Shop name must be at least ${min} characters`),
    shopEmail: yup
        .string()
        .email("Please enter a valid shop email")
        .required('Owner email is required'),
    shopAddress: yup
        .string()
        .min(9, ({ min }) => `Shop address must be at least ${min} characters`),
    country: yup
        .string()
        .min(9, ({ min }) => `Country must be at least ${min} characters`),
    state: yup
        .string()
        .min(9, ({ min }) => `State must be at least ${min} characters`),
    city: yup
        .string()
        .min(9, ({ min }) => `City must be at least ${min} characters`),
    nearestLanMark: yup
        .string()
        .min(9, ({ min }) => `Neares LAN mark must be at least ${min} characters`),
})

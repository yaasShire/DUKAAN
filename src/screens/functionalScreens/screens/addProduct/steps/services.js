import { setMainCategory, setProductCategory, setSubCategory, setShopsList, setProductImage1, setProductImage2, setProductImage3, setProductImage4, setProductOffers, fillRequiredProductInformation, } from '../../../../../redux/products'
import { useDispatch } from 'react-redux'
export const clearProductRegistrationState = (dispatch) => {
    dispatch(setMainCategory({}))
    dispatch(setProductCategory({}))
    dispatch(setProductCategory({}))
    dispatch(setShopsList({}))
    dispatch(setProductImage1(""))
    dispatch(setProductImage2(""))
    dispatch(setProductImage3(""))
    dispatch(setProductImage4(""))
    dispatch(setProductOffers({
        price: "",
        quantity: "",
        description: ""
    }))
    dispatch(fillRequiredProductInformation({
        productName: "",
        productBrand: "",
        yearOfMake: ""
    }))
}
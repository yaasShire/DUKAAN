import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { TouchableWithoutFeedback } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilterState, filterData } from '../../../../../../utils/utilityFunctions'
import { postData } from '../../../../../../hooks/usePost'
import { setProductCategoryFilter, setMainCategoryFilter, setShopFilter, setSubCategoryFilter } from '../../../../../../redux/productsFilter'
const ApplyButton = ({ navigation, setIsLoading, setError }) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.productsFilter)
    const { shopFilter, subCategoryFilter, productCategoryFilter, mainCategoryFilter } = useSelector(state => state.productsFilter)
    const filteredResult = filterData(data)

    const fetchFilterRelatedProducts = async () => {
        setIsLoading(true)
        const filterFormData = new FormData()
        filterFormData.append('USID', shopFilter?.USID)
        filterFormData.append('category', mainCategoryFilter?.id)
        filterFormData.append('subcategory', subCategoryFilter?.id)
        filterFormData.append('productcategory', productCategoryFilter?.id)
        const data = await postData('buyer/products/search', filterFormData, setError, setIsLoading)
        if (data?.result) {
            clearFilterState(dispatch)
            navigation.navigate("productList", { data: data?.result?.data })
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            fetchFilterRelatedProducts()
        }}>
            <View style={styles.applyButton}>
                <Text style={styles.applyText}>Apply</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ApplyButton
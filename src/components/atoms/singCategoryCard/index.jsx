import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'
import { setMainCategory, setProductCategory, setSubCategory, setShopsList } from '../../../redux/products';

import styles from './style'
import { globalStyles } from '../../../globalConstants/styles';
const SingleCategoryCard = ({ category, cat, finalObject, idType = "USID" }) => {
    const targetId = idType == 'id' ? 'id' : 'USID'
    const dispatch = useDispatch()
    return (
        <View>
            <TouchableOpacity style={[styles.categoryButtonHolder, { backgroundColor: finalObject[targetId] == category[targetId] ? globalStyles.colors.logoColor : globalStyles.colors.miniPrimary }]} onPress={() => {
                cat == 'mainCategory' ? dispatch(setMainCategory(category)) : cat == 'subCategory' ? dispatch(setSubCategory(category)) : cat == 'productCategory' ? dispatch(setProductCategory(category)) : cat == 'shopsList' ? dispatch(setShopsList(category)) : ""
            }}>
                <Text style={[styles.categoryName, { color: finalObject[targetId] == category[targetId] ? globalStyles.colors.miniPrimary : globalStyles.colors.tertiary }]}>{category.name}</Text>
                <Ionicons name='chevron-forward-outline' size={25} color={globalStyles.colors.primaryGray} />
            </TouchableOpacity>
        </View>
    )
}

export default SingleCategoryCard
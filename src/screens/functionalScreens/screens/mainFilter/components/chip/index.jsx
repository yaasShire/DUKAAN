import { View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Chip, Text } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style'
import { setSubCategoryFilter, setMainCategoryFilter, setProductCategoryFilter, setShopFilter } from '../../../../../../redux/productsFilter';
import { useDispatch } from 'react-redux';

const FilterChip = ({ data }) => {
    const dispatch = useDispatch()
    const removeCategory = (chipItem) => {
        chipItem?.catName == 'category' ? dispatch(setMainCategoryFilter({})) :
            chipItem?.catName == 'subcategory' ? dispatch(setSubCategoryFilter({})) :
                chipItem?.catName == 'productcategory' ? dispatch(setProductCategoryFilter({})) :
                    chipItem?.catName == 'shop' ? dispatch(setShopFilter({})) : ""
    }
    return (
        <Chip icon={'close'} onPress={() => removeCategory(data)}>
            {data?.name}
        </Chip>
    )
}

export default FilterChip
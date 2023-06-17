import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { Checkbox } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { setMainCategoryFilter, setProductCategoryFilter, setShopFilter, setSubCategoryFilter } from '../../../redux/productsFilter';
import { useDispatch, useSelector } from 'react-redux';
const CategoryRowCard = ({ data, name, selectedCategory, setSelectedCategory }) => {
    const [checked, setChecked] = React.useState(false);
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.productsFilter)
    const filterStateSetter = (objectState) => {
        name == 'category' ? dispatch(setMainCategoryFilter(objectState)) :
            name == 'subcategory' ? dispatch(setSubCategoryFilter(objectState)) :
                name == 'productcategory' ? dispatch(setProductCategoryFilter(objectState)) :
                    name == 'shop' ? dispatch(setShopFilter(objectState)) : ""
    }
    return (
        <View style={styles.container}>
            <RadioButton
                value={"first"}
                status={selectedCategory?.name === data?.name ? 'checked' : 'unchecked'}
                onPress={() => {
                    setSelectedCategory({ ...data, catName: name })
                    filterStateSetter({ ...data, catName: name })
                }}
            />
            <Text style={styles.categoryText}>{data?.name}</Text>
        </View>
    )
}

export default CategoryRowCard
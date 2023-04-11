import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
const ShopList = ({ category, title, setCurrentPosition }) => {
    const shopList = useSelector((state) => state.productRegistration.shopsList)
    const [showError, setShowError] = useState(false)
    const errorHandler = () => {
        if (!shopList.id) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 2000)

        } else {
            setCurrentPosition(prev => prev + 1)
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    showError && (
                        <View style={styles.errorHolder}>
                            <Text style={styles.textError}>Please select Shop</Text>
                        </View>
                    )
                }
                <Text style={styles.textTitle}>{title}</Text>
                <View style={styles.categoriesHolder}>
                    <View>
                        {/* <ScrollView style={{}}> */}
                        {
                            category.map((category, index) => (
                                <SingleCategoryCard key={category.id} category={category}
                                    cat="shopsList"
                                    finalObject={shopList}
                                />
                            ))
                        }
                        {/* </ScrollView> */}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.actionButtonHolder}>
                <AddProductActionButton label={"Next"} errorHandler={errorHandler} setCurrentPosition={setCurrentPosition} />
            </View>
        </View>
    )
}
export default ShopList
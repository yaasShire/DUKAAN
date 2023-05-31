import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
import { fetchData } from '../../../../../../hooks/useFetch'
import { setShopsList } from '../../../../../../redux/products';
import AppLoader from '../../../../../../components/molecules/AppLoader'
const ShopList = ({ category, title, setCurrentPosition }) => {
    const shopList = useSelector((state) => state.productRegistration.shopsList)
    const [showError, setShowError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [setError, setSetError] = useState(null)
    const [shopData, setShopData] = useState([])
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

    useEffect(() => {
        const fetShops = async () => {
            const { data } = await fetchData('seller/shop/view/', setError, setIsLoading)
            setShopData(data.data)
        }
        fetShops()

    })

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
                            shopData.map((category, index) => (
                                <SingleCategoryCard key={category.USID} category={category}
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
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}
export default ShopList
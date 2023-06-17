import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import FilterSearchField from '../filterSearchField'
import BrandNameCheckBox from '../../atoms/brandNameCheckBox'
import CategoryRowCard from '../categoryRowCard'
import { fetchData } from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import AppLoader from '../../../components/molecules/AppLoader'
const ShopSectionCard = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [shops, setShops] = useState([])
    const [selectedCategory, setSelectedCategory] = useState({})
    const stateData = useSelector(state => state.productsFilter)

    useEffect(() => {
        const fetchShops = async () => {
            setIsLoading(true)
            const { data } = await fetchData('seller/shop/view', setError, setIsLoading)
            if (data?.data?.length > 0) {
                setShops(data?.data)
            }
        }
        fetchShops()
        setSelectedCategory(stateData?.shops)

    }, [])

    return (
        <View style={styles.container}>
            {/* <FilterSearchField /> */}
            <FlatList
                contentContainerStyle={styles.categoryListWrapper}
                showsVerticalScrollIndicator={false}
                data={shops}
                keyExtractor={(item) => item.USID}
                renderItem={({ item }) => (
                    <CategoryRowCard setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} name="shop" data={item} />
                )}
            />
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}

export default ShopSectionCard
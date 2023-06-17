import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import FilterSearchField from '../filterSearchField'
import { fetchData } from '../../../hooks/useFetch'
import CategoryRowCard from '../categoryRowCard'
import { useSelector } from 'react-redux'
import AppLoader from '../../../components/molecules/AppLoader'

const ProductCategorySection = () => {
    const [productCategory, setproductCategory] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState({})
    const stateData = useSelector(state => state.productsFilter)

    useEffect(() => {
        const fetchProductCategories = async () => {
            setIsLoading(true)
            const { data } = await fetchData('seller/productcategory/view', setError, setIsLoading)
            if (data?.data?.length > 0) {
                setproductCategory(data?.data)
            }
        }
        fetchProductCategories()
        setSelectedCategory(stateData?.productCategoryFilter)

    }, [])
    return (
        <View style={styles.container}>
            {/* <FilterSearchField /> */}
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.categoryListWrapper}
                data={productCategory}
                renderItem={({ item }) => (
                    <CategoryRowCard setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} name="productcategory" data={item} />
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

export default ProductCategorySection
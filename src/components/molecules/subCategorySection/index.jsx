import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import BrandCard from '../brandCard'
import FilterSearchField from '../filterSearchField'
import BrandNameCheckBox from '../../atoms/brandNameCheckBox'
import CategoryRowCard from '../categoryRowCard'
import { fetchData } from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import AppLoader from '../../../components/molecules/AppLoader'
const SubCategorySection = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [subCategories, setSubCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState({})
    const stateData = useSelector(state => state.productsFilter)

    useEffect(() => {
        const fetchSubCatgories = async () => {
            setIsLoading(true)
            const { data } = await fetchData('seller/subcategory/view', setError, setIsLoading)
            if (data?.data?.length > 0) {
                setSubCategories(data?.data)
            }
        }
        fetchSubCatgories()
        setSelectedCategory(stateData?.subCategoryFilter)

    }, [])

    return (
        <View style={styles.container}>
            {/* <FilterSearchField /> */}
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.categoryListWrapper}
                data={subCategories}
                renderItem={({ item }) => (
                    <CategoryRowCard setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} name="subcategory" data={item} />
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

export default SubCategorySection
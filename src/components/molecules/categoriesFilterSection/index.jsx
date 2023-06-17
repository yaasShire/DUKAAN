import { View, Text, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchSelecDropDownCard from '../../atoms/searchSelectCard';
import FilterSearchField from '../filterSearchField';
import { fetchData } from '../../../hooks/useFetch';
import CategoryRowCard from '../categoryRowCard';
import { useSelector } from 'react-redux';
import AppLoader from '../../../components/molecules/AppLoader'

const CategoriesFilterSectionContent = ({ }) => {
    const [mainCategory, setMainCategory] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState({})
    const stateData = useSelector(state => state.productsFilter)

    useEffect(() => {
        const fetchMainCategories = async () => {
            setIsLoading(true)
            const { data } = await fetchData('seller/category/view/', setError, setIsLoading)
            if (data?.data?.length > 0) {
                setMainCategory(data?.data)
            }
        }
        fetchMainCategories()
        setSelectedCategory(stateData?.mainCategoryFilter)
    }
        , [])
    return (
        <View style={styles.container}>
            {/* <FilterSearchField /> */}
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.categoryListWrapper}
                data={mainCategory}
                renderItem={({ item }) => (
                    <CategoryRowCard setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} name="category" data={item} />
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
export default CategoriesFilterSectionContent
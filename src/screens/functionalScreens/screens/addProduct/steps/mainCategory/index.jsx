import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
import ProductRegistrationError from '../../../../../../components/atoms/productRegistrationError';
import { fetchData } from '../../../../../../hooks/useFetch';
import AppLoader from '../../../../../../components/molecules/AppLoader';
const MainCategory = ({ category, title, setCurrentPosition }) => {
    const mainCategory = useSelector((state) => state.productRegistration.mainCategory)
    const [showError, setShowError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [categories, setCategories] = useState([])
    const errorHandler = (action) => {
        if (action == 'Prev') {
            setCurrentPosition(prev => prev - 1)
        }
        if (!mainCategory.id) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 2000)

        } else if (action == 'Next') {
            setCurrentPosition(prev => prev + 1)
        }
    }


    useEffect(() => {
        const fetShops = async () => {
            const { data } = await fetchData('seller/category/view/', setError, setIsLoading)
            setCategories(data.data)
        }
        fetShops()

    })


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                {
                    showError && (
                        <ProductRegistrationError label='Please select main category' />
                    )
                }
                <Text style={styles.textTitle}>{title}</Text>
                <View style={styles.categoriesHolder}>
                    {
                        categories.map((category, index) => (
                            <SingleCategoryCard key={category.id} category={category}
                                cat="mainCategory"
                                finalObject={mainCategory}
                                idType="id"
                            />
                        ))
                    }
                    {/* </ScrollView> */}
                </View>
            </ScrollView>
            <View style={styles.actionButtonHolder}>
                <AddProductActionButton label={"Prev"} action="Prev" errorHandler={errorHandler} />
                <AddProductActionButton label={"Next"} action="Next" errorHandler={errorHandler} setCurrentPosition={setCurrentPosition} />
            </View>
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}
export default MainCategory
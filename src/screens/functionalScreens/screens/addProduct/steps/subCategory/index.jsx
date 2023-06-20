import { View, Text, TouchableOpacity, FlatList, ScrollView, RefreshControl, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
import ProductRegistrationError from '../../../../../../components/atoms/productRegistrationError';
import { fetchData } from '../../../../../../hooks/useFetch';
import AppLoader from '../../../../../../components/molecules/AppLoader';
import { HeightDimension } from '../../../../../../globalConstants/styles';
import NotFound from '../components/notFound';
const SubCategory = ({ category, title, index, setCurrentPosition }) => {
    const subCategory = useSelector((state) => state.productRegistration.subCategory)
    const mainCategory = useSelector((state) => state.productRegistration.mainCategory)
    const [showError, setShowError] = useState(false)
    const [subCategories, setsubCategories] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const errorHandler = (action) => {
        if (action == 'Prev') {
            setCurrentPosition(prev => prev - 1)
        }
        if (!subCategory.id) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 2000)

        } else if (action == 'Next') {
            setCurrentPosition(prev => prev + 1)
        }
    }
    const fetchSubCategories = async () => {
        const { data } = await fetchData(`seller/subcategory/get/${mainCategory?.id}`, setError, setIsLoading)
        setsubCategories(data.data)
    }

    useEffect(() => {
        fetchSubCategories()

    }, [])

    return (
        <View style={styles.container}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchSubCategories} />} showsVerticalScrollIndicator={false}>
                {
                    showError && (
                        <ProductRegistrationError label='Please select sub category' />
                    )
                }
                <Text style={styles.textTitle}>{title}</Text>
                <View style={styles.categoriesHolder}>
                    <ScrollView>
                        {
                            subCategories.map((category, index) => (
                                <SingleCategoryCard key={category.id} category={category}
                                    cat="subCategory"
                                    finalObject={subCategory}
                                    idType='id'
                                />
                            ))
                        }
                    </ScrollView>
                    {
                        subCategories?.length == 0 && (
                            <NotFound />
                        )
                    }
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

export default SubCategory
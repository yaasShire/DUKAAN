import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
import ProductRegistrationError from '../../../../../../components/atoms/productRegistrationError';
import { fetchData } from '../../../../../../hooks/useFetch';
import AppLoader from '../../../../../../components/molecules/AppLoader';
const SubCategory = ({ category, title, index, setCurrentPosition }) => {
    const subCategory = useSelector((state) => state.productRegistration.subCategory)
    const [showError, setShowError] = useState(false)
    const [subCategories, setsubCategories] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState([])
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

    useEffect(() => {
        const fetShops = async () => {
            const { data } = await fetchData('seller/subcategory/view/', setError, setIsLoading)
            setsubCategories(data.data)
        }
        fetShops()

    })

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    showError && (
                        <ProductRegistrationError label='Please select sub category' />
                    )
                }
                <Text style={styles.textTitle}>{title}</Text>
                <View style={styles.categoriesHolder}>
                    <View>
                        <ScrollView style={{}}>
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
                    </View>
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
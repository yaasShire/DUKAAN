import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
import ProductRegistrationError from '../../../../../../components/atoms/productRegistrationError';
import { fetchData } from '../../../../../../hooks/useFetch';
import AppLoader from '../../../../../../components/molecules/AppLoader';

const ProductCategory = ({ category, title, index, setCurrentPosition }) => {
    const productCategory = useSelector((state) => state.productRegistration.productCategory)
    const [showError, setShowError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [productCategories, setProductCategories] = useState([])
    const errorHandler = (action) => {
        if (action == 'Prev') {
            setCurrentPosition(prev => prev - 1)
        }
        if (!productCategory.id) {
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
            const { data } = await fetchData('seller/productcategory/view', setError, setIsLoading)
            setProductCategories(data?.data)
        }
        fetShops()

    }, [])
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    showError && (
                        <ProductRegistrationError label='Please select product category' />
                    )
                }
                <Text style={styles.textTitle}>{title}</Text>
                <View style={styles.categoriesHolder}>
                    <View>
                        <ScrollView style={{}}>
                            {
                                productCategories.map((category, index) => (
                                    <SingleCategoryCard key={category.id} category={category}
                                        cat="productCategory"
                                        finalObject={productCategory}
                                        idType='id'
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.actionButtonHolder}>
                <AddProductActionButton errorHandler={errorHandler} action="Prev" label={"Prev"} />
                <AddProductActionButton errorHandler={errorHandler} action="Next" label={"Next"} setCurrentPosition={setCurrentPosition} />
            </View>
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}

export default ProductCategory
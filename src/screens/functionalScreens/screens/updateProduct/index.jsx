import { View, Text, StatusBar, RefreshControl, SafeAreaView } from 'react-native'
import React, { useCallback, useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import AppHeader from '../../../../components/molecules/header'
import styles from './style'
import UpdateProductCard from './components/updateProductCard'
import { fetchData } from '../../../../hooks/useFetch'
import { useFocusEffect } from '@react-navigation/native'
import UpdateProductModalField from './components/updateProductModalField'
import AppLoader from '../../../../components/molecules/AppLoader'
import UpdatePickerProduct from './components/updatePickerProduct'
import UpdatePickerColor from './components/updatePickerColor'
import { TextInput } from 'react-native-paper'
const UpdateProduct = ({ navigation = {}, route }) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [mainCategories, setMainCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [productCategories, setProductCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [targetProduct, setTargetProduct] = useState(route?.params?.data)
    const [refreshing, setRefreshing] = useState(false)
    const [colors, setColors] = useState([])
    const fetchMainCategories = async () => {
        const response = await fetchData('seller/category/view', setError, setIsLoading)
        if (response?.data?.data?.length > 0) {
            setMainCategories(response?.data?.data)
        }
    }
    const fetchSubCategories = async () => {
        const response = await fetchData('seller/subcategory/view', setError, setIsLoading)
        if (response?.data?.data?.length > 0) {
            setSubCategories(response?.data?.data)
        }
    }
    const fetchProductCategories = async () => {
        const response = await fetchData('seller/productcategory/view', setError, setIsLoading)
        if (response?.data?.data?.length > 0) {
            setProductCategories(response?.data?.data)
        }
    }
    const fetchBrands = async () => {
        const response = await fetchData('seller/brand/view', setError, setIsLoading)
        if (response?.data?.data?.length > 0) {
            setBrands(response?.data?.data)
        }
    }

    const fetchTargetProduct = async () => {
        const { data } = await fetchData(`seller/products/view/${route?.params?.data?.UPID}`, setError, setIsLoading)
        if (data?.data[0]) {
            setTargetProduct(data?.data[0])
            setRefreshing(false)
        }
    }
    const fetchColors = async () => {
        // const { data } = await fetchData(`seller/products/view/${route?.params?.data?.UPID}`, setError, setIsLoading)
        const { data } = await fetchData('seller/color/view', setError, setIsLoading)
        if (data?.data[0]) {
            setColors(data?.data)
            setRefreshing(false)
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchMainCategories()
            fetchSubCategories()
            fetchProductCategories()
            fetchBrands()
            fetchTargetProduct()
            fetchColors()
        }, [])
    )
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'default'} />
            <SafeAreaView />
            <AppHeader backButton title='Update Product' navigation={navigation} />
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => {
                fetchTargetProduct()
                fetchBrands()
                fetchMainCategories()
                fetchProductCategories()
                fetchSubCategories()
            }} />} contentContainerStyle={styles.contentWrapper} style={{ flex: 1 }}>
                <TextInput keyboardType=''></TextInput>
                <UpdateProductCard keyboardType='default' keyType="" label="Product Name" value={targetProduct?.name} color='purple' onPress={() => { }} productId={targetProduct?.UPID} fieldName='name' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} />
                <UpdateProductCard keyboardType='number-pad' label="Price" value={Number(targetProduct?.price)} color='red' onPress={() => { }} productId={targetProduct?.UPID} fieldName='price' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} />
                <UpdateProductCard keyboardType='number-pad' label="Quantity Available" value={targetProduct?.quantity_avaliable} color='gold' onPress={() => { }} productId={targetProduct?.UPID} fieldName='quantity_avaliable' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} />
                <UpdateProductCard keyboardType='number-pad' label="Size" value={targetProduct?.size} color='chocolate' onPress={() => { }} productId={targetProduct?.UPID} fieldName='size' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} />
                <UpdateProductCard label="Description" value={targetProduct?.description} color='green' onPress={() => { }} productId={targetProduct?.UPID} fieldName='description' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} />
                {/* <UpdateProductCard label="Brand" value={targetProduct?.brand?.name} category={targetProduct?.brand} color='purple' onPress={() => { }} productId={targetProduct?.UPID} fieldName='brand' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} /> */}
                {/* <UpdateProductCard label="Main Category" value={targetProduct?.category?.name} category={targetProduct?.category} color='purple' onPress={() => { }} productId={targetProduct?.UPID} fieldName='category' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} /> */}
                {/* <UpdateProductCard label="Sub Category" value={targetProduct?.subcategory?.name} category={targetProduct?.subcategory} color='blue' onPress={() => { }} productId={targetProduct?.UPID} fieldName='subcategory' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} /> */}
                {/* <UpdateProductCard label="Product Category" value={targetProduct?.productcategory?.name} category={targetProduct?.productcategory} color='orange' onPress={() => { }} productId={targetProduct?.UPID} fieldName='productcategory' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} /> */}
                <UpdatePickerProduct label="Brand" value={targetProduct?.brand?.name} category={targetProduct?.brand} listData={brands} color='purple' onPress={() => { }} productId={targetProduct?.UPID} fieldName='brand' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} />
                <UpdatePickerProduct label="Main Category" value={targetProduct?.category?.name} category={targetProduct?.category} listData={mainCategories} color='purple' onPress={() => { }} productId={targetProduct?.UPID} fieldName='category' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} />
                <UpdatePickerProduct label="Sub Category" value={targetProduct?.subcategory?.name} category={targetProduct?.subcategory} color='blue' listData={subCategories} onPress={() => { }} productId={targetProduct?.UPID} fieldName='subcategory' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} />
                <UpdatePickerProduct label="Product Category" value={targetProduct?.productcategory?.name} category={targetProduct?.productcategory} listData={productCategories} color='orange' onPress={() => { }} productId={targetProduct?.UPID} fieldName='productcategory' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} />
                <UpdatePickerColor label="Color" value={targetProduct?.color} category={"Update Color"} listData={colors} color='orange' onPress={() => { }} productId={targetProduct?.UPID} fieldName='color' setIsLoading={setIsLoading} setError={setError} fetchTargetProduct={fetchTargetProduct} />
            </ScrollView>
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}

export default UpdateProduct
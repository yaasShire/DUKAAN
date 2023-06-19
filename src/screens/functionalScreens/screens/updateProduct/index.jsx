import { View, StatusBar, Image, TouchableWithoutFeedback, ScrollView, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import sProduct1 from '../../../../assets/sProduct1.png'
import PricingSectionCard from '../../../../components/molecules/productInformationSectionCard';
import InventorySectionCard from '../../../../components/molecules/inventorySectionCard';
import AppHeader from '../../../../components/molecules/header';
import { Tab, Text, TabView } from '@rneui/themed';
import { globalStyles } from '../../../../globalConstants/styles';
import SalesSectionCard from '../../../../components/molecules/categorySectionCard';
import ProductInformationSectionCard from '../../../../components/molecules/productInformationSectionCard';
import CategorySectionCard from '../../../../components/molecules/categorySectionCard';
import { fetchData } from '../../../../hooks/useFetch';
import TopBar from './components/TopBar';
import AppLoader from '../../../../components/molecules/AppLoader';
const UpdateProduct = ({ navigation, route }) => {
    const [index, setIndex] = React.useState(0);
    const [productDetail, setProductDetail] = useState(route.params?.data)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [mainCategories, setMainCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [productCategories, setProductCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [targetProduct, setTargetProduct] = useState({})
    const [refreshing, setRefreshing] = useState(true)

    const updateSections = new Map()
    updateSections.set(1, <PricingSectionCard navigation={navigation} />)
    updateSections.set(2, <InventorySectionCard navigation={navigation} />)
    updateSections.set(3, <PricingSectionCard navigation={navigation} />)

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

    useEffect(() => {
        fetchMainCategories()
        fetchSubCategories()
        fetchProductCategories()
        fetchBrands()
        fetchTargetProduct()
    }, [])



    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={'light-content'} />
            <AppHeader title={"Edit "} navigation={navigation} color={"#000"} backButton={true} />
            <ScrollView enableEmptySections={true} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchTargetProduct} />} style={styles.scrollContainer}>
                <View style={styles.contentWrapper}>
                    <TopBar index={index} setIndex={setIndex} />
                    <TabView value={index} onChange={setIndex} animationType="spring">
                        <TabView.Item style={{ width: "100%" }}>
                            <ProductInformationSectionCard productDetail={targetProduct} navigation={navigation} />
                        </TabView.Item>
                        <TabView.Item style={{ width: "100%" }}>
                            <InventorySectionCard productDetail={targetProduct} navigation={navigation} />
                        </TabView.Item>
                        <TabView.Item style={{ width: "100%" }}>
                            <CategorySectionCard mainCategories={mainCategories} subCategories={subCategories} productCategories={productCategories} brands={brands} productDetail={targetProduct} navigation={navigation} />
                        </TabView.Item>
                    </TabView>
                </View>
            </ScrollView>
            {/* {
                isLoading && (
                    <AppLoader />
                )

            } */}
        </View>
    )
}

export default UpdateProduct
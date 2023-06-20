import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import sProduct1 from '../../../../../../assets/sProduct1.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
import ReviewRowCheck from '../../../../../../components/atoms/reviewRowCheck';
import { useSelector } from 'react-redux';
import { productDataGenerator, uploadDataGenerator } from '../../../../../../utils/utilityFunctions';
import { fetchData } from '../../../../../../hooks/useFetch';
import { postData } from '../../../../../../hooks/usePost';
import AppLoader from '../../../../../../components/molecules/AppLoader';
import UploadingAnimation from '../../../../../../components/molecules/uploadingAnimation'
import completedImage from '../../../../../../assets/images/completedSteps.png'
import AppErrorHandler from '../../../../../../components/molecules/appErrorHandler';
import { setMainCategory, setProductCategory, setSubCategory, setShopsList, setProductImage1, setProductImage2, setProductImage3, setProductImage4, setProductOffers, fillRequiredProductInformation, } from '../../../../../../redux/products'
import { useDispatch } from 'react-redux';
import { clearProductRegistrationState } from '../services';
const ReviewAndPublish = ({ navigation }) => {
    const { subCategory, productCategory, shopsList, productRequiredInfo, productOffers, mainCategory, images } = useSelector((state) => state.productRegistration)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const logStates = () => {
    }
    const formatedShopData = productDataGenerator(subCategory, productCategory, shopsList, productRequiredInfo, productOffers, mainCategory, images)
    const productData = uploadDataGenerator(formatedShopData, images)
    const uploadProduct = async () => {
        setIsLoading(true)
        const data = await postData('seller/products/create', productData, setError, setIsLoading)
        if (data?.result) {
            navigation.replace("productList")
        }
    }
    useEffect(() => {
        logStates()
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Review And Publish</Text>
            </View>
            <View style={styles.mainImageWrapper}>
                <View style={styles.imageWrapper}>
                    <Image source={completedImage} style={styles.image} />
                </View>
            </View>
            <ScrollView style={styles.completedSectionsWrapper} showsVerticalScrollIndicator={false}>
                <ReviewRowCheck label={"Shop"} />
                <ReviewRowCheck label={"Main category"} />
                <ReviewRowCheck label={"Product category"} />
                <ReviewRowCheck label={"Sub category"} />
                <ReviewRowCheck label={"Images"} />
                <ReviewRowCheck label={"Required info"} />
                <ReviewRowCheck label={"Offers"} />
                <View style={styles.buttonWrapper}>
                    <AddProductActionButton clearProductRegistrationState={() => clearProductRegistrationState(dispatch)} label={"Finish"} navigation={navigation} uploadProduct={uploadProduct} />
                </View>
            </ScrollView>
            {
                isLoading && (
                    <UploadingAnimation />
                )
            }
            {/* {
                error && (
                    <AppErrorHandler />
                )
            } */}
        </View>
    )
}

export default ReviewAndPublish
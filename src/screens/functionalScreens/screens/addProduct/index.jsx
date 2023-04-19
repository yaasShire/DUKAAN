import { View, Text, StatusBar, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import StepIndicator from 'react-native-step-indicator';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddProductHeader from '../../../../components/molecules/brandCard/addProductHeader';
import AddProductBody from '../../../../components/molecules/addProductBody';
import { mainCategories, productCategories, subCategories, shopsList } from '../../../../dataStore';
import AddProductActionButton from '../../../../components/atoms/addProductActionButton';
import AddImages from './steps/addImages';
import Offers from './steps/offers';
import RequiredInfo from './steps/requiredInfo';
import MainCategory from './steps/mainCategory';
import ProductCategory from './steps/productCategory';
import SubCategory from './steps/subCategory';
import ShopList from './steps/shopsList';
import AppHeader from '../../../../components/molecules/appHeader';
import ReviewAndPublish from './steps/reviewAndPublish';
const AddProduct = ({ navigation }) => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const tabs = new Map();
    tabs.set(0, <ShopList setCurrentPosition={setCurrentPosition} category={shopsList} title="Please select shop from list below" />);
    tabs.set(1, <MainCategory setCurrentPosition={setCurrentPosition} category={mainCategories} title="Please select  category from  the list below" />);
    tabs.set(2, <SubCategory setCurrentPosition={setCurrentPosition} category={subCategories} title="Please select  sub category from the list below." />);
    tabs.set(3, <ProductCategory setCurrentPosition={setCurrentPosition} category={productCategories} title="Please select product category from the list below" />);
    tabs.set(4, <AddImages setCurrentPosition={setCurrentPosition} title="Please insert product image from your device" />);
    tabs.set(5, <RequiredInfo setCurrentPosition={setCurrentPosition} category={mainCategories} title="Please fill the required information" />);
    tabs.set(6, <Offers setCurrentPosition={setCurrentPosition} index={5} category={mainCategories} title="Please fill the offers of the product" />);
    tabs.set(7, <ReviewAndPublish setCurrentPosition={setCurrentPosition} navigation={navigation} />);
    const customStyles = {
        stepIndicatorSize: 30,
        currentStepIndicatorSize: 35,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#000',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#4DDB5B',
        stepStrokeUnFinishedColor: '#fff',
        separatorFinishedColor: '#000',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fff',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#000',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fff',
        stepIndicatorLabelFinishedColor: '#000',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#000000',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'
    }
    const handlePosition = (position) => {
        setCurrentPosition(position)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <AppHeader navigation={navigation} title={"Add Product"} screen="Add Product" />
            <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                stepCount={8}
                onPress={handlePosition}
            />
            <View style={styles.productBodyHolder}>
                {tabs.get(currentPosition)}
            </View>

        </SafeAreaView>
    )
}

export default AddProduct
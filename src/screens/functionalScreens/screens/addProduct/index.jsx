import { View, Text, StatusBar, ScrollView, Platform, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import StepIndicator from 'react-native-step-indicator';
// import { SafeAreaView } from 'react-native-safe-area-context';
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
// import AppHeader from '../../../../components/molecules/appHeader';
import AppHeader from '../../../../components/molecules/header';
import ReviewAndPublish from './steps/reviewAndPublish';
import { stepperCustomStyles } from '../../../../dataStore';
import { useDispatch } from 'react-redux';
import { clearProductRegistrationState } from './steps/services';
import AddColor from './steps/addColor';
import AddRecord from './steps/addRecord';
const AddProduct = ({ navigation }) => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const dispatch = useDispatch()
    const tabs = new Map();
    tabs.set(0, <ShopList setCurrentPosition={setCurrentPosition} category={shopsList} title="Please select shop from list below" />);
    tabs.set(1, <MainCategory setCurrentPosition={setCurrentPosition} category={mainCategories} title="Please select  category from  the list below" />);
    tabs.set(2, <SubCategory setCurrentPosition={setCurrentPosition} category={subCategories} title="Please select  sub category from the list below." />);
    tabs.set(3, <ProductCategory setCurrentPosition={setCurrentPosition} category={productCategories} title="Please select product category from the list below" />);
    tabs.set(4, <AddImages setCurrentPosition={setCurrentPosition} title="Please insert product image from your device" />);
    tabs.set(5, <AddColor setCurrentPosition={setCurrentPosition} title="Please add Color" />);
    tabs.set(6, <AddRecord setCurrentPosition={setCurrentPosition} title="Please add size, price and quantity." />);
    tabs.set(7, <RequiredInfo setCurrentPosition={setCurrentPosition} category={mainCategories} title="Please fill the required information" />);
    tabs.set(8, <Offers setCurrentPosition={setCurrentPosition} index={5} category={mainCategories} title="Please fill the offers of the product" />);
    tabs.set(9, <ReviewAndPublish setCurrentPosition={setCurrentPosition} navigation={navigation} />);
    const customStyles = stepperCustomStyles
    const handlePosition = (position) => {
        setCurrentPosition(position)
    }
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle='light-content' />
            <AppHeader clearProductRegistrationState={() => clearProductRegistrationState(dispatch)} navigation={navigation} cancelButton={true} title={"Add Product"} screen="Add Product" />
            <View style={styles.subWrapper}>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={currentPosition}
                    stepCount={10}
                // onPress={handlePosition}
                />
                <ScrollView contentContainerStyle={styles.productBodyHolder}>
                    {tabs.get(currentPosition)}
                </ScrollView>
            </View>

        </View>
    )
}

export default AddProduct
import { View, Text, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style'
import StepIndicator from 'react-native-step-indicator';
import PersonalInfo from './steps/personalInfo';
import ShopInfo from './steps/shopInfo';
import LocationInfo from './steps/locationInfo';
import ShopImages from './steps/shopImages';
import AddProductHeader from '../../../components/molecules/brandCard/addProductHeader';
const AddShop = ({ navigation }) => {
    const [currentPosition, setcurrentPosition] = useState(0)
    const labels = ["Personal data", "Shop data", "Location data", "Shop images"];
    const [errorHandlers, setErrorHandlers] = useState(null)
    const handlePosition = (errors) => {
        setcurrentPosition(prev => prev + 1)
    }
    const tabs = new Map();
    tabs.set(0, <PersonalInfo setcurrentPosition={setcurrentPosition} setErrorHandlers={setErrorHandlers} />)
    tabs.set(1, <ShopInfo setcurrentPosition={setcurrentPosition} setErrorHandlers={setErrorHandlers} />)
    tabs.set(2, <LocationInfo setcurrentPosition={setcurrentPosition} setErrorHandlers={setErrorHandlers} />)
    tabs.set(3, <ShopImages setcurrentPosition={setcurrentPosition} setErrorHandlers={setErrorHandlers} navigation={navigation} />)
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'
    }
    return (
        <SafeAreaView style={styles.container} showsVerticalScrollIndicator={false}>
            <StatusBar barStyle={'light-content'} />
            <View>
                <AddProductHeader label="Add Shop" navigation={navigation} />
            </View>
            <StepIndicator
                stepCount={4}
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
                onPress={handlePosition}
            />
            <View style={styles.contentHolder}>
                {tabs.get(currentPosition)}
            </View>

        </SafeAreaView>
    )
}

export default AddShop
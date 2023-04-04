import { View, Text, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import StepIndicator from 'react-native-step-indicator';
import { SafeAreaView } from 'react-native-safe-area-context';
import PersonalInfo from './steps/personalInfo';
import ShopInfo from './steps/shopInfo';
import LocationInfo from './steps/locationInfo';
import ShopImages from './steps/shopImages';
const AddShop = () => {
    const [currentPosition, setcurrentPosition] = useState(0)
    const labels = ["Personal data", "Shop data", "Location data", "Shop images"];
    const [errorHandlers, setErrorHandlers] = useState(null)
    const handlePosition = (errors) => {
        errorHandlers == null && setcurrentPosition(prev => prev + 1)

    }
    const tabs = new Map();
    tabs.set(0, <PersonalInfo setcurrentPosition={setcurrentPosition} setErrorHandlers={setErrorHandlers} />)
    tabs.set(1, <ShopInfo setcurrentPosition={setcurrentPosition} setErrorHandlers={setErrorHandlers} />)
    tabs.set(2, <LocationInfo setcurrentPosition={setcurrentPosition} setErrorHandlers={setErrorHandlers} />)
    tabs.set(3, <ShopImages setcurrentPosition={setcurrentPosition} setErrorHandlers={setErrorHandlers} />)
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
        <ScrollView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
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

        </ScrollView>
    )
}

export default AddShop
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
import { labels, stepperCustomStyles } from '../../../dataStore';
const AddShop = ({ navigation }) => {
    const [currentPosition, setcurrentPosition] = useState(0)
        ;

    const handlePosition = (position) => {
        setcurrentPosition(position)
    }
    const tabs = new Map();
    tabs.set(0, <PersonalInfo setcurrentPosition={setcurrentPosition} />)
    tabs.set(1, <ShopInfo setcurrentPosition={setcurrentPosition} />)
    tabs.set(2, <LocationInfo setcurrentPosition={setcurrentPosition} />)
    tabs.set(3, <ShopImages setcurrentPosition={setcurrentPosition} navigation={navigation} />)
    const customStyles = stepperCustomStyles
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
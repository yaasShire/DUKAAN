import { View, Text, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style'
import StepIndicator from 'react-native-step-indicator';
import PersonalInfo from './steps/personalInfo';
import ShopInfo from './steps/shopInfo';
import LocationInfo from './steps/locationInfo';
import ShopImages from './steps/shopImages';
import AddProductHeader from '../../../components/molecules/brandCard/addProductHeader';
import { labels, stepperCustomStyles } from '../../../dataStore';
import { fetchData } from '../../../hooks/useFetch';
import { useFocusEffect } from '@react-navigation/native';
const AddShop = ({ navigation }) => {
    const [currentPosition, setcurrentPosition] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
        ;

    useFocusEffect(
        React.useCallback(() => {
            const getUserData = async () => {
                const { data: userData } = await fetchData('seller/user/view', setError, setIsLoading)
                // setUser(userData.data[0]) 
            }
            getUserData()
            return () => {
                // Actions to perform when the screen loses focus
            };
        }, [])
    );


    const handlePosition = (position) => {
        setcurrentPosition(position)
    }



    const tabs = new Map();
    // tabs.set(0, <PersonalInfo setcurrentPosition={setcurrentPosition} />)
    tabs.set(0, <ShopInfo setcurrentPosition={setcurrentPosition} />)
    tabs.set(1, <LocationInfo setcurrentPosition={setcurrentPosition} navigation={navigation} />)
    tabs.set(2, <ShopImages setcurrentPosition={setcurrentPosition} navigation={navigation} />)
    const customStyles = stepperCustomStyles
    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>
            <SafeAreaView />
            <StatusBar barStyle={'light-content'} />
            <View>
                <AddProductHeader label="Add Shop" navigation={navigation} />
            </View>
            <StepIndicator
                stepCount={3}
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
                onPress={handlePosition}
            />
            <View style={styles.contentHolder}>
                {tabs.get(currentPosition)}
            </View>

        </View>
    )
}

export default AddShop
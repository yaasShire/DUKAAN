import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderTopTabsStack from './orderTabsStack'
import ViewOrder from '../../../screens/functionalScreens/screens/viewOrder'
import Courier from '../../../screens/functionalScreens/screens/couriers'
import Header from '../../../components/atoms/header'
import SellerAgentVerifyOTP from '../../../screens/functionalScreens/screens/sellerAgentVerifyOTP'
const MainOrderStack = ({ route }) => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='orderTopTabs'>
            <Stack.Screen name='orderTopTabs' component={OrderTopTabsStack} options={{ headerShown: false }} />
            <Stack.Screen name='viewOrder' component={ViewOrder} options={{ headerShown: false }} />
            <Stack.Screen name='courier' component={Courier} options={{ headerShown: false }} />
            <Stack.Screen name='sellerVerifyOTP' component={SellerAgentVerifyOTP} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default MainOrderStack
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../../screens/functionalScreens/screens/Home'
import ViewOrder from '../../../screens/functionalScreens/screens/viewOrder'
import Shops from '../../../screens/functionalScreens/screens/shops'
import AddShop from '../../../screens/functionalScreens/addShop'
import ProductsList from '../../../screens/functionalScreens/screens/productsList'
import Reports from '../../../screens/functionalScreens/screens/reports'
import Settings from '../../../screens/functionalScreens/screens/settings'
import SettingsStack from '../settingsStack'
import ShopProfile from '../../../screens/functionalScreens/screens/shopProfile'
// import BottomTabs from '../../bottomTabs'
const HomeStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='viewOrder' component={ViewOrder} options={{ headerShown: false }} />
            <Stack.Screen name='shops' component={Shops} options={{ headerShown: false }} />
            <Stack.Screen name='addShop' component={AddShop} options={{ headerShown: false }} />
            <Stack.Screen name='reports' component={Reports} options={{ headerShown: false }} />
            <Stack.Screen name='shopProfile' component={ShopProfile} options={{ headerShown: false }} />
            <Stack.Screen name='settings' component={Settings} options={{ headerShown: false }} />
            <Stack.Screen name='productList' component={ProductsList} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeStack
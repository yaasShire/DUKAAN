import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UpdateInventoryField from '../../../screens/functionalScreens/screens/updateInventoryField'
import UpdateProduct from '../../../screens/functionalScreens/screens/updateProduct'
import SalesTabs from '.'
import ProductDetails from '../../../screens/functionalScreens/screens/productDetails'
const MainSalesStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='salesTabs' component={SalesTabs} options={{ headerShown: false }} />
            <Stack.Screen name='updateInventoryField' component={UpdateInventoryField} options={{ headerShown: false }} />
            <Stack.Screen name='updateProduct' component={UpdateProduct} options={{ headerShown: false }} />
            <Stack.Screen name='productDetails' component={ProductDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default MainSalesStack
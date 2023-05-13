import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsList from '../../../screens/functionalScreens/screens/productsList'
import ProductDetails from '../../../screens/functionalScreens/screens/productDetails'
import UpdateProduct from '../../../screens/functionalScreens/screens/updateProduct'
import UpdateInventoryField from '../../../screens/functionalScreens/screens/updateInventoryField'
import AddProduct from '../../../screens/functionalScreens/screens/addProduct'

const ProductsStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='productList' component={ProductsList} options={{ headerShown: false }} />
            <Stack.Screen name='productDetails' component={ProductDetails} options={{ headerShown: false }} />
            <Stack.Screen name='updateProduct' component={UpdateProduct} options={{ headerShown: false }} />
            <Stack.Screen name='updateInventoryField' component={UpdateInventoryField} options={{ headerShown: false }} />
            <Stack.Screen name='addProduct' component={AddProduct} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default ProductsStack
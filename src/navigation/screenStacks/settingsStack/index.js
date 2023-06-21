import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from '../../../screens/functionalScreens/screens/settings'
import ChangePassword from '../../../screens/functionalScreens/screens/changePassword'
import Reports from '../../../screens/functionalScreens/screens/reports'
import AddProduct from '../../../screens/functionalScreens/screens/addProduct'
import AddShop from '../../../screens/functionalScreens/addShop'
import EditProfile from '../../../screens/functionalScreens/screens/editProfile'
import Privacy from '../../../screens/functionalScreens/screens/privacy'
import Help from '../../../screens/functionalScreens/screens/help'

const SettingsStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='settings' component={Settings} options={{ headerShown: false }} />
            <Stack.Screen name='reports' component={Reports} options={{ headerShown: false }} />
            <Stack.Screen name='addProduct' component={AddProduct} options={{ headerShown: false }} />
            <Stack.Screen name='changePassword' component={ChangePassword} options={{ headerShown: false }} />
            <Stack.Screen name='addShop' component={AddShop} options={{ headerShown: false }} />
            <Stack.Screen name='editProfile' component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name='privacy' component={Privacy} options={{ headerShown: false }} />
            <Stack.Screen name='help' component={Help} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default SettingsStack
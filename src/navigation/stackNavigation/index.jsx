import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import OnboardingC from '../../screens/Auth/onboarding'
import SignUp from '../../screens/Auth/signup'
import Login from '../../screens/Auth/login'
import OTP from '../../screens/Auth/otp'
import ForgetPassword from '../../screens/Auth/forgetpassword'
import NewPassword from '../../screens/Auth/newPassword'
import Success from '../../screens/Auth/success'
import BottomTabs from '../../screens/functionalScreens/bottomTabs'
import ViewOrder from '../../screens/functionalScreens/screens/viewOrder'
import AddProduct from '../../screens/functionalScreens/screens/addProduct'
import ProductsList from '../../screens/functionalScreens/screens/productsList'
import MainFilter from '../../screens/functionalScreens/screens/mainFilter'
import Shops from '../../screens/functionalScreens/screens/shops'
import AddShop from '../../screens/functionalScreens/addShop'
import EditProfile from '../../screens/functionalScreens/editProfile'
import UpdateShopDetails from '../../screens/functionalScreens/updateShopDetails'
import UpdateImages from '../../screens/functionalScreens/screens/updateShopImages'
import ShopImagesUpdate from '../../screens/functionalScreens/screens/updateShopImages'
import ChangePassword from '../../screens/functionalScreens/screens/changePassword'
import UpdateProduct from '../../screens/functionalScreens/updateProduct'
import UpdateInventoryField from '../../screens/functionalScreens/updateInventoryField'
import ProductDetails from '../../screens/functionalScreens/screens/productDetails'
import Reports from '../../screens/functionalScreens/reports'
const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='bottomTabs'>
                <Stack.Screen name='onboarding' component={OnboardingC} options={{ headerShown: false }} />
                <Stack.Screen name='signup' component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='otp' component={OTP} options={{ headerShown: false }} />
                <Stack.Screen name='forgetPassword' component={ForgetPassword} options={{ headerShown: false }} />
                <Stack.Screen name='newPassword' component={NewPassword} options={{ headerShown: false }} />
                <Stack.Screen name='success' component={Success} options={{ headerShown: false }} />
                <Stack.Screen name='bottomTabs' component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name='viewOrder' component={ViewOrder} options={{ headerShown: false }} />
                <Stack.Screen name='addProduct' component={AddProduct} options={{ headerShown: false }} />
                <Stack.Screen name='productList' component={ProductsList} options={{ headerShown: false }} />
                <Stack.Screen name='mainFilter' component={MainFilter} options={{ headerShown: false }} />
                <Stack.Screen name='shops' component={Shops} options={{ headerShown: false }} />
                <Stack.Screen name='addShop' component={AddShop} options={{ headerShown: false }} />
                <Stack.Screen name='editProfile' component={EditProfile} options={{ headerShown: false }} />
                <Stack.Screen name='updateShopDetails' component={UpdateShopDetails} options={{ headerShown: false }} />
                <Stack.Screen name='updateShopImages' component={ShopImagesUpdate} options={{ headerShown: false }} />
                <Stack.Screen name='changePassword' component={ChangePassword} options={{ headerShown: false }} />
                <Stack.Screen name='updateProduct' component={UpdateProduct} options={{ headerShown: false }} />
                <Stack.Screen name='updateInventoryField' component={UpdateInventoryField} options={{ headerShown: false }} />
                <Stack.Screen name='productDetails' component={ProductDetails} options={{ headerShown: false }} />
                <Stack.Screen name='reports' component={Reports} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;
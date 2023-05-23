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
import BottomTabs from '../bottomTabs'
import ViewOrder from '../../screens/functionalScreens/screens/viewOrder'
import AddProduct from '../../screens/functionalScreens/screens/addProduct'
import ProductsList from '../../screens/functionalScreens/screens/productsList'
import MainFilter from '../../screens/functionalScreens/screens/mainFilter'
import Shops from '../../screens/functionalScreens/screens/shops'
import AddShop from '../../screens/functionalScreens/addShop'
import EditProfile from '../../screens/functionalScreens/screens/editProfile'
import UpdateShopDetails from '../../screens/functionalScreens/screens/updateShopDetails'
import UpdateImages from '../../screens/functionalScreens/screens/updateShopImages'
import ShopImagesUpdate from '../../screens/functionalScreens/screens/updateShopImages'
import ChangePassword from '../../screens/functionalScreens/screens/changePassword'
import UpdateProduct from '../../screens/functionalScreens/screens/updateProduct'
import UpdateInventoryField from '../../screens/functionalScreens/screens/updateInventoryField'
import ProductDetails from '../../screens/functionalScreens/screens/productDetails'
import Reports from '../../screens/functionalScreens/screens/reports'
import Courier from '../../screens/functionalScreens/screens/couriers'
import SalesTabs from '../screenStacks/sales'
import AddShopFirstTime from '../../screens/functionalScreens/screens/addShopFirstTime'
import DrawerComponent from '../drawer'
import Test from './Test'
const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='bottomTabs'>
                <Stack.Screen name='drawer' component={DrawerComponent} options={{ headerShown: false }} />
                <Stack.Screen name='addShopFirstTime' component={AddShopFirstTime} options={{ headerShown: false }} />
                <Stack.Screen name='onboarding' component={OnboardingC} options={{ headerShown: false }} />
                <Stack.Screen name='signup' component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='otp' component={OTP} options={{ headerShown: false }} />
                <Stack.Screen name='forgetPassword' component={ForgetPassword} options={{ headerShown: false }} />
                <Stack.Screen name='newPassword' component={NewPassword} options={{ headerShown: false }} />
                <Stack.Screen name='success' component={Success} options={{ headerShown: false }} />
                <Stack.Screen name='bottomTabs' component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name='editProfile' component={EditProfile} options={{ headerShown: false }} />
                <Stack.Screen name='updateShopDetails' component={UpdateShopDetails} options={{ headerShown: false }} />
                <Stack.Screen name='test' component={Test} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigator;
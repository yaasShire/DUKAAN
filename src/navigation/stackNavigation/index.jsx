import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import { checkIsUserLogIn } from '../../utils/utilityFunctions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Initial from '../../screens/Auth/initial'
import Pending from '../../screens/Auth/pending'
const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isVerified, setIsVerified] = useState(null)
    useEffect(() => {
        const fetchStatu = async () => {
            const loginStatus = await AsyncStorage.getItem('access_token');
            const verificationStatus = JSON.parse(await AsyncStorage.getItem('verified'))
            setIsLoggedIn(!!loginStatus);
            setIsVerified(verificationStatus)
        };
        fetchStatu();
    }, [isVerified]);

    if (isLoggedIn === null) {
        return
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size={100} />
        </View>
    }
    let initialRouteName;
    if (isVerified !== null) {
        // initialRouteName = (isLoggedIn && isVerified) ? 'bottomTabs' : isVerified == false ? 'pending' : isVerified == true ? 'login' : 'initial'

    }
    initialRouteName = isLoggedIn ? 'bottomTabs' : 'login'

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName}>
                <Stack.Screen name='onboarding' component={OnboardingC} options={{ headerShown: false }} />
                <Stack.Screen name='initial' component={Initial} options={{ headerShown: false }} />
                <Stack.Screen name='pending' component={Pending} options={{ headerShown: false }} />
                <Stack.Screen name='signup' component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='otp' component={OTP} options={{ headerShown: false }} />
                <Stack.Screen name='forgetPassword' component={ForgetPassword} options={{ headerShown: false }} />
                <Stack.Screen name='newPassword' component={NewPassword} options={{ headerShown: false }} />
                <Stack.Screen name='success' component={Success} options={{ headerShown: false }} />
                <Stack.Screen name='bottomTabs' component={BottomTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigator;
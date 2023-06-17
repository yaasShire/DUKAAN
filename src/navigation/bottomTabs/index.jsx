import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Home from '../../screens/functionalScreens/screens/Home';
import TopTabs from '../screenStacks/ordersStack/orderTabsStack';
import ProductsList from '../../screens/functionalScreens/screens/productsList';
import Settings from '../../screens/functionalScreens/screens/settings';
import { Dimensions, SafeAreaView } from 'react-native';
import salesStack from '../screenStacks/sales';
import { Platform } from 'react-native';
import HomeStack from '../screenStacks/homeStack';
import SettingsStack from '../screenStacks/settingsStack';
import ProductsStack from '../screenStacks/productsStack';
import Sales from '../screenStacks/sales';
import MainOrderStack from '../screenStacks/ordersStack/mainOrderStack';
import MainSalesStack from '../screenStacks/sales/mainSalesStack';
import { globalStyles } from '../../globalConstants/styles';

const Tab = createBottomTabNavigator();
export default function BottomTabs({ navigation }) {

    const { width, height } = new Dimensions.get("window")
    return (
        <Tab.Navigator
            initialRouteName="HomeS"
            screenOptions={{
                tabBarActiveTintColor: globalStyles.colors.logoColor,
                tabBarLabelStyle: { fontSize: 11, fontWeight: '500', },
                tabBarStyle: { height: Platform.OS == 'android' ? 50 : 85, },
            }}
        >
            <Tab.Screen
                name="HomeS"
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Orders"
                component={MainOrderStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={25} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            {/* <Tab.Screen
                name="salesStack"
                component={MainSalesStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Sales',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="shipping-fast" color={color} size={25} />
                    ),
                }}
            /> */}
            <Tab.Screen
                name="productsStack"
                component={ProductsStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Products',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="box" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="settingScreens"
                component={SettingsStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="player-settings" color={color} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


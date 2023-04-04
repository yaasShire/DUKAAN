import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Home from '../screens/Home';
import TopTabs from '../../../navigation/topNavigation';
import ProductsList from '../screens/productsList';
import Settings from '../settings';
import { Dimensions, SafeAreaView } from 'react-native';
const Tab = createBottomTabNavigator();
export default function BottomTabs() {
    const { width, height } = new Dimensions.get("window")
    return (
        <Tab.Navigator
            initialRouteName="Home"

            screenOptions={{
                tabBarActiveTintColor: '#FF8B03',
                tabBarLabelStyle: { fontSize: 12, fontWeight: '500', },
                tabBarStyle: { height: height / 11.5, },
                tabBarItemStyle: { marginBottom: 14 }


            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={29} />
                    ),
                }}
            />
            <Tab.Screen
                name="Orders"
                component={TopTabs}
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
                name="Shipping"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Shipping',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="shipping-fast" color={color} size={25} />
                    ),
                }}
            /> */}
            <Tab.Screen
                name="Products"
                component={ProductsList}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Products',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="box" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="settings"
                component={Settings}
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


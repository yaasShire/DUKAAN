import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrdersStages from '../../../screens/functionalScreens/screens/newOrders';
import OnProcess from '../../../screens/functionalScreens/screens/onProcess';
import Completed from '../../../screens/functionalScreens/screens/completed';
import AssignDelivery from '../../../screens/functionalScreens/screens/assignDelivery';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/atoms/header';
import AppHeader from '../../../components/molecules/header';
import { Platform } from 'react-native';

export default function OrderTopTabsStack({ navigation }) {
    const Tab = createMaterialTopTabNavigator();
    return (
        <>
            {/* <AppHeader navigation={navigation} menu={true} /> */}
            <Tab.Navigator
                initialRouteName="newOrders"
                screenOptions={{
                    tabBarActiveTintColor: '#000000',
                    tabBarLabelStyle: { fontSize: 9 },
                    tabBarStyle: { height: Platform.OS == 'android' ? 60 : 90, justifyContent: "flex-end" },
                    tabBarLabelStyle: { fontWeight: "500", fontSize: 10, marginTop: 10 },
                    tabBarIndicatorStyle: { backgroundColor: "orange" }
                }}
            >
                <Tab.Screen
                    name="newOrders"
                    component={OrdersStages}
                    options={{ tabBarLabel: 'Pending' }}
                />
                <Tab.Screen
                    name="assing"
                    component={AssignDelivery}
                    options={{ tabBarLabel: 'Assign' }}
                />
                <Tab.Screen
                    name="onProcess"
                    component={OnProcess}
                    options={{ tabBarLabel: 'On Process' }}
                />
                <Tab.Screen
                    name="completed"
                    component={Completed}
                    options={{ tabBarLabel: 'Completed' }}
                />

            </Tab.Navigator>
        </>
    );
}
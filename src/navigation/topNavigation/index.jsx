import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrdersStages from '../../screens/functionalScreens/screens/orders';
import OnProcess from '../../screens/functionalScreens/screens/onProcess';
import Completed from '../../screens/functionalScreens/screens/completed';
const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
    return (
        <Tab.Navigator
            initialRouteName="newOrders"
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { height: 100, paddingTop: 30 },
            }}
        >
            <Tab.Screen
                name="newOrders"
                component={OrdersStages}
                options={{ tabBarLabel: 'New Orders' }}
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
    );
}
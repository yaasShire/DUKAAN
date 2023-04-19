import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopSales from '../../../screens/functionalScreens/screens/topSales';
const Tab = createMaterialTopTabNavigator();
export default function SalesTabs() {
    return (


        <Tab.Navigator
            initialRouteName="newOrders"
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { height: 50, justifyContent: "flex-end", },
                tabBarLabelStyle: { fontWeight: "500", fontSize: 10 },
                tabBarIndicatorStyle: { backgroundColor: "orange" },
            }}
        >
            <Tab.Screen
                name="newOrders"
                component={TopSales}
                options={{ tabBarLabel: 'Top sales' }}
            />
            <Tab.Screen
                name="onProcess"
                component={TopSales}
                options={{ tabBarLabel: 'Stock' }}
            />
        </Tab.Navigator>

    );
}
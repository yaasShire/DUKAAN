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
                tabBarStyle: { height: 90, justifyContent: "flex-end", },
                tabBarLabelStyle: { fontWeight: "500" },
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
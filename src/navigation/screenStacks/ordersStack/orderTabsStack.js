import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrdersStages from '../../../screens/functionalScreens/screens/newOrders';
import OnProcess from '../../../screens/functionalScreens/screens/onProcess';
import Completed from '../../../screens/functionalScreens/screens/completed';
import AssignDelivery from '../../../screens/functionalScreens/screens/assignDelivery';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/atoms/header';
const Tab = createMaterialTopTabNavigator();
export default function OrderTopTabsStack({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <Tab.Navigator
                initialRouteName="newOrders"
                screenOptions={{
                    tabBarActiveTintColor: '#000000',
                    tabBarLabelStyle: { fontSize: 9 },
                    tabBarStyle: { height: 50, justifyContent: "flex-end", },
                    tabBarLabelStyle: { fontWeight: "500", fontSize: 10 },
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
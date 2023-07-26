import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrdersStages from '../../../screens/functionalScreens/screens/newOrders';
import OnProcess from '../../../screens/functionalScreens/screens/onProcess';
import Completed from '../../../screens/functionalScreens/screens/completed';
import orderPackage from '../../../screens/functionalScreens/screens/orderPackage';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/atoms/header';
import AppHeader from '../../../components/molecules/header';
import { Platform, View } from 'react-native';
import { globalStyles } from '../../../globalConstants/styles';
import { Text } from 'react-native-paper';
import OrderPending from '../../../screens/functionalScreens/screens/orderPending';
export default function OrderTopTabsStack({ navigation }) {
    const Tab = createMaterialTopTabNavigator();
    const PlaceHolder = () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>loading</Text>
        </View>
    )
    return (
        <>
            <Tab.Navigator

                initialRouteName="newOrders"
                screenOptions={{
                    lazy: true,
                    swipeEnabled: true,
                    lazyPlaceholder: (() => <PlaceHolder />),
                    tabBarActiveTintColor: '#000000',
                    tabBarLabelStyle: { fontSize: 9 },
                    tabBarStyle: { height: Platform.OS == 'android' ? 100 : 90, justifyContent: "flex-end" },
                    tabBarLabelStyle: { fontWeight: "500", fontSize: 10, marginTop: 10 },
                    tabBarIndicatorStyle: { backgroundColor: globalStyles.colors.logoColor }
                }}
            >
                <Tab.Screen
                    name="newOrders"
                    component={OrdersStages}
                    options={{ tabBarLabel: 'New' }}
                />
                <Tab.Screen
                    name="pending"
                    component={OrderPending}
                    options={{ tabBarLabel: 'Pending' }}
                />
                <Tab.Screen
                    name="orderPackage"
                    component={orderPackage}
                    options={{ tabBarLabel: 'Package' }}
                />
                <Tab.Screen
                    name="onProcess"
                    component={OnProcess}
                    options={{ tabBarLabel: 'On Going' }}
                />
                <Tab.Screen
                    name="completed"
                    component={Completed}
                    options={{ tabBarLabel: 'Done' }}
                />

            </Tab.Navigator>
        </>
    );
}
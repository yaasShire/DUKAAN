import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/functionalScreens/screens/Home';
import BottomTabs from '../bottomTabs';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MainOrderStack from '../screenStacks/ordersStack/mainOrderStack';
const RightDrawer = createDrawerNavigator();
const RightDrawerScreen = () => {
    function CustomDrawerContent(props) {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <View style={{ backgroundColor: "pink", height: 100 }}>
                    <Text>Hello people</Text>
                </View>
                <DrawerItem
                    label="Profile"
                    onPress={() => props.navigation.jumpTo("Orders")}
                    icon={() => <Ionicons name='person' size={20} color={"gray"} />}
                />
                <DrawerItem
                    label="Help Center"
                    onPress={() => props.navigation.toggleDrawer()}
                    icon={() => <Feather name='help-circle' size={20} color={"gray"} />}
                />
                <DrawerItem
                    label="Privacy & Policy"
                    onPress={() => props.navigation.toggleDrawer()}
                    icon={() => <MaterialIcons name='privacy-tip' size={20} color={"gray"} />}
                />
                <View style={{ marginTop: 500 }}>
                    <DrawerItem
                        label="Log out"
                        labelStyle={{ color: "red" }}
                        onPress={() => props.navigation.toggleDrawer()}
                        icon={() => <Feather name='log-out' size={20} color={"red"} />}
                    />
                </View>
            </DrawerContentScrollView>
        );
    }
    return (
        <RightDrawer.Navigator
            screenOptions={{ drawerPosition: 'left', headerShown: false }}
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <RightDrawer.Screen name="Home" component={BottomTabs} options={{ drawerIcon: () => <Entypo name='home' size={20} color={"#FF8B03"} /> }} />
        </RightDrawer.Navigator>
    );
};

export default function DrawerComponent() {
    return (
        <RightDrawerScreen />
    );
}
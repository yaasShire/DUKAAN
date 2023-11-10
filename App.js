import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/navigation/stackNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProfider } from 'react-native-paper';
import DrawerComponent from './src/navigation/drawer';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
// import SplashAppScreen from './Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postData } from './src/hooks/usePost';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const Stack = createNativeStackNavigator()
  const [fontsLoaded] = Font.useFonts({
    'AstroSpace-0Wl3o': require('./src/assets/fonts/AstroSpace-0Wl3o.otf'),
  });



  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }

  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <Text
        style={{ fontSize: 20, color: "white" }}
      >Loading...</Text>
    </View>;
  }


  return (
    <Provider store={store}>
      <PaperProfider>
        <StackNavigator isLoggedIn={isLoggedIn} />
      </PaperProfider>
    </Provider>

  );
}

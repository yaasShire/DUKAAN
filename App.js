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
import SplashAppScreen from './Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }

  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  if (loading) {
    return <SplashAppScreen />;
  }



  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging?.AuthorizationStatus?.AUTHORIZED ||
      authStatus === messaging?.AuthorizationStatus?.PROVISIONAL;

    if (enabled) {
      // console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    if (requestUserPermission()) {
      messaging().getToken().then(async (token) => {
        const formData = new FormData()
        formData.append('fcm', token)
        const data = await postData('seller/user/updateFCM', formData, setError, setIsLoading)
      });
    } else {
      alert("notification permission declined")
    }

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification, 'yes sir'
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });


    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(remoteMessage.data.title, remoteMessage.data.message);
      console.log(remoteMessage)
    });

    return unsubscribe;
  }, []);




  return (
    <Provider store={store}>
      <PaperProfider>
        <StackNavigator isLoggedIn={isLoggedIn} />
      </PaperProfider>
    </Provider>

  );
}

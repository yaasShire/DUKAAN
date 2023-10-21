import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { globalStyles } from '../../../globalConstants/styles';
import { Fontisto } from '@expo/vector-icons';
import shopPlaceHolder from '../../../assets/images/shopPlaceHolder.png'
import { nameShortner } from '../../../utils/utilityFunctions';
const ShopCard = ({ shop, navigation, profileData }) => {
    // console.warn(shop);
    const nameShortener = (name) => {
        return name.length > 20 ? name.slice(0, 20) : name
    }
    return (
        <View style={styles.shopCardWrapper}>
            <View style={styles.imageInfoWrapper}>
                <Image source={shop?.photos ? { uri: "https://api.elabis.app/storage/images/shops/" + shop?.photos } : shopPlaceHolder} style={styles.image} />
                {/* <Image source={{uri: "https://sweyn.co.uk/storage/images/shops/"+shop.photos}} /> */}
                <View style={styles.buttonInfoWrapper}>
                    <View style={styles.infoWrapper}>
                        <View>
                            <Text style={styles.shopName}>{nameShortner(shop.name)}</Text>
                            <Text style={styles.address}>Mogadishu, Somalia</Text>
                            <View style={styles.salesWrapper}>
                                {/* <Text style={styles.keyText}>Sales rank:</Text> */}
                                {/* <Text style={styles.valueText}>700</Text> */}
                            </View>
                        </View>
                        <View>
                            <Fontisto name='shopping-store' size={20} color={globalStyles.colors.logoColor} />
                        </View>
                    </View>
                    <Button onPress={() => {
                        navigation.navigate('shopProfile', { data: shop })
                    }} style={styles.buttonStyle} mode="outlined" >
                        <Text style={styles.btnText}>View Shop</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default ShopCard
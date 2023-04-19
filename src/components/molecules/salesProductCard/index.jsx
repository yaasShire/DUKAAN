import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
import product1 from '../../../assets/product3.jpg'
import Entypo from 'react-native-vector-icons/Entypo';
import sProduct1 from '../../../assets/sProduct1.png'

const ProductSalesCard = ({ item, navigation }) => {
    const data = [
        {
            id: 1,
            name: "Motor cleaner",
            image: sProduct1
        }
    ]
    const nameShortener = (name) => {
        return name.length >= 28 ? name.slice(0, 30) + "..." : name
    }
    return (

        <View style={styles.mainHolder}>
            <View style={styles.contentHolder}>
                <Image source={item.image} style={styles.image} />
                <View>
                    <Text style={styles.productName}>{item.name}</Text>
                    <View style={styles.salesHolder}>
                        <Text style={styles.numberOfSales}>Sales for the last 30 days:</Text>
                        <Text style={styles.salesQuantity}>{item.totalSales}</Text>
                    </View>
                    <View style={styles.availabelHolder}>
                        <Text style={styles.availableText}>Sales Total:</Text>
                        <Text style={styles.salesQuantity}>${item.totalSalesAmmount}</Text>
                    </View>
                </View>

            </View>
            <View style={styles.actionsHolder}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("updateProduct", { data: item })}>
                    <View style={styles.buttonIconTextHolder}>
                        <View style={styles.updateIcon}>
                            <Entypo name='edit' color={"#569615"} />
                        </View>
                        <Text style={styles.textAction}>Update</Text>
                    </View>

                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("productDetails", { data: item })}>
                    <View style={styles.buttonIconTextHolder}>
                        <View style={styles.updateIcon}>
                            <Entypo name='database' color={"#8c8a1f"} />
                        </View>
                        <Text style={styles.textAction}>Details</Text>
                    </View>

                </TouchableWithoutFeedback>
            </View>

        </View>
    )
}
export default ProductSalesCard



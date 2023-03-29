import { Dimensions, StyleSheet, Platform } from "react-native";
const { width, height } = new Dimensions.get('screen')

export default StyleSheet.create({

    image: {
        width: "40%",
        height: "97%",
        resizeMode: "cover",
        borderRadius: 5,
    },
    cardsScrollView: {
        flex: 1
    },
    cards: {
        flex: 1,
        paddingTop: "5%",
        marginTop: "2%",
        paddingHorizontal: "4.5%",
        paddingBottom: "10%",
        height: height
    },
    shopCard: {
        backgroundColor: "#FFF",
        height: height / 6,
        borderWidth: 1,
        width: width / 1.1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderColor: "gray",
        marginBottom: "3%",
        padding: "1%"

    },
    shopName: {
        fontSize: 16,
        fontWeight: "500"
    },
    products: {
        fontSize: 17,
        opacity: 0.6
    },
    infoHolder: {
        alignSelf: "flex-start",
        marginTop: "2%",
        marginLeft: "3%",
        height: "45%",
        justifyContent: "space-around",
        width: 140
    },
    productsHolder: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start',
    },
    numberOfProducts: {
        marginLeft: "5%"
    },
    stockText: {
        fontWeight: "500",
        marginLeft: "1%"
    },
    dotIcon: {
        marginLeft: "11%",
        marginTop: "4%"

    }
})
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1
    },
    bannerWrapper: {
        height: height / 2.8,
        resizeMode: "cover"

    },
    header: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 15
    },
    headerTitleWrapper: {
        flex: 1,
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff"
    },
    miniWrapper: {
        padding: 15
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: "contain"
    },
    cardWrapper: {
        alignItems: "center"
    },
    profileCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: width / 1.2,
        alignItems: "center",
        height: height / 3,
        top: -170,
        elevation: 3,
        position: "absolute"

    },
    bottomContentWrapper: {
        top: 120
    },
    infoWrapper: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    },
    singleInfoWrapperTitle: {
        fontSize: 13,
        fontWeight: "500",
        opacity: .5
    },
    singleInfoWrapperValue: {
        fontSize: 20,
        fontWeight: "500",
    },
    singleInfoWrapper: {
        alignItems: "center"
    },
    profileImageWrapper: {
        top: -40,
        borderRadius: 50,
        // padding: ".5%",
        borderWidth: 2,
        borderColor: "pink"
    },
    shopNameLocationWrapper: {
        alignItems: "center",
        justifyContent: "center",
        padding: "2%",
    },
    shopName: {
        fontSize: 23,
        fontWeight: "500"
    },
    locationText: {
        fontSize: 14,
        fontWeight: "500",
        opacity: .7
    },
    productImageWrapper: {
        backgroundColor: "#d7dbd8",
        borderRadius: 10,
        width: 130,
        height: 130,
        elevation: 2
    },
    singleProductWrapper: {
        width: width / 3.1,
        alignItems: "flex-start"
    },
    productImage: {
        width: 130,
        height: 130,
        resizeMode: "contain"
    },
    productsWrapperTitle: {
        marginVertical: "1%"
    },
    productsWrapperTitleText: {
        fontSize: 18,
        fontWeight: "500"
    },
    productName: {
        fontSize: 15,
        fontWeight: "500"
    },
    availableStock: {
        fontSize: 13,
        opacity: .6
    },
    buttonsHolder: {
        flexDirection: "row",
        top: 50,
        justifyContent: "space-around",
        padding: "2%"
    },
    productNameStockWrapper: {
        marginVertical: "1%"
    }
})
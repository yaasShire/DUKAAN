import { Dimensions, Platform, StyleSheet } from "react-native";
import { globalStyles } from "../../../../globalConstants/styles";
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
        top: 140
    },
    infoWrapper: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop: "5%"
    },
    singleInfoWrapperTitle: {
        fontSize: 13,
        fontWeight: "500",
        color: globalStyles.colors.secondaryGray
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
        borderWidth: 1,
        borderColor: globalStyles.colors.logoColor,

    },
    shopNameLocationWrapper: {
        alignItems: "center",
        justifyContent: "center",
        padding: "2%",
    },
    shopName: {
        fontSize: globalStyles.fontSizes.tertiary,
        fontWeight: globalStyles.fontWeights.tertiary,
        color: globalStyles.colors.tertiary,

    },
    locationText: {
        fontSize: globalStyles.fontSizes.primary2,
        fontWeight: "500",
        color: globalStyles.colors.secondaryGray
    },
    productImageWrapper: {
        backgroundColor: globalStyles.style.whiteMode.primarybgColor,
        borderRadius: 10,
        width: 100,
        height: 100,
        elevation: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    singleProductWrapper: {
        width: 130,
        minHeight: 150,
        alignItems: "center",
        backgroundColor: "pink",
        justifyContent: "center"

    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: "center"
    },
    productsWrapperTitle: {
        marginVertical: "1%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    productsWrapperTitleText: {
        fontSize: 18,
        fontWeight: globalStyles.fontWeights.secondary,
        color: globalStyles.colors.tertiary
    },
    sellAllWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 75
    },
    productName: {
        fontSize: 15,
        fontWeight: globalStyles.fontWeights.secondary,
        color: globalStyles.colors.tertiary
    },
    availableStock: {
        fontSize: 13,
        color: globalStyles.colors.secondaryGray
    },
    buttonsHolder: {
        flexDirection: "row",
        top: Platform.OS == 'ios' ? 15 : 35,
        justifyContent: "space-around",
        padding: "2%"
    },
    productNameStockWrapper: {
        marginVertical: "1%",
        backgroundColor: "gray",
        width: "100%",
        alignItems: 'flex-start'
    }
})
import { Dimensions, StyleSheet, Platform } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get('screen')

export default StyleSheet.create({
    imageWrapper: {
        width: "40%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: globalStyles.colors.primaryGray,
        padding: ".5%"
    },
    image: {
        width: "100%",
        height: "100%",
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
        backgroundColor: globalStyles.colors.miniPrimary,
        height: height / 8,
        borderColor: globalStyles.colors.primaryGray,
        borderWidth: 1,
        width: width / 1.1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom: "3%",
        padding: "1%"
    },
    shopName: {
        fontSize: globalStyles.fontSizes.primary3,
        fontWeight: globalStyles.fontWeights.secondary,
        color: globalStyles.colors.tertiary
    },
    products: {
        fontSize: 17,
        opacity: 0.6
    },
    infoHolder: {
        alignSelf: "flex-start",
        marginTop: "2%",
        marginLeft: "3%",
        height: "65%",
        justifyContent: "space-around",
        width: 140
    },
    productsHolder: {
        alignItems: "flex-start",
    },
    numberOfProducts: {
        marginLeft: "5%"
    },
    stockText: {
        fontWeight: globalStyles.fontWeights.tertiary,
        marginLeft: "1%",
        fontSize: globalStyles.fontSizes.primary2,
        color: globalStyles.colors.tertiary
    },
    dotIcon: {
        marginLeft: "11%",
        marginTop: "4%"

    },
    iconProductHolder: {
        flexDirection: "row"
    },
    salesRankHolder: {
        flexDirection: "row"
    },
    salesText: {
        color: globalStyles.colors.secondaryGray,
        marginRight: "2%"
    },
    salesQuantity: {
        fontWeight: globalStyles.fontWeights.secondary,
        color: globalStyles.colors.tertiary,
    }

})
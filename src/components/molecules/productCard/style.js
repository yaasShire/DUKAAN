import { StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    card: {
        flexDirection: "row",
        borderWidth: .4,
        alignItems: 'center',
        borderRadius: 15,
        minHeight: 150,
        borderColor: 'rgba(184, 191, 189, 1)',
    },
    namePriceWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    imageWrapper: {
        height: 130,
        borderRadius: 15,
        width: "35%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'rgba(184, 191, 189, .4)',
        marginLeft: 10
    },
    stockWrapper: {
        flexDirection: "row",
        marginTop: 5
    },
    stockText: {
        fontWeight: "500",
        fontSize: 15,
        color: globalStyles.colors.logoColor,
    },
    stockValue: {
        fontWeight: globalStyles.fontWeights.tertiary,
        color: globalStyles.colors.logoColor
    },
    image: {
        width: "95%",
        height: 110,
        // borderRadius: 30,
        resizeMode: "center",

    },
    rightContentWrapper: {
        flex: 1,
        height: "100%",
        marginLeft: 10,

    },
    priceWrapper: {
        backgroundColor: globalStyles.colors.logoColor,
        width: 100,
        height: 45,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    priceText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "500"
    },
    productName: {
        fontWeight: "600",
        fontSize: 16,
        color: globalStyles.colors.logoColor
    },
    description: {
        fontWeight: "500",
        fontSize: 14,
        color: globalStyles.colors.logoColor,
        opacity: .7
    },
    descriptionWrapper: {
        marginTop: 5
    },
    actionsWrapper: {
        // backgroundColor: "blue",
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: "3%",
        alignItems: "center"
    },

})
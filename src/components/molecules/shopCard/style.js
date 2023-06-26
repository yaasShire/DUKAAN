import { StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    image: {
        width: 120,
        height: 127,
        borderRadius: 10,
        resizeMode: "center"
    },
    shopCardWrapper: {
        backgroundColor: globalStyles.style.whiteMode.secondaryColor,
        borderWidth: 1.3,
        borderColor: globalStyles.colors.primaryGray,
        width: "100%",
        height: 145,
        padding: "2%",
        borderRadius: 10,

    },
    imageInfoWrapper: {
        flexDirection: "row"
    },
    infoWrapper: {
        justifyContent: "space-between",
        flex: .9,
        flexDirection: "row"

    },
    buttonInfoWrapper: {
        flex: 1,
        justifyContent: "space-between",
        marginLeft: 5,
    },
    shopName: {
        fontWeight: "700",
        fontSize: 16,
        textTransform: "capitalize"
    },
    salesWrapper: {
        flexDirection: "row"
    },
    keyText: {
        color: "gray",
    },
    valueText: {
        fontWeight: "700",

    },
    buttonStyle: {
        borderRadius: 5,
        width: "100%"
        // backgroundColor: globalStyles.colors.logoColor,
    },
    btnText: {
        fontSize: 15,
        fontWeight: "600",
    },
    iconStyle: {
        marginHorizontal: "3%",
    },
    address: {
        color: "gray"
    }
})
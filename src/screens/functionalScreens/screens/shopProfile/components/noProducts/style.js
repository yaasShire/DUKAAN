import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    noProductsWrapper: {
        height: "45%",
        justifyContent: "center",
        alignItems: "center"
    },
    noProductImage: {
        width: 180,
        height: 120,
        resizeMode: "contain"
    },
    button: {
        backgroundColor: globalStyles.colors.logoColor,
        width: 93,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: "3%"
    },
    buttonText: {
        color: "#fff"
    }
})
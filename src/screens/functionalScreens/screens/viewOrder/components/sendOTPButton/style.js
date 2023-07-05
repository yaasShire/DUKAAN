import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    button: {
        width: "100%",
        height: 60,
        backgroundColor: globalStyles.colors.logoColor,
        borderRadius: 10,
        justifyContent: "center", alignItems: "center"
    },
    btnText: {
        fontSize: globalStyles.fontSizes.secondary,
        fontWeight: globalStyles.fontWeights.secondary, color: "#fff"
    }
})
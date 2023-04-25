import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    buttonHolder: {
        backgroundColor: globalStyles.colors.miniPrimary,
        width: width / 3,
        height: height / 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: globalStyles.colors.primaryGray,
    },
    buttonText: {
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: 13,
        color: globalStyles.colors.tertiary
    }

})
import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    buttonHolder: {
        backgroundColor: globalStyles.colors.logoColor,
        width: width / 3,
        height: height / 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: globalStyles.colors.primaryGray,
        elevation: 5
    },
    buttonText: {
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: 14,
        color: globalStyles.colors.miniPrimary,
        textTransform: "uppercase"

    }

})
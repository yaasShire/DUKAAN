import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    button: (bgColor) => ({
        backgroundColor: bgColor,
        borderWidth: 1,
        borderColor: globalStyles.colors.primaryGray,
        justifyContent: 'center',
        alignItems: "center",
        width: width / 3.5,
        height: height / 18,
        borderRadius: 5,
    }),
    buttonText: {
        fontSize: globalStyles.fontSizes.primary2,
        fontWeight: globalStyles.fontWeights.secondary,
        color: globalStyles.colors.miniPrimary
    },
})
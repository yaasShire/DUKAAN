import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    buttonHolder: (action) => {
        return (
            {
                backgroundColor: action == 'Prev' ? globalStyles.colors.miniPrimary : globalStyles.colors.logoColor,
                width: "45%",
                height: height / 13,
                justifyContent: 'center',
                alignItems: "center",
                borderRadius: 5,
                borderWidth: action == 'Prev' ? 1 : 0,
                borderColor: action == 'Prev' ? globalStyles.colors.primaryGray : globalStyles.colors.primaryGray,
            }
        )
    },
    buttonText: (action) => {
        return (
            {
                color: action == 'Prev' ? globalStyles.colors.tertiary : globalStyles.colors.miniPrimary,
                fontSize: globalStyles.fontSizes.secondary,
                fontWeight: globalStyles.fontWeights.secondary
            }
        )
    }
})
import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    card: {
        backgroundColor: globalStyles.colors.miniPrimary,
        width: width / 2.37,
        borderRadius: 5,
        paddingHorizontal: '3%',
    },
    dollarNumberHolder: {
        flexDirection: 'row'
    },
    dollarSign: {
        opacity: 0.5,
        marginRight: "3%"
    },
    dollarNumber: {
        fontSize: globalStyles.fontSizes.tertiary,
        fontWeight: globalStyles.fontWeights.tertiary
    },
    description: {
        color: globalStyles.colors.primaryGray
    },
    contentHolder: {
        justifyContent: 'space-between',
        flex: 1,
        paddingVertical: '10%'
    },
})
import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    actionCard: {
        width: width / 2.37,
        height: height / 6.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyles.colors.miniPrimary,
        borderRadius: 8,
        marginBottom: '5%',
        borderWidth: 1,
        borderColor: "#dedfe0"

    },
    iconHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C6F74'
    },
    actionName: {
        fontSize: globalStyles.fontSizes.secondary,
        fontWeight: "600",
        opacity: 0.7,
        color: globalStyles.colors.tertiary
    }
})
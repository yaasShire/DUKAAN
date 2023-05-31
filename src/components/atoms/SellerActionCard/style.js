import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    actionCard: {
        width: width / 2.3,
        height: height / 6.5,
        justifyContent: 'space-around',
        paddingVertical: "4%",
        alignItems: 'center',
        backgroundColor: globalStyles.colors.miniPrimary,
        borderRadius: 8,
        marginBottom: '5%',
        borderWidth: .5,
        borderColor: "#dedfe0",
        elevation: 3

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
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: "center"
    }
})
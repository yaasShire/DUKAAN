import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    card: {
        backgroundColor: "#30a195",
        minWidth: 135,
        height: 85,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    dollarNumberHolder: {
        flexDirection: 'row'
    },
    dollarSign: {
        // opacity: 0.5,
        color: "#fff"
    },
    dollarNumber: {
        fontSize: 25,
        fontWeight: globalStyles.fontWeights.tertiary,
        color: "#fff"
    },
    description: {
        color: globalStyles.colors.miniPrimary,
        opacity: .9
    },
    contentHolder: {
        justifyContent: 'space-around',
        flex: 1,
        // paddingVertical: '10%'
    },
})
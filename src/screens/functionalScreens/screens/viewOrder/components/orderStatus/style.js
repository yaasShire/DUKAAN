import { StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    acceptedTextWrapper: {
        backgroundColor: globalStyles.colors.blue,
        height: 70,
        borderRadius: 10,
        padding: screenPadding,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    acceptedText: {
        fontSize: 15,
        fontWeight: globalStyles.fontWeights.tertiary,
        color: globalStyles.colors.miniPrimary
    },
    statusText: {
        fontSize: 18,
        fontWeight: globalStyles.fontWeights.tertiary,
        color: globalStyles.colors.miniPrimary,
        marginRight: 10
    }
})
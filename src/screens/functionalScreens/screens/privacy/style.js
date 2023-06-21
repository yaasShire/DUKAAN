import { StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.miniPrimary
    },
    scrollTextWrapper: {
        padding: screenPadding,
    },
    text: {
        textAlign: "justify",
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: 15,
    },
    titleText: {
        fontSize: 24,
        fontWeight: globalStyles.fontWeights.tertiary,
        color: globalStyles.colors.blue,
        marginVertical: 10
    }
})
import { StyleSheet } from "react-native";
import { HeightDimension, globalStyles, screenPadding } from "../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.miniPrimary
    },
    scrollView: {
        padding: screenPadding,
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 30
    },
    description: {
        textAlign: "center",
        color: globalStyles.colors.tertiary,
        opacity: .5
    },
    helpCardsWrapper: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20%"
    }
})
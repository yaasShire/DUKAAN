import { Dimensions, StyleSheet, Platform } from "react-native";
import { screenPadding } from "../../../../globalConstants/styles";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        height: height / 18,
        justifyContent: "center"
    },
    headerText: {
        fontWeight: "600",
        fontSize: 16
    },
    headerTextWrapper: {
        flex: 1,
        alignItems: 'center'

    },
    cardsHolder: {
        padding: screenPadding,
    },
    couriersWrapper: {
        rowGap: 10,
        padding: screenPadding
    }
})
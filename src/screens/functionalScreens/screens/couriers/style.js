import { Dimensions, StyleSheet, Platform } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        padding: 15,
        // height,
        flex: Platform.OS == 'android' ? 1 : 0,
        // height: Platform.OS
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
        marginBottom: "2%"
    }
})
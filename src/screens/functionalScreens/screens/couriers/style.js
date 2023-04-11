import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
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

    }
})
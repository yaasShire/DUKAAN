import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        alignItems: "flex-start",
        width: width,
        justifyContent: "center",
        marginBottom: 25
    },
    label: {
        fontSize: 14,
        fontWeight: "400",
        opacity: 0.4
    },
    input: {
        // backgroundColor: "gray",
        borderBottomColor: "#bfbcbb",
        borderBottomWidth: 1,
        height: 40,
        width: "90%"
    },
    errorText: {
        color: "red"
    },
    errorHolder: {
        marginBottom: "4%"
    }
})
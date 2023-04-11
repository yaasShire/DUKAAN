import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({

    topHeader: {
        height: height / 16,
        justifyContent: "center",
    },
    topActionsHolder: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    updateText: {
        color: "#000",
        fontSize: 17,
        fontWeight: "400"
    },
    saveText: {
        color: "#000",
        fontSize: 17,
        fontWeight: "400"
    },
})
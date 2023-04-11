import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    headerHolder: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "2%",
        paddingVertical: "2%",
        marginBottom: "4%",
        borderBottomWidth: 1,
        borderColor: "#D9D9D9",
    },
    cancelText: {
        color: "blue",
        fontSize: 14,
        fontWeight: "500"
    },
    titleText: {
        fontWeight: "700",
        fontSize: 16,
    },
    nextText: {
        fontSize: 15,
        fontWeight: "500",
        opacity: 0.5,
        color: "blue"
    },
    titleHolder: {
        flex: 1,
        alignItems: "center",
    }
})
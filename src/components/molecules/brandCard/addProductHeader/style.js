import { StyleSheet } from "react-native";
export default StyleSheet.create({
    headerHolder: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingVertical: "4%",
        marginBottom: "4%",
        borderBottomWidth: 1,
        borderColor: "#D9D9D9"
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
    }
})
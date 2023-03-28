import { StyleSheet } from "react-native";
export default StyleSheet.create({
    categoryButtonHolder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "4%",
        height: 60,
        // marginBottom: '3%'
    },
    divider: {
        borderBottomWidth: .5,
        borderBottomColor: "#A49D9D",
        width: "100%",
        borderRadius: 100,
        borderRadius: 20
    },
    categoryName: {
        fontWeight: "600",
        fontSize: 14
    }
})
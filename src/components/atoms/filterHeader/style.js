import { StyleSheet } from "react-native";
export default StyleSheet.create({
    filterHeader: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: "3%",
        paddingHorizontal: "3%",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "gray",
        shadowOpacity: 0.7,
        shadowRadius: 3,
        elevation: 2,
    },
    filterText: {
        fontSize: 19,
        fontWeight: "600",
        marginLeft: "2%",
    },
})
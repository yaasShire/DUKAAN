import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    topHeader: {
        backgroundColor: "#0c1b32",
        paddingTop: "11%",
        paddingHorizontal: "5%",
        height: 100
    },
    topActionsHolder: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    updateText: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "400"
    },
    saveText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "400"
    },
    shopImagesHolder: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: "8%",
        justifyContent: "space-between",
        paddingHorizontal: "5%"
    },
    updateShopImagesButton: {
        backgroundColor: "pink",
        padding: "5%",
        justifyContent: "center",
        alignItems: "center"
    }
})
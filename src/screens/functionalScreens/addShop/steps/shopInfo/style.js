import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        marginTop: "5%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: "2 %",
        borderWidth: 1,
        borderColor: "#dedede"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "500"
    },
    fieldsHolder: {
        marginTop: "7%",

    },
    buttonHolder: {
        alignItems: "flex-end",
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: "8%",
        flex: 1
    },
    titleHolder: {
        marginTop: "5%"
    }
})
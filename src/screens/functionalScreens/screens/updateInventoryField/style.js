import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "75%",
        paddingVertical: "3%",

    },
    divider: {
        borderBottomColor: "#d1cdcd",
        borderBottomWidth: 1
    },
    updateText: {
        fontSize: 17,
        fontWeight: "600"
    },
    inputLableHolder: {
        alignItems: "flex-start",
        width: width / 1.1,
        marginTop: "10%"
    },
    contentHolder: {
        marginTop: "10%"
    },

    input: {
        borderWidth: 1,
        width: "100%",
        height: 55,
        paddingHorizontal: 15,
        borderRadius: 6,
        fontSize: 15,
        fontWeight: "500",
        borderWidth: 0,
        backgroundColor: "#d5edda"

    },
    label: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: "2%"
    },
    buttonHolder: {
        alignItems: "center",
        marginTop: "5%",
        width: width / 1.1,
    },
    button: {
        backgroundColor: "green",
        width: width / 1.1,
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 16,
        color: "#fff"
    }
})
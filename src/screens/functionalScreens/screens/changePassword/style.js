import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        flex: 1
    },
    fieldsHolder: {
        marginTop: "15%",

    },

    fieldHolder: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#cfcbca",
        width: width / 1.1,
        alignSelf: "center",
        height: 55,
        paddingHorizontal: "2.5%",
        borderRadius: 10,
        marginBottom: "5%"
    },
    input: {
        height: "100%",
        width: "96%",
        borderRadius: 10,
        fontSize: 16
    },
    lockIcon: {
        marginRight: "1%"
    },
    buttonsHolder: {
        alignItems: "center",
        marginTop: "6%"
    },
    updateButton: {
        backgroundColor: "#3983e1",
        width: "90%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        marginBottom: "4%"
    },
    updateButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600"
    },
    cancelButton: {
        backgroundColor: "#dbdad9",
        width: "90%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7
    },
    cancelButtonText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "600"
    },
    forgotPasswordHolder: {
        marginTop: "3%"
    },
    forgotPasswordText: {
        color: "blue",
        fontSize: 17,
    }
})
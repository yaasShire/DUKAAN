import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../../globalConstants/styles";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: globalStyles.colors.miniPrimary
    },
    fieldsHolder: {
        paddingVertical: "10%",
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
        backgroundColor: globalStyles.colors.blue,
        width: "100%",
        height: height / 17,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        marginBottom: "4%"
    },
    updateButtonText: {
        color: globalStyles.colors.miniPrimary,
        fontSize: 18,
        fontWeight: "600"
    },
    cancelButton: {
        backgroundColor: globalStyles.colors.primaryGray,
        width: "100%",
        height: height / 17,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7
    },
    cancelButtonText: {
        color: globalStyles.colors.miniPrimary,
        fontSize: 18,
        fontWeight: "600"
    },
    forgotPasswordHolder: {
        marginTop: "3%"
    },
    forgotPasswordText: {
        color: globalStyles.colors.blue,
        fontSize: 17,
    }
})
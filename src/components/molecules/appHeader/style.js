import { StyleSheet } from "react-native"
export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: "2%"
    },
    headerTitleWrapper: {
        flex: 1,
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff"
    },
    buttonHolder: {
        borderColor: "pink",
        borderRadius: 50,
        borderWidth: 3,
        padding: "1%",
        justifyContent: "center",
        alignItems: "center"
    },
    addButtonHolder: {
        backgroundColor: "#fd6846",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        width: 40,
        height: 40
    },
    saveText: {
        color: "#000",
        fontSize: 17,
        fontWeight: "400"
    },
})
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    textTitle: {
        textAlign: "center",
        opacity: 0.5,

    },
    categoriesHolder: {
        borderWidth: 1,
        borderColor: "#A49D9D",
        borderRadius: 4,
        backgroundColor: "#fff",
        marginTop: "3%"
    },
    actionButtonHolder: {
        alignItems: 'center',
        marginTop: "2%",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    errorHolder: {
        backgroundColor: "#f25555",
        alignItems: "center",
        justifyContent: "center",
        height: height / 17,
        borderRadius: 5,
        marginVertical: "5%"

    },
    textError: {
        fontWeight: "500",
        fontSize: 14,
        color: "#fff"
    }


})
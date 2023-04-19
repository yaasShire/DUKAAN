import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        marginTop: "3%",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    actionButtonHolder: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",

    },
    textTitle: {
        opacity: .5,
        textAlign: "center",
        marginVertical: "3%"
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
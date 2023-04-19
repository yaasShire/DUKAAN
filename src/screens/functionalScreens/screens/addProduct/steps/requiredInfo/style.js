import { StyleSheet, Dimensions } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,

    },
    actionButtonHolder: {
        alignItems: 'center',
        marginTop: "2%",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"

    },
    textTitle: {
        opacity: .5,
        textAlign: "center",
        marginVertical: "3%"
    }
})
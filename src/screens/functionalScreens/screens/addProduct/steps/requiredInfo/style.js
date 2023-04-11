import { StyleSheet, Dimensions } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,

    },
    actionButtonHolder: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: "2%"
    },
    textTitle: {
        opacity: .5,
        textAlign: "center",
        marginVertical: "3%"
    }
})
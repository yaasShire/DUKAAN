import { StyleSheet, Dimensions } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        // backgroundColor: "blue",
        height: "100%"
    },
    actionButtonHolder: {
        alignItems: 'flex-end',
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        // flex: 1,
    },
    textTitle: {
        opacity: .5,
        textAlign: "center",
        marginVertical: "3%"
    }
})
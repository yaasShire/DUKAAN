import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        paddingHorizontal: "4%",
        marginBottom: "10%",

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
        paddingVertical: "3%",
        justifyContent: "center",
        alignItems: 'center',
        // height: 150,
        marginBottom: 100

    }


})
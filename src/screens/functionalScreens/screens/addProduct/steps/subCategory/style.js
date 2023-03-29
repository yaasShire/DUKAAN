import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        // paddingVertical: '4%',
        paddingHorizontal: "4%",
        // marginTop: "5%",
        marginBottom: "10%",
        // height: height / 1,
        // backgroundColor: "yellow"
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
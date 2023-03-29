import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({

    addText: {
        fontSize: 17,
        fontWeight: "600",
        color: "#fff",
        shadowOffset: {
            width: 4,
            height: 7
        },
        shadowColor: "gray",
        shadowOpacity: .5,
        shadowRadius: 10,
        elevation: 5
    },
    wholeButtonHolder: {
        position: "absolute",
        bottom: "5%",
        right: "7%",
        width: width / 5,
        height: height / 11,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "green",
        padding: 5
    },
    buttonContainer: {
        backgroundColor: "green",
        width: "98%",
        height: "98%",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"

    },
})
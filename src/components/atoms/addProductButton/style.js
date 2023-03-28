import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    buttonContainer: {
        backgroundColor: "green",
        position: "absolute",
        bottom: "5%",
        right: "7%",
        width: width / 5,
        height: height / 11,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gray"

    },
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
    }
})
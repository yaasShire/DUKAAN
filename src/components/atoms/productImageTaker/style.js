import { StyleSheet, Dimensions } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({

    imageTaker: {
        // backgroundColor: "pink",
        height: height / 6,
        width: width / 2.5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#928787",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10%"

    },
    mainHolder: {
        backgroundColor: "#928787",
        width: "100%",
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: "2%",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        position: "absolute",
        top: 125,
        right: 0
    },
    mainText: {
        color: "#fff",
        fontSize: 15
    },
    cameraIcon: {
        marginTop: "17%"
    }
})
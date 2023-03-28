import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        flex: 1
    },
    topHeader: {
        backgroundColor: "#0c1b32",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "5%",
        paddingHorizontal: "5%",
        paddingVertical: "10%",
        height: height / 3.38
    },
    image: {
        width: 170,
        height: 170,
        borderRadius: 100,
        // borderColor: "pink",
        // borderWidth: 1,
        resizeMode: "cover",
        marginTop: "15%",
        backgroundColor: "pink"

    },
    imageTextHolder: {
        alignItems: "center",
        // justifyContent: ""
    },
    editText: {
        fontSize: 19,
        fontWeight: "400",
        color: "#FFF",
        opacity: 0.9
    },
    saveText: {
        color: "#FFF",
        fontSize: 17,

    },
    cameraIconHolder: {
        backgroundColor: "#ed2a07",
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    imageCameraIconHolder: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: "10%",
        // backgroundColor: "pink"
    },
    cameraButton: {
        marginLeft: "-50%"
    },
    inputHolder: {
        paddingVertical: "10%",
        paddingHorizontal: "5%"
    }

})
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    topHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: height / 3.38,
        backgroundColor: "pink"
    },
    image: {
        width: width / 3.3,
        height: height / 6.5,
        borderRadius: 100,
        resizeMode: "contain",
    },

    editText: {
        fontSize: 19,
        fontWeight: "400",
        color: "#000",
        opacity: 0.9
    },
    saveText: {
        color: "#000",
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
    },
    imageAndButtonWrapper: {
        height: height / 3.6,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: "1%",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 8,
        borderColor: "#dedede",
        borderWidth: 1
    },
    imageWrapper: {
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 100,
        padding: "1%",
    },
    cameraIconWrapper: {
        backgroundColor: "orange",
        borderRadius: 50,
        padding: "2%",
        alignSelf: "flex-end",
        position: "absolute",
        width: 37,
        height: 37,
        justifyContent: "center",
        alignItems: "center",
        top: 130,
        right: 115
    }


})
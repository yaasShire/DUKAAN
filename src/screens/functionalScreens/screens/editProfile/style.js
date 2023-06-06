import { Dimensions, StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../../globalConstants/styles";
import { WindowDimension } from "../../../../utils/utilityFunctions";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        padding: screenPadding,
        flex: 1,
        backgroundColor: globalStyles.colors.miniPrimary,
        // alignItems: "center"
    },
    topHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: height / 3.38,
        backgroundColor: "pink"
    },
    profileCardWrapper: {
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: "cover",
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
        paddingVertical: "5%",
        alignItems: "center",
        rowGap: 10
    },
    imageAndButtonWrapper: {
        height: height / 7,
        width: "100%",
        alignItems: "center",
        backgroundColor: globalStyles.colors.miniPrimary,
        paddingVertical: "1%",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 8,
        borderColor: "#dedede",
        borderWidth: 1,
        position: "relative",

    },
    imageWrapper: {
        borderWidth: 2,
        borderColor: globalStyles.colors.logoColor,
        borderRadius: 100,
        padding: "1%",
    },
    cameraIconWrapper: {
        backgroundColor: globalStyles.colors.logoColor,
        borderRadius: 50,
        alignSelf: "flex-end",
        position: "absolute",
        width: 37,
        height: 37,
        justifyContent: "center",
        alignItems: "center",
        top: 90,
        right: 135
    },
    saveButton: {
        backgroundColor: globalStyles.colors.logoColor,
        width: "100%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: "5%"
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: globalStyles.colors.miniPrimary
    }


})
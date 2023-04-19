import { StyleSheet, Dimensions } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({

    imageTaker: {
        height: height / 6,
        width: width / 2.5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: globalStyles.colors.primaryGray,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "13%"

    },
    mainHolder: {
        backgroundColor: globalStyles.colors.logoColor,
        width: width / 2.49999,
        height: height / 31,
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        position: "absolute",
        top: 135,
        // left: .3,
        borderWidth: 1,
        borderColor: globalStyles.colors.primaryGray,
    },
    mainText: {
        color: "#fff",
        fontSize: 15
    },
    cameraIcon: {
        marginTop: "17%"
    },
    image: {
        width: "100%",
        height: "99.9%",
        resizeMode: "cover"
    }
})
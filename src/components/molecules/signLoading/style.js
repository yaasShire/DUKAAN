import { StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        // opacity: .5,
        // zIndex: 5,
        // opacity: .3
    },
    subContainer: {
        height: 300,
        width: "100%",
        justifyContent: "center",
        alignItems: 'center'
    }
})
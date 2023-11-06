import { StyleSheet } from "react-native";
;
export default StyleSheet.create({
    container: (bgColor) => ({
        backgroundColor: bgColor,
        height: "100%",
        width: 75,
        borderRightWidth: 1,
        borderRightColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
        borderRadius: 5
    })
})
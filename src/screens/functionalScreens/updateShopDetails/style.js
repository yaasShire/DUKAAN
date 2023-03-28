import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    topHeader: {
        backgroundColor: "#0c1b32",
        paddingTop: "11%",
        paddingHorizontal: "5%",
        // paddingVertical: "8%",
        height: 100
    },
    topActionsHolder: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    updateImage: {
        width: 200,
        height: 150,
        resizeMode: "cover"
    },
    updateImageHolder: {
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    updaImagesText: {
        marginTop: "3%",
        color: "blue",
        fontWeight: "400"
    },
    updateText: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "400"
    },
    saveText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "400"
    },
    fieldsHolder: {
        alignContent: "center"
    },
    inputHolder: {
        paddingVertical: "10%",
        paddingHorizontal: "5%"
    }
})
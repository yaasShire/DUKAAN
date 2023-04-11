import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    topHeader: {
        backgroundColor: "#684970",
        paddingTop: "11%",
        paddingHorizontal: "5%",
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
        fontWeight: "500",

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
    },
    updateShopImagesButton: {
        backgroundColor: "pink",
        padding: "1.5%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3%",
        borderRadius: 6,
        marginBottom: "3%"
    }
})
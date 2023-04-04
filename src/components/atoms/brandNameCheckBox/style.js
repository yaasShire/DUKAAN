import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    wholeWrapper: {
        borderBottomColor: "#d4d5d6",
        borderBottomWidth: .2,
        paddingVertical: "2%",
        justifyContent: 'center',
        alignItems: "flex-start",
        paddingHorizontal: "2%"
    },
    nameCheckboxWrapper: {
        flexDirection: "row",
        alignItems: "center",
        width: width / 5,
        paddingVertical: "2%",
        justifyContent: "flex-start",
        paddingHorizontal: "2%",
    },
    brandNameWrapper: {
        textAlign: "left",
        marginLeft: "15%",
        fontSize: 13
    },
    checkBox: {
        // backgroundColor: "white",
        borderWidth: 1.5,
        width: 18,
        height: 18,
        borderRadius: 2,
        borderColor: "gray",
        justifyContent: "center",
        alignItems: "center"
    }
})
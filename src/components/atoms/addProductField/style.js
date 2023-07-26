import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    fieldContainer: {
        marginBottom: '6%',
        justifyContent: "center",
        alignItems: "flex-start"
    },
    input: {
        paddingHorizontal: "3%",
        paddingVertical: "1%",
        width: width / 1.12,
        borderRadius: 6,
        fontSize: 15,
        fontWeight: "400",
        backgroundColor: "#fff",
        color: "#000",
        borderWidth: 1,
        borderColor: "gray",
        height: 70,
        marginVertical: 6
    },
    label: {
        fontWeight: "600",
        fontSize: 15,
        marginBottom: '4%'
    },
    errorText: {
        color: "red",
        marginVertical: "2%"
    },

})
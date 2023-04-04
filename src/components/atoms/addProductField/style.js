import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    fieldContainer: {
        // backgroundColor: "pink"
        marginBottom: '6%',
        justifyContent: "center",
        alignItems: "flex-start"
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: "3%",
        paddingVertical: "1%",
        width: width / 1.12,
        height: height / 15.5,
        borderRadius: 6,
        fontSize: 15,
        fontWeight: "400"

    },
    label: {
        fontWeight: "600",
        fontSize: 15,
        marginBottom: '2%'
    },
    errorText: {
        color: "red",
        marginVertical: "2%"
    },

})
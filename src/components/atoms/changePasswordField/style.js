import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    fieldHolder: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#cfcbca",
        width: width / 1.1,
        alignSelf: "center",
        height: 55,
        paddingHorizontal: "2.5%",
        borderRadius: 10,
        marginBottom: "5%"
    },
    input: {
        height: "100%",
        width: "96%",
        borderRadius: 10,
        fontSize: 16
    },
    lockIcon: {
        marginRight: "1%"
    },
    errorHolder: {
        backgroundColor: '#F0DBDB',
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3%',
        borderRadius: 8,
        paddingVertical: '2%'
    },
    errorText: {
        fontSize: 14,
        color: 'red',
        fontWeight: "500",
    }
})
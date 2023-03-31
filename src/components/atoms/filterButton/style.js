import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    filterButton: {
        backgroundColor: "#fff",
        flexDirection: "row",
        width: width / 3,
        height: height / 12.8,
        justifyContent: 'space-around',
        alignItems: "center",
        paddingHorizontal: '2%',
        borderRightWidth: 1,
        borderColor: "#EBE4E4"

    },
    filterName: {
        opacity: 0.7,
        fontSize: 13
    },
    modeText: {
        fontWeight: "400",

    },
    downArrow: {
        opacity: .5,
        marginLeft: '3%',
        marginTop: "10%"
    }

})
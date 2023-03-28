import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    filterButton: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        width: width / 3,
        height: height / 13,
        justifyContent: 'space-around',
        alignItems: "center",
        paddingHorizontal: '2%',
        borderRightWidth: 1,
        borderColor: "#EBE4E4"

    },
    filterName: {
        opacity: 0.7,
        fontSize: 15
    },
    modeText: {
        fontWeight: "700",

    },
    downArrow: {
        opacity: .5,
        marginLeft: '3%'
    }

})
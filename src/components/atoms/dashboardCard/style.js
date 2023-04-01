import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        width: width / 2.32,
        height: 100,
        borderRadius: 5,
        paddingHorizontal: '3%',
    },
    dollarNumberHolder: {
        flexDirection: 'row'
    },
    dollarSign: {
        opacity: 0.5,

    },
    dollarNumber: {
        fontSize: 25,
        fontWeight: "800"
    },
    description: {
        opacity: 0.6
    },
    contentHolder: {
        justifyContent: 'space-between',
        flex: 1,
        paddingVertical: '10%'
    },
})
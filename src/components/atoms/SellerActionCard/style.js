import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    actionCard: {
        width: width / 2.32,
        height: 145,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginBottom: '5%',
        border: 0.5,
        elevation: 2,
    },
    iconHolder: {
        padding: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C6F74'
    },
    actionName: {
        fontSize: 19,
        fontWeight: "600",
        opacity: 0.7
    }
})
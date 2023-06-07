import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
import { HeightDimension } from "../../../../../../utils/utilityFunctions";
export default StyleSheet.create({
    button: (bgColor) => ({
        backgroundColor: bgColor,
        width: "100%",
        height: HeightDimension / 17,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        marginBottom: "4%"
    }),
    buttonText: {
        color: globalStyles.colors.miniPrimary,
        fontSize: 18,
        fontWeight: "600"
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})
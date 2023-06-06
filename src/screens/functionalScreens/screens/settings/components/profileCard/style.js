import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    profileCardWrapper: {
        backgroundColor: globalStyles.colors.white,
        height: 130,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "2%",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 5,
    },
    imageWrapper: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#dedede",
        width: 90,
        height: 90,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    imageNameNumberWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "space-around",
    },

    nameNumberWrapper: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        marginLeft: "2%"
    },
    name: {
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: globalStyles.fontSizes.secondary,
        color: globalStyles.colors.black
    },
    infoText: {
        fontSize: 14,
        color: globalStyles.colors.secondaryGray
    },
})
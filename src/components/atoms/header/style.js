import { StyleSheet, Platform } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    headerHolder: {
        height: "10%",
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: globalStyles.colors.miniPrimary,
        paddingHorizontal: 15,
        justifyContent: "space-between",
        paddingTop: Platform.OS == 'ios' ? "8%" : 0
    },
    menuWrapper: {

    },
    logoImage: {
        width: 200,
        height: 60,
        resizeMode: 'cover',
    },
    logoImageHolder: {
        alignSelf: "center",
    },
    iconLogoHolder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    addText: {
        fontSize: 11,
        fontWeight: "500",
        color: "#FFF"
    },
    addHolder: {
        backgroundColor: "#11bda0",
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    mainButtonHolder: {
        borderColor: "#00ffd5",
        borderWidth: 2,
        borderRadius: 50,
        padding: "1%"
    }
})

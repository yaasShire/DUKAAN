import { StyleSheet } from "react-native";
import { HeightDimension, WidthDimension, globalStyles, screenPadding } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
        width: "100%",
        // height: 300
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        width: WidthDimension / 1.1,
        height: HeightDimension / 15,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: 'rgba(204, 200, 190, 1)',
        borderRadius: 5,
        flexDirection: 'row',
    },
    verticalBar: (bgColor) => ({
        height: "100%",
        backgroundColor: bgColor,
        width: 3,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadiusRadius: 25,
        left: -1
    }),
    contentWrapper: {
        padding: screenPadding,
        justifyContent: "space-between",
        flexDirection: 'row',
        width: "100%",
        alignItems: "center"
    },
    fab: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: globalStyles.colors.logoColor
    },
    mapFab: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: globalStyles.colors.logoColor,
        position: "absolute",
        top: 150,
        left: 50,
        zIndex: 10
    },
    title: {
        color: globalStyles.colors.tertiary,
        fontWeight: globalStyles.fontWeights.secondary
    },
    value: {
        fontWeight: globalStyles.fontWeights.secondary
    },
    bottomSheetStyle: {
        container: {
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: globalStyles.colors.miniPrimary

        },
        draggableIcon: {
            backgroundColor: "gray"
        }
    },
    mapStyle: {
        height: HeightDimension,
        width: WidthDimension,
    },
    fabWrapper: {
        margin: 16,
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyles.colors.logoColor
    },
    fab2: {
        margin: 16,
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyles.colors.logoColor
    },
})
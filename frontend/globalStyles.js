import { StyleSheet } from "react-native";



const globalStyles = StyleSheet.create({

    // styles for containers

    container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 45
    },
    wrapper: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    },


    // styles for components

    image: {
        width: "50%"
    },
    touchableOpacity: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "row",
        gap: 20
    },


    // Styles for text

    heading: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#E66A79"
    },

    subtitle1: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#E66A79"
    },

    subtitle2: {
        fontWeight: "medium",
        fontSize: 20,
        color: "#E66A79"
    },

    text: {
        fontWeight: "semibold",
        fontSize: 16,
    },

    description: {
        fontWeight: "medium",
        fontSize: 13
    }


})


export default globalStyles
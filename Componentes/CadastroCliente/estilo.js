import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#cccccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 100,
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
    },
    texto: {
        marginTop: 20,
        color: '#999999',
        fontWeight: '700',
        fontFamily: 'Roboto',
        fontSize: 30,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPicker: {
        marginTop: 50,
        width: 290,
        borderRadius: 5,
        borderColor: "#fff",
    },
    picker:{
        backgroundColor: '#fff',
    },
    botao: {
        width: 290,
        backgroundColor: '#3399ff',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 40,
    },
    textoBotao: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
    final:{
        height:290,
    }
})

export default estilo;
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
    inputContainer: {
        marginTop: 10,
    },
    input: {
        width: 350,
        height: 40,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#ffff'
    },
    botao: {
        width: 350,
        backgroundColor: '#3399ff',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    textoBotao: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
    dividirContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    dividirLinha: {
        flex: 1,
        height: 1,
        marginHorizontal: 30,
        backgroundColor: '#999999',
    },
    dividirTexto: {
        marginHorizontal: 10,
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#999999',
    },
    iconeContainer: {
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#999999'
    },
    buttonContainerIcone: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent', // Cor de fundo do botão
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    registroContainer:{
        width: 350,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderWidth: 1,
        borderColor: '#999999'
    },
    cadastroTextoContainer:{
        marginRight: 10,
        fontFamily: 'Roboto',
        fontSize: 16,
        margin: 20
    },
    footer: {
        margin: 20,
    },
    copyrightText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: "#999",
        textAlign: "center",
    },
    disclaimerText: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: "#999",
        textAlign: "center",
        marginTop: 5,
    },
});

export default estilo;
import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 200,
        paddingHorizontal: 20,
    },
    containerTitulo: {
        color: '#999999',
        fontWeight: '700',
        fontFamily: 'Roboto',
        fontSize: 30,
    },
    checkboxPai: {
        flexDirection: 'colunm',
        marginTop: 100,
        borderWidth: 2,
        borderColor: '#999999',
        borderRadius: 10,
        width: 350,
        height: 110,
    },
    checkboxFilho: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 30,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxSelecionado: {
        border: 'none',
    },
    checkedCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#33ffff',
    },
    texto: {
        marginHorizontal: 10,
        fontSize: 16,
        alignItems: 'center',
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: '#333',
    },
    botao: {
        width: 350,
        backgroundColor: '#3399ff',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 30,
    },
    textoBotao: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
});

export default estilo;
import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    scrollViewContent:{
        backgroundColor: '#cccccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo:{
        marginTop: 80,
        color: '#999999',
        fontWeight: '700',
        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagemContainer:{
        marginTop: 10,
        width: 100,
        height: 100,
        borderRadius: 75,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    imagem: {
        widht: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    placeholder:{
        flex: 1,
        justifyContent: 'center',
        alignItens: 'center',
    },
    input: {
        width: 350,
        height: 30,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#ffff',
        marginTop: 10,
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
    textoFinal:{
        height: 108,
        justifyContent: 'center',
    },
    textoConteudo:{
        color: '#999999',
        fontWeight: '700',
        fontFamily: 'Roboto',
        fontSize: 16,
    }
});

export default estilo;
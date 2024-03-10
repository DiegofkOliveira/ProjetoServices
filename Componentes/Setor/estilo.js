import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 200,
    },
    containerTexto:{
        color: '#999999',
        fontWeight: '700',
        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImagem:{
        marginTop: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 50,
        gap:20,
    },
    botao: {
        width: 290,
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
    texto:{
        color: '#999999',
        fontWeight: '700',
        fontFamily: 'Roboto',
        fontSize: 16,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})

export default estilo;
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import estilo from "./estilo";

const Pagamento = ({ navigation }) => {
    const [selecionado, setSelecionado] = useState(false);

    const handleavancar = () => {
        if (selecionado) {
            if (selecionado === 'opcao1') {
                navigation.navigate('PixPaymentScreen');
            } else if (selecionado === 'opcao3') {
                navigation.navigate('Cartao');
            }
        } else {
            alert('Por favor, aceite os termos de uso antes de prosseguir.');;
        }
    };

    return (
        <View style={estilo.container}>
            <Text style={estilo.containerTitulo}>Formas de Pagamento:</Text>
            <View style={estilo.checkboxPai}>
                <View style={estilo.checkboxFilho}>
                    <TouchableOpacity
                        onPress={() => setSelecionado('opcao1')}
                        style={[estilo.checkbox, selecionado === 'opcao1' && estilo.checkboxSelecionado]}>
                        {selecionado === 'opcao1' && <View style={estilo.checkedCircle} />}
                    </TouchableOpacity>
                    <Text style={[estilo.texto]}>Pagamento com Pix</Text>
                </View>
                <View style={estilo.checkboxFilho}>
                    <TouchableOpacity
                        onPress={() => setSelecionado('opcao3')}
                        style={[estilo.checkbox, selecionado === 'opcao1' && estilo.checkboxSelecionado]}>
                        {selecionado === 'opcao3' && <View style={estilo.checkedCircle} />}
                    </TouchableOpacity>
                    <Text style={[estilo.texto]}>Pagamento com Cartão de Débito ou Crédito</Text>
                </View>
            </View>
            <TouchableOpacity onPress={handleavancar} style={estilo.botao}>
                <Text style={estilo.textoBotao}>Avançar</Text>
            </TouchableOpacity>
        </View >
    );
}

export default Pagamento;
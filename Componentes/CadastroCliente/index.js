import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"; // Importe Image de react-native
import estilo from "./estilo";
import Logo from "../../assets/logo.png"
import { Picker } from "@react-native-picker/picker";


const CadastroCliente = ({ navigation }) => {
    const [tipoCadastro, setTipoCadastro] = useState('');

    const handleAvancar = () => {
        if (tipoCadastro === 'CPF') {
            navigation.navigate('CadastroClienteCPF');
        } else if (tipoCadastro === 'CNPJ') {
            navigation.navigate('CadastroClienteCNPJ');
        }
    };

    return (
        <View style={estilo.container}>
            <View style={estilo.logoContainer}>
                <Image source={Logo} style={estilo.logo} />
            </View>
            <Text style={estilo.texto}>Tipo de cadastro</Text>
            <View style={estilo.modalPicker}>
                <Picker
                    selectedValue={tipoCadastro}
                    style={estilo.picker}
                    onValueChange={(itemValue) => setTipoCadastro(itemValue)}>
                    <Picker.Item label="Selecione o tipo de cadastro" value="" />
                    <Picker.Item label="CPF" value="CPF" />
                    <Picker.Item label="CNPJ" value="CNPJ" />
                </Picker>
            </View>
            <TouchableOpacity onPress={handleAvancar} style={estilo.botao}>
                <Text style={estilo.textoBotao}>Avançar</Text>
            </TouchableOpacity>
            <View style={estilo.final}></View>
        </View>
    );
}

export default CadastroCliente;
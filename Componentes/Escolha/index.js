import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"; // Importe Image de react-native
import estilo from "./estilo";
import Logo from "../../assets/logo.png"
import { Picker } from "@react-native-picker/picker";


const Escolha = ({ navigation }) => {
    const [tipoEscolha, setTipoEscolha] = useState('');

    const handleAvancar = () => {
        if (tipoEscolha === 'Cliente') {
            navigation.navigate('CadastroCliente');
        } else if (tipoEscolha === 'Profissional') {
            navigation.navigate('Cadastro');
        }
    };

    return (
        <View style={estilo.container}>
            <View style={estilo.logoContainer}>
                <Image source={Logo} style={estilo.logo} />
            </View>
            <Text style={estilo.texto}>Cliente ou Profissional</Text>
            <View style={estilo.modalPicker}>
                <Picker
                    selectedValue={tipoEscolha}
                    style={estilo.picker}
                    onValueChange={(itemValue) => setTipoEscolha(itemValue)}>
                    <Picker.Item label="Selecione Cliente ou Profissional" value="" />
                    <Picker.Item label="Cliente" value="Cliente" />
                    <Picker.Item label="Profissional" value="Profissional" />
                </Picker>
            </View>
            <TouchableOpacity onPress={handleAvancar} style={estilo.botao}>
                <Text style={estilo.textoBotao}>Avançar</Text>
            </TouchableOpacity>
            <View style={estilo.final}></View>
        </View>
    );
}

export default Escolha;
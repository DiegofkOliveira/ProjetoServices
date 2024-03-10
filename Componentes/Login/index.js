import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"; // Importe Image de react-native
import estilo from "./estilo";
import Logo from "../../assets/logo.png"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleNavigateToEscolha = () => {
        navigation.navigate('Escolha');
    };


    return (
        <View style={estilo.container}>
            <View style={estilo.logoContainer}>
                <Image source={Logo} style={estilo.logo} />
            </View>
            <Text style={estilo.texto}>Login</Text>
            <View style={estilo.inputContainer}>
                <TextInput
                    style={estilo.input}
                    placeholder="Telefone, nome de usuário ou email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={estilo.input}
                    placeholder="Senha"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={estilo.botao}>
                <Text style={estilo.textoBotao}>Avançar</Text>
            </TouchableOpacity>
            <View style={estilo.dividirContainer}>
                <View style={estilo.dividirLinha} />
                <Text style={estilo.dividirTexto}>ou</Text>
                <View style={estilo.dividirLinha} />
            </View>
            <View style={estilo.iconeContainer}>
                <TouchableOpacity style={estilo.buttonContainerIcone} >
                    <MaterialCommunityIcons name="gmail" size={30} color="#db4437" />
                    <Text style={[estilo.buttonText, { color: '#999999' }]}>Entrar com o</Text>
                    <Text style={[estilo.buttonText, { color: '#db4437' }]}>Gmail</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.buttonContainerIcone} >
                <MaterialCommunityIcons name="microsoft-outlook" size={30} color="#003399" />
                    <Text style={[estilo.buttonText, { color: '#999999' }]}>Entrar com o</Text>
                    <Text style={[estilo.buttonText, { color: '#003399' }]}>Outlook</Text>
                </TouchableOpacity>
            </View>
            <View style={estilo.registroContainer}>
                <Text style={[estilo.cadastroTextoContainer, { color: '#999999'}]}>Não tem uma conta?</Text>
                <TouchableOpacity onPress={handleNavigateToEscolha}>
                    <Text style={[estilo.buttonText, { color: '#003399' }]}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <View style={estilo.footer}>
                <Text style={estilo.copyrightText}>
                    © 2024 D& Software. Todos os direitos reservados.
                </Text>
                <Text style={estilo.disclaimerText}>
                    Este aplicativo e seu conteúdo são propriedade intelectual da D& Software.
                </Text>
            </View>
        </View>
    );
}

export default Login;
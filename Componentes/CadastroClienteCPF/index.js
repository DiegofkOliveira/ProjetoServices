import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import estilo from './estilo';
import { Ionicons } from '@expo/vector-icons';

const CadastroClienteCPF = ({ navigation }) => {
  const [imagem, setImagem] = useState(null);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const selecionarImagem = async () => {
    let permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissao.granted === false) {
      alert('É necessário permitir o acesso à galeria de fotos para escolher uma imagem.');
      return;
    }

    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditig: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.cancelled) {
      setImagem(resultado.url);
    }
  }
  const handleConfirmarCadastro = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={estilo.scrollViewContent}>
      <Text style={estilo.titulo}>Cadastro de Pessoa Física</Text>
      <TouchableOpacity style={[estilo.imagemContainer, { alignItems: 'center' }]} onPress={selecionarImagem}>
        {imagem ? (
          <Image source={{ url: imagem }} style={estilo.imagem} />
        ) : (
          <View style={estilo.placeholder}>
            <Ionicons name="camera" size={50} color="#999" />
          </View>
        )}
      </TouchableOpacity>
      <TextInput
        style={estilo.input}
        placeholder="Nome*"
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <TextInput
        style={estilo.input}
        placeholder="CPF*"
        onChangeText={text => setCpf(text)}
        value={cpf}
      />
      <TextInput
        style={estilo.input}
        placeholder="Endereço*"
        onChangeText={text => setEndereco(text)}
        value={endereco}
      />
      <TextInput
        style={estilo.input}
        placeholder="Cidade*"
        onChangeText={text => setCidade(text)}
        value={cidade}
      />
      <TextInput
        style={estilo.input}
        placeholder="Telefone*"
        onChangeText={text => setTelefone(text)}
        value={telefone}
      />
      <TextInput
        style={estilo.input}
        placeholder="Email*"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={estilo.input}
        placeholder="Senha*"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true} // Oculta os caracteres digitados
      />
      <TextInput
        style={estilo.input}
        placeholder="Confirmar Senha*"
        onChangeText={text => setConfirmarSenha(text)}
        value={confirmarSenha}
        secureTextEntry={true} // Oculta os caracteres digitados
      />
      <TouchableOpacity onPress={handleConfirmarCadastro} style={estilo.botao}>
        <Text style={estilo.textoBotao}>Confirmar</Text>
      </TouchableOpacity>
      <View style={estilo.textoFinal}>
        <Text style={estilo.textoConteudo}>Campos com *, obrigatório preenchimento!</Text>
      </View>
    </ScrollView>
  );
};

export default CadastroClienteCPF;
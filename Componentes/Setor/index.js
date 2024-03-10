import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estilo from './estilo';

const Residencial = require('../../assets/Imagem/ImagemSetor/residencia.webp');
const Comercial = require('../../assets/Imagem/ImagemSetor/comercial.jpg');
const Industrial = require('../../assets/Imagem/ImagemSetor/industrial.webp');
const Predial = require('../../assets/Imagem/ImagemSetor/predial.jpg');

const OpcaoSelecionavel = ({ imagem, texto, selecionado, onPress }) => (
  <TouchableOpacity onPress={onPress} >
    <Image
      source={imagem}
      style={[{ width: 100, height: 100, borderRadius: 10 }, selecionado && { opacity: 0.5 }]} // Altera a cor da imagem se estiver selecionada
    />
    <Text style={{ fontWeight: selecionado ? 'bold' : 'normal' }}>{texto}</Text>
  </TouchableOpacity>
);

const TelaDeSetor = ({ navigation }) => {
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState('');

  const handleSelecionarOpcao = (opcao) => {
    const index = opcoesSelecionadas.indexOf(opcao);

    if (index === -1) {
      setOpcoesSelecionadas([...opcoesSelecionadas, opcao]);
    } else {
      const novasOpcoesSelecionadas = [...opcoesSelecionadas];
      novasOpcoesSelecionadas.splice(index, 1);
      setOpcoesSelecionadas(novasOpcoesSelecionadas);
    }
  };

  const handleAvancar = () => {
    if (opcoesSelecionadas.length > 0) {
      navigation.navigate('TermoDeUso', { opcoesSelecionadas });
    } else {
      alert('Por favor, selecione uma opção antes de avançar.');
    }
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.containerTexto}>Qual serviço:</Text>
      <View style={estilo.containerImagem}>
        <OpcaoSelecionavel
          imagem={Residencial}
          texto="Residêncial"
          selecionado={opcoesSelecionadas.includes('Residencial')}
          onPress={() => handleSelecionarOpcao('Residencial')}
        />
        <OpcaoSelecionavel
          imagem={Comercial}
          texto="Comercial"
          selecionado={opcoesSelecionadas.includes('Comercial')}
          onPress={() => handleSelecionarOpcao('Comercial')}
        />
        <OpcaoSelecionavel
          imagem={Industrial}
          texto="Industrial"
          selecionado={opcoesSelecionadas.includes('Industrial')}
          onPress={() => handleSelecionarOpcao('Industrial')}
        />
        <OpcaoSelecionavel
          imagem={Predial}
          texto="Predial"
          selecionado={opcoesSelecionadas.includes('Predial')}
          onPress={() => handleSelecionarOpcao('Predial')}
        />
      </View>
      <TouchableOpacity onPress={handleAvancar} style={estilo.botao}>
        <Text style={estilo.textoBotao}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaDeSetor;
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estilo from './estilo';

const Eletricista = require('../../assets/Imagem/eletricista.webp');
const Encanador = require('../../assets/Imagem/encanador.webp');
const Pintor = require('../../assets/Imagem/pintor.jpg');
const Pedreiro = require('../../assets/Imagem/pedreiro.jpg');
const Domestica = require('../../assets/Imagem/domestica.jpg');
const Condicionado = require('../../assets/Imagem/condicionado.jpg');

const OpcaoSelecionavel = ({ imagem, texto, selecionado, onPress }) => (
  <TouchableOpacity onPress={onPress} >
    <Image
      source={imagem}
      style={[{ width: 100, height: 100, borderRadius: 10 }, selecionado && { opacity: 0.5 }]} // Altera a cor da imagem se estiver selecionada
    />
    <Text style={{ fontWeight: selecionado ? 'bold' : 'normal' }}>{texto}</Text>
  </TouchableOpacity>
);

const TelaDeSelecao = ({ navigation }) => {
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
      navigation.navigate('TelaDeSetor', { opcoesSelecionadas });
    } else {
      alert('Por favor, selecione uma opção antes de avançar.');
    }
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.containerTexto}>Qual serviço:</Text>
      <View style={estilo.containerImagem}>
        <OpcaoSelecionavel
          imagem={Eletricista}
          texto="Elétrica"
          selecionado={opcoesSelecionadas.includes('Elétrica')}
          onPress={() => handleSelecionarOpcao('Elétrica')}
        />
        <OpcaoSelecionavel
          imagem={Encanador}
          texto="Hidráulica"
          selecionado={opcoesSelecionadas.includes('Hidráulica')}
          onPress={() => handleSelecionarOpcao('Hidráulica')}
        />
        <OpcaoSelecionavel
          imagem={Pintor}
          texto="Pintura"
          selecionado={opcoesSelecionadas.includes('Pintura')}
          onPress={() => handleSelecionarOpcao('Pintura')}
        />
        <OpcaoSelecionavel
          imagem={Pedreiro}
          texto="Construção"
          selecionado={opcoesSelecionadas.includes('Construção')}
          onPress={() => handleSelecionarOpcao('Construção')}
        />
        <OpcaoSelecionavel
          imagem={Domestica}
          texto="Doméstica"
          selecionado={opcoesSelecionadas.includes('Domésticos')}
          onPress={() => handleSelecionarOpcao('Domésticos')}
        />
        <OpcaoSelecionavel
          imagem={Condicionado}
          texto="Split"
          selecionado={opcoesSelecionadas.includes('Condicionado')}
          onPress={() => handleSelecionarOpcao('Condicionado')}
        />
      </View>
      <TouchableOpacity onPress={handleAvancar} style={estilo.botao}>
        <Text style={estilo.textoBotao}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaDeSelecao;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import estilo from './estilo';

const TermosDeUso = ({ navigation }) => {
  const [selecionado, setSelecionado] = useState(false);
  const [scrollToEnd, setScrollToEnd] = useState(false);

  const handleSelecionar = () => {
    if (scrollToEnd) {
      setSelecionado(!selecionado);
    }
  };

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    setScrollToEnd(layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom);
  };

  const handleAvancar = () => {
    if (selecionado) {
      navigation.navigate('Pagamento');
    } else {
      alert('Por favor, aceite os termos de uso antes de prosseguir.');
    }
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Termos de Uso</Text>
      <ScrollView style={estilo.caixaTermos}
        contentContainerStyle={estilo.termosContent}
        onScroll={handleScroll}
        scrollEventThrottle={10}>
        <Text style={estilo.textoTermos}>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>1. Aceitação dos Termos</Text>
            {"\n"}
            Ao acessar este aplicativo, assumimos que você aceita estes termos de uso na íntegra. Não continue a usar este aplicativo se você não concordar com todos os termos e condições estabelecidos nesta página.{"\n"}
          </Text>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>2. Uso do Aplicativo</Text>
            {"\n"}
            O conteúdo deste aplicativo é apenas para fins informativos e de entretenimento. Não nos responsabilizamos por qualquer uso indevido ou interpretação incorreta do conteúdo.{"\n"}
          </Text>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>3. Privacidade</Text>
            {"\n"}
            Respeitamos a privacidade de nossos usuários. Quaisquer informações pessoais fornecidas serão tratadas de acordo com nossa Política de Privacidade.{"\n"}
          </Text>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>4. Propriedade Intelectual</Text>
            {"\n"}
            Todo o conteúdo neste aplicativo, incluindo textos, imagens, logotipos e outros materiais, são de propriedade exclusiva nossa. Qualquer uso não autorizado do conteúdo pode violar leis de direitos autorais e marcas registradas.{"\n"}
          </Text>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>5. Alterações nos Termos de Uso</Text>
            {"\n"}
            Reservamos o direito de atualizar ou modificar estes termos de uso a qualquer momento sem aviso prévio. Recomendamos que você verifique esta página regularmente para estar ciente de quaisquer mudanças.{"\n"}
          </Text>
          <Text>
            Ao utilizar este aplicativo, você concorda com estes termos de uso. Se você não concordar com os termos, por favor, não utilize este aplicativo.{"\n"}
          </Text>
        </Text>
      </ScrollView>
      <View style={estilo.checkboxPai}>
        <TouchableOpacity onPress={handleSelecionar} style={[estilo.checkbox, !scrollToEnd && estilo.checkboxDesativado, selecionado && estilo.checkboxSelecionado]}>
          {selecionado && <View style={estilo.checkedCircle} />}
        </TouchableOpacity>
        <Text style={[estilo.texto, !scrollToEnd && estilo.textoDesativado]}>Aceito os Termos e Condições</Text>
      </View>
      <TouchableOpacity onPress={handleAvancar} style={[estilo.botao, !scrollToEnd && estilo.botaoDesativado]}>
        <Text style={estilo.textoBotao}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermosDeUso;
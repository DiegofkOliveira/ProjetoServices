import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Clipboard } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // Biblioteca para gerar QR Code
import estilo from './estilo';

const PixPaymentScreen = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [pixKey, setPixKey] = useState('');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  // Função para gerar uma chave PIX aleatória
  const generatePixKey = () => {
    const randomKey = Math.random().toString(36).substr(2, 10).toUpperCase(); // Gera uma string aleatória
    setPixKey(randomKey);
  };

  useEffect(() => {
    // Gera uma nova chave PIX quando o plano é selecionado
    if (selectedPlan) {
      generatePixKey();
      // Simula a confirmação do pagamento após um breve período de tempo (3 segundos)
      const timer = setTimeout(() => {
        setPaymentConfirmed(true);
        navigation.navigate('Login'); // Navega de volta para a tela inicial após a confirmação do Pix
      }, 6000);
      return () => clearTimeout(timer); // Limpa o temporizador ao desmontar o componente
    }
  }, [selectedPlan, navigation]);

  // Função para copiar a chave PIX para a área de transferência
  const copyPixKey = () => {
    Clipboard.setString(pixKey);
    alert('Chave PIX copiada para a área de transferência.');
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Escolha um plano de pagamento:</Text>
      <TouchableOpacity
        style={[estilo.planButton, selectedPlan === '6 meses' && estilo.selectedPlan]}
        onPress={() => setSelectedPlan('6 meses')}>
        <Text style={estilo.buttonText}>Plano de 6 meses / R$ 150,00</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[estilo.planButton, selectedPlan === '1 ano' && estilo.selectedPlan]}
        onPress={() => setSelectedPlan('1 ano')}>
        <Text style={estilo.buttonText}>Plano de 1 ano / R$ 240,00</Text>
      </TouchableOpacity>
      {selectedPlan && (
        <View style={estilo.pixContainer}>
          <Text style={estilo.pixText}>Copie e cole a chave PIX:</Text>
          <Text style={estilo.pixKey}>{pixKey}</Text>
          <TouchableOpacity onPress={copyPixKey} style={estilo.copyButton}>
            <Text style={estilo.buttonText}>Copiar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PixPaymentScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import estilo from './estilo';

const PaymentScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('debito');
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    if (!selectedPlan) {
      alert('Por favor, selecione um plano de pagamento.');
      return;
    }
    if (paymentMethod === 'debito') {
      // Lógica de pagamento por cartão de débito
      alert(`Pagamento por cartão de débito processado com sucesso para o plano ${selectedPlan}!`);
    } else {
      // Lógica de pagamento por cartão de crédito
      alert(`Pagamento por cartão de crédito processado com sucesso para o plano ${selectedPlan}!`);
    }
    navigation.navigate('Login');
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Escolha um plano de pagamento:</Text>
      <TouchableOpacity
        style={[estilo.planButton, selectedPlan === 'plano1' && estilo.selectedPlan]}
        onPress={() => handlePlanSelection('plano1')}>
        <Text style={estilo.buttonText}>Plano de 6 meses / R$ 150,00</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[estilo.planButton, selectedPlan === 'plano2' && estilo.selectedPlan]}
        onPress={() => handlePlanSelection('plano2')}>
        <Text style={estilo.buttonText}>Plano de 1 ano / R$ 240,00</Text>
      </TouchableOpacity>
      {/* Adicione outros planos de pagamento conforme necessário */}

      <Text style={estilo.titulo}>Digite os dados para pagamento:</Text>
      <TextInput
        style={estilo.input}
        placeholder="Número do cartão"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={estilo.input}
        placeholder="Validade (MM/AA)"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <TextInput
        style={estilo.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
      />
      <TextInput
        style={estilo.input}
        placeholder="Nome do titular"
        value={cardHolderName}
        onChangeText={setCardHolderName}
      />
      <View style={estilo.paymentMethodContainer}>
        <TouchableOpacity
          style={[estilo.paymentMethodButton, paymentMethod === 'debito' && estilo.selectedPaymentMethod]}
          onPress={() => setPaymentMethod('debito')}>
          <Text style={estilo.paymentMethodButtonText}>Débito</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[estilo.paymentMethodButton, paymentMethod === 'credito' && estilo.selectedPaymentMethod]}
          onPress={() => setPaymentMethod('credito')}>
          <Text style={estilo.paymentMethodButtonText}>Crédito</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={estilo.paymentButton}
        onPress={handlePayment}>
        <Text style={estilo.buttonText}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;
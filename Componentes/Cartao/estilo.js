import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    color: '#999999',
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontSize: 20,
    marginBottom: 30,
  },
  planButton: {
    width: 350,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedPlan: {
    backgroundColor: '#33cc33', // Cor de fundo diferente para indicar seleção
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 16,
  },
  input: {
    width: 350,
    fontWeight: '700',
    fontFamily: 'Roboto',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  paymentMethodContainer: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  paymentMethodButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  selectedPaymentMethod: {
    backgroundColor: '#33cc33',
  },
  paymentMethodButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  paymentButton: {
    width: 350,
    backgroundColor: '#ff6600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default estilo;
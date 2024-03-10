import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#999999',
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
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
  pixContainer: {
    width: 350,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  pixText: {
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#999999',
    fontSize: 16,
  },
  pixKey: {
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#999999',
    fontSize: 16,
  },
});


export default estilo;
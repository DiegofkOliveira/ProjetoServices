import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#999999',
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  caixaTermos: {
    borderRadius: 10,
    marginBottom: 20,
    width: 350,
    maxHeight: 500,
    borderWidth: 2,
    borderColor: '#999999',
  },
  termosContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  textoTermos: {
    fontSize: 16,
    textAlign: 'justify',
  },
  checkboxPai: {
    flexDirection: 'row',
  },
  checkbox: {
    width: 20,
    height: 20,
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelecionado: {
    backgroundColor: '#339900',
    border: 'none',
  },
  checkedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#33ffff',
  },
  texto: {
    alignItems: 'center',
    marginHorizontal: 10,
    
  },
  botao: {
    width: 350,
    backgroundColor: '#3399ff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
},
textoBotao: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
},
});

export default estilo;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

// Importe seus componentes aqui
import Login from './Componentes/Login/index';
import Escolha from './Componentes/Escolha/index';
import Cadastro from './Componentes/Cadastro/index';
import CadastroPessoaFisica from './Componentes/CadastroCPF';
import CadastroPessoaJuridica from './Componentes/CadastroCNPJ';
import CadastroClienteCPF from './Componentes/CadastroClienteCPF';
import CadastroClienteCNPJ from './Componentes/CadastroClienteCNPJ';
import TelaDeSelecao from './Componentes/TelaDeSelecao';
import TelaDeSetor from './Componentes/Setor/index';
import TermosDeUso from './Componentes/TermoDeUso';
import Pagamento from './Componentes/Pagamento';
import PixPaymentScreen from './Componentes/Pix';
import Cartao from './Componentes/Cartao';
import CadastroCliente from './Componentes/CadastroCliente';


const Stack = createStackNavigator();

const App = () => {
  // Lista de rotas
  const routes = [
    { name: "Login", component: Login },
    { name: "Escolha", component: Escolha },
    { name: "Cadastro", component: Cadastro },
    { name: "CadastroCliente", component: CadastroCliente},
    { name: "CadastroPessoaFisica", component: CadastroPessoaFisica },
    { name: "CadastroPessoaJuridica", component: CadastroPessoaJuridica },
    { name: "CadastroClienteCPF", component: CadastroClienteCPF},
    { name: "CadastroClienteCNPJ", component: CadastroClienteCNPJ},
    { name: "TelaDeSelecao", component: TelaDeSelecao },
    { name: "TelaDeSetor", component: TelaDeSetor },
    { name: "TermoDeUso", component: TermosDeUso },
    { name: "Pagamento", component: Pagamento },
    { name: "PixPaymentScreen", component: PixPaymentScreen },
    { name: "Cartao", component: Cartao },
  ];

  // Função para renderizar as telas dinamicamente
  const renderScreens = () => {
    return routes.map((route, index) => (
      <Stack.Screen
        key={index}
        name={route.name}
        component={route.component}
        options={{ headerShown: false, cardStyle: { backgroundColor: '#cccccc' } }}
      />
    ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {renderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
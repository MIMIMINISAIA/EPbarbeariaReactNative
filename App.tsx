import React from 'react';
import { Text, View } from 'react-native';
import LoginScreenCliente from './src/login/LoginScreenCliente';
import LoginScreenProfissional from './src/login/LoginScreenProfissional';
import LoginScreenAdm from './src/login/LoginScreenAdm';



function App(): JSX.Element{
  return(
   //<LoginScreenCliente/>
   //<LoginScreenProfissional/>
   <LoginScreenAdm/>
  );
}

export default App;
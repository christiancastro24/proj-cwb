import { Header } from './components/Header';
import { Routes } from './routes';
import { GlobalStyle } from './components/styles/global';
import { ChakraProvider } from '@chakra-ui/react'
import { Toast } from './components/Toastify';

function App() {
  
  return (
    <ChakraProvider>

    <div style={{backgroundColor: "#f2f2f2"}}>
      <Header />
      <Routes />
      <Toast />
      <GlobalStyle />
    </div>
    </ChakraProvider>
  );
}

export default App;

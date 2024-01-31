import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { createLocalStorage, getAllLocalStorage } from './services/storage';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';

function App() {

  !getAllLocalStorage() && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            < MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;

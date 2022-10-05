
import '../src/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import { LoginProvider, } from './context/LoginContext';
import AppRouter from './router/AppRouter';


const App = () => {


  return (
      <LoginProvider>
        <CartProvider>
          <AppRouter/>
        </CartProvider>
      </LoginProvider>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Photos } from './components/Photos';

function App() {
  return (
  <Provider store={store}>
    <Photos></Photos>

  </Provider>
  
  
  
  
  );
}

export default App;

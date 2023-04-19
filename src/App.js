import logo from './logo.svg';
import './App.css';
import { Photo } from './components/Photos';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
  <Provider store={store}>
    <Photo/>

  </Provider>
  
  
  
  
  );
}

export default App;

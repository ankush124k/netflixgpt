import { Provider } from 'react-redux';
import './App.css';
import Body from './componets/Body.js';
import appStore from './utils/appStore.js';

function App() {
  return (
    <div className="App">
    <Provider store={appStore}>
      <Body/>
    </Provider>
    
    </div>
  );
}

export default App;

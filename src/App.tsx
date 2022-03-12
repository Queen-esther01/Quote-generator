import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/configureStore';
import Quotes from './Quotes';



function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Quotes />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

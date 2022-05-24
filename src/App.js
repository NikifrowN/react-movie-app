import { BrowserRouter } from 'react-router-dom';
import './App.css'

import { Header } from "./features/header/header/component";
import { Pages } from './pages/Pages';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;

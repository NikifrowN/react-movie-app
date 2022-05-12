import { BrowserRouter } from 'react-router-dom';

import { Header } from "./features/header/header/component";


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;

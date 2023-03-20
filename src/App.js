import "./App.css";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./component/AppRout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;

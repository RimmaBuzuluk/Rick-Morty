import "./App.css";
import Block_info from "./component/Block_info";
import CharacterList from "./component/Character";
import Img from "./component/Img";
import { BrowserRouter } from "react-router-dom";
import MainBlock from "./page/MainBlock";
import AppRouter from "./component/AppRout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
        {/* <MainBlock /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

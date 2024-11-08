import { BrowserRouter } from "react-router-dom";

import Routes from "./components/systems/RoutesProvider";
import Style from "./components/systems/Style";
import Store from "./components/systems/Store";

function App() {
  return (
    <Store>
      <Style>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Style>
    </Store>
  );
}

export default App;

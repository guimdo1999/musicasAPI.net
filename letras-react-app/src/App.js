import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Banco de Músicas";
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/main">
          <MainMenu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

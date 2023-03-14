// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min";
import Conhecimentos from "./pages/Conhecimentos";
import Main from "./pages/Main";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main }/>
        <Route path="/projects" component={ Projects }/>
        <Route path="/conhecimentos" component={ Conhecimentos }/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

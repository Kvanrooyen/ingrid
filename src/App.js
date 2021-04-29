import { BrowserRouter, Route, Switch } from "react-router-dom";
import Library from "./components/Library";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Library} path='/' exact />
        <Route component={About} path='/about' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Library from "./components/Library";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Welcome} path='/' exact />
        <Route component={Library} path='/library' />
        <Route component={About} path='/about' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

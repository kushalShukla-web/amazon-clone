import Header from "./Header.js"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from "./Checkout.js"
import Home from "./Home.js";
function App() {
  return (
    <Router>
    <Switch>
     <Route path="/login">Login</Route>
    <Route path="/checkout"><Header/><Checkout/></Route>
    <Route path="/"><Header/><Home/></Route>
   </Switch>
   </Router>
  );
}

export default App;

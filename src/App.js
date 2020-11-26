import './App.css';
import Nav from './components/navigation'
import Shop from "./pages/Shop"
import Contact from './pages/Contact'
import Home from './pages/Home'
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>      
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;

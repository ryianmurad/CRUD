import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbars from './component/Navbars'
import Home from './component/Home'
import { Footer } from './component/Footer';
import Barang from './component/Barang';
import CreateBarang from './component/CreateBarang';
import UpdateBarang from './component/UpdateBarang';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/barang" component={Barang}/>
          <Route path="/create" component={CreateBarang}/>
          <Route path="/update/:id" component={UpdateBarang}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./Components/Header";
import MainSlider from './Components/MainSlider';
import SuccessJob from './Components/SuccessJob';
import Team from './Components/Team';
import TableData from "./Components/TableData";
import Footer from './Components/Footer';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";


function App() {
  return (
    <div className="App">

    
<Router>

<Header/>
  <Switch>
        <Route  exact path='/' component={MainSlider}>
        <MainSlider/>
        </Route>
        <Route  path='/job' component={SuccessJob}>
        <SuccessJob/>
        </Route>
        <Route  path='/team' component={Team}>
        <Team/>
        </Route>
       
        

  </Switch>
  <Container>
    <MainSlider/>
    <SuccessJob/>
    <Team/>
    <TableData/>
    </Container>
    <Footer/>
   
</Router>
     
 
    </div>
  );
}

export default App;

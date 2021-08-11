import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  
  return (
    <div className="App"> 
      <Switch >
        <Route exact path='/'  component= {Home} />
        <Route path='/about'  component= {About} />
        <Route path='/gallery'  component= {Gallery} />
        <Route path='/contact'  component= {Contact} />
      </Switch>
    </div>
  );
}

export default App;

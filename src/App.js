import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch >
        <Route exact path='/'  component= {Home} />
        <Route path='/gallery'  component= {Gallery} />
        <Route path='/about'  component= {About} />
        <Route path='/contact'  component= {Contact} />
      </Switch>
    </div>
  );
}

export default App;

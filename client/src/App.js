import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTransition, animated } from "react-spring";

function App() {
  
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 }
  });
  return transitions((props, item) => (
        <animated.div style={props} >
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </animated.div>
      )

  );
}

export default App;

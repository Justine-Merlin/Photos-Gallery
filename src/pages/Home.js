import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import HomeAnimation from '../components/HomeAnimation';
import Logo from '../components/Logo';

const Home = () => {
  const titleStyle = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 2200
  })
  const subTitleStyle = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 3200
  })
  const homeBtnStyle = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)'},
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 1000 },
    delay: 4200
  })
  const logoStyle = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)'},
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
    delay: 1200
  })
  return (
    <div className="home">
      <HomeAnimation />
      <animated.div
        className="logo"
        style={{...logoStyle}}>
        <Logo />
      </animated.div>
      <animated.div 
        className="title" 
        style= {{...titleStyle}}
        >
          <h1>Photograph's name</h1>
          <animated.div 
            className="subtitle"
            style={{...subTitleStyle}}
          >
            <h3>Votre histoire</h3>
          </animated.div>
          <animated.div 
            className="home-btn"
            style={{...homeBtnStyle}}
            >
            <NavLink path to='/about'>Créer la votre</NavLink>
          </animated.div>
      </animated.div>
    </div>
  );
};

export default Home;
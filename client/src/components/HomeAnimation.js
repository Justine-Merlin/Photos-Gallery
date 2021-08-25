import React from 'react';
import { useState, useEffect } from 'react'
import { animated, useTransition  } from 'react-spring';

const slides = [
    'photo-1551989137-334bd6577da3?ixlib=rb-1.2.1&w=3450&q=80' ,
    'photo-1501560379-05951a742668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=3300&q=80' ,
    'photo-1551989137-b8ad7595d020?ixlib=rb-1.2.1&w=3300&q=80' ,
    'photo-1503058474900-cb76710f9cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=3300&q=80' ,
  ]

const HomeAnimation = () => {
    const [index, set] = useState(0)
    const transitions = useTransition(index,{
        key: index,
        from: { opacity: 0, transform: 'scale(1.1)'},
        enter: { opacity: 1, transform: 'scale(1)'},
        leave: { opacity: 0, transform: 'scale(0.9)'},
        config: {duration : 3000},
    })
    
    useEffect(() => {
      const t = setInterval(() => set(state => (state + 1) % slides.length), 7000)
      return () => clearTimeout(t)
    }, [])
    return transitions(( props, i ) => (
      <animated.div
        className="bg"
        style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${slides[i]}&auto=format&fit=crop)` }}
      />
    ))
  }
export default HomeAnimation;
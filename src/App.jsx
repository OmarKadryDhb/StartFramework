// main component of my project = parent component
import {Component} from 'react';
import Layout from './components/Layout/Layout.jsx';
import About from './components/About/About.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';

const router=createBrowserRouter([
  {path:'',element:<Layout/> , children:[
    {path:'/',element:<Home/>},
    {path:'/',element:<Layout/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>}    

  ]}
])

export default class App extends Component {
  // class has no Identifiers
  state={
    name :"omar"
  };
  render(){
  return <>
    <RouterProvider router={router}/> 
      </>
}
  }
   
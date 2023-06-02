// import logo from './logo.svg';
import './App.css';
import Class from './demoComponent/Class';
import {Home} from './demoComponent/Home';
// import { useContext } from 'react';
import Count from './demoComponent/Count';
import Array from './demoComponent/Array';
import DemoEvent from './demoComponent/DemoEvent';
import { User } from './demoComponent/User';
import { Link, NavLink, Route, Router, Routes } from 'react-router-dom';
import {Nav} from './demoComponent/Nav';
import { Navbar } from '@material-tailwind/react';
import Example from './demoComponent/Navbar';
import UserFormikform from './demoComponent/UserFormikform';
import AxiosDemo from './demoComponent/AxiosDemo';
import SpringData from './demoComponent/springdata';

function App() {
  // const name = useContext(cc)
  return (  
    <>
    <Example/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/class' element={<Class/>}></Route>
      <Route path='/count' element={<Count/>}></Route>
      <Route path='/array' element={<Array/>}></Route>
      <Route path='/demoevent' element={<DemoEvent/>}></Route>
      <Route path='/nav' element={<Example/>}></Route>
      <Route path='/formik' element={<UserFormikform/>}></Route>
      <Route path='/axios' element={<AxiosDemo/>}></Route>
      <Route path='/user' element={<SpringData/>}></Route>
      
    </Routes>
    
  
  </>
  )
}

export default App;

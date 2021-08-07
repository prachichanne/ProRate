
import './App.css';
// import Header from "./Components/Header";
// import Carousel from "./Components/Carousel";
// import Courses from "./Components/Courses";
// import Footer from "./Components/Footer";
import {Route,Switch} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Contact from './Components/Contact';
import About from './Components/About';
import InstructorForm from './Components/InstructorForm';
import TestDemo from './Components/TestDemo';
import UserProfile from './Components/UserProfile';

import Profile from './Components/Profile1';
import InstProfile from './Components/InstProfile';


function App() {   
  return (
  <>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/instructorform' component={InstructorForm}/>
        {/* <Route exact path='/userprofile' component={Profile}/>  */}
        <Route exact path='/' component={Home}/>   
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/instructprofile' component={InstProfile}/>

    
      
      </Switch>
      
      
  
  </>

  );
}

export default App;

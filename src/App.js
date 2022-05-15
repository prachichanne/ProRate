
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
import TestDemo from './Components/TestDemo';
import UserProfile from './Components/UserProfile';
import Review from './Components/Review';
import createcomment from './Components/Dashboard';
import Addcomment from './Components/Addcomment';
import NewHome from './Components/NewHome';
import Dashboard from './Components/Dashboard';

function App() {   
  return (
  <>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={About}/>
        {/* <Route exact path='/userprofile' component={UserProfile}/>  */}
        <Route exact path='/' component={Home}/>   
        <Route exact path='/userprofile' component={UserProfile}/>
        {/* <Route eaxct path="/review" component={Review} /> */}
        <Route eaxct path="/getcomments" component={createcomment} />
        <Route eaxct path="/addcomment" component={Addcomment} />
        <Route eaxct path="/newhome" component={NewHome} />
        <Route eaxct path="/dashboard" component={Dashboard} />


    
      
      </Switch>
      
      
  
  </>

  );
}

export default App;

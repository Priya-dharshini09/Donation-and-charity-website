import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Donation from './components/Donation';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route,Switch}  from 'react-router-dom';
import Login from './components/Login';
import About from './About';
import Register from './Register';
import Successfull from './components/Successfull';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/donation" component={Donation} />
      <Route exact path="/service" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/successfull" component={Successfull} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import 'firebase/analytics'
import {firebaseAnalytics} from "./firebase.config"
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Components/CommonComponents/NavBar/NavBar'
import SocialMedia from "./Components/CommonComponents/SocialMedia/SocialMedia";
import Home from './Components/HomePage/Home/Home';
function App() {
  useEffect(() => {
    firebaseAnalytics.logEvent('Honepage_visited')
  })
  return (
    <Router>
      <NavBar />
      <SocialMedia />
      <Home />
      <Switch>
      </Switch>
    </Router>
  );
}
export default App;
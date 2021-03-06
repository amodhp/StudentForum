import React, { Fragment,useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert"
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import Profiles from "./components/profiles/Profiles";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import PrivateRoute from "./components/routing/PrivateRoute";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from './utils/setAuthToken'

import "./App.css";

if(localStorage.token){
  setAuthToken(localStorage.token);//not needed actually
}

const App = () => { 
  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);
  return(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
        <Alert/>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>  
            <PrivateRoute exact path="/create-profile" component={CreateProfile}/>  
            <PrivateRoute exact path="/edit-profile" component={EditProfile}/> 
            <PrivateRoute exact path="/posts" component={Posts}/> 
            <PrivateRoute exact path="/post/:id" component={Post}/> 
          </Switch>
        </section>
        <Footer/>
      </Fragment>
    </Router>
  </Provider>
)};

export default App;

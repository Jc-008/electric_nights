// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignUpFormModal from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UserHomePage from './components/UserHomePage';
import LandingPage from "./components/LandingPage";
import EventDetails from './components/Events/EventDetails';
import NavBar from './components/NavBar/index';
import ProfilePage from './components/ProfilePage/index'
import Footer from './components/Footer/';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            {/* <NavBar/> */}
            <LandingPage />
          </Route>

          {/* <Route exact path='/'>
            <UserHomePage />
          </Route> */}

          <Route path='/event/:id'>
            <EventDetails />
          </Route>

          <Route path='/Profile'>
            <ProfilePage />
          </Route>

        </Switch>
      )}
      <Footer/>
    </>
  );
}

export default App;

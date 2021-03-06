import React, { useEffect }from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";




function App() {

  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);



return (
  <div className="app">
    <Router>
      <Switch>
      <Route path="/login">
  <Login />
</Route>
        <Route path="/">
          <Header/>
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;

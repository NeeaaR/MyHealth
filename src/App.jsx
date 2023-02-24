import { useEffect, useState } from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/HomePage/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import Main from "./components/HomePage/Main";
import { BrowserRouter, Route, Router, RouterProvider, Routes } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
import Profil from "./components/Profil";
import Doctors from "./components/Doctors";
import Login from "./components/Auth/Login";
import Home from "./components/HomePage/HomePage"
import { createBrowserHistory } from "history";
import Register from "./components/Auth/Register";
import ErrorPage from "./components/Errors/Error-page";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./components/utils/setAuthToken";
import { loadUser } from "./actions/auth";
import RegisterDoctor from "./components/Auth/RegisterDoctor";

const history = createBrowserHistory();

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
useEffect(() => {
    Aos.init();
  }, []);

useEffect(() => {
  store.dispatch(loadUser());
}, []);

  return (
    // <Router history={history}>
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Home/>} path="/" exact/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Register/>} path="/register"/>
            <Route element={<RegisterDoctor/>} path="/register/doctor"/>
            <Route element={<ErrorPage/>} path="*"/>
          </Routes>
      </BrowserRouter>
      </Provider>
    </div>
    // </Router>
  );
}

export default App;

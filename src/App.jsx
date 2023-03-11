import { useEffect, useState } from "react";
import "./css/App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Outlet, Route, Router, RouterProvider, Routes } from "react-router-dom";
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
import APITEST from "./components/APITEST";
import Users from "./components/Users";
import FindDoctors from "./components/FindDoctors/FindDoctors";
import FindPharmacy from "./components/FindPharmacy/FindPharmacy";
import Articles from "./components/Articles/Articles";
import Faq from "./components/Extra/FAQ";
import CGU from "./components/Extra/CGU";
import Team from "./components/Extra/Team";
import Prohome from "./components/PRO/pages/Index";



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
  <div className="App">
    <Provider store={store}>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<RegisterDoctor />} path="/register/doctor" />
        <Route element={<Profil />} path="/profil/:id" />
        <Route element={<Doctors />} path="/profil/doctor/:id" />
        <Route element={<APITEST />} path="/api/:id" />
        <Route element={<Users />} path="/users/" />
        <Route element={<FindDoctors />} path="/find/doctors" />
        <Route element={<FindPharmacy />} path="/find/pharmacy" />
        <Route element={<Articles />} path="/article/:id" />
        <Route element={<Faq />} path="/faq" />
        <Route element={<CGU />} path="/cgu" />
        <Route element={<Team />} path="/team" />
        <Route element={<Prohome />} path="/pro/" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </Provider>
  </div>
);


}
export default App;

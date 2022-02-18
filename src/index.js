import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import JoinPage from "./Pages/JoinPage";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";

// const token = useSelector((state) => state.auth.loginToken);

function RequireAuth({ children, redirectTo }) {
  const loggedIn = useSelector((state) => state.auth.loginToken);
  return loggedIn ? children : <Navigate to={redirectTo} />;
}

function RequireNoAuth({ children, redirectTo }) {
  const loggedIn = useSelector((state) => state.auth.loginToken);
  return !loggedIn ? children : <Navigate to={redirectTo} />;
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="join" element={<JoinPage />} />
            <Route
              path="login"
              element={
                <RequireNoAuth redirectTo="/">
                  <Auth />
                </RequireNoAuth>
              }
            />
            <Route
              path="admin"
              element={
                <RequireAuth redirectTo="/login">
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

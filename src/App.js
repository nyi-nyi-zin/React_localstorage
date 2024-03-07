import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./styles/shares";
import { GlobalCSS } from "./styles/GlobalCSS";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginContextProvider from "./store/LoginContextApi";
import { RouteGuard } from "./Helper/RouteGuard";

const theme = {
  colors: {
    primary: "aliceblue",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Container>
        <LoginContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route
                path="/home"
                element={
                  <RouteGuard>
                    <Home />
                  </RouteGuard>
                }
              ></Route>
            </Routes>
          </Router>
        </LoginContextProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;

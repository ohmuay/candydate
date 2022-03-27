import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./pages/Homepage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <AppWrapper>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;

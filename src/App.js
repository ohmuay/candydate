import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./pages/Homepage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import AppWrapper from "./components/AppWrapper/AppWrapper";

function App() {
  return (
    <Router>
      <AppWrapper>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;

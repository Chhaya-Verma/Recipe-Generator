import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Maincontent from "./components/Maincontent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GenerateRecipe from "./components/Generate-recipe";
import AboutUs from "./components/Aboutus";
import Contactus from "./components/Contactus";
import LoginForm from "./components/Login";
import VideoGallery  from "./components/Saved-recipe";
import SavedRecipes from "./components/Saved-recipe";
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Maincontent />} />
          <Route path="/generate-recipe" element={<GenerateRecipe />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/saved-recipe" element={<VideoGallery />} /> 
          <Route path="/saved-recipe" element={<SavedRecipes />} />
        </Routes>
        <Footer />
      </div>
    </Router>



  );
}

export default App;

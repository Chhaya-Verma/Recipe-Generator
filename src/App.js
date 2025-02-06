// import React from "react";
// import "./App.css";
// import Maincontent from "./components/Maincontent";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import GenerateRecipe from "./components/Generate-recipe";
// import AboutUs from "./components/Aboutus";
// import Contactus from "./components/Contactus";
// import LoginForm from "./Auth/Login";
// import SignupForm from "./Auth/Signup";

// import SavedRecipes from "./components/Saved-recipe";
// function App() {
//   return (
//     <Router>
//       <div>
        

//         <Routes>
//         <Route path="/" element={<SignupForm />} />
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/maincontent" element={<Maincontent />} />
//           <Route path="/generate-recipe" element={<GenerateRecipe />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/contactus" element={<Contactus />} />
//           <Route path="/saved-recipe" element={<SavedRecipes />} />
//         </Routes>
//       </div>
//     </Router>



//   );
// }

// export default App;



import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import components from the new folder structure
import AboutUs from "./pages/AboutUs";         // Updated path
import ContactUs from "./pages/ContactUs";      // Updated path
import GenerateRecipe from "./pages/GenerateRecipe"; // Updated path
import MainContent from "./pages/MainContent";  // Updated path
import SavedRecipe from "./pages/SavedRecipe";  // Updated path
import LoginForm from "./Auth/Login";
import SignupForm from "./Auth/Signup";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/maincontent" element={<MainContent />} />
          <Route path="/generate-recipe" element={<GenerateRecipe />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/saved-recipe" element={<SavedRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

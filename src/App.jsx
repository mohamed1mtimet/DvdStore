import "./App.css";
import { Route, Routes } from "react-router-dom";

import { AboutPage, HomePage } from "./components/pages";
import { Footer, Header } from "./components/organisms";
function App() {
  return (
    // Main container with flexbox layout to space out Header, Routes, and Footer
    <div className=" flex flex-col justify-between h-screen  bg-slate-100">
      {/* Header Component */}
      <Header />
      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;

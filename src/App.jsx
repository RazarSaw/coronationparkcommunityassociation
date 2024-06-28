import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

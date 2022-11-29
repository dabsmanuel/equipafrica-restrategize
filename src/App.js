import Home from "./pages/Home"
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/footer/Footer"
import Apply from "./pages/Apply";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Apply/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

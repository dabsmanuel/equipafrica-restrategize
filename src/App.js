import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Speaker from "./Components/Speaker/Speaker";
import Contact from "./Components/Contact/Contact"
import Header from "./Components/Header/HeaderArea";
import Equip from "./Components/equip/Equip";


function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About />
      <Equip/>
      <Speaker />
      <Contact />
    </>
  );
}

export default App;

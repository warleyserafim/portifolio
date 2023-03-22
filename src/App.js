import Skills from "./components/Skills";
import Header from "./components/Header";
import About from "./components/About";
import Portifolio from "./components/Portifolio";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import SpeedDialButton from "./components/SpeedDialButtom";

function App() {
  return (
    <div className="App">
      <SpeedDialButton/>
      <Header />
      <About/>
      <Skills />
      <Portifolio/>
      <Footer/>
    </div>
  );
}

export default App;

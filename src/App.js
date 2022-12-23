import Skills from "./components/Skills";
import Header from "./components/Header";
import About from "./components/About";
import Portifolio from "./components/Portifolio";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <Skills />
      <Portifolio/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;

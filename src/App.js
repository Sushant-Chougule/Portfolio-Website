import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/intro";
import About from './components/About/skills';
import Projects from "./components/Projects/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Edu from "./components/Education/edu";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Projects />
        <Edu />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

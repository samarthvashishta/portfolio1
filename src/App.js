import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <ProjectCard/>
      <Footer/>
    </div>
  );
}

export default App;

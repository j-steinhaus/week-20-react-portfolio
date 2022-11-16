import About from './src/components/About/about';
import Contact from '.src/components/Contact/Contact';
import Header from '.src/components/header/Header';
import Portfolio from '.src/components/portfolio/Portfolio';
import Nav from '.src/components/nav/Nav';
import Skills from '.src/components/skills/Skills';


function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
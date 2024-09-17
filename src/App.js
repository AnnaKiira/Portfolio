import NavBar from './components/NavBar/NavBar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;

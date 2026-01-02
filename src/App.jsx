import Header from './components/Header';
import About from './components/About';
import Services from './components/services';

function App() {
  return (
    <div>
      <Header />
      <About/>
      <Services/>
      

      <section id="skills" className="h-screen bg-gray-600 flex items-center justify-center text-white">
        <h1>Skills Section</h1>
      </section>

      <section id="projects" className="h-screen bg-gray-500 flex items-center justify-center text-white">
        <h1>Projects Section</h1>
      </section>

      <section id="contact" className="h-screen bg-gray-400 flex items-center justify-center text-white">
        <h1>Contact Section</h1>
      </section>
    </div>
  );
}

export default App;
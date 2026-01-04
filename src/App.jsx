// src/App.jsx
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services'; // Ensure this matches your filename capitalization
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';       // <--- Import Contact
import BackToTop from './components/BackToTop';
function App() {
  return (
    <div>
      <Header />
      <About/>
      
      {/* Separation Divider */}
      {/* This container matches the bg-gray-800 theme so there are no white gaps */}
      <div className="bg-gray-800">
        {/* The border line is constrained to max-w-6xl to match your section content width */}
        <div className="mx-auto max-w-6xl border-t border-gray-600 opacity-50"></div>
      </div>

      <Services/>
      {/* Separation Divider */}
      {/* This container matches the bg-gray-800 theme so there are no white gaps */}
      <div className="bg-gray-800">
        {/* The border line is constrained to max-w-6xl to match your section content width */}
        <div className="mx-auto max-w-6xl border-t border-gray-600 opacity-50"></div>
      </div>
      <Skills/>
      <div className="bg-gray-800">
        {/* The border line is constrained to max-w-6xl to match your section content width */}
        <div className="mx-auto max-w-6xl border-t border-gray-600 opacity-50"></div>
      </div>
      <Projects/>
        <div className="bg-gray-800">
        {/* The border line is constrained to max-w-6xl to match your section content width */}
        <div className="mx-auto max-w-6xl border-t border-gray-600 opacity-50"></div>
      </div>
      <Contact/>
        <div className="bg-gray-800">
        {/* The border line is constrained to max-w-6xl to match your section content width */}
        <div className="mx-auto max-w-6xl border-t border-gray-600 opacity-50"></div>
      </div>
      <BackToTop/>
    </div>
  );
}

export default App;
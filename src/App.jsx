import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-bgDark min-h-screen text-white relative font-sans antialiased selection:bg-neonCyan/30 selection:text-neonCyan">
      
  
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        {/* Future Sections (Skills, Projects, Contact) yahan add honge */}
      </main>

    </div>
  );
}

export default App;
import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import BackgroundEffects from './components/BackgroundEffects';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CommunityContributions from './components/CommunityContributions';
import Certifications from './components/Certifications';
// import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-transparent text-gray-900 dark:text-white transition-colors duration-300 isolate">
        <BackgroundEffects />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <CommunityContributions />
          <Certifications />
          {/* <Strengths /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

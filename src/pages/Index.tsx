
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Index;

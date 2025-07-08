
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone ,Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "console.log('Hello, I'm Abhal Benny');";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 mb-8 font-mono text-left">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-slate-400 text-sm">terminal.js</span>
            </div>
            <div className="text-green-400 text-lg">
              {text}<span className="animate-pulse">|</span>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
          ABHAL BENNY
        </h1>
        
        <div className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
          <span className="text-teal-400">Software Engineer</span> & 
          <span className="text-blue-400"> Full-Stack Developer</span>
        </div>

        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate web developer who loves innovation and exploring new technologies. 
          Creating products that people around the world can use and enjoy.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/Achuabhal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:border-blue-500/50"
          >
            <Github className="w-6 h-6 text-slate-300 hover:text-blue-400" />
          </a>
          <a 
            href="mailto:abhalbenny3@gmail.com"
            className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:border-green-500/50"
          >
            <Mail className="w-6 h-6 text-slate-300 hover:text-green-400" />
          </a>
          <a 
            href="tel:+919961845429"
            className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:border-purple-500/50"
          >
            <Phone className="w-6 h-6 text-slate-300 hover:text-purple-400" />
          </a>
          <a 
  href="https://drive.google.com/file/d/1khF46N8mD9z9KXFwaBv3eDsngJiJrAfz/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
  className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:border-purple-500/50"
>
  <Download className="w-6 h-6 text-slate-300 hover:text-purple-400" />
</a>

        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

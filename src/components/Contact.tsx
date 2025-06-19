
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            I'm always excited about new opportunities and interesting projects. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:abhalbenny3@gmail.com"
                className="flex items-center group p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:border-teal-500/30"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-slate-400 text-sm">abhalbenny3@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+919061646498"
                className="flex items-center group p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:border-green-500/30"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-slate-400 text-sm">+91 9061646498</p>
                </div>
              </a>

              <div className="flex items-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-400 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-slate-400 text-sm">Bengaluru, Karnataka 560083</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a 
                href="https://github.com/Achuabhal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:border-blue-500/50"
              >
                <Github className="w-6 h-6 text-slate-300 hover:text-blue-400" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhal-benny-b85373255/"
                className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:border-blue-500/50"
              >
                <Linkedin className="w-6 h-6 text-slate-300 hover:text-blue-400" />
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group hover:scale-[1.02]"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-700/50">
          <p className="text-slate-400">
            © 2024 Abhal Benny. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

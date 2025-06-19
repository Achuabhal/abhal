
import { Code, Database, Globe, Smartphone, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Java", "Python", "C++", "JavaScript", "HTML/CSS"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Globe,
      title: "Frameworks",
      skills: ["MERN Stack", "Bootstrap", "React", "Express.js", "Truffle"],
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Database,
      title: "Developer Tools",
      skills: ["Git", "Docker", "Azure", "VS Code", "Visual Studio"],
      color: "from-purple-400 to-violet-400"
    },
    {
      icon: Cloud,
      title: "Others",
      skills: ["Data Structure", "Algorithms", "Operating Systems", "Object-Oriented Programming", "Computer Networks"],
      color: "from-orange-400 to-red-400"
    }
  ];

  const certifications = [
    "Microsoft Certified: Azure Fundamentals",
    "BCA specialized in Artificial Intelligence (AI) - Nov 2021 - June 2025"
  ];

  const achievements = [
    "Received the Rajya Puraskar in 2020",
  ];

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="text-sm text-slate-400 bg-slate-700/30 px-3 py-1 rounded-md hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="text-slate-400 text-sm leading-relaxed">
                  {cert}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="text-slate-400 text-sm leading-relaxed">
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

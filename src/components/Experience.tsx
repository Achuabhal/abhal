
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Front-End Development - Part Time",
      company: "Datzon Technologies",
      location: "Remote",
      period: "Feb 2025 - present",
      description: "Led a team in developing ReactJS applications using Bootstrap, efficiently assigning tasks and ensuring project milestones were met.",
      highlights: [
        "Guided team members in troubleshooting and resolving bugs",
        "Significantly improved code quality and reduced post-release issues",
        "Collaborated with cross-functional stakeholders to streamline workflows"
      ]
    },
    {
      title: "Front-End Development - Intern",
      company: "Duzo kriton PVT LTD",
      location: "Remote", 
      period: "Nov 2024 - Jan 2025",
      description: "Converted Figma designs into a responsive React application using TypeScript, ensuring pixel-perfect UI fidelity.",
      highlights: [
        "Built modular and reusable React components",
        "Maintained design consistency across devices",
        "Implemented responsive design patterns for mobile, tablet, and desktop"
      ]
    }
  ];

  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:border-blue-500/30 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-2">
                    <div className="flex items-center text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-slate-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

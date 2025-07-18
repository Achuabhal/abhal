
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Timetable Scheduling Web App for College",
      tech: ["React", "Firebase"],
      description: "Developed an intelligent algorithm that randomly assigns teachers to time slots without conflicts, streamlining college timetable management and increasing scheduling efficiency by 40%.",
      features: [
        "Intelligent scheduling algorithm",
        "Conflict-free time slot assignment",
        "Real-time updates",
        "40% efficiency improvement"
      ],
      githubUrl: "https://github.com/Achuabhal/it-fest-pic.git",
      liveUrl: "https://chipper-dusk-8b959c.netlify.app/"
    },
    {
      title: "React-Based Quiz App for College Tech Fest",
      tech: ["React", "Framer Motion", "Particles.js", "Material-UI"],
      description: "Created an interactive quiz app with dynamic sounds and a countdown timer with engaging animations and user-friendly interface.",
      features: [
        "Real-time messaging",
        "Dynamic animations with Framer Motion",
        "Interactive particle effects",
        "Material-UI components"
      ],
      githubUrl: "https://github.com/Achuabhal/it-fest-pic.git",
      liveUrl: "https://caias-itfeat-5th-rounds.netlify.app/"
    },
    {
      title: "E-commerce Application with Blockchain",
      tech: ["React", "Express.js", "Node.js", "MongoDB", "Truffle", "Solidity", "Ganache"],
      description: "Built a secure e-commerce platform with blockchain integration for transparent and secure transactions using smart contracts.",
      features: [
        "Blockchain-powered transactions",
        "Smart contract integration",
        "Secure payment processing",
        "Full-stack implementation"
      ],
      githubUrl: "https://github.com/Achuabhal/ecoemrseblockchain.git",
      liveUrl: "https://github.com/Achuabhal/ecoemrseblockchain.git"
    },
    {
      title: "Gym Management Website",
      tech: ["React", "Framer Motion", "Google Calendar", "MongoDB"],
      description: "Developed a gym management web app with chatbot and time slot booking functionality for streamlined gym operations.",
      features: [
        "Integrated chatbot assistance",
        "Google Calendar integration",
        "Time slot booking system",
        "Member management"
      ],
      githubUrl: "https://github.com/itcodehery/appwrite-project.git",
      liveUrl: "https://github.com/itcodehery/appwrite-project.git"
    },
    {
  title: "Voice-to-Text Transcription Web App",
  tech: ["React", "Vite", "AssemblyAI", "Google Generative AI", "Web Speech API", "Axios"],
  description: "Built a modern web app that converts speech to text using uploaded audio or live voice, integrating AssemblyAI and Google Gemini for accurate transcription and enhanced processing.",
  features: [
    "Audio file upload and transcription",
    "Live voice-to-text using browser's Speech API",
    "AI-enhanced transcript processing with Google Gemini",
    "Markdown rendering for formatted text output",
    "Responsive UI with smooth UX"
  ],
  githubUrl: "https://github.com/Achuabhal/voice.git",
  liveUrl: "https://lucent-melomakarona-1c14a8.netlify.app/"
},
{
  title: "Emotion-Based Music Recommendation System",
  tech: ["React", "JavaScript", "face-api.js", "Tiny Face Detector Model"],
  description: "Created an AI-powered web app that detects user emotions through facial expressions and recommends music playlists accordingly, enhancing personalized music experiences.",
  features: [
    "Real-time facial emotion detection using webcam",

    "Emotion classification (e.g., happy, sad, angry, surprised)",
    "Dynamic music recommendations based on detected mood",
    "Interactive UI for better user engagement"
  ],
  githubUrl: "https://github.com/Achuabhal/edison.git",
  liveUrl: "https://idyllic-sorbet-500bd8.netlify.app/"
},
{
  title: "Interactive Digital Flipbook",
  tech: ["React", "JavaScript", "CSS3", "HTML5"],
  description: "Developed a responsive and feature-rich digital flipbook as a freelancing project to offer an engaging and intuitive document viewing experience, simulating the feel of a physical book.",
  features: [
    "Realistic page-turning animations with synchronized audio for an immersive reading experience",
    "Dynamic user controls including zoom, fullscreen mode, and page navigation",
    "Fully responsive layout compatible with all devices and screen sizes",
    "Smooth performance and accessible design for broader audience reach",
    "Enhanced user interaction compared to traditional static PDF viewers"
  ],
  githubUrl: "https://github.com/Achuabhal/JACOBITE-SYRIAN-ORTHODOX-CHURCH.git",
  liveUrl: "https://jacobite-syrian-orthodox-church.vercel.app/"
},
{
  title: "Real-Time Social Messaging App",
  tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
  description: "Built a full-stack social messaging application that enables real-time chat with features like friend requests, group messaging, and admin moderation. Developed as a major academic project to demonstrate MERN stack expertise.",
  features: [
    "User authentication using JWT for secure login and signup",
    "Send, accept, and reject friend requests with seamless UI integration",
    "One-to-one and group chat with real-time messaging capabilities",
    "Admin panel to manage users, monitor content, and handle reports",
    "User reporting system to flag inappropriate messages or behavior",
    "Responsive and modern UI using React, Tailwind CSS, and Vite"
  ],
  githubUrl: "https://github.com/Achuabhal/ECSFINAL-main.git",
  liveUrl: "https://github.com/Achuabhal/ECSFINAL-main.git" // Add live URL if hosted
},






  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:border-purple-500/30 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl}
                      className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-all duration-200 hover:scale-110"
                    >
                      <Github className="w-4 h-4 text-slate-400 hover:text-white" />
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-all duration-200 hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-400 hover:text-white" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-500">
                      <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                      {feature}
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

export default Projects;

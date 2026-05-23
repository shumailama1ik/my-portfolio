import React from 'react';

const Projects = () => {
  // ================= SMART LOCAL DATA ARRAY =================
  // Future mein naya project add karne ke liye bas is array ke andar ek naya object {} add kar dena.
  const projectsData = [
    {
      id: 1,
      title: "News Content Management System",
      description: "A secure, production-ready full-stack News CMS featuring robust admin authentication, seamless image uploads, dynamic article categorization, and high-performance pagination.",
      techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "JWT", "Bcrypt", "Multer"],
      image: "/projects/news-cms.png", // Aap apni images public/projects folder me rkh sakti hain
      liveLink: "#", // Apni live website ka URL yahan dalein
      githubLink: "#", // Apne GitHub repo ka URL yahan dalein
      themeGlow: "hover:border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.05)] hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]",
      badgeStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
    },
    {
      id: 2,
      title: "MERN Stack Todo Application",
      description: "A complete full-stack CRUD application implementing secure RESTful API endpoints, persistent cloud storage data modeling with MongoDB, and a responsive client-side interface.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
      image: "/projects/mern-todo.png",
      liveLink: "#",
      githubLink: "#",
      themeGlow: "hover:border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]",
      badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    },
    {
      id: 3,
      title: "Real-Time Weather Platform",
      description: "An intuitive weather tracking app utilizing Axios to stream data from OpenWeatherMap API. Engineered with granular error handling, state management, and fluid animations.",
      techStack: ["React.js", "REST API", "Axios", "CSS Animations"],
      image: "/projects/weather-app.png",
      liveLink: "https://shumailama1ik.github.io/weather-app/",
      githubLink: "https://github.com/shumailama1ik/weather-app",
      themeGlow: "hover:border-blue-400 shadow-[0_0_30px_rgba(56,189,248,0.05)] hover:shadow-[0_0_50px_rgba(56,189,248,0.25)]",
      badgeStyle: "bg-blue-400/10 border-blue-400/20 text-blue-400"
    },
    {
      id: 4,
      title: "Interactive Online Quiz Engine",
      description: "A fast, client-side quiz web app featuring dynamic question rendering engine, instant score tracking algorithms, and interactive feedback mechanisms via advanced DOM manipulation.",
      techStack: ["JavaScript", "HTML5", "CSS3", "DOM Logic"],
      image: "/projects/quiz-app.png",
      liveLink: "https://shumailama1ik.github.io/online-quiz-app/",
      themeGlow: "hover:border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.05)] hover:shadow-[0_0_50px_rgba(234,179,8,0.25)]",
      badgeStyle: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
    },
    {
      id: 5,
      title: "Responsive Restaurant Platform",
      description: "A premium mobile-first commercial showcase website engineered with pixel-perfect modern CSS grid configurations, flexible layouts, and verified cross-browser compatibility.",
      techStack: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
      image: "/projects/restaurant-site.png",
      liveLink: "https://shumailama1ik.github.io/restaurant-website/",
      githubLink: "#",
      themeGlow: "hover:border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)]",
      badgeStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen py-24 bg-[#05070c] overflow-hidden border-t border-white/5">
      
      {/* ================= CYBER BACKGROUND GLOWS ================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-20">
        <div className="absolute top-1/3 right-[-10%] w-96 h-96 bg-purple-600/10 rounded-full filter blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full filter blur-[150px] animate-pulse [animation-duration:8s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            &lt; My Creations /&gt;
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">Projects</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto font-mono tracking-wide">
            A curated showcase of comprehensive full-stack architectures and functional user interfaces.
          </p>
        </div>

        {/* 3-Column Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className={`group flex flex-col bg-[#0b0f19]/90 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-xl ${project.themeGlow}`}
            >
              
              {/* Image Container with Dynamic Hover Zoom & Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-950 border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  // Fallback image source agar screenshot path available na ho:
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'; }}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex flex-col flex-1 space-y-4">
                
                {/* Project Title */}
                <h3 className="text-xl font-extrabold text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm font-sans leading-relaxed flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Micro tech tags container */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, tIndex) => (
                    <span 
                      key={tIndex} 
                      className={`px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider rounded-md border ${project.badgeStyle}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Links Footer */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs font-bold font-mono tracking-wider bg-white/5 border border-white/10 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:text-black hover:border-transparent transition-all duration-300"
                  >
                    <span>⚡ LIVE DEMO</span>
                  </a>
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
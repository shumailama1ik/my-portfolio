import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Architecture",
      subtitle: "UI & Client Side",
      // Cyan Glow Theme
      borderColor: "border-neonCyan/40 shadow-[0_0_40px_rgba(0,242,254,0.15)] hover:shadow-[0_0_60px_rgba(0,242,254,0.35)] hover:border-neonCyan",
      lineColor: "from-neonCyan via-cyan-400 to-transparent",
      boxBg: "bg-gradient-to-br from-[#0c1a24] via-[#0b0f19] to-[#08121a]",
      badgeStyle: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20",
      bulletColor: "text-neonCyan drop-shadow-[0_0_8px_rgba(0,242,254,0.8)]",
      headingGlow: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-200 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]",
      skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js Ecosystem", "Responsive Layouts"]
    },
    {
      title: "Backend Engineering",
      subtitle: "Server & Logic Control",
      // Purple/Pink Glow Theme
      borderColor: "border-neonPurple/40 shadow-[0_0_40px_rgba(155,81,224,0.15)] hover:shadow-[0_0_60px_rgba(155,81,224,0.35)] hover:border-neonPurple",
      lineColor: "from-neonPurple via-fuchsia-500 to-transparent",
      boxBg: "bg-gradient-to-br from-[#18112c] via-[#0b0f19] to-[#120a21]",
      badgeStyle: "bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20",
      bulletColor: "text-neonPurple drop-shadow-[0_0_8px_rgba(155,81,224,0.8)]",
      headingGlow: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]",
      skills: ["Node.js Server", "Express.js Framework", "REST APIs Design", "MVC Pattern & EJS"]
    },
    {
      title: "Database Management",
      subtitle: "Data Persistence",
      // Emerald Green Theme
      borderColor: "border-green-500/40 shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:shadow-[0_0_60px_rgba(34,197,94,0.35)] hover:border-green-400",
      lineColor: "from-green-500 via-emerald-400 to-transparent",
      boxBg: "bg-gradient-to-br from-[#0a1f14] via-[#0b0f19] to-[#05140c]",
      badgeStyle: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20",
      bulletColor: "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]",
      headingGlow: "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]",
      skills: ["MongoDB Database", "Mongoose ODM", "Data Modeling", "Secure Queries"]
    },
    {
      title: "AI Tools & Workflows",
      subtitle: "Next-Gen Dev",
      // Amber/Orange Gold Theme
      borderColor: "border-yellow-500/40 shadow-[0_0_40px_rgba(234,179,8,0.15)] hover:shadow-[0_0_60px_rgba(234,179,8,0.35)] hover:border-yellow-400",
      lineColor: "from-yellow-500 via-orange-400 to-transparent",
      boxBg: "bg-gradient-to-br from-[#241a06] via-[#0b0f19] to-[#140f03]",
      badgeStyle: "bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20",
      bulletColor: "text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]",
      headingGlow: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]",
      skills: ["GitHub Copilot / Cursor AI ", "Windsurf IDE", "Prompt Engineering", "AI Optimization & Git"]
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-24 flex items-center justify-center bg-[#05070c] overflow-hidden border-t border-white/5">
      
      {/* ================= BACKGROUND HIGH-LIGHTED GLOWS & LOGOS ================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-25">
        
        {/* Dynamic Colorful Ambient Radials */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px] animate-pulse [animation-duration:6s]"></div>

        {/* Giant Floating React Logo */}
        <div className="absolute top-10 left-[5%] animate-pulse [animation-duration:4s]">
          <svg className="w-36 h-36 text-cyan-400/40 animate-spin [animation-duration:25s]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="12" r="2"/>
            <path d="M12 5C5.9 5 4 12 4 12s1.9 7 8 7 8-7 8-7-1.9-7-8-7z" transform="rotate(30 12 12)"/>
            <path d="M12 5C5.9 5 4 12 4 12s1.9 7 8 7 8-7 8-7-1.9-7-8-7z" transform="rotate(90 12 12)"/>
            <path d="M12 5C5.9 5 4 12 4 12s1.9 7 8 7 8-7 8-7-1.9-7-8-7z" transform="rotate(150 12 12)"/>
          </svg>
        </div>

        {/* Giant Floating JavaScript Logo */}
        <div className="absolute top-24 right-[8%] font-black text-yellow-400/30 text-9xl tracking-tighter border border-yellow-400/20 p-4 rounded-xl rotate-12 animate-bounce [animation-duration:7s]">
          JS
        </div>

        {/* Giant Floating Node Text */}
        <div className="absolute top-1/2 left-[2%] -translate-y-1/2 text-green-500/30 font-mono text-7xl font-extrabold tracking-widest uppercase -rotate-12 animate-pulse">
          NODE
        </div>

        {/* Giant Floating Git Icon */}
        <div className="absolute top-1/3 right-[3%] animate-pulse [animation-duration:5s] rotate-45">
          <svg className="w-28 h-28 text-orange-500/30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.2 11.2L12.8 1.5a1.6 1.6 0 00-2.2 0L1.2 10.4a1.6 1.6 0 000 2.2l10.4 10.5a1.6 1.6 0 002.2 0l10.4-10.5a1.6 1.6 0 000-2.4zM12 15.7V18h-1.3v-2.3a2 2 0 010-3.6V8.4h1.3v3.7a2 2 0 010 3.6z"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full space-y-20">
        
        {/* Main Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            &lt; Tech Stack /&gt;
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">Skills</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto font-mono tracking-wide">
            Executing high-performance architectures using bleeding-edge engineering stacks.
          </p>
        </div>

        {/* 4 Inline Vertical Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {skillCategories.map((box, index) => (
            <div key={index} className="flex flex-col space-y-5 h-full">
              
              {/* Box Title with Dynamic Gradient Drop Shadows */}
              <div className="px-1 space-y-1">
                <h3 className={`text-xl sm:text-2xl font-black tracking-wide uppercase ${box.headingGlow}`}>
                  {box.title}
                </h3>
                <p className="text-[11px] font-mono text-gray-400 uppercase tracking-widest font-semibold">
                  {box.subtitle}
                </p>
              </div>

              {/* Colorful Gradient Dynamic Card */}
              <div className={`group relative flex-1 ${box.boxBg} border rounded-2xl p-5 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-xl ${box.borderColor}`}>
                
                {/* Laser Top Line Indicator */}
                <div className={`absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r ${box.lineColor}`}></div>
                
                {/* High-Fidelity Colorful Skills List */}
                <div className="space-y-3.5 h-full flex flex-col justify-start">
                  {box.skills.map((skill, sIndex) => (
                    <div 
                      key={sIndex}
                      className={`flex flex-col p-4 rounded-xl border transition-all duration-300 ${box.badgeStyle} shadow-[inset_0_1px_20px_rgba(255,255,255,0.02)]`}
                    >
                      
                      
                      {/* BOLD LARGE FONT SKILL TEXT */}
                      <span className="text-white text-base sm:text-lg font-extrabold tracking-wide font-sans leading-tight group-hover:text-white">
                        {skill}
                      </span>
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

export default Skills;
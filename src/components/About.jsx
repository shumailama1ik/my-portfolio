import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-24 flex items-center justify-center bg-bgDark overflow-hidden border-t border-white/5">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neonCyan/5 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Modern Interactive Tech Illustration */}
        <div className="w-full lg:w-5/12 flex justify-center order-2 lg:order-1 relative group">
          
          {/* Ambient Outer Glow Behind the Illustration */}
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-neonCyan to-neonPurple opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>
          
          {/* The Tech Illustration: A Cyber IDE Terminal Window */}
          <div className="relative w-full max-w-sm aspect-[4/3] sm:aspect-square bg-cardDark/60 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-2xl overflow-hidden font-mono text-xs text-gray-400 select-none transform hover:scale-[1.02] transition-transform duration-300 animate-float">
            
            {/* Top Window Control Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-[10px] text-gray-500 tracking-wider">shumaila_malik.json</span>
            </div>

            {/* Glowing Tech Code Lines inside Illustration */}
            <div className="space-y-3 sm:space-y-4 text-xs">
              <p className="text-gray-500">{"{"}</p>
              <p className="pl-4"><span className="text-neonPurple">"role"</span>: <span className="text-neonCyan">"Full-Stack MERN Developer"</span>,</p>
              <p className="pl-4"><span className="text-neonPurple">"location"</span>: <span className="text-white">"Faisalabad, PK"</span>,</p>
              <p className="pl-4"><span className="text-neonPurple">"stack"</span>: <span className="text-gray-300">["MongoDB", "Express", "React", "Node"]</span>,</p>
              <p className="pl-4"><span className="text-neonPurple">"engine"</span>: <span className="text-yellow-400">"V8_Active"</span>,</p>
              
              {/* Fake UI Graph Bars for Visual Tech look */}
              <div className="pl-4 pt-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] text-gray-500 w-12">Frontend</span>
                  <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-neonCyan shadow-[0_0_8px_#00f2fe]"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] text-gray-500 w-12">Backend</span>
                  <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-neonPurple shadow-[0_0_8px_#9b51e0]"></div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-500">{"}"}</p>
            </div>

            {/* Matrix decorative element at the bottom */}
            <div className="absolute bottom-3 right-4 text-[9px] text-neonCyan/30 tracking-widest uppercase">
              System_Status: 200_OK
            </div>
          </div>
        </div>

        {/* Right Side: High-Focus Content Story */}
        <div className="w-full lg:w-7/12 order-1 lg:order-2 text-center lg:text-left space-y-6">
          
          {/* Section Tag */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-neonCyan/10 border border-neonCyan/30 text-neonCyan text-xs font-mono uppercase tracking-widest">
            01 . About My Journey
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Turning Curiosity Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-white to-neonPurple drop-shadow-[0_0_15px_rgba(0,242,254,0.3)]">
              Web Solutions
            </span>
          </h2>

          {/* Story Content */}
          <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            <p className="text-gray-200 text-base sm:text-lg font-medium">
              Hi, I'm <span className="text-neonCyan font-bold">Shumaila Malik</span>, a Computer Science student and aspiring Full-Stack Web Developer from Faisalabad, Pakistan.
            </p>

            <p>
              I've always been drawn to the tech world so when the opportunity came, I didn't think twice. I completed an intensive MERN Stack course under <span className="text-white font-semibold">NAVTTC</span>, where I gained hands-on experience building real projects from scratch using <span className="text-neonPurple font-mono text-xs sm:text-sm">MongoDB, Express.js, React.js, and Node.js</span>.
            </p>

            <p>
              I'm a self-driven beginner who loves turning ideas into working applications. From building robust REST APIs to crafting responsive frontends — every project has been a progressive step forward in my engineering journey.
            </p>

            <p>
              Right now, I'm actively looking for opportunities to work with a team or take on client projects because I believe real growth happens when you collaborate, get feedback, and solve real-world problems together.
            </p>
            
            <p className="text-neonCyan text-sm font-semibold tracking-wide pt-2 flex items-center justify-center lg:justify-start">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping mr-2.5"></span>
              Let's build something great together!
            </p>
          </div>

          {/* Interactive Download CV Button */}
          <div className="pt-4">
            <a 
              href="/my-cv.pdf"
              download="Shumaila_Malik_CV.pdf"
              className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full border border-neonCyan text-neonCyan font-bold tracking-wide hover:bg-neonCyan hover:text-bgDark shadow-[0_0_15px_rgba(0,242,254,0.1)] hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <span>Download My CV</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
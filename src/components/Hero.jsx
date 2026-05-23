import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* ================= PREMIUM TECH DESIGN BACKGROUND ================= */}
      {/* Subtle Matrix/Cyber Grid Layer */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
             backgroundSize: '24px 24px'
           }}>
      </div>
      
      {/* Immersive High-Density Glow Flares */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 to-teal-500/0 rounded-full filter blur-[120px] pointer-events-none animate-pulse [animation-duration:8s]"></div>
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-bl from-purple-600/15 to-pink-500/0 rounded-full filter blur-[140px] pointer-events-none animate-pulse [animation-duration:12s]"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Network Background Fallback Component Wrapper */}
      <div className="network-bg absolute inset-0 opacity-40 pointer-events-none"></div>
      
      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full py-12">
        
        {/* Left Side: Content & Intro */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 w-fit mx-auto md:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <h3 className="text-gray-400 font-mono font-medium tracking-widest text-xs uppercase">
              Welcome to my cyberspace
            </h3>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Shumaila</span>
            <br />
            {/* Re-designed Multi-Tone Gradient linked with Skills/About colors */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)] block mt-2">
              Building Scalable MERN Stack Applications.
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed font-sans">
            Expertise in MongoDB, Express.js, React, and Node.js. Crafting clean code and memorable user experiences.
          </p>

          {/* Call to Actions Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-extrabold tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full border border-gray-700 text-gray-200 font-semibold tracking-wide hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1 bg-white/5 backdrop-blur-md shadow-inner"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Floating Avatar & Tech Circles */}
        <div className="relative flex items-center justify-center lg:justify-end animate-float">
          
          {/* Main Outer Tech Ring */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-dashed border-gray-800 flex items-center justify-center p-4">
            
            {/* Profile Avatar Frame */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-900 to-black overflow-hidden border-2 border-purple-500/50 relative flex items-center justify-center group shadow-[0_0_50px_rgba(168,85,247,0.25)]">
              
              <img 
                src="/profile.jpeg" 
                alt="Shumaila Profile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Glowing Cyber Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-cyan-500/10 opacity-40 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Floating MERN Badges */}
            {/* MongoDB Badge */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-[#090d16] border border-green-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.2)] transform -rotate-12 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-green-500 text-xl font-bold">M</span>
            </div>

            {/* Express Badge */}
            <div className="absolute bottom-6 left-0 w-12 h-12 bg-[#090d16] border border-gray-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white text-xs font-mono font-bold">ex</span>
            </div>

            {/* React Badge */}
            <div className="absolute top-1/2 -right-6 w-14 h-14 bg-[#090d16] border border-cyan-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-cyan-400 text-2xl animate-spin" style={{ animationDuration: '8s' }}>⚛️</span>
            </div>

            {/* Node.js Badge */}
            <div className="absolute bottom-2 right-12 w-12 h-12 bg-[#090d16] border border-green-400 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.2)] hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-green-400 text-xl">🟢</span>
            </div>

          </div>

          {/* Fake Code IDE Floating Box */}
          <div className="absolute -top-4 right-0 bg-[#090d16]/90 backdrop-blur-md p-3 rounded-lg text-left font-mono text-[10px] sm:text-xs text-gray-400 border border-white/10 hidden sm:block max-w-[200px] shadow-2xl">
            <div className="flex space-x-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <p className="text-cyan-400">const app = express();</p>
            <p className="text-purple-400">app.use(json());</p>
          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <span className="text-[10px] tracking-widest uppercase text-gray-400 font-mono">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-gray-500 rounded-full p-1 flex justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
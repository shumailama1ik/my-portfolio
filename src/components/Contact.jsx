import React, { useState } from 'react';

const Contact = () => {
  const FORMSPREE_URL = "https://formspree.io/f/mzdwvpja"; 

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Transmission Successful! Message sent into cyberspace. 🚀");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Connection failed. Check your cyberspace network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 bg-[#060913] overflow-hidden border-t border-white/10 flex items-center justify-center">
      
      {/* ================= HEAVY INDUSTRIAL AMBIENT LIGHTS ================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-[-5%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full filter blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full filter blur-[140px] animate-pulse [animation-duration:7s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            &lt; Secure Connection /&gt;
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
            Let's Start A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]">Project</span>
          </h2>
        </div>

        {/* Two-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ================= LEFT SIDE: PROMINENT SOCIAL CHANNELS (5 Columns) ================= */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            
            <div className="px-1 mb-2">
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">Digital Coordinates</h3>
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1">Status: Active & Connected</p>
            </div>

            {/* LinkedIn Card - Highly Prominent with Official Logo Brand Color */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group relative bg-gradient-to-r from-[#0d1e33] to-[#0b1424] border-2 border-[#0077b5]/60 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-[0_0_25px_rgba(0,119,181,0.25)] hover:shadow-[0_0_40px_rgba(0,119,181,0.5)] hover:border-[#0077b5]">
              <div className="flex items-center space-x-5">
                <div className="w-14 h-14 rounded-xl bg-[#0077b5]/20 border border-[#0077b5]/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,119,181,0.3)]">
                  <svg className="w-7 h-7 fill-current text-[#0077b5] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">Professional Hub</p>
                  <p className="text-white text-base sm:text-lg font-extrabold tracking-wide mt-0.5">linkedin.com/in/shumaila</p>
                </div>
              </div>
            </a>

            {/* Email Card - Highly Prominent with Neon Cyan Border Flare */}
            <a href="mailto:shumailamalik466@gmail.com" className="group relative bg-gradient-to-r from-[#0c232e] to-[#08131d] border-2 border-cyan-500/60 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.45)] hover:border-cyan-400">
              <div className="flex items-center space-x-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-2xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  ✉️
                </div>
                <div>
                  <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">Direct Transmission</p>
                  <p className="text-white text-base sm:text-lg font-extrabold tracking-wide mt-0.5">shumailamalik466@gmail.com</p>
                </div>
              </div>
            </a>



          </div>

          {/* ================= RIGHT SIDE: HIGH-CONTRAST BIG FONT CONTACT FORM (7 Columns) ================= */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#0f1526] to-[#0b0f19] border-2 border-white/10 rounded-3xl p-8 relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            {/* Top Laser Line Indicator */}
            <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

            <form onSubmit={handleSubmit} className="space-y-7">
              
              {/* Input Name */}
              <div className="space-y-2.5 flex flex-col">
                <label className="text-sm font-mono uppercase text-gray-300 font-bold tracking-wider flex items-center space-x-1.5">
                  <span className="text-cyan-400 font-black">&gt;</span> <span>Identify yourself...</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-[#05070c] border-2 border-white/15 rounded-xl px-5 py-4 text-white text-base font-medium placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 shadow-inner transition-all duration-300"
                />
              </div>

              {/* Input Email */}
              <div className="space-y-2.5 flex flex-col">
                <label className="text-sm font-mono uppercase text-gray-300 font-bold tracking-wider flex items-center space-x-1.5">
                  <span className="text-purple-400 font-black">&gt;</span> <span>Your return coordinate...</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-[#05070c] border-2 border-white/15 rounded-xl px-5 py-4 text-white text-base font-medium placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 shadow-inner transition-all duration-300"
                />
              </div>

              {/* Input Message - BADA TEXT & LARGE AREA */}
              <div className="space-y-2.5 flex flex-col">
                <label className="text-sm font-mono uppercase text-gray-300 font-bold tracking-wider flex items-center space-x-1.5">
                  <span className="text-pink-400 font-black">&gt;</span> <span>Drop your data payload...</span>
                </label>
                <textarea 
                  name="message"
                  required
                  rows="5" // Area expanded from 4 to 5 lines
                  placeholder="Describe your project guidelines or collaboration parameters..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-[#05070c] border-2 border-white/15 rounded-xl px-5 py-5 text-white text-base font-medium placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 shadow-inner transition-all duration-300 resize-none leading-relaxed"
                />
              </div>

              {/* Heavy Transmit Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white font-black tracking-widest text-xs uppercase shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:from-cyan-400 hover:to-purple-500 transition-all duration-500 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "🛰️ TRANSMITTING..." : "📡 TRANSMIT MESSAGE"}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
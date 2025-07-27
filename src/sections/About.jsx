import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('pranavramwork@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 relative overflow-hidden" id="about">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-10">
        {/* Grid Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent animate-pulse delay-2000"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse delay-1500"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-pulse delay-2500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full relative z-10">
        
        {/* Introduction Card */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container group relative bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative lines */}
            <div className="absolute top-4 left-4 w-8 h-px bg-blue-500 animate-pulse"></div>
            <div className="absolute top-4 left-4 w-px h-8 bg-blue-500 animate-pulse delay-200"></div>
            <div className="absolute bottom-4 right-4 w-8 h-px bg-blue-500 animate-pulse delay-400"></div>
            <div className="absolute bottom-4 right-4 w-px h-8 bg-blue-500 animate-pulse delay-600"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img src="assets/grid1.jpg" alt="Pranav Ram PS" className="relative w-full sm:h-[276px] h-fit object-contain rounded-lg border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500 hover:scale-105" />
              </div>

              <div className="flex-grow flex flex-col justify-center">
                <p className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                  Hi, I'm Pranav Ram PS
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  I'm a B.S Biological Sciences student at IIT Madras with a passion for Full-Stack Development. I've led multiple teams, built scalable web platforms, and have expertise in both frontend and backend technologies with ML and blockchain experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container group relative bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-green-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-teal-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Circuit-like decorative lines */}
            <div className="absolute top-4 left-4 w-12 h-px bg-green-500 animate-pulse"></div>
            <div className="absolute top-4 left-4 w-px h-12 bg-green-500 animate-pulse delay-200"></div>
            <div className="absolute bottom-4 right-4 w-12 h-px bg-green-500 animate-pulse delay-400"></div>
            <div className="absolute bottom-4 right-4 w-px h-12 bg-green-500 animate-pulse delay-600"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img src="assets/grid2.avif" alt="Tech Stack" className="relative w-full sm:h-[276px] h-fit object-contain rounded-lg filter group-hover:brightness-110 transition-all duration-500" />
              </div>

              <div className="flex-grow flex flex-col justify-center">
                <p className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-500">
                  Tech Stack
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  I specialize in Python, JavaScript, React.js, Node.js, Django, and emerging technologies like Blockchain (Solidity) and ML (TensorFlow, Keras). I build robust full-stack applications with modern frameworks and tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Globe/Location Card */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container group relative bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Map-like connection lines */}
            <div className="absolute top-1/4 left-1/4 w-8 h-px bg-cyan-500 animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-px h-8 bg-cyan-500 animate-pulse delay-200"></div>
            <div className="absolute top-3/4 right-1/4 w-8 h-px bg-cyan-500 animate-pulse delay-400"></div>
            <div className="absolute top-3/4 right-1/4 w-px h-8 bg-cyan-500 animate-pulse delay-600"></div>
            <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
            <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-ping delay-1000"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center mb-6 bg-gradient-to-b from-gray-800/50 to-black/50 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-500">
                <Globe
                  height={280}
                  width={280}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: 13.0827, lng: 80.2707, text: 'Chennai, India', color: 'white', size: 15 }]}
                />
              </div>
              
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
                  Available for Remote Work & Collaboration
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  I'm based in Chennai, India and currently studying at IIT Madras. Open to remote internships, freelance projects, and collaborative opportunities worldwide.
                </p>
                <Button name="Contact Me" isBeam containerClass="w-full mt-4 hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Leadership/Passion Card */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container group relative bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-orange-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Code-like connection patterns */}
            <div className="absolute top-2 left-2 w-6 h-px bg-orange-500 animate-pulse"></div>
            <div className="absolute top-2 left-2 w-px h-6 bg-orange-500 animate-pulse delay-100"></div>
            <div className="absolute top-2 right-2 w-6 h-px bg-orange-500 animate-pulse delay-200"></div>
            <div className="absolute top-2 right-2 w-px h-6 bg-orange-500 animate-pulse delay-300"></div>
            <div className="absolute bottom-2 left-2 w-6 h-px bg-orange-500 animate-pulse delay-400"></div>
            <div className="absolute bottom-2 left-2 w-px h-6 bg-orange-500 animate-pulse delay-500"></div>
            <div className="absolute bottom-2 right-2 w-6 h-px bg-orange-500 animate-pulse delay-600"></div>
            <div className="absolute bottom-2 right-2 w-px h-6 bg-orange-500 animate-pulse delay-700"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img src="assets/grid6.png" alt="Leadership" className="relative w-full sm:h-[266px] h-fit object-contain rounded-lg filter group-hover:brightness-110 transition-all duration-500" />
              </div>

              <div className="flex-grow flex flex-col justify-center">
                <p className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-500">
                  Leadership & Innovation
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  As iGEM Head and former Shaastra Coordinator, I've led development teams, built scalable platforms, and contributed to cutting-edge projects in biotech, blockchain, and AI. I thrive on solving complex problems through code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container group relative bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-pink-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Network-like connections */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 border border-pink-500 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-16 h-px bg-pink-500 rotate-45 animate-pulse delay-500"></div>
            <div className="absolute top-3/4 right-1/4 w-16 h-px bg-pink-500 -rotate-45 animate-pulse delay-1000"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                  src="assets/grid4.png"
                  alt="Contact"
                  className="relative w-full md:h-[126px] sm:h-[200px] h-fit object-cover sm:object-top rounded-lg filter group-hover:brightness-110 transition-all duration-500"
                />
              </div>

              <div className="space-y-4 text-center">
                <p className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-500">Contact me</p>
                <div className="copy-container flex items-center justify-center gap-3 p-3 bg-gray-800/60 rounded-xl cursor-pointer hover:bg-gray-700/60 transition-all duration-300 border border-gray-600/30 hover:border-pink-500/50 group/copy" onClick={handleCopy}>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover/copy:opacity-100 transition-opacity duration-300"></div>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-5 h-5 relative z-10" />
                  <p className="text-base font-medium text-white relative z-10">pspranavram2005@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
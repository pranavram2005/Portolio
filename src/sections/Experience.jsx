import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        {/* Enhanced Header */}
          <p className="head-text">My Work Experience</p>
          

        <div className="work-container max-w-6xl mx-auto">
          <div className="work-content relative">
            {/* Clean Timeline Line */}
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  className="work-content_container group mb-12 flex items-start cursor-pointer">
                  
                  {/* Timeline Node */}
                  <div className="flex flex-col items-center mr-8 relative z-10">
                    <div className="work-content_logo w-16 h-16 rounded-full overflow-hidden border-4 border-blue-500 bg-gray-800 group-hover:border-purple-500 shadow-lg">
                      <img className="w-full h-full object-cover" src={item.icon} alt={item.name} />
                    </div>
                    {index < workExperiences.length - 1 && (
                      <div className="w-0.5 h-16 bg-transparent mt-2"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 min-h-[120px]">
                    <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 group-hover:bg-gray-800/80 group-hover:border-gray-600 shadow-xl">
                      {/* Company Name */}
                      <h3 className="font-bold text-xl text-white mb-2 group-hover:text-blue-300">
                        {item.name}
                      </h3>
                      
                      {/* Position and Duration */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-4">
                        <p className="text-blue-400 font-semibold">
                          {item.pos}
                        </p>
                        <span className="hidden sm:inline text-gray-500">•</span>
                        <p className="text-gray-400 text-sm">
                          {item.duration}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed group-hover:text-white">
                        {item.title}
                      </p>
                      
                      {/* Status Indicator */}
                      <div className="flex items-center mt-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                          {index === 0 ? 'Current' : 'Completed'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
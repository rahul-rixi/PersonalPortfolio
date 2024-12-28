import React, { useRef, useEffect } from 'react';

const FutureGoals = () => {
  const headingRef = useRef(null);
  const hoverDivRef = useRef(null);

  useEffect(() => {
    hoverDivRef.current.style.transform = 'scaleX(0)';
    headingRef.current.addEventListener("mouseenter", () => {
      hoverDivRef.current.style.transition = 'transform 0.3s ease-in-out';
      hoverDivRef.current.style.transform = 'scaleX(1)';
      hoverDivRef.current.style.transformOrigin = 'center';
    });

    headingRef.current.addEventListener("mouseleave", () => {
      hoverDivRef.current.style.transition = 'transform 0.3s ease-in-out';
      hoverDivRef.current.style.transform = 'scaleX(0)';
      hoverDivRef.current.style.transformOrigin = 'center';
    });
  }, []);

  return (
    <section id="future-goals" className="flex justify-center items-center min-h-screen bg-black text-white p-4">
      <div className="text-center max-w-6xl mx-auto">
        <div className="relative inline-block mb-8">
          <h2 
            ref={headingRef} 
            className="text-4xl font-extrabold mb-14 text-green-400 transition-transform duration-300  relative"
          >
            Future Goals
          </h2>
          <div 
            ref={hoverDivRef} 
            className="absolute bottom-0 left-0 mb-4 right-0 h-1 bg-green-400"
            style={{ transform: 'scaleX(0)', transformOrigin: 'center' }}
          ></div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700 flex-1 min-w-[300px] max-w-[45%]">
            <h3 className="text-2xl font-semibold text-green-400 transition-all duration-300 hover:text-green-300">Learn React Native</h3>
            <p className="mt-4 text-gray-200 transition-all duration-300 hover:text-gray-100">Dive into React Native to build cross-platform mobile applications. This will help us create dynamic and engaging apps for both Android and iOS.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700 flex-1 min-w-[300px] max-w-[45%]">
            <h3 className="text-2xl font-semibold text-green-400 transition-all duration-300 hover:text-green-300">Master DSA with C++</h3>
            <p className="mt-4 text-gray-200 transition-all duration-300 hover:text-gray-100">Focus on mastering Data Structures and Algorithms using C++ to sharpen our problem-solving skills and enhance our technical expertise.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureGoals;

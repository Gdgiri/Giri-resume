import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 mx-auto max-w-7xl mt-20 pt-23 ">
      {/* Left Side - Text */}
      <div className="md:w-1/2 md:pr-8 space-y-4 animate-fadeInLeft">
        <h1 className="text-3xl font-bold text-left text-gray-800">
          Hi There,
        </h1>
        <h2 className="text-5xl font-bold text-left text-gray-800">
          I'm <span className="text-red-600">Giridharan</span>
        </h2>
        <p className="text-xl font-medium text-left text-gray-700">
          I am a Full Stack Developer
        </p>
        <p className="text-left text-gray-600">
          Passionate about building beautiful and performant web applications
          with modern technologies. I enjoy learning, coding, and collaborating
          on exciting projects!
        </p>
        <a
          href="https://wa.me/9715424895"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center animate-fadeInRight">
        <img
          src="https://i.pinimg.com/564x/90/30/85/9030852fb12ce438bf0d16616224f696.jpg"
          alt="Giridharan S"
          className="w-80 h-auto rounded-full border-4 border-gray-300 shadow-2xl transform hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Main;

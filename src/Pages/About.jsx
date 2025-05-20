import React from "react";

const skills = [
  {
    name: "HTML & CSS",
    imageUrl:
      "https://github.com/user-attachments/assets/63b2bdb2-9f20-428f-9d94-6e8d0a4da05a",
  },
  {
    name: "JavaScript",
    imageUrl:
      "https://github.com/user-attachments/assets/4eee86c5-bdaf-486b-95ef-260207a6ea8f",
  },
  {
    name: "React",
    imageUrl:
      "https://github.com/user-attachments/assets/75c10923-1029-497a-ab1f-dc6d094beab5",
  },
  {
    name: "Bootstrap5",
    imageUrl:
      "https://github.com/user-attachments/assets/4d4a1e29-c114-4111-bbe4-b88354d4bdc7",
  },
  {
    name: "Tailwind",
    imageUrl:
      "https://github.com/user-attachments/assets/d7ac39d5-d38e-4a23-a8ce-3cab0606ca22",
  },
  {
    name: "Flowbite-React",
    imageUrl:
      "https://github.com/user-attachments/assets/ceb16525-a97b-44b9-b0a4-2224685dedad",
  },
  {
    name: "Node.js",
    imageUrl:
      "https://github.com/user-attachments/assets/447b152a-7d1b-45d5-939e-ee5962cf1459",
  },
  {
    name: "Express",
    imageUrl:
      "https://github.com/user-attachments/assets/f615393a-39e2-434e-91fb-3a1d3abd36cc",
  },
  {
    name: "MongoDB",
    imageUrl:
      "https://github.com/user-attachments/assets/fd856797-408b-4efe-abeb-44ceff2f76df",
  },

  {
    name: "Firebase",
    imageUrl:
      "https://github.com/user-attachments/assets/788d0fbc-4149-4875-ba2b-0caa0f60bd6f",
  },
  {
    name: "Git",
    imageUrl:
      "https://github.com/user-attachments/assets/7fe50358-ebf4-401e-8125-2f924663268a",
  },
  {
    name: "GitHub",
    imageUrl:
      "https://github.com/user-attachments/assets/8b67e22c-5275-4b28-9f87-ac91c2562836",
  },

  {
    name: "Postman",
    imageUrl:
      "https://github.com/user-attachments/assets/1876f440-0bf6-4893-ae98-afb0004c1cde",
  },
  {
    name: "Netlify",
    imageUrl:
      "https://github.com/user-attachments/assets/acb74184-eb0a-4e79-b541-1e522b620704",
  },
  {
    name: "Render",
    imageUrl:
      "https://github.com/user-attachments/assets/87ae56a2-4941-4827-820d-2b30ec64b3ce",
  },
];

const About = () => {
  return (
    <section className="min-h-screen py-12 ">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <h2 className="text-4xl font-bold text-red-600 text-center mb-6 drop-shadow-lg">
          About Me
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://i.pinimg.com/564x/3e/4e/d2/3e4ed2befc1e6f12ca0020ea24f13e2e.jpg"
              alt="Giridharan"
              className="w-80 h-auto rounded-full border-4 border-gray-300 shadow-2xl transform hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Right Side - Text */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg text-gray-700">
              Hello! I'm{" "}
              <span className="text-red-600 font-bold">Giridharan</span>, a
              passionate Full Stack Developer with expertise in modern web
              technologies. I have a strong interest in building high-quality,
              responsive, and user-friendly applications.
            </p>
            <p className="text-lg text-gray-700">
              My journey started with a deep curiosity about how the web works.
              Over the years, I have gained experience in various technologies
              including React, Node.js, MongoDB, and more. I enjoy
              problem-solving, learning new skills, and collaborating on
              exciting projects.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or improving my skills
              through online learning. I strive to continuously improve and stay
              up-to-date with the latest trends in the tech world.
            </p>
          </div>
        </div>

        {/* Skills & Tools with Mapped Images */}
        <div className="mt-16 text-center">
          <h3 className="text-4xl font-bold text-red-600 text-center mb-6 drop-shadow-lg">
            Skills & Tools ({skills.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="transform transition-transform duration-300 hover:scale-125 hover:rotate-12">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-lg"
                  />
                </div>
                <p className="mt-4 text-lg text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

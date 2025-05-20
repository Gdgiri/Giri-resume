import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "GD-Events",
      description: "GD-Events is used to book the venues for marriage.",
      imageUrl:
        "https://github.com/user-attachments/assets/e147e2ab-c098-4c12-86ad-97fe6e817e8c",
      projectLink: "https://wedding-app-gdevents.netlify.app/",
    },
    {
      id: 2,
      title: "Tamil Letters",
      description:
        "Developed a responsive React application with modern JavaScript features.",
      imageUrl:
        "https://github.com/user-attachments/assets/4edac14a-35e5-44a6-9116-c3c914458542",
      projectLink: "https://gdgiri.github.io/tamil-letters1/",
    },
    {
      id: 3,
      title: "Book App",
      description:
        "Users can upload their own stories and read others' stories.",
      imageUrl:
        "https://github.com/user-attachments/assets/944262b7-5e52-4e13-a36e-5ab0e7b0ab17",
      projectLink: "https://book-appgd.netlify.app/",
    },
    {
      id: 4,
      title: "Crypto Trading Platform",
      description:
        "Website 1 allows users to buy or sell BTC-USD, and when a transaction is made, it sends data to Website 2 for backend processing.",
      imageUrl:
        "https://github.com/user-attachments/assets/4ae28e6d-051d-4eb5-9425-56630b606781",
      projectLink: "https://trading-protocol-design.netlify.app/",
    },
    {
      id: 5,
      title: "Crypto Transaction Dashboard",
      description:
        "Website 2 processes and stores transaction data, then forwards it to Website 3, which displays trade history in real-time.",
      imageUrl:
        "https://github.com/user-attachments/assets/d39d681d-4d6f-44ef-a512-4bf8c499df47",
      projectLink: "https://trading-protocol-design2.netlify.app/",
    },
    {
      id: 6,
      title: "Receipe-App",
      description:
        "Users can upload their own recipes, edit or delete them anytime, and view all recipes shared by other users.",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/000/108/904/small/free-recipe-vectors.jpg",
      projectLink: null,
    },
    {
      id: 7,
      title: "Doctor Appointment",
      description: "A platform to book appointments with doctors.",
      imageUrl:
        "https://img.freepik.com/premium-vector/online-doctor-concept-doctor-appointment-modern-healthcare-technologies-vector-illustration-flat_186332-1220.jpg",
      projectLink: null,
    },
  ];

  // Fetch the filtered projects based on the filter state
  const filteredProjects = projects.filter((project) => {
    if (filter === "Completed") return project.projectLink;
    if (filter === "Pending") return !project.projectLink;
    return true;
  });

  // Save the completed project count in localStorage
  useEffect(() => {
    const completedProjectsCount = projects.filter(
      (project) => project.projectLink
    ).length;
    localStorage.setItem("projectCount", completedProjectsCount);
  }, [projects]);

  // Retrieve the completed project count from localStorage
  const projectCount = localStorage.getItem("projectCount") || 0;

  return (
    <div className="py-10 px-5">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-8 drop-shadow-lg">
        My Projects
      </h2>

      {/* Display the project count */}
      <div className="text-center mb-6">
        <p className="text-lg text-gray-700">
          Total Completed Projects:{" "}
          <span className="text-red-600 font-bold">{projectCount}</span>
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        {["All", "Completed", "Pending"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg text-white transition-all duration-300 ${
              filter === category
                ? "bg-red-600"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white"
          >
            <div className="h-64 w-full relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform transform hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Description:</strong> {project.description}
              </p>
              <div className="text-center">
                {project.projectLink ? (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300"
                  >
                    View Project
                  </a>
                ) : (
                  <button
                    className="inline-block mt-4 px-6 py-2 text-white bg-gray-600 rounded-lg cursor-not-allowed"
                    disabled
                  >
                    Work in Progress
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

import React, { useState } from "react";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "HTML5 Certificate",
      imageUrl:
        "https://github.com/user-attachments/assets/152f1552-0f3b-4165-97dd-9053827b9365",
    },
    {
      id: 2,
      title: "CSS3 Certificate",
      imageUrl:
        "https://github.com/user-attachments/assets/730821c9-dd5f-4290-a947-13e691d167d4",
    },
    {
      id: 3,
      title: "Javascript Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/af42c7a9-1ae3-4946-bcba-8cf639acff3d",
    },
    {
      id: 4,
      title: "Bootstrap5 Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/1b3b3cb2-d83f-4720-b1ac-b9f5029bc5f8",
    },
    {
      id: 5,
      title: "MySQL Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/0b7e34cd-5856-41cd-bd31-a8ed4dc264d3",
    },
    {
      id: 6,
      title: "MongoDB Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/8cf15d69-c9c4-42ac-a86a-f5eb41efd361",
    },
    {
      id: 7,
      title: "React JS Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/88f962b0-bb17-4bc0-8f90-f824c70d7281",
    },
    {
      id: 8,
      title: "Node JS Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/c51c5307-9cb0-4758-9020-884b0f5a4252",
    },
    {
      id: 9,
      title: "Full Stack Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/2994f9c1-5620-42c8-b069-4e36b53b812f",
    },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="py-5 m-5 perspective-1000">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-6 drop-shadow-lg">
        My Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            className="overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer hover:shadow-2xl"
            onClick={() => openModal(index)}
          >
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying the image */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 p-4 ">
          <div className="relative w-full h-full max-w-3xl max-h-full flex flex-col items-center mt-8 md:mt-0 md:justify-center">
            <button
              onClick={closeModal}
              className="absolute top-0 right-1 text-white bg-red-600 font-bold p-2 rounded-full"
            >
              &times;
            </button>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-red-600 rounded-full p-2"
            >
              &lt;
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-red-600 rounded-full p-2"
            >
              &gt;
            </button>
            <img
              src={certificates[currentImageIndex].imageUrl}
              alt={certificates[currentImageIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-xl"
            />
            <div className="text-center text-white mt-2">
              <h3 className="text-lg font-semibold">
                {certificates[currentImageIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

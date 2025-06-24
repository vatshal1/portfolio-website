import { useState } from "react";
import { projects } from "../../utils/constant";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModel = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModel = (e) => {
    e.preventDefault();
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/*//-> project grid  */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModel(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*//-> modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full  max-w-4xl h-auto relative ">
            {/* //-> close button  */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCloseModel}
                className="text-white text-3xl font-bold hover:text-purple-500 transition-colors duration-200 cursor-pointer bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
            </div>

            {/* //->modal content  */}
            <div className="flex flex-col lg:flex-row h-full">
              <div className="lg:w-1/2 w-full flex justify-center items-center bg-gray-900 p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-w-sm lg:max-w-md object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="lg:text-3xl font-bold text-white text-2xl ">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-400 lg:text-base text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 ">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-400 hover:text-white px-4 py-3 rounded-xl text-center font-semibold transition-all duration-200"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-800 text-white px-4 py-3 rounded-xl text-center font-semibold transition-all duration-200"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;

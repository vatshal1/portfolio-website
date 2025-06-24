import { educationInfo } from "../../utils/constant";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development
        </p>
      </div>

      {/*education sections */}
      <div className="space-y-8">
        {educationInfo.map((edu) => (
          <div
            key={edu.id}
            className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-gray-900/80 border border-purple-500/30 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-200 will-change-transform"
          >
            <div className="w-20 h-20 rounded-full border-4 border-purple-500 flex-shrink-0 overflow-hidden">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">
                {edu.degree}
              </h3>
              <h4 className="text-purple-300 font-semibold mb-2">
                {edu.school}
              </h4>
              <p className="text-gray-300 text-sm mb-2">{edu.date}</p>
              <p className="text-green-400 font-semibold mb-3">
                Grade: {edu.grade}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

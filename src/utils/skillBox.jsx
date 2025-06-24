import Tilt from "react-parallax-tilt";

const SkillBox = ({ skills, title }) => {
  return (
    <div className="bg-gray-900 p-6 px-8 sm:px-4 my-5 text-gray-300 border border-white rounded-xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
      <h1 className="font-extrabold text-2xl sm:text-xl md:text-2xl text-center mb-5">
        {title}
      </h1>
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
      >
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-2 gap-4 place-items-center min-w-0">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full p-2 flex flex-wrap justify-center items-center border border-white rounded-xl min-w-0"
            >
              <img
                src={skill.logo}
                className=" w-1/10 md:w-1/8  object-contain"
              />

              <p className="max-w-max ml-2 inline">{skill.name}</p>
            </div>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

export default SkillBox;

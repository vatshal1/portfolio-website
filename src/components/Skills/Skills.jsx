import { skillsInfo } from "../../utils/constant";
import SkillBox from "../../utils/skillBox";

const Skills = () => {
  return (
    <section
      className="py-24  px-[12vw]  md:px-[7vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
      id="skills"
    >
      {/*//-> Section Title */}
      <div className="text-center mb-8">
        <h1 className=" text-white font-bold text-3xl ">SKILLS</h1>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-5 py-8">
        {skillsInfo.map((info) => (
          <SkillBox key={info.title} skills={info.skills} title={info.title} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

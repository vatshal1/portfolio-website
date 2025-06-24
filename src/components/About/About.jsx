import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

import profileImg from "../../assets/profile.webp";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw]  font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-8">
        {/* //->Left Side  */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <div className="space-y-2">
            {/*//-> Introduction  */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Hi, I am
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Vatshal Negi
            </h2>
          </div>

          {/*//-> Skills heading with typing effect  */}
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
            I am a{" "}
            <span className="text-[#8245ec] inline-block">
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Coder",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: "natural",
                  deleteSpeed: "natural",
                }}
              />
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a aspiring MERN stack developer with a passion for creating
            innovative web applications. I continuously expand my skills in
            frontend and backend development, utilizing the MERN stack and
            modern technologies to build efficient, user-focused solutions.
          </p>

          {/*//-> Resume button  */}
          <a
            href="https://drive.google.com/file/d/16Dfhr0S0QN-Sr21QESIgetBpkeWIcZub/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 20px #8245ec",
            }}
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* //-> right side  */}
        <div className="md:w-1/2 flex justify-center  ">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem]  border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImg}
              alt="profile pic"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              loading="lazy"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

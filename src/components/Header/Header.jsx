import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false); //. only for styling of header
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false); //. to close the menu bar in mobile view

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <header
      className={`${
        isScrolled ? "bg-[#050414]/50 backdrop-blur-md" : "bg-transparent"
      } fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:[px-20vw]`}
    >
      <div className="text-white py-7 flex justify-between items-center">
        {/* //-> logo */}
        <div className="text-xl font-bold cursor-pointer">
          <span className="text-[#8245ec]">&lt; </span>
          <span className="text-white">Vatshal</span>
          <span className="text-[#8245ec]">_</span>
          <span className="text-white">Negi</span>
          <span className="text-[#8245ec]"> /&gt;</span>
        </div>

        {/* //_ desktop menu  */}

        {/* //-> Desktop menu */}
        <ul className=" hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }  `}
            >
              <button
                onClick={() => handleMenuClick(item.id)}
                className="cursor-pointer hover:text-[#8245ec]"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/*//-> social media icon */}
        <div className="hidden md:flex space-x-4 text-xl">
          <a
            href="https://github.com/vatshal1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vatshal-negi-916a0a229/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* //_ mobile view  */}

        {/* //-> Mobile Menu Icon  */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            ></FiX>
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            ></FiMenu>
          )}
        </div>
      </div>

      {/* //-> Mobile Menu Items  */}
      {isOpen && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4/5 bg-gray-900/95 backdrop-blur-md border border-gray-700 z-50 rounded-xl shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="p-1">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {/*//-> profile sections  */}
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    activeSection === item.id ? "text-[#8245ec] " : ""
                  } `}
                >
                  <button
                    className={`cursor-pointer  ${
                      activeSection === item.id
                        ? "hover: text-[#8245ec] "
                        : "hover:text-white"
                    }`}
                    onClick={() => handleMenuClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* //->social media icons */}
              <div className=" flex space-x-4">
                <a
                  href="https://github.com/vatshal1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/vatshal-negi-916a0a229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaLinkedin />
                </a>
              </div>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

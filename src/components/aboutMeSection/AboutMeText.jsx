import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p justify="justify" >
      I’m Asir Ahbab Raiyan, a Flutter developer and network engineering enthusiast who loves building fast, beautiful and reliable mobile apps. I also specializes in Flutter app development, machine learning, and AI integration, creating seamless user experiences powered by smart systems. With a strong grasp of cross-platform development and networking fundamentals, I bring ideas to life through clean code and smart connectivity. Whether I’m designing smooth user interfaces or optimizing data flow, I thrive on solving real-world challenges with tech. I'm always exploring new tools, sharing insights, and leveling up to create apps that truly make an impact and
        sharing knowledge to inspire others to achieve their goals.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

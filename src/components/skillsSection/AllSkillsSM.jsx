import { FaCode, FaFire, FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaDartLang, FaE, FaEthernet, FaFlutter, FaPython } from "react-icons/fa6";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Flutter",
    icon: FaFlutter,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "Cisco",
    icon: FaEthernet,
  },
  {
    skill: "Machine Learning",
    icon: FaCode,
  },
  {
    skill: "Firebase",
    icon: FaFire,
  },
];
const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;

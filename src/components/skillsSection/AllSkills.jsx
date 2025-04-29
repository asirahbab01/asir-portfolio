import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCisco, SiDart, SiFirebase, SiFlutter, SiGooglecolab, SiNodedotjs, SiPython } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiReact } from "react-icons/si";

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
    icon: SiReact,
  },
  {
    skill: "Flutter",
    icon: SiFlutter
  },
  {
    skill: "Python",
    icon: SiPython,
  },
  {
    skill: "NodeJS",
    icon: SiNodedotjs,
  },
  {
    skill: "Cisco",
    icon: SiCisco,
  },
  {
    skill: "Machine Learning",
    icon: SiGooglecolab,
  },
  {
    skill: "Firebase",
    icon: SiFirebase,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;

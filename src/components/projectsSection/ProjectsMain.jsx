import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "AgroApp",
    year: "Mar2022",
    align: "right",
    image: "/images/agroapp.png",
    link: "https://github.com/asirahbab01/first_app",
  },
  {
    name: "TransitPro",
    year: "Oct2023",
    align: "left",
    image: "/images/transitpro.jpeg",
    link: "https://github.com/asirahbab01/Bus-Management",
  },
  {
    name: "SnakeGame",
    year: "Feb2023",
    align: "right",
    image: "/images/snake-game.png",
    link: "https://wokwi.com/projects/332020793691079250?fbclid=IwAR2kuYDT_Cz0YXNFuuJdoN11nQlPRSavlrzoPifYJrf5iXixEc0EWnZhBrk",
  },
  {
    name: "FoodHaven",
    year: "May2023",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://foodheaven.vercel.app/",
  },
  {
    name: "Biometric Voting System",
    year: "Feb2024",
    align: "right",
    image: "/images/vote.jpg",
    link: "https://github.com/asirahbab01/BiometricVotingMachine",
  },
  {
    name: "Deep-Clustering",
    year: "Mar2025",
    align: "left",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/asirahbab01/Image-Clustering",
  },
  {
    name: "Basic Portfolio",
    year: "Dec2024",
    align: "right",
    image: "/images/portfolio.png",
    link: "https://asir-ahbab-01.netlify.app/",
  },
  {
    name: "3D-Portfolio",
    year: "Jan2025",
    align: "left",
    image: "/images/preview3d.jpg",
    link: "https://asirahbab-3d.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;

import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Student",
    company: "Milestone School & College",
    date: "2010 - 2012",
    responsibilities: [
      "Studied in a well reputed school.",
      "Completed Primary School Certificate(PSC) exam with a result of GPA: 5.00.",
      "Participated in various extracurricular activities.",
      "Gained knowledge in various subjects.",
    ],
  },
  {
    job: "Student",
    company: "Rajuk Uttara Model College (RUMC)",
    date: "2013 - 2020",
    responsibilities: [
      "Studied in one of the best colleges in Bangladesh.",
      "Completed both Secondary School Certificate(SSC) & Higher Secondary Certificate(HSC) exams with a result of GPA: 5.00.",
    ],
  },
  {
    job: "Undergraduate Student",
    company: "Military Institute of Science and Technology (MIST)",
    date: "2021 - 2025",
    responsibilities: [
      "Studying in a well reputed university",
      "Completed Bachelor of Science(BSc.) in Computer Science and Engineering(CSE).",
      "Gaining knowledge in various domains of Computer Science.",
    ],
  },
  {
    job: "Executive Director & Mentor",
    company: "MIST CyberSecurity Club",
    date: "2023 - 2024",
    responsibilities: [
      "Leading the club and managing its activities.",
      "Organizing workshops and seminars on cybersecurity topics.",
      "Helping students through their way in learning CTF and other cybersecurity skills.",
    ],
  },
  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 3 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

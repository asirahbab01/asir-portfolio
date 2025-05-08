import SingleContactSocial from "./SingleContactSocial";
import { FaCodeBranch, FaFacebook, FaKaggle, FaLinkedin } from "react-icons/fa";
import { FaCode, FaHackerrank } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/asir-ahbab-raiyan-188045259" Icon={FaLinkedin} />
      <SingleContactSocial link="https://www.kaggle.com/asirahbabraiyan" Icon={FaKaggle} />
      <SingleContactSocial link="https://github.com/asirahbab01" Icon={FiGithub} />
      <SingleContactSocial link="https://www.facebook.com/asirahbab.raiyan" Icon={FaFacebook} />
      <SingleContactSocial link="https://www.hackerrank.com/profile/asir_ahbabraiyan" Icon={FaHackerrank} />
      <SingleContactSocial link="https://www.codechef.com/users/ahbabraiyan200" Icon={FaCode} />
    </div>
  );
};

export default ContactSocial;

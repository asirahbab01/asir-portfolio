import SingleContactSocial from "./SingleContactSocial";
import { FaFacebook, FaKaggle, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/asir-ahbab-raiyan-188045259" Icon={FaLinkedin} />
      <SingleContactSocial link="https://www.kaggle.com/asirahbabraiyan" Icon={FaKaggle} />
      <SingleContactSocial link="https://github.com/asirahbab01" Icon={FiGithub} />
      <SingleContactSocial link="https://www.facebook.com/asirahbab.raiyan" Icon={FaFacebook} />
    </div>
  );
};

export default ContactSocial;

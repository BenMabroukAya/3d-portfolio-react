import { motion } from "framer-motion";
//import { Tilt } from "react-tilt";
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, slideIn } from "../utils/motion";

import { github, gmail, linkedin, whatsapp } from "../assets";

const socialLinks = [
  {
    name: "GitHub",
    icon: github,
    url: "https://github.com/BenMabroukAya",
    color: "text-gray-400",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://linkedin.com/in/aya-ben-mabrouk",
    color: "text-blue-400",
  },
  {
    name: "WhatsApp",
    icon: whatsapp,
    url: "https://api.whatsapp.com/send?phone=21627323009",
    color: "text-green-400",
  },
  {
    name: "Gmail",
    icon: gmail,
    url: "mailto:aya.benmabrouk@isimg.tn",
    color: "text-red-400",
  },
];

const SocialCard = ({ index, name, icon, url, color }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[250px] w-full cursor-pointer"
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center no-underline"
        >
          <div className="w-16 h-16 flex justify-center items-center mb-4">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          <h3 className={`${color} font-bold text-[20px]`}>{name}</h3>
        </a>
      </Tilt>
    </motion.div>
  );
};

const SocialMedia = () => {
  return (
    <>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="text-center">
        <p className={styles.sectionSubText}>Connect with me</p>
        <h2 className={styles.sectionHeadText}>Social Media</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-2xl mx-auto text-center leading-[30px]"
      >
        Feel free to reach out to me through any of these platforms. I'm always
        open to new opportunities, collaborations, or just a friendly chat
        about tech and development.
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {socialLinks.map((social, index) => (
          <SocialCard key={`social-${index}`} index={index} {...social} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SocialMedia, "social");

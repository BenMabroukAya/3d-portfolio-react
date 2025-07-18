//import Tilt from 'react-tilt';
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// ServiceCard for services component 
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate Junior Software Engineer with strong experience in JavaScript and TypeScript, 
        and deep expertise in frameworks such as React, Node.js, and Express.js. With a solid foundation 
        in full-stack web development—particularly the MERN stack—I enjoy building scalable, 
        user-focused applications. I’m a fast learner who thrives in collaborative environments 
        and takes pride in transforming ideas into impactful, real-world solutions. Let’s work together 
        to turn your vision into reality!
      </motion.p>

      <motion.a
        href="https://drive.google.com/file/d/1yIThVLlyKsjS1kPiPGTC_4-cGvW3WQEf/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-8 inline-block bg-primary text-white py-3 px-6 rounded-lg font-semibold cursor-pointer hover:bg-primary/80 transition"
      >
        Click here to view My Resume
      </motion.a>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;

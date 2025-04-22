import { useRef } from 'react';
import { expItemVariants, itemVariants, skillTextVariants, staggerVariants } from '../../helpers/motionTextVariants';
import './Experience.scss';
import { motion, useInView } from 'framer-motion';
const experiences = [
    {
      title: "Diploma in Mechanical",
      company: "Government Polytechnic College",
      location: "Tiruchirappalli, Tamil Nadu, India",
      date: "July 2018 - April 2021",
      image: "/work.png"
    },
    {
      title: "Internship Trainee",
      company: "Aavin Milk Products.",
      location: "Tirunelveli, Tamil Nadu, India",
      date: "May 2024",
      image: "/intern.png"
    },
    {
      title: "B.E - Mechanical",
      company: "Anna University",
      location: "Tirunelveli, Tamil Nadu, India",
      date: "August 2022 - May 2025",
      image: "/graduate.png"
    }
  ];
  

const Experience = () => {
  return (
    <div className="expWrapper">
        <motion.div variants={skillTextVariants} className="expTitle" initial="initial" whileInView="animate">
            <motion.h1 variants={skillTextVariants}>Educational Pursuits</motion.h1>
            <motion.p variants={skillTextVariants}>Here's a gilmpse into my journey, where internship experiences and education come togetherto shape my understanding of HVAC systems.</motion.p>
        </motion.div>  
        <motion.div className='experience' variants={staggerVariants} initial="closed" animate="open">
            {experiences.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
            ))}
        </motion.div>
    </div>
  )
};

const ExperienceItem = ({ experience }) => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef,{ triggerOnce: false });
    
  
    return (
      <motion.div
        className="container"
        ref={containerRef}
        variants={expItemVariants}
        initial="closed"
        animate={inView ? "open" : "closed"}
      >
        <img src={experience.image} alt="" />
        <div className="textBox">
          <h2>{experience.title}</h2>
          <h4>{experience.company}</h4>
          <small>{experience.location}</small>
          <p>{experience.date}</p>
          <span className="leftArrow"></span>
        </div>
      </motion.div>
    );
};  

export default Experience
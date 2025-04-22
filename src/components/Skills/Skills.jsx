import './Skills.scss';
import { motion, useInView } from 'framer-motion';
import { itemVariants, skillTextVariants, staggerVariants, textVariants } from '../../helpers/motionTextVariants';
import { useRef } from 'react';

const skills = [
    { skill: "Carrier HAP 4.2", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhncmPjiUndJJGh4jTYfDu6xNDCp6FiRIFzDfLvxmX2aTtjx_BW9rWgtClhZtkeCVIEa0&usqp=CAU" },
    { skill: "AutoCAD", logo: "https://wallpapers.com/images/hd/auto-c-a-d-logo-graphic-kkipca3aki0i49xv-2.jpg", style: { borderRadius: "30%" } },
    { skill: "Mc.Quay", logo: "https://findlogovector.com/wp-content/uploads/2020/02/mcquay-air-conditioning-ltd-logo-vector.png" },
    { skill: "Beta", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0Uj7D5isHMswnVpwl7i6OdKj81ZZhB9xm6mAIfHwBEEHecDy25Y1dLULCKZArNt4zis&usqp=CAU" },
    { skill: "Fusion 360", logo: "https://seeklogo.com/images/A/autodesk-fusion-360-logo-7F72A76397-seeklogo.com.png" },

    // { skill: "Next.js", logo: "/nextjs.png" },
];

const Skills = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-200px" });

    return (
        <div className='skillsContainer'>
            <motion.div ref={ref} variants={skillTextVariants} className="textContainer" initial="initial" whileInView="animate">
                <motion.h1 variants={skillTextVariants}>Tools & Expertise</motion.h1>
                <motion.p variants={skillTextVariants}>
                    Presenting my curated selection of essential design tools for drafting HVAC systems and selecting Machinary.
                </motion.p>
            </motion.div>
            <motion.div className='skillList' variants={staggerVariants} initial="closed" whileInView="open">
                <motion.div className="skillGroup" variants={staggerVariants}>
                    {skills.slice(0, 7).map((skill, index) => (
                        <motion.div key={index} variants={itemVariants} className="skill">
                            <div className="skillIcon">
                                <img src={skill.logo} alt={skill.skill} style={skill.style} />
                            </div>
                            <span>{skill.skill}</span>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="skillGroup" variants={staggerVariants}>
                    {skills.slice(7).map((skill, index) => (
                        <motion.div key={index + 7} variants={itemVariants} className="skill">
                            <div className="skillIcon">
                                <img src={skill.logo} alt={skill.skill} style={skill.style} />
                            </div>
                            <span>{skill.skill}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Skills;
import React from "react";
import { SectionWrapper } from "../hoc";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { technologies } from "../constants";
import { styles } from "../styles";



const ServiceCard = ({ index, name, icon }) => (
  <Tilt className='xs:w-[150px] w-full'>
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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-50 h-50 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const Tech = () => {
  return (
    
    <div className='mt-20 flex flex-wrap gap-10'>
    {technologies.map((technologie, index) => (
      <ServiceCard key={technologies.name} index={index} {...technologie} />
    ))}
  </div>
    
    
    
  );
};

export default SectionWrapper(Tech, "");
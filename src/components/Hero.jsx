import { motion } from "framer-motion";

import { styles } from "../styles";
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1736420401592.json';
import CV from '../assets/CV_Siddhant_Janbandhu_SDE.pdf'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Siddhant</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I create dynamic web applications <br className="sm:block hidden" />
          with seamless UI and efficient backend logic.
          </p>
          {/* Download CV Button */}
          <div className="mt-10 md:mt-14">
            <a
              href={CV} // Update with the actual CV file path
              download
            >
              <button
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#915EFF] bg-[#915EFF] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-12 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-[#7a4cd1] hover:scale-105"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
        {/* Right Section: Lottie Animation */}
<div className="flex-1 flex justify-center lg:justify-end items-center mt-8 lg:mt-32">
  <Lottie 
    animationData={animationData} 
    className="w-full sm:w-[75%] md:w-[85%] lg:w-[90%] xl:w-[100%] h-auto object-contain"
  />
</div>

      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
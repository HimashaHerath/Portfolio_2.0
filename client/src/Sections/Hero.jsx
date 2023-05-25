import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "./styles";
import ComputersCanvas from "../canvas/ComputersCanvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Himasha</span>
          </h1>
          <TypeAnimation
            sequence={[
              "I am a Second-Year Undergraduate",
              1000,
              "I am a UI/UX Designer",
              2000,
              "I am a Web Developer",
              3000,
              "I am a Software Developer",
              4000,
              "I am exploring AI",
              5000,
              "Aspiring Full Stack Engineer",
              6000,
              "I am learning DevOps",
              7000,
              "CI/CD Pipeline Enthusiast",
              8000,
              "Exploring Every Opportunity",
              9000,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className={`${styles.heroSubText} mt-2 text-white-100`}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-40 w-full flex justify-center items-center">
        <a
          href="#about"
          className="transition-transform duration-200 hover:scale-110"
          aria-label="Scroll down to About section"
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

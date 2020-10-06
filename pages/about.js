import { motion } from "framer-motion";

export default function AboutPage() {
    return (
      <>
        <div className="about">
          <div className="about-page">
            {/* <div className="about-head">
                  <h2>About</h2>
                </div> */}
        <motion.div animate={{ x: 20 }} transition={{ ease: "easeIn", duration: 3 }}>
          <div className="about-body">
            <p>hi! i’m aj sabandal from manila, philippines i graduated at polytechnic university of the philippines with a program of bachelor of business teacher education major in information technology, year 2017</p>
            <p>after i graduated i was a freelancer. i’m doing art commissions and at year 2018 i was hired at the hotel (the mansion iloilo) as a sales coordinator.  i left there on 2019 and attended full stack web dev bootcamp for 3 months at zuitt.</p>
            <p>as an Web Developer, It's challenging to me but if you love what you do. You will take every challenge. You take the risk. What I love on being a Web Developer is the learning curve. You learn everyday and this is also makes me happy especially when you fix something. Sometime it takes minutes or even an hour, it almost break you but answers will just pop up! just like that.</p>
            <p>i really want to pursue programming. i want to work on environment where i can  learn more knowledge and grow as person. i want to do the best that i can to benefit the company and the team i will be part of.
            </p>
            <motion.div animate="visible" whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 2
                  },
                }}>
              <h3><a href="https://drive.google.com/file/d/12CqoDxJed7KFkkXSBwiBxP_Bhs7-WLxD/view?usp=sharing">Resume</a></h3>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </div>

    </>
    );
  }
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
                <h1 className="head-text" >CUSTOMIZE <br className="xl:block hidden" /> COOL T-SHIRTS</h1>
            </motion.div>
            <motion.div className="flex flex-col gap-5" {...headContentAnimation} >
                <p className="max-w-md font-normal text-gray-600 text-base" >
                    Customize your exclusive unique t-shirts with our brand new customization tool. <strong>Unleash Your Creativity!</strong>{" "} and create your own style!
                </p>
            </motion.div>
          </motion.div>

        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;

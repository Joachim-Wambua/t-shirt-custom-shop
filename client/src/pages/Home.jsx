import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";

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
              src="./personallogowhite.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          </motion.header>

          <motion.div className="home-content " {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h2 className="head-text">
                CUSTOMIZE <br className="xl:block hidden" /> COOL T-SHIRTS
              </h2>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md font-normal text-slate-300 text-base">
                Customize your exclusive unique t-shirts with our brand new
                customization tool. <strong>Unleash Your Creativity!</strong>{" "}
                and create your own style!
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;

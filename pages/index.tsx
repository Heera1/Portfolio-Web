import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative" onClick={handleClick}>
        <motion.div
          className="w-64 h-64 rounded-full cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          animate={{
            scale: [2, 3, 3, 2, 2],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <div className="absolute z-50 text-center left-2 top-[4.8rem] cursor-pointer font-Belanosima italic">
          <p className="landing-p">2023 PORTFOLIO</p>
          <p className="landing-p">/</p>
          <p className="landing-p">JI EUN AN</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

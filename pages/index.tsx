import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Background from "@/components/Background";
import TextTypingAni from "../components/TypingAnimation";

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Background />
      <div className="relative" onClick={handleClick}>
        <motion.div
          className="w-24 h-24 rounded-full cursor-pointer md:w-44 md:h-44 lg:w-64 lg:h-64 sm:w-24 sm:h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          animate={{
            scale: [1.5, 2.5, 2.5, 1.5, 1.5],
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
        <div className="absolute z-50 text-center -top-2 md:top-3 lg:left-2 lg:top-[4.8rem] cursor-pointer font-Belanosima italic">
          <TextTypingAni text={'2024 PORTFOLIO \n | \n JIEUN AN'} repeat={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;

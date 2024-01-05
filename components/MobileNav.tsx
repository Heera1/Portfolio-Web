import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { navArr } from "@/src/arr";
import Link from "next/link";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)"
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }
    );
  }, [isOpen]);

  return scope;
}

export default function MoblieNav() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <nav className="drop-shadow-sm border-2 border-red-500 bg-gray-500" ref={scope}>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex border-2 py-5 border-blue-500 font-semibold text-2xl items-center px-2 justify-between" 
      >
        Menu
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        style={{
          clipPath: "inset(10% 50% 90% 50% round 10px)"
        }}
        className={`flex columns-1 gap-3 bg-slate-200 ${isOpen ?  'pointer-events-auto' : 'pointer-events-none' }`}
      >
        {navArr.map((item) => (
          <Link href={item.link} className="nav" key={item.id}>
            <li className="block origin-center list-none m-0 p-3">{item.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
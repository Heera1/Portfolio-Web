import { useState } from "react";
import Link from "next/link";
import { BiLogoBlogger } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

interface NavArrType {
  id: number;
  name: string;
  link: string;
}

const navArr: NavArrType[] = [
  { id: 1, name: "About Me", link: "/about" },
  { id: 2, name: "Project", link: "/project" },
  { id: 3, name: "UX/UI Design", link: "/portfolio" },
  { id: 4, name: "Contact", link: "/contact" },
  { id: 5, name: "Image", link: "/image2" },
];

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="ml-8">
      <Link href="/">
        <h1 className="mt-10 mb-6 text-4xl italic font-Belanosima">
          Ji Eun An
        </h1>
      </Link>
      <div className="block" onClick={handleClick}>
        <div className="w-[15rem] text-xl">
          {navArr.map((item) => (
            <Link href={item.link} className="nav" key={item.id}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex mt-6">
        <Link href="https://velog.io/@caecus">
          <BiLogoBlogger size={35} className="nav-icon" />
        </Link>
        <Link href="https://github.com/Heera1">
          <AiFillGithub size={35} className="nav-icon" />
        </Link>
      </div>
    </div>
  );
}

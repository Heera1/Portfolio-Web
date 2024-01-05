import { useState } from "react";
import Link from "next/link";
import { BiLogoBlogger } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { navArr } from "@/src/arr";

interface NavClickType {
  onClick: React.MouseEventHandler<HTMLElement>;
}

export default function NavBar({ onClick }: NavClickType) {
  return (
    <div className="ml-4">
      <Link href="/">
        <h1 className="mt-10 mb-6 text-4xl italic font-Belanosima sm:hidden lg:block">
          JiEun An
        </h1>
      </Link>
      <div className="block" onClick={onClick}>
        <div className="w-[15rem] text-xl">
          {navArr.map((item) => (
            <Link href={item.link} className="nav" key={item.id}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex py-4 sm:hidden lg:flex">
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

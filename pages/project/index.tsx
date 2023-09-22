import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { projectInfo } from "../../src/arr";

interface ProjectInfoDataType {
  name: string;
  summary: string;
  role: string | null;
  stack: string[];
  img: string;
  id: number;
}

function Project() {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/project/${id}`);
  };

  useEffect(() => {
    if (router.isReady) return;
  }, [router.isReady]);

  return (
    <div className="page-layout">
      <div className="scroll-container">
        <h1 className="px-2 text-white bg-MainColor page-title">PROJECT</h1>
        <div className="grid grid-cols-2 gap-4 mt-10 mb-24 lg:grid-cols-3 lg:gap-10">
          {projectInfo &&
            projectInfo.map((data: ProjectInfoDataType) => (
              <button
                className="bg-gray-200 lg:h-[22rem] h-[17rem] rounded-2xl relative ease-in-out duration-300 hover:-translate-y-6"
                onClick={(e) => handleClick(data.id)}
                key={data.id}
              >
                <div
                  id="front"
                  className="absolute visible duration-0 hover:invisible hover:delay-300"
                >
                  <Image
                    src={data.img}
                    alt=""
                    className="object-cover lg:h-[22rem] h-[17rem] rounded-2xl border-4 border-gray-200 cursor-pointer"
                    width={500}
                    height={800}
                  ></Image>
                </div>
                <div
                  id="back"
                  className="flex flex-col justify-between h-full p-4 cursor-pointer group rounded-2xl bg-blue-300/20"
                >
                  <div>
                    <p className="mb-2 text-2xl font-bold">{data.name}</p>
                    <p>{data.summary}</p>
                    <div className="w-full h-0.5 bg-white mt-1 mb-2" />
                    <ul>
                      {data.stack.map((tag: string, idx: number) => (
                        <li
                          className="inline-flex px-2 bg-white m-0.5 rounded-md"
                          key={idx}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="flex ml-auto text-white">
                    <p className="mr-2 text-lg">Click</p>
                    <BsArrowRight size={28} />
                  </span>
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillHome, AiFillGithub } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect } from "react";
import { projectData } from "../../src/arr";

interface DataType {
  id: number;
  name: string;
  summary: string;
  role: string;
  stack: string[];
  info: {
    period: string;
    division: string;
    members: string;
    link: string;
    github: string;
  };
  slide: SlideType[];
  statusCode?: number;
  message?: string;
}

interface SlideType {
  text: string;
  img: string;
}

function Project() {
  const router = useRouter();
  const uid = Number(router.query.id);
  const handleClick = () => {
    router.back();
  };

  let post = projectData.filter((item) => item.id === uid);

  useEffect(() => {
    if (router.isReady) return;
  }, [router.isReady]);

  return (
    <div>
      {projectData &&
        post.map((data: DataType) => (
          <div key={data.id} className="scroll-container">
            <p className="mb-1 italic">{data.info.period}</p>
            <div id="Title" className="inline-flex items-center mb-2 flex-cols">
              <BsArrowLeft
                size={35}
                onClick={handleClick}
                className="cursor-pointer"
              />
              <h2 className="ml-4 text-3xl font-bold">{data.name}</h2>
              <div id="link" className="flex mx-4">
                {data.info.link === undefined ? null : (
                  <Link href={data.info.link}>
                    <AiFillHome size={30} className="cursor-pointer" />
                  </Link>
                )}
                <Link href={data.info.github}>
                  <AiFillGithub size={30} className="cursor-pointer" />
                </Link>
              </div>
            </div>
            <div id="perforated-line" className="py-0.5 bg-gray-200 mb-6" />
            <div id="role-summary" className="flex">
              <p className="px-2 mr-2 bg-red-200 rounded-md">{data.role}</p>
              <p>{data.summary}</p>
            </div>
            <div id="info" className="flex">
              <p>{data.info.division}</p>
              <p>{data.info.members}</p>
            </div>
            {data.stack.map((tag: string, idx: number) => (
              <li
                className="inline-flex px-2 m-0.5 bg-gray-300 border rounded-md"
                key={idx}
              >
                {tag}
              </li>
            ))}
            <main className="mb-24">
              {data.slide &&
                data.slide.map((item, idx: number) => (
                  <div className="mt-10" key={idx}>
                    <Image
                      src={item.img}
                      alt=""
                      width={1000}
                      height={300}
                    ></Image>
                    <p className="w-full p-4 m-auto mt-10 text-center bg-gray-200">
                      {item.text}
                    </p>
                  </div>
                ))}
            </main>
          </div>
        ))}
    </div>
  );
}

export default Project;

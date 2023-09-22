import { NextPage } from "next";
import Image from "next/image";
import profile from "../public/profile.jpg";

const About: NextPage = () => {
  return (
    <div className="px-6 page-layout">
      <div className="scroll-container">
        <h1 className="page-title">ABOUT ME</h1>
        <h2 className="px-2 mb-4 text-3xl italic font-bold text-white bg-MainColor sm:text-2xl">
          &quot; 안녕하세요, 프론트엔드 개발자 안지은입니다. &quot;
        </h2>
        <div className="mt-8 lg:flex sm:block sm:mt-6">
          <Image
            src={profile}
            alt="프로필 이미지"
            width={500}
            className="object-cover lg:w-96 lg:h-96 rounded-xl sm:h-52 sm:w-full sm:mb-4"
          ></Image>
          <div className="lg:px-8">
            <p className="mb-6">
              미디어디자인 전공에서 프론트엔드 개발자가 되기로 마음먹게 된
              계기는 웹사이트 전공 수업을 수강한 이후부터입니다. 웹사이트를
              만들어 나가며 개발자라는 직업에 흥미를 느끼게 되었고, 본격적으로
              프론트엔드 개발자가 되기 위해 코드스테이츠 웹 개발 부트캠프를
              수료하게 되었습니다. 미디어디자인 전공 수업에서 심도있게 학습했던
              UX/UI 지식을 토대로 사용자 경험이 좋은 웹사이트를 개발하기 위해
              노력하고 있습니다.
            </p>
            <p className="mb-6">
              저는 Javascript와 React를 사용하여 반응형 Web 개발을 주로 하고
              있습니다. 다양한 기술 스택을 공부하고 프로젝트에 적용해 보는 것을
              좋아하기 때문에 처음 사용해 보는 기술 스택도 빠르게 학습 후
              프로젝트에 적용할 수 있습니다.
            </p>
            <p className="mb-6">
              저는 계획을 수립하고, 실천해 나아가는 것을 좋아합니다. 팀
              프로젝트를 진행할 때도 적극적으로 팀원들이 계획대로 일정을 진행할
              수 있겠끔 일정을 조율하고, 팀 노션을 관리하는 등의 활동을
              계속했습니다. 대학교 재학 중에도 조별과제에서 조장을 맡아 팀원들이
              적극적으로 조별과제에 참여하게끔 유도하였습니다.
            </p>
          </div>
        </div>
        <div id="stacks" className="mb-16">
          <span className="about-h1">Stacks</span>
          <p>Javascript, Typescript, HTML, CSS</p>
          <p>
            React, Next.js, Tailwind CSS, Styled-component, Axios, Zustand,
            Recoil
          </p>
          <p>Git, AWS(EC2), Postman, Notion</p>
          <p>Photoshop, Illustrator, Adobe XD</p>
        </div>
        <div id="education" className="mb-36">
          <span className="about-h1">Education</span>
          <h3 className="about-h3">&#42; 코드스테이츠 부트캠프 수료</h3>
          <p>2022.06~2022.12</p>
          <h3 className="mt-6 about-h3">&#42; 용인대학교 졸업</h3>
          <p>2017.03~2022.02</p>
          <p>미디어디자인학과 미디어디자인 전공 (UX/UI)</p>
        </div>
      </div>
    </div>
  );
};
export default About;

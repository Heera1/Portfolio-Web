export const projectData = [
  {
    id: 1,
    name: "Portfolio",
    summary: "나만의 포트폴리오 웹사이트",
    role: "",
    stack: ["Next.js", "Typescript", "React", "Tailwind CSS", "emailjs"],
    info: {
      period: "2023.07-2023.07",
      division: "Solo Project",
      members: "",
      link: "https://hobbyt.vercel.app/",
      github: "https://github.com/ko9612/Hobbyt",
    },
    slide: [
      {
        text: "Portfolio 프로젝트는 React, Typescript, Next.js를 이용한 웹 어플리케이션입니다. Tailwind CSS를 사용하여 스타일링을 하고 있습니다. ",
        img: "/portfolio.png",
      },
      {
        text: "emailjs를 사용하여 백엔드 서버와 통신없이 contact 이메일을 보낼 수 있도록 구현하였습니다.",
        img: "/portfolio_email.png",
      },
    ],
  },
  {
    id: 2,
    name: "Hobbyt",
    summary: "취미를 기록하고 판매하는 웹 사이트",
    role: "FE 팀장",
    stack: [
      "Next.js",
      "Typescript",
      "React",
      "Axios",
      "Tailwind CSS",
      "Recoil",
      "Websocket",
    ],
    info: {
      period: "2022.12-2023.04",
      division: "Team Project",
      members: "FE 2인 / BE 2인",
      link: "https://hobbyt.vercel.app/",
      github: "https://github.com/ko9612/Hobbyt",
    },
    slide: [
      {
        text: "Hobbyt 프로젝트는 React, Typescript, Next.js를 이용한, 블로그, 알림, 판매, 마이 페이지, 검색 등의 페이지로 구성되어 있는 웹 어플리케이션입니다. 모바일 환경에서도 불편함없이 사용할 수 있도록 반응형 웹 어플리케이션으로 작업하였습니다.",
        img: "/hobbyt.png",
      },
      {
        text: "무한 스크롤을 적용한 알림 페이지입니다. 알림 리스트를 클릭하면 연관된 페이지로 이동할 수 있습니다.",
        img: "/hobbyt_alarm.gif",
      },
      {
        text: "무한 스크롤을 적용한 내 블로그 페이지의 블로그 게시글 리스트입니다. 최신순과 인기순으로 정렬을 할 수 있으며, 블로그 게시글 작성 시 비밀글로 설정하면 블로그 본인에게만 게시글이 보이도록 구현하였습니다.",
        img: "/hobbyt_blog.gif",
      },
      {
        text: "아이폰 SE 사이즈에 맞춰 반응형을 작업했습니다.",
        img: "/hobbyt_reponse.gif",
      },
    ],
  },
  {
    id: 3,
    name: "Codetech",
    summary: "테크 장비 리뷰 사이트",
    role: "FE 팀원",
    stack: ["Typescript", "React", "Axios", "Tailwind CSS", "Zustand"],
    info: {
      period: "2022.11-2022.12",
      division: "Team Project",
      members: "FE 4인 / BE 3인",
      link: "https://codetech.nworld.dev/landingpage",
      github: "https://github.com/codestates-seb/seb40_main_011",
    },
    slide: [
      {
        text: "Codetech 프로젝트는 React, Typescript를 이용한, 리뷰, 검색, 질문 답변, 마이페이지 등의 페이지로 구성되어 있는 웹 어플리케이션입니다. 모바일 환경에서도 불편함없이 사용할 수 있도록 반응형 웹 어플리케이션으로 작업하였고, 사용자 취향에 맞춰 다크모드로 변경할 수 있도록 구현하였습니다.",
        img: "/codetech.png",
      },
      {
        text: "useState를 이용하여 이메일 유효성 검사와 이메일 인증 기능을 추가한 회원가입 페이지를 구현했습니다.",
        img: "/codetech_signup.png",
      },
      {
        text: "재사용 가능한 셀렉터 컴포넌트를 만들어 리뷰 작성에 필요한 제품을 선택하거나, 원하는 제품이 없다면 제품 추가하기 버튼을 통해 원하는 제품을 추가할 수 있도록 구현하였습니다.",
        img: "/codetech_review_modal.gif",
      },
      {
        text: "리뷰 작성은 Toast-UI-Editor를 이용해 작성할 수 있도록 하였으며, 에디터 자체 이미지 업로드 함수 addImageBlobHook을 수정하여 이미지가 base64로 삽입되지 않고, 서버에 요청한 uuid.파일 확장자명으로 삽입될 수 있도록 구현하였습니다.",
        img: "/codetech_review_image.gif",
      },
      {
        text: "다크모드를 적용한 모습입니다.",
        img: "/codetech_darkmode.png",
      },
    ],
  },
  {
    id: 4,
    name: "Stack Overflow Clone",
    summary: "Stack Overflow 클론 프로젝트",
    role: "FE 팀원",
    stack: ["Javascript", "React", "Styled-Component", "AWS(EC2)"],
    info: {
      period: "2022.11-2022.11",
      division: "Team Project",
      members: "FE 3인 / BE 3인",
      link: "",
      github: "https://github.com/codestates-seb/seb40_pre_015",
    },
    slide: [
      {
        text: "Stack Overflow Clone 프로젝트는 React를 이용한, 회원가입, 로그인, 유저, 태그 등의 페이지로 구성되어 있는 웹 어플리케이션입니다. AWS EC2를 사용해 배포하였으나, 현재는 배포 중단된 상태입니다.",
        img: "/stackoverflow.png",
      },
    ],
  },
];

export const projectInfo = [
  {
    name: "Portfolio Website",
    summary: "나만의 포트폴리오 웹 사이트",
    role: "",
    stack: ["Next.js", "Typescript", "React", "Tailwind CSS"],
    img: "/portfolio.png",
    id: 1,
  },
  {
    name: "Hobbyt",
    summary: "취미를 기록하고 판매하는 웹 사이트",
    role: "FE 팀장",
    stack: [
      "Next.js",
      "Typescript",
      "React",
      "Axios",
      "Tailwind CSS",
      "Recoil",
      "Websocket",
    ],
    img: "/hobbyt.png",
    id: 2,
  },
  {
    name: "Codetech",
    summary: "테크 장비 리뷰 사이트",
    role: "FE 팀원",
    stack: ["Typescript", "React", "Axios", "Tailwind CSS", "Zustand"],
    img: "/codetech.png",
    id: 3,
  },
  {
    name: "Stack Overflow Clone",
    summary: "Stack Overflow 클론 프로젝트",
    role: "FE 팀원",
    stack: ["Javascript", "React", "Styled-Component", "AWS(EC2)"],
    img: "/stackoverflow.png",
    id: 4,
  },
];

interface NavArrType {
  id: number;
  name: string;
  link: string;
}

export const navArr: NavArrType[] = [
  { id: 1, name: "About Me", link: "/about" },
  { id: 2, name: "Project", link: "/project" },
  { id: 3, name: "UX/UI Design", link: "/portfolio" },
  { id: 4, name: "Contact", link: "/contact" },
];

interface stackArrType {
  id: string;
  value: string[];
}

export const stackArr: stackArrType[] = [
  {id: "language", value: ["Javascript", "Typescript", "C#"] },
  {id: "front", value: ["HTML5", "CSS", "React", "Next.js", "TailwindCSS", "Styled-Component", "Axios", "Zustand", "Recoil"]},
  {id: "back", value: ["AWS(EC2)"]},
  {id: "tool", value: ["Git", "Azure DevOps", "Notions"]},
  {id: "design", value: ["Photoshop", "Illustrator", "Adobe XD", "Figma"]}
]
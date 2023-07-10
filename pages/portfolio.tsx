import portfolio from "../public/_UX:UI.jpg";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="h-auto page-layout">
      <h1 className="px-2 text-white bg-MainColor page-title">
        UX/UI DESIGN PORTFOLIO
      </h1>
      <div className="scroll-container">
        <Image src={portfolio} alt="포트폴리오 이미지"></Image>
      </div>
    </div>
  );
}

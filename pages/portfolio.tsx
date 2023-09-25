import portfolio from "../public/_UX:UI.jpg";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div>
      <div className="">
        <h1 className="sticky top-0 px-2 py-2 text-white bg-MainColor page-title">
          UX/UI DESIGN PORTFOLIO
        </h1>
        <Image src={portfolio} alt="포트폴리오 이미지"></Image>
      </div>
    </div>
  );
}

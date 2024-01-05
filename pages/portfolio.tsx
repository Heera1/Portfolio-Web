import portfolio from "../public/_UX_UI.jpg";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div>
        <h1 className="px-2 py-2 text-white bg-MainColor page-title">
          UX/UI DESIGN PORTFOLIO
        </h1>
        <Image src={portfolio} alt="포트폴리오 이미지"></Image>
    </div>
  );
}

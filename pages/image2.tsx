import Image from "next/image";
import ex from "../public/FrontEnd-Test-Image.png";

export default function Image2() {
  return (
    <div className="page-layout">
      <Image
        src={ex}
        alt=""
        width={600}
        height={600}
        className="object-cover w-[600px] h-[600px]"
      ></Image>
    </div>
  );
}

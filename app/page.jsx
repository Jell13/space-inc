import Image from "next/image";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-[500px]">
        <Spline scene="https://prod.spline.design/q8AJdlcc0iDWxXKk/scene.splinecode"/>
      </div>
    </div>
  );
}

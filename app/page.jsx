import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-[500px]">
        <Spline scene="https://prod.spline.design/q8AJdlcc0iDWxXKk/scene.splinecode"/>
      </div>
      {/* <div className="md:w-1/2 px-12 flex flex-col gap-3 ">
        <h1 className="text-xl font-bold">Explorer's delight</h1>
        <p>Endless adventure awaits to those with curious minds</p>
      </div> */}
    </div>
  );
}

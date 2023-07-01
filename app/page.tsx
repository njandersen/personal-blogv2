import Image from "next/image";
import { BsInstagram, BsGithub } from "react-icons/bs";
import {TbWorldWww} from "react-icons/tb";

import PostFeed from "@/components/PostFeed";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="about-container flex justify-evenly items-center pt-20 pb-20">
        <div className="about" >
          <h1 className="text-6xl ">Hello, I'm <span className="font-bold">Nicholas</span></h1> 
          <h1 className="text-6xl ">A Front End Engineer</h1>
          <h1 className="text-6xl ">This is my blog</h1>
          <p className="pt-2">
            Just a guy who loves art and software engineering.
          </p>
          <div className="pt-3">
            <button className="bg-fuchsia-700 p-2 px-4 text-white rounded-xl">Contact Me</button>
            <button className=" ml-4 p-3 rounded-full border border-fuchsia-700"><BsInstagram size="1.5rem" /> </button>
            <button className=" ml-4 p-3 rounded-full border border-fuchsia-700"><BsGithub size="1.5rem" /> </button>
            <button className=" ml-4 p-3 rounded-full border border-fuchsia-700"><TbWorldWww size="1.5rem" /> </button>
          </div>
        </div>
        <div className="about-image place-content-end">
          <Image
            className="rounded-full shadow-xl w-96 h-96"
            src="/Me-n-Fox2.jpg"
            width={500}
            height={500}
            alt="Me"
          />
          </div>
      </div>

      
    </main>
  );
}



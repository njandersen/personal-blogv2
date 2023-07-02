import Image from "next/image";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { Montserrat } from "next/font/google";

import PostFeed from "@/components/Posts/PostFeed";
import NewestPost from "@/components/Posts/NewestPost";

const post = {
  title: "Mastering JavaScript: Essential Tips for Beginners",
  content:
    "Are you new to the world of JavaScript? Don't worry, we've got you covered! In this comprehensive guide, we'll walk you through the fundamentals of JavaScript and provide you with essential tips to help you become a proficient JavaScript developer. From variables and data types to control structures and functions, we'll explore it all. Get ready to embark on an exciting journey of learning and mastering JavaScript!",
  slug: "mastering-javascript-essential-tips-for-beginners",
  date: "2023-05-06",
  image: "/pexels-riccardo-307008.jpg",
};

const mont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="about-container flex justify-center items-end pt-20 pb-20">
        <div className="about mr-64">
          <h1 className={`${mont.className} text-6xl`}>
            Hello, I'm <span className="font-bold">Nicholas</span>
          </h1>
          <h1 className={`${mont.className} text-6xl`}>A Front End Engineer</h1>
          <h1 className={`${mont.className} text-6xl`}>This is my blog</h1>
          <p className="pt-2">
            Just a guy who loves art and software engineering.
          </p>
          <div className="pt-3">
            <button className="bg-fuchsia-700 p-2 px-4 text-white rounded-xl">
              Contact Me
            </button>
            <button className=" ml-4 p-3 rounded-full border border-fuchsia-700">
              <BsInstagram size="1.5rem" />{" "}
            </button>
            <button className=" ml-4 p-3 rounded-full border border-fuchsia-700">
              <BsGithub size="1.5rem" />{" "}
            </button>
            <button className=" ml-4 p-3 rounded-full border border-fuchsia-700">
              <TbWorldWww size="1.5rem" />{" "}
            </button>
          </div>
        </div>
        <div className="about-image">
          <Image
            className="rounded-full shadow-xl w-96 h-96"
            src="/Me-n-Fox2.jpg"
            width={500}
            height={500}
            alt="Me"
          />
        </div>
      </div>
      <div className="mt-20 w-full h-[0px] border border-gray-300 border-dashed"></div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-20">Newest Post</h2>
        <div className="ml-80">
          <NewestPost post={post} />
        </div>
      </div>
      <div className="mt-20 w-full h-[0px] border border-gray-300 border-dashed"></div>
      <div>
        <PostFeed />
      </div>
    </main>
  );
}

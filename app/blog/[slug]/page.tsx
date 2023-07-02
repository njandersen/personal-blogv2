import Image from "next/image";

interface Post {
  title: string;
  content: string;
  slug: string;
  date: string;
}

interface Props {
  params: { slug: string };
}

const post = {
  title: "Mastering JavaScript: Essential Tips for Beginners",
  content:
    "Are you new to the world of JavaScript? Don't worry, we've got you covered! In this comprehensive guide, we'll walk you through the fundamentals of JavaScript and provide you with essential tips to help you become a proficient JavaScript developer. From variables and data types to control structures and functions, we'll explore it all. Get ready to embark on an exciting journey of learning and mastering JavaScript!",
  slug: "mastering-javascript-essential-tips-for-beginners",
  date: "2023-05-06",
  image: "/pexels-riccardo-307008.jpg",
};

export default async function BlogPost({ params }: Props) {
  // const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
  //   (res) => res.json()
  // );

  // const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div className="flex justify-around mt-20 ">
      <div key={post.slug} className="max-w-2xl">
        <div className="mb-4">
          {post.image ? (
            <Image
              src={post.image}
              width={500}
              height={500}
              alt="Me"
              className="rounded-2xl"
            />
          ) : null}
        </div>

        <h1 className="text-xl font-bold">{post.title}</h1>

        <div className="mb-4 mt-10 flex justify-between">
          <p className="text-sm font-light text-gray-400">{post.date}</p>
        </div>
        <p className="mt-10">{post.content}</p>
      </div>
    </div>
  );
}

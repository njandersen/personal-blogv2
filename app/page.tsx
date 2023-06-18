import Image from "next/image";

import PostFeed from "@/components/PostFeed";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div>
        <Image
          className="rounded-lg shadow-xl"
          src="/Me-n-Fox2.jpg"
          width={500}
          height={500}
          alt="Me"
        />
      </div>
      <PostFeed />
    </main>
  );
}

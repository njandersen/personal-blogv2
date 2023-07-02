import Link from "next/link";
import Image from "next/image";

interface Post {
  title: string;
  content: string;
  slug: string;
  date: string;
  image?: string;
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const MAX_WORDS = 50;
  const words = post.content.split(" ");
  const previewWords = words.slice(0, MAX_WORDS);
  const preview = previewWords.join(" ");
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className="flex justify-around border border-gray-300 rounded-xl py-4 px-4 h-full shadow-xl ">
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
        <Link href={`/blog/${post.slug}`}>
          <h1 className="text-xl font-bold">{post.title}</h1>
        </Link>

        <p className="mt-10">{preview} ...</p>
        <div className="mb-4 mt-10 flex justify-between">
          <p className="text-sm font-light text-gray-400">{post.date}</p>
          <p className="text-sm font-light text-gray-400">
            {wordCount} words ({minutesToRead} min read)
          </p>
        </div>
      </div>
    </div>
  );
}

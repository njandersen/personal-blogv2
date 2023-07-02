import Image from "next/image";
import Link from "next/link";

interface Post {
  title: string;
  content: string;
  slug: string;
  date: string;
  image?: string;
}

export default function NewestPost({ post }: { post: Post }) {
  const MAX_WORDS = 50;
  const words = post.content.split(" ");
  const previewWords = words.slice(0, MAX_WORDS);
  const preview = previewWords.join(" ");
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
    <div className="flex">
      <div>
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
      <div className="ml-10">
        <Link href={`/blog/${post.slug}`}>
          <h1 className="text-xl font-bold">{post.title}</h1>
        </Link>
        <div className="mb-4 flex justify-between">
          <p className="text-sm font-light text-gray-400">{post.date}</p>
          <p className="text-sm font-light text-gray-400">
            {wordCount} words ({minutesToRead} min read)
          </p>
        </div>
        <div className="max-w-2xl">{preview} ...</div>
      </div>
    </div>
  );
}

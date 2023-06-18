import Link from "next/link";

interface Post {
  title: string;
  content: string;
  slug: string;
  date: string;
}

export default function Post({ post }: { post: Post[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 mx-4">
      {post.map((post) => (
        <div
          key={post.slug}
          className="border-2 border-black p-4 rounded-lg shadow-lg"
        >
          <Link href={`/blog/${post.slug}`}>
            <h1 className="text-xl font-bold">{post.title}</h1>
          </Link>
          <p>{post.content}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}

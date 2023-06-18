import Post from "./Post";

interface Post {
  title: string;
  content: string;
  slug: string;
  date: string;
}

export default async function PostFeed() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );
  return (
    <div>
      <h1>This is where all the posts will go!</h1>
      <div>
        <Post post={posts} />
      </div>
    </div>
  );
}

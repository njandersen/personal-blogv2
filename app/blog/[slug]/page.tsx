interface Post {
  title: string;
  content: string;
  slug: string;
  date: string;
}

interface Props {
  params: { slug: string };
}

export default async function BlogPost({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>Blog Post</h1>
      <h3>{post.date}</h3>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

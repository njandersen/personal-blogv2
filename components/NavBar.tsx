import Link from "next/link";
import { Merriweather } from "next/font/google";
import AuthCheck from "./AuthCheck";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
});
export default function NavBar() {
  return (
    <nav className="flex flex-col items-center justify-center ">
      <div className="border-b-2 pb-10 border-black w-2/3 items-center justify-center flex flex-col ">
        <Link href="/">
          <h1 className={`mt-3 ${merriweather.className} text-3xl font-bold`}>
            N.J. Andersen
          </h1>
        </Link>
        <p>Software Engineer, Nerd.</p>
      </div>
      <ul className="flex p-3 ">
        <li className="pr-3">
          <Link href="/">
            <h1>Feed</h1>
          </Link>
        </li>
        <li className="pr-3">
          <Link href="/about">
            <h1>About</h1>
          </Link>
        </li>
        <AuthCheck>
          <li className="pr-3">
            <Link href="/create">
              <h1>Create Post</h1>
            </Link>
          </li>
        </AuthCheck>
      </ul>
    </nav>
  );
}

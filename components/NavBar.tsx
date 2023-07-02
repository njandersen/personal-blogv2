import Link from "next/link";
import { Merriweather } from "next/font/google";
import AuthCheck from "./AuthCheck";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
});
export default function NavBar() {
  return (
    <div className="w-full h-[98px] relative">
      <div className="left-[30px] top-0 absolute text-black text-[40px] font-bold">
        N. J. Andersen
        <br />
      </div>
      <div className="left-2/4 top-[70px] md:top-[35px] absolute text-black text-lg font-medium">
        <Link href="/">
          <h1>Feed</h1>
        </Link>
      </div>

      <div className="left-2/3 top-[70px] md:top-[35px] absolute text-black text-lg font-medium">
        <AuthCheck>
          <Link href="/create">
            <h1>Create Post</h1>
          </Link>
        </AuthCheck>
      </div>
      <div className="w-full h-[0px] left-0 top-[93px] absolute border border-neutral-400"></div>
    </div>
  );
}

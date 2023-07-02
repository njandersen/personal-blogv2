import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={mont.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}

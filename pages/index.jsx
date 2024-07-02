import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/indexComponents/NavBar";
import ContentContainer from "@/components/indexComponents/ContentContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar/>
      <ContentContainer/>
    </main>
  );
}

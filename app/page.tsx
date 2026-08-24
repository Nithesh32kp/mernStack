import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-gradient-to-r from-pink-200 to-rose-300 font-sans dark:bg-black">
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
}

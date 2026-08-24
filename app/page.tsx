import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-gradient-to-r from-slate-500 to-slate-800 font-sans dark:bg-black">
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
}

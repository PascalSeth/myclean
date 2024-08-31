import Image from "next/image";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <main className="w-full flex overflow-x-hidden flex-col h-screen">
      <Homepage/>
    </main>
  );
}

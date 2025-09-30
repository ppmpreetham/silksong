import Header from "@/components/Header";
import Env from "@/components/card/Env";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center text-white">
      <Header />
      <Env />
    </div>
  );
}

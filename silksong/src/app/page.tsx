import Header from "@/components/Header";
import Env from "@/components/card/Env";
import MultiCards from "@/components/card/MultiCards";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center text-white">
      <Header />
      <Env />
      <MultiCards />
      <div className="h-screen"></div>
    </div>
  );
}

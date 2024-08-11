import AuthenticationButton from "@/components/authentication";
import Bot from "@/components/bot";
import Interaction from "@/components/interaction";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className=" bg-[#182141] h-full">
      <AuthenticationButton />
      <Sidebar />
      <Bot />
      <Interaction />
    </main>
  );
}

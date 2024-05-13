import AuthenticationButton from "@/components/authentication";
import Bot from "@/components/bot";
import Sidebar from "@/components/sidebar";
import UserPrompt from "@/components/userPrompt";

export default function Home() {
  return (
    <main className=" bg-[#182141] h-full">
      <AuthenticationButton />
      <Sidebar />
      <Bot />
      <UserPrompt />
    </main>
  );
}

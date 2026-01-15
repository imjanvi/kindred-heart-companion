import { useState } from "react";
import WelcomeHero from "@/components/WelcomeHero";
import ChatInterface from "@/components/ChatInterface";
import Footer from "@/components/Footer";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return (
      <>
        <ChatInterface onBack={() => setShowChat(false)} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <WelcomeHero onStart={() => setShowChat(true)} />
      <Footer />
    </>
  );
};

export default Index;

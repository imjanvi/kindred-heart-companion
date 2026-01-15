import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Heart } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
}

interface ChatInterfaceProps {
  onBack: () => void;
}

const companionResponses = [
  "I hear you, and I want you to know that your feelings are completely valid. It takes courage to open up like this. 💜\n\nWhat you're experiencing sounds really challenging. Remember, it's okay to not have all the answers right now. Sometimes the bravest thing we can do is simply acknowledge how we feel.\n\nWould you like to tell me more about what's been weighing on your heart?",
  
  "Thank you for trusting me with this. What you're going through sounds incredibly difficult, and I want you to know - you don't have to face this alone. 🌸\n\nOur hearts often carry more than we realize. The fact that you're here, trying to make sense of your feelings, shows real strength.\n\nCan you help me understand what feels most overwhelming right now?",
  
  "I can feel how much this matters to you, and I'm grateful you're sharing it with me. Your emotions are telling you something important. 💛\n\nSometimes when we're in the middle of something painful, it can be hard to see clearly. But that's okay - clarity often comes gently, bit by bit.\n\nWhat do you think you need most right now - to be heard, to problem-solve, or simply to feel less alone?",
  
  "That sounds really hard, and I'm so sorry you're going through this. Please know that feeling confused or hurt doesn't mean you're broken - it means you care deeply, and that's beautiful. 🌷\n\nHealing isn't linear. Some days will feel harder than others, and that's perfectly normal. What matters is that you're being kind to yourself through this.\n\nIs there something specific that's been replaying in your mind?",
  
  "I appreciate you being so open with me. It takes real vulnerability to put words to what we're feeling, especially when it involves matters of the heart. 💕\n\nYou deserve relationships that make you feel safe, valued, and at peace. Never forget that your worth isn't determined by anyone else's ability to see it.\n\nWhat would help you feel a little more at peace today?"
];

const ChatInterface = ({ onBack }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello, beautiful soul. 💜\n\nI'm so glad you're here. This is a safe space where you can share anything that's on your heart - without fear of judgment.\n\nWhether you're navigating a difficult relationship, healing from heartbreak, working through feelings of self-doubt, or simply need someone to listen... I'm here for you.\n\nWhat would you like to talk about today?",
      isUser: false,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate thoughtful response delay
    await new Promise((resolve) => setTimeout(resolve, 2000 + Math.random() * 1500));

    const responseIndex = Math.floor(Math.random() * companionResponses.length);
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: companionResponses[responseIndex],
      isUser: false,
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <div className="min-h-screen gradient-sunset flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 rounded-xl hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary fill-primary/30" />
            </div>
            <div>
              <h1 className="font-semibold text-foreground">Your Companion</h1>
              <p className="text-xs text-muted-foreground">Here for you, always</p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              content={message.content}
              isUser={message.isUser}
            />
          ))}
          {isTyping && (
            <ChatMessage content="" isUser={false} isTyping />
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="sticky bottom-0 bg-background/80 backdrop-blur-lg border-t border-border/50">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <ChatInput onSend={handleSend} disabled={isTyping} />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

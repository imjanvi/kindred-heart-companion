import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  isUser: boolean;
  isTyping?: boolean;
}

const ChatMessage = ({ content, isUser, isTyping }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full animate-fade-up",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] md:max-w-[75%] rounded-3xl px-5 py-4 leading-relaxed",
          isUser
            ? "bg-primary text-primary-foreground rounded-br-lg"
            : "bg-card shadow-card border border-border/50 rounded-bl-lg"
        )}
      >
        {isTyping ? (
          <div className="flex items-center gap-1.5 py-1">
            <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse-soft" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse-soft" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse-soft" style={{ animationDelay: "300ms" }} />
          </div>
        ) : (
          <p className="text-[15px] whitespace-pre-wrap">{content}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;

import { useState, KeyboardEvent } from "react";
import { Send, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative">
      <div className="bg-card border border-border/60 rounded-2xl shadow-soft overflow-hidden focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary/40 transition-all duration-300">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Share what's on your heart..."
          disabled={disabled}
          rows={1}
          className={cn(
            "w-full px-5 py-4 pr-14 bg-transparent resize-none",
            "placeholder:text-muted-foreground/60 text-foreground",
            "focus:outline-none text-[15px] leading-relaxed",
            "min-h-[56px] max-h-[150px]",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          style={{ 
            height: 'auto',
            minHeight: '56px'
          }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = Math.min(target.scrollHeight, 150) + 'px';
          }}
        />
        <button
          onClick={handleSend}
          disabled={!message.trim() || disabled}
          className={cn(
            "absolute right-3 bottom-3 p-2.5 rounded-xl transition-all duration-300",
            "flex items-center justify-center",
            message.trim() && !disabled
              ? "bg-primary text-primary-foreground shadow-soft hover:scale-105 active:scale-95"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          )}
        >
          {message.trim() ? (
            <Send className="w-4 h-4" />
          ) : (
            <Heart className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;

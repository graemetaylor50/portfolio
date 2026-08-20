"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./ChatBot.css";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

export default function DigitalTwin() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I'm Graeme's Digital Twin. Ask me anything about Graeme's experience, skills, projects, or career.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, loading, isOpen]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        `https://digital-twin-api-nine.vercel.app/chat?message=${encodeURIComponent(
          userMessage
        )}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: data.response,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Sorry, I couldn't process that request. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-avatar">G</div>

            <div className="chat-header-info">
              <h2>Graeme's Digital Twin</h2>

              <div className="online-status">
                <span />
                Online
              </div>
            </div>

            <button
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message-row ${msg.sender}`}
              >
                {msg.sender === "bot" && (
                  <div className="message-avatar">G</div>
                )}

                <div className={`message-bubble ${msg.sender}`}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}

            {loading && (
              <div className="message-row bot">
                <div className="message-avatar">G</div>

                <div className="message-bubble bot typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={loading}
            />

            <button
              onClick={sendMessage}
              disabled={!message.trim() || loading}
              aria-label="Send message"
            >
              ↑
            </button>
          </div>
        </div>
      )}

      <button
        className={`chat-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? "×" : "💬"}
      </button>
    </>
  );
}
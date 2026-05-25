"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

type Message = {
  id: string;
  job_id: string;
  sender_id: string;
  message: string;
  created_at: string;
};

export default function JobChatPage() {
  const { jobId } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
const [currentUser, setCurrentUser] = useState<any>(null);


  async function fetchMessages() {
    const { data } = await supabase
      .from("job_messages")
      .select("*")
      .eq("job_id", jobId)
      .order("created_at", { ascending: true });

    setMessages(data || []);
  }

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
  setCurrentUser(data.user);
});
    fetchMessages();

    const channel = supabase
      .channel("job-chat")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "job_messages",
          filter: `job_id=eq.${jobId}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message]);
        }
      )
      .subscribe();
      setTimeout(() => {
  const el = document.getElementById("chat-container");

  if (el) {
    el.scrollTop = el.scrollHeight;
  }
}, 100);

    return () => {
      supabase.removeChannel(channel);
    };
  }, [jobId]);

  async function sendMessage() {
    if (!text.trim()) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    await supabase.from("job_messages").insert({
      job_id: jobId,
      sender_id: user.id,
      message: text,
    });

    setText("");
  }

return (
  <div className="flex h-screen flex-col bg-gray-100">
    
    {/* Header */}
    <div className="border-b bg-white px-6 py-4 shadow-sm">
      <h1 className="text-xl font-bold text-black">
        Job Chat
      </h1>
      <p className="text-sm text-gray-500">
        Realtime conversation
      </p>
    </div>

    {/* Messages */}
    <div
      id="chat-container"
      className="flex-1 overflow-y-auto px-4 py-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {messages.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <p className="text-sm text-gray-500">
              No messages yet
            </p>
          </div>
        ) : (
          messages.map((m) => {
            const isMine = m.sender_id === currentUser?.id;

            return (
              <div
                key={m.id}
                className={`flex ${
                  isMine ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                    isMine
                      ? "bg-[#000b76] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <p className="text-sm leading-relaxed">
                    {m.message}
                  </p>

                  <div
                    className={`mt-2 flex items-center gap-2 text-xs ${
                      isMine
                        ? "text-blue-100"
                        : "text-gray-400"
                    }`}
                  >
                    <span>
                      {isMine ? "You" : "Client"}
                    </span>

                    <span>•</span>

                    <span>
                      {new Date(
                        m.created_at
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>

    {/* Input */}
    <div className="border-t bg-white p-4">
      <div className="mx-auto flex max-w-3xl gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#000b76] focus:bg-white"
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-[#000b76] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Send
        </button>
      </div>
    </div>
  </div>
);}
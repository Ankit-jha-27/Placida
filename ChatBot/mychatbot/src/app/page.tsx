"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import dynamic from "next/dynamic";
import { Send, Upload } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
}

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyADKjBWLycmFDu8Fe8V9dMUAmE8NWYXXfo`;

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [parsedFileContent, setParsedFileContent] = useState<string | null>(null);
  const [uploadedFileType, setUploadedFileType] = useState<"pdf" | "image" | null>(null);
  const [isParsingPdf, setIsParsingPdf] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const pdfScriptLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const loadPdfJsCdn = async (): Promise<void> => {
    if (pdfScriptLoadedRef.current) return;
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js";
      script.async = true;
      script.onload = () => {
        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
        }
        pdfScriptLoadedRef.current = true;
        resolve();
      };
      script.onerror = (e) => reject(e);
      document.head.appendChild(script);
    });
  };

  const parsePdfFile = async (file: File) => {
    setIsParsingPdf(true);
    try {
      await loadPdfJsCdn();
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      let fullText = "";
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        fullText += textContent.items.map((item: any) => item.str).join(" ") + "\n\n";
      }

      setMessages((prev) => [
        ...prev,
        { id: uuidv4(), role: "user", content: `📎 Uploaded PDF: ${file.name}` },
      ]);

      setUploadedFileName(file.name);
      setUploadedFileType("pdf");
      setParsedFileContent(fullText); // store parsed text but don’t show in UI
      console.log("📄 Parsed PDF content:", fullText);
    } catch (err) {
      setMessages((prev) => [...prev, { id: uuidv4(), role: "ai", content: `❌ Error reading PDF.` }]);
    } finally {
      setIsParsingPdf(false);
    }
  };

  const parseImageFile = async (file: File) => {
    const base64 = await toBase64(file);
    setMessages((prev) => [
      ...prev,
      { id: uuidv4(), role: "user", content: `📎 Uploaded Image: ${file.name}` },
    ]);

    setUploadedFileName(file.name);
    setUploadedFileType("image");
    setParsedFileContent(base64); // store base64 but don’t show in UI
    console.log("🖼️ Encoded Image:", base64.substring(0, 100) + "...");
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type === "application/pdf") {
      await parsePdfFile(file);
    } else if (file.type.startsWith("image/")) {
      await parseImageFile(file);
    } else {
      setMessages((prev) => [...prev, { id: uuidv4(), role: "ai", content: "⚠️ Only PDF or image files are supported." }]);
    }

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSend = async () => {
    if (!input.trim() && !parsedFileContent) return;

    // Always show only the user input in chat (not parsed content)
    if (input.trim()) {
      const userMessage: Message = { id: uuidv4(), role: "user", content: input };
      setMessages((prev) => [...prev, userMessage]);
    }

    setInput("");
    setIsTyping(true);

    try {
      const contents: any[] = [
        {
          role: "user",
          parts: [{ text: input }],
        },
      ];

      // Attach parsed file content silently
      if (uploadedFileType === "pdf" && parsedFileContent) {
        contents[0].parts.push({
          text: `\n\n[Attached PDF content]\n${parsedFileContent}`,
        });
      } else if (uploadedFileType === "image" && parsedFileContent) {
        contents[0].parts.push({
          inlineData: {
            mimeType: "image/png", // or detect actual file type
            data: parsedFileContent,
          },
        });
      }

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents }),
      });

      const data = await res.json();
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "I couldn’t understand that.";
      setMessages((prev) => [...prev, { id: uuidv4(), role: "ai", content: aiText }]);
    } catch (err) {
      setMessages((prev) => [...prev, { id: uuidv4(), role: "ai", content: "❌ Error getting AI response." }]);
    } finally {
      setIsTyping(false);
      setUploadedFileName(null);
      setUploadedFileType(null);
      setParsedFileContent(null); // clear after sending
    }
  };

  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen p-4 md:p-6 bg-muted">
      <div className="max-w-3xl w-full mx-auto mb-4">
        <h1 className="text-3xl font-semibold text-center text-foreground">
          My Chatbot
        </h1>
      </div>
      <Card className="flex flex-col flex-grow max-w-3xl mx-auto w-full">
        <CardContent className="flex-grow overflow-hidden p-0">
          <ScrollArea className="h-full w-full p-4 space-y-4">
            {messages.map((msg) => (
              <MotionDiv
                key={msg.id}
                className={`rounded-xl px-4 py-2 max-w-[80%] whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-secondary text-secondary-foreground mr-auto"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {msg.content}
              </MotionDiv>
            ))}

            {isTyping && (
              <MotionDiv className="bg-secondary text-secondary-foreground rounded-xl px-4 py-2 max-w-[80%] mr-auto animate-pulse">
                AI is typing...
              </MotionDiv>
            )}
            <div ref={bottomRef} />
          </ScrollArea>
        </CardContent>

        {/* Bottom area */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-2 mb-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf,image/*"
              onChange={onFileChange}
              className="hidden"
            />
            <Button
              type="button"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2"
            >
              <Upload className="h-4 w-4" />
              Upload File
            </Button>

            {uploadedFileName && (
              <div className="ml-2 px-2 py-1 rounded-md text-sm bg-muted-foreground/10 text-foreground">
                {uploadedFileName}
              </div>
            )}

            {isParsingPdf && (
              <div className="ml-auto text-sm text-muted-foreground">Parsing PDF...</div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <Input
              className="flex-1"
              placeholder="Send a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button type="submit" size="icon" disabled={!input.trim() && !parsedFileContent}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
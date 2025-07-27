"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useState, useEffect } from "react";
import { Send, Bot, User, Minimize2 } from "lucide-react";
import {
  Avatar,
  Box,
  Button,
  Icon,
  IconButton,
  Input,
  Flex,
} from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@chakra-ui/react";
import { bungee, openSans } from "../../app/fonts";
import useOutsideClick from "../../hooks/useOutsideClick";
import StreamingText from "../StreamingText/StreamingText";

const ChatbotAI = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: "/api/chat",
    });
  const [isMinimized, setIsMinimized] = useState<boolean>(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useOutsideClick(() => setIsMinimized(true));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedQuestions = [
    "What technologies do you work with?",
    "Tell me about your recent projects",
    "What's your professional background?",
    "Are you available for new opportunities?",
    "How can I get in touch with you?",
  ];

  const handleSuggestedQuestion = (question: string) => {
    const syntheticEvent = {
      preventDefault: () => {},
      target: {
        message: { value: question },
      } as any,
    };

    handleInputChange({ target: { value: question } } as any);
    setTimeout(() => {
      handleSubmit(syntheticEvent);
    }, 100);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <IconButton
          onClick={() => setIsMinimized(false)}
          className="shadow-lg text-white"
          rounded={"full"}
          bg={"blue.600"}
          _hover={{
            bg: "blue.700",
          }}
          size="2xl"
          aria-label="Open chatbot button"
        >
          <Icon size="2xl">
            <Bot />
          </Icon>
        </IconButton>
      </div>
    );
  }

  return (
    <div
      className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 fixed bottom-4 right-4 z-50"
      ref={chatbotRef as React.RefObject<HTMLDivElement>}
    >
      <div className="max-w-2xl mx-auto">
        <Card.Root className="shadow-xl border-0 bg-white/80 backdrop-blur">
          <CardHeader
            className="border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg font-mono"
            p={5}
          >
            <div className="flex items-center justify-between">
              <Flex alignItems={"center"} gap={3}>
                <Avatar.Root className="w-10 h-10 border-2 border-white">
                  <Avatar.Image src="https://github.com/shadcn.png" />
                  <Avatar.Fallback>AI</Avatar.Fallback>
                </Avatar.Root>
                <div>
                  <CardTitle
                    className={`text-lg ${bungee.className} antialiased`}
                  >
                    Portfolio Assistant
                  </CardTitle>
                  <p
                    className={`text-blue-100 text-sm ${openSans.className} antialiased`}
                  >
                    Online • Ready to help
                  </p>
                </div>
              </Flex>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(true)}
                className="text-white"
                aria-label={"Close chatbot button"}
                _hover={{
                  bgColor: "rgb(255 255 255 / 0.3)",
                }}
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardBody className="overflow-y-auto p-6">
            {error && (
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Avatar.Root bgColor={"red.500"}>
                    <Avatar.Fallback
                      color="white"
                      className={`${bungee.className} antialiased`}
                    >
                      <Bot className="text-white" />
                    </Avatar.Fallback>
                  </Avatar.Root>
                  <Box bgColor={"#F1F5F9"} rounded={"lg"} p={3}>
                    <p className="text-sm text-slate-600 font-medium">
                      {error.message}
                    </p>
                  </Box>
                </div>
              </div>
            )}
            {!error &&
              (messages.length === 0 ? (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 h-[400px]">
                    <Avatar.Root bgColor={"blue.500"}>
                      <Avatar.Fallback
                        name="Artificial Intelligence"
                        color="white"
                        className={`${bungee.className} antialiased`}
                      />
                    </Avatar.Root>
                    <Box
                      bgColor={"#F1F5F9"}
                      rounded={"lg"}
                      p={3}
                      maxW={"xs"}
                      ml="3"
                    >
                      <StreamingText fullText="Hi! I'm here to help visitors learn about this Carlos's skills and experience. What would you like to know?" />
                    </Box>
                  </div>
                  <div className="space-y-2">
                    <p
                      className={`text-sm text-slate-600 font-medium ${bungee.className} antialiased`}
                    >
                      Try asking:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSuggestedQuestion(question)}
                          className="text-xs hover:bg-blue-50 hover:border-blue-300 font-mono"
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 gap-3 flex flex-col">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start space-x-3  ${
                        message.role === "user"
                          ? "flex-row-reverse space-x-reverse"
                          : ""
                      }`}
                    >
                      {message.role === "user" ? (
                        <Avatar.Root
                          className="w-8 h-8"
                          bgColor={"green.500"}
                          ml="3"
                        >
                          <Avatar.Fallback className="text-white text-xs">
                            <User className="text-white" />
                          </Avatar.Fallback>
                        </Avatar.Root>
                      ) : (
                        <Avatar.Root
                          className="w-8 h-8"
                          bgColor={"blue.500"}
                          mr="3"
                        >
                          <Avatar.Fallback className="text-white text-xs">
                            <Bot className="text-white" />
                          </Avatar.Fallback>
                        </Avatar.Root>
                      )}
                      <Box
                        rounded={"lg"}
                        p={3}
                        maxW={"md"}
                        bgColor={
                          message.role === "user" ? "green.500" : "#F1F5F9"
                        }
                        color={message.role === "user" ? "white" : "#1E293B"}
                        ml={message.role === "user" ? "auto" : 0}
                      >
                        <p className="text-sm whitespace-pre-wrap">
                          {message.content}
                        </p>
                      </Box>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center space-x-3">
                      <Avatar.Root
                        className="w-8 h-8"
                        bgColor={"blue.500"}
                        mr="3"
                      >
                        <Avatar.Fallback className="text-white text-xs">
                          <Bot className="text-white" />
                        </Avatar.Fallback>
                      </Avatar.Root>
                      <div className="bg-slate-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            <div ref={messagesEndRef} />
          </CardBody>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me about skills, projects, experience..."
                className="flex-1 border-slate-300 focus:border-blue-500 font-mono"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card.Root>
      </div>
    </div>
  );
};

export default ChatbotAI;

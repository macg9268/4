'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, Bot, User, Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import { chat } from '@/ai/flows/chat';
import type { ChatInput } from '@/ai/flows/chat.schema';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Logo } from './logo';

const formSchema = z.object({
  message: z.string().min(1, { message: 'Message cannot be empty.' }),
});

type Message = {
  role: 'user' | 'model';
  parts: string;
};

export function Chatbot() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  const { isSubmitting } = form.formState;

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [conversation]);
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const userInput: Message = { role: 'user', parts: values.message };
    setConversation(prev => [...prev, userInput]);

    const chatHistory = conversation.map(msg => ({
      role: msg.role,
      content: [{text: msg.parts}],
    }));

    const chatInput: ChatInput = {
      history: chatHistory,
      message: values.message,
    };
    
    // Add a placeholder for the bot's response
    setConversation(prev => [...prev, { role: 'model', parts: '...' }]);

    try {
      const botResponse = await chat(chatInput);
      const modelResponse: Message = { role: 'model', parts: botResponse };
      setConversation(prev => {
        const newConversation = [...prev];
        newConversation[newConversation.length -1] = modelResponse;
        return newConversation;
      });
    } catch (error) {
      console.error("Error getting response from chatbot:", error);
      const errorResponse: Message = { role: 'model', parts: "Sorry, I'm having trouble connecting. Please try again later." };
      setConversation(prev => {
        const newConversation = [...prev];
        newConversation[newConversation.length -1] = errorResponse;
        return newConversation;
      });
    }

    form.reset();
  }

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
          >
            <MessageCircle className="h-7 w-7" />
            <span className="sr-only">Open Chat</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full max-w-lg flex flex-col p-0">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="flex items-center gap-2 font-headline">
              <Bot className="h-6 w-6 text-primary" />
              4Cloud Assistant
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={cn('flex items-start gap-3', {
                    'justify-end flex-row-reverse': msg.role === 'user',
                  })}
                >
                  <Avatar className="h-8 w-8">
                    {msg.role === 'model' ? (
                      <>
                        <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                      </>
                    ) : (
                      <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                    )}
                  </Avatar>
                  
                  <div className={cn('rounded-lg p-3 max-w-xs md:max-w-md', {
                      'bg-primary text-primary-foreground': msg.role === 'user',
                      'bg-muted': msg.role === 'model',
                    })}>
                    {msg.parts === '...' ? (
                      <Loader className="animate-spin h-5 w-5" />
                    ) : (
                      <p className="text-sm whitespace-pre-wrap">{msg.parts}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter className="p-4 border-t bg-background">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2 w-full">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input placeholder="Ask anything..." {...field} autoComplete="off" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="icon" disabled={isSubmitting}>
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Send Message</span>
                </Button>
              </form>
            </Form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

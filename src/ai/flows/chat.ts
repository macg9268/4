'use server';

/**
 * @fileoverview A simple conversational AI flow.
 */

import {ai} from '@/ai/genkit';
import {ChatInput, ChatInputSchema, ChatOutputSchema} from './chat.schema';

export async function chat(input: ChatInput): Promise<string> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async ({history, message}) => {
    const {text} = await ai.generate({
      prompt: message,
      history: history,
    });
    return text;
  }
);

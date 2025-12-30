import {z} from 'genkit';

export const ChatInputSchema = z.object({
  history: z.array(z.any()).optional(),
  message: z.string(),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export const ChatOutputSchema = z.string();
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

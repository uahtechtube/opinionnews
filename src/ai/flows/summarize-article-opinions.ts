'use server';

/**
 * @fileOverview Summarizes the different opinions expressed in the comments of an article.
 *
 * - summarizeArticleOpinions - A function that summarizes the opinions in the comments of an article.
 * - SummarizeArticleOpinionsInput - The input type for the summarizeArticleOpinions function.
 * - SummarizeArticleOpinionsOutput - The return type for the summarizeArticleOpinions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeArticleOpinionsInputSchema = z.object({
  articleId: z.string().describe('The ID of the article to summarize comments for.'),
  comments: z.array(z.string()).describe('The comments for the article.'),
});
export type SummarizeArticleOpinionsInput = z.infer<
  typeof SummarizeArticleOpinionsInputSchema
>;

const SummarizeArticleOpinionsOutputSchema = z.object({
  summary: z.string().describe('A summary of the different opinions expressed in the comments.'),
});
export type SummarizeArticleOpinionsOutput = z.infer<
  typeof SummarizeArticleOpinionsOutputSchema
>;

export async function summarizeArticleOpinions(
  input: SummarizeArticleOpinionsInput
): Promise<SummarizeArticleOpinionsOutput> {
  return summarizeArticleOpinionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeArticleOpinionsPrompt',
  input: {schema: SummarizeArticleOpinionsInputSchema},
  output: {schema: SummarizeArticleOpinionsOutputSchema},
  prompt: `You are an expert summarizer of opinions.

You will be given a list of comments for an article, and you will summarize the different opinions expressed in the comments.

Article ID: {{{articleId}}}
Comments:
{{#each comments}}- {{{this}}}\n{{/each}}

Summary:`,
});

const summarizeArticleOpinionsFlow = ai.defineFlow(
  {
    name: 'summarizeArticleOpinionsFlow',
    inputSchema: SummarizeArticleOpinionsInputSchema,
    outputSchema: SummarizeArticleOpinionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

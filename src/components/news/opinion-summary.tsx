'use client';

import { useState } from 'react';
import { summarizeArticleOpinions } from '@/ai/flows/summarize-article-opinions';
import { Button } from '@/components/ui/button';
import { Wand2, Loader2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

interface OpinionSummaryProps {
  comments: string[];
}

export default function OpinionSummary({ comments }: OpinionSummaryProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSummarize = async () => {
    if (comments.length < 2) {
      toast({
        title: "Not enough comments",
        description: "Need at least two comments to summarize opinions.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    setError('');
    setSummary('');

    try {
      // In a real app, you might pass an articleId
      const result = await summarizeArticleOpinions({ articleId: '123', comments });
      setSummary(result.summary);
    } catch (e) {
      console.error(e);
      setError('Failed to generate summary. Please try again.');
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-8 rounded-lg border border-primary/20 bg-card p-4">
       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
            <h3 className="text-lg font-semibold font-headline text-primary">AI-Powered Opinion Summary</h3>
            <p className="text-sm text-muted-foreground">
                Get a quick overview of the different viewpoints in the comments.
            </p>
        </div>
        <Button onClick={handleSummarize} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Summarize Opinions
            </>
          )}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && (
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-semibold">View Summary</AccordionTrigger>
            <AccordionContent className="text-base whitespace-pre-line">
                {summary}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}

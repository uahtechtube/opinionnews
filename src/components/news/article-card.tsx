import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Article } from '@/lib/types';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/article/${article.slug}`} className="block">
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={600}
            height={400}
            className="aspect-video w-full object-cover"
            data-ai-hint="news article"
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <Badge variant="outline" className="mb-2 text-accent-foreground bg-accent border-accent">{article.category}</Badge>
        <CardTitle className="text-xl font-headline leading-snug">
          <Link href={`/article/${article.slug}`} className="hover:underline">
            {article.title}
          </Link>
        </CardTitle>
        <p className="mt-3 text-muted-foreground line-clamp-3">
          {article.excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between p-6 pt-0">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`https://i.pravatar.cc/150?u=${article.author}`} />
            <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{article.author}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(article.date).toLocaleDateString()}
            </p>
          </div>
        </div>
         <Button variant="ghost" size="sm" asChild>
          <Link href={`/article/${article.slug}`}>
            Read <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

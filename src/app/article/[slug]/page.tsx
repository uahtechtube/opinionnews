import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  User,
  MessageCircle,
} from "lucide-react";

import { articles, categories } from "@/lib/data";
import type { Article } from "@/lib/types";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import OpinionSummary from "@/components/news/opinion-summary";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-6 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <article className="prose prose-stone dark:prose-invert mx-auto max-w-4xl">
            <div className="space-y-4 not-prose">
              <Badge variant="outline" className="text-accent-foreground bg-accent border-accent">{article.category}</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
                {article.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={article.date}>{new Date(article.date).toLocaleDateString()}</time>
                </div>
                <div className="flex items-center gap-2">
                   <MessageCircle className="h-4 w-4" />
                   <span>{article.comments.length} Comments</span>
                </div>
              </div>
            </div>

            <Image
              src={article.imageUrl}
              alt={article.title}
              width={1250}
              height={700}
              className="my-8 rounded-lg"
              data-ai-hint="news article"
            />

            <p className="lead">{article.excerpt}</p>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            </blockquote>

            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

          </article>

          <Separator className="my-12" />

          {/* Comment Section */}
          <section id="comments" className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 font-headline">Opinions & Discussion</h2>
            
            <OpinionSummary comments={article.comments.map(c => c.content)} />

            <div className="space-y-8 mt-6">
              {article.comments.map((comment) => (
                <div key={comment.id} className="flex space-x-4">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${comment.author}`} />
                    <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{comment.author}</p>
                      <p className="text-xs text-muted-foreground">{new Date(comment.date).toLocaleString()}</p>
                    </div>
                    <p className="mt-1 text-foreground/90">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Share Your Opinion</h3>
              <div className="grid w-full gap-2">
                <Textarea placeholder="Write your comment here. Please be respectful." rows={4} />
                <Button>Post Comment</Button>
                <p className="text-sm text-muted-foreground">
                    You must be <Link href="/login" className="underline">logged in</Link> to post a comment.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

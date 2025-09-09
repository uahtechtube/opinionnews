import Image from 'next/image';
import Link from 'next/link';
import {
  Newspaper,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { articles, categories } from '@/lib/data';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ArticleCard from '@/components/news/article-card';

export default function Home() {
  const featuredArticle = articles[0];
  const trendingArticles = articles.slice(1, 6);
  const latestArticles = articles.slice(6);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-card pt-12 md:pt-24 lg:pt-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-accent-foreground bg-accent border-accent">{featuredArticle.category}</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    {featuredArticle.title}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {featuredArticle.excerpt}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href={`/article/${featuredArticle.slug}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                     <Link href={`/article/${featuredArticle.slug}#comments`}>
                      <MessageCircle className="mr-2 h-4 w-4" /> View Comments
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                data-ai-hint="news article"
              />
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-8">
              Trending Highlights
            </h2>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {trendingArticles.map((article) => (
                  <CarouselItem key={article.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                       <ArticleCard article={article} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 transform text-foreground sm:left-[-1rem]"/>
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 transform text-foreground sm:right-[-1rem]"/>
            </Carousel>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 dark:bg-card">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-8">
              Latest News
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
             <div className="mt-12 text-center">
                <Button variant="outline" size="lg">Load More</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

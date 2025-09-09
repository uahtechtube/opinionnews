import { notFound } from 'next/navigation';
import { articles, categories } from '@/lib/data';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ArticleCard from '@/components/news/article-card';

export async function generateStaticParams() {
  // Generate params for all categories except 'about' and 'contact'
  return categories
    .filter(category => category.slug !== 'about' && category.slug !== 'contact')
    .map((category) => ({
      slug: category.slug,
    }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category || category.slug === 'about' || category.slug === 'contact') {
    notFound();
  }

  const categoryArticles = articles.filter(
    (article) => article.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-6 md:py-12 lg:py-16">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              {category.name}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Browsing all articles in the "{category.name}" category.
            </p>
          </div>

          {categoryArticles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold">No Articles Found</h2>
              <p className="mt-2 text-muted-foreground">
                There are no articles in this category yet. Check back later!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

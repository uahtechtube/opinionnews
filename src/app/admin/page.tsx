
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { articles, categories } from '@/lib/data';
import { 
    Newspaper, 
    Eye, 
    Users, 
    MessageSquare, 
    PlusCircle,
    Library,
    Tag,
    Settings,
    Calendar,
    Plus
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';

export default function AdminDashboardPage() {
  const totalArticles = articles.length;
  const totalComments = articles.reduce(
    (acc, article) => acc + article.comments.length,
    0
  );

  const topCategories = [...categories]
    .filter(c => c.slug !== 'about' && c.slug !== 'contact')
    .sort((a, b) => {
        const aCount = articles.filter(art => art.category === a.name).length;
        const bCount = articles.filter(art => art.category === b.name).length;
        return bCount - aCount;
    })
    .slice(0, 5);


  return (
    <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back to your admin panel</p>
            </div>
            <div className="flex items-center gap-2">
                <Button asChild>
                    <Link href="/admin/articles/new">
                        <Plus className="mr-2 h-4 w-4" /> New Article
                    </Link>
                </Button>
                <ThemeToggle />
            </div>
        </div>

      {/* Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Articles</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89,542</div>
            <p className="text-xs text-muted-foreground">+25% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120,000</div>
            <p className="text-xs text-muted-foreground">+10% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Comments</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

        {/* Quick Actions */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                    <Calendar className="h-5 w-5" /> Quick Actions
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {[
                        { label: 'New Post', icon: PlusCircle, href: '/admin/articles/new' },
                        { label: 'Media Library', icon: Library, href: '/admin/media' },
                        { label: 'Manage Users', icon: Users, href: '/admin/users' },
                        { label: 'Categories', icon: Tag, href: '/admin/categories' },
                        { label: 'Comments', icon: MessageSquare, href: '/admin/comments' },
                        { label: 'Settings', icon: Settings, href: '/admin/settings' },
                    ].map(action => (
                         <Button key={action.label} variant="outline" className="flex flex-col h-24 gap-2" asChild>
                            <Link href={action.href}>
                                <action.icon className="h-6 w-6" />
                                <span>{action.label}</span>
                            </Link>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Articles */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Articles</CardTitle>
              <Button asChild size="sm" variant="outline">
                <Link href="/admin/articles">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  {articles.slice(0, 5).map((article) => (
                    <TableRow key={article.id}>
                        <TableCell>
                            <div className="flex items-center gap-4">
                                <Image 
                                    src={article.imageUrl} 
                                    alt={article.title}
                                    width={80}
                                    height={45}
                                    className="rounded-md object-cover aspect-video"
                                />
                                <div className="flex flex-col">
                                    <Link href={`/article/${article.slug}`} className="font-semibold hover:underline">
                                        {article.title}
                                    </Link>
                                    <span className="text-sm text-muted-foreground">{article.category}</span>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground hidden sm:table-cell">
                            {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Top Categories */}
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Top Categories</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {topCategories.map((category, index) => (
                             <div key={category.slug} className="flex items-center gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-bold">{index + 1}</div>
                                <div className="flex-1">
                                    <p className="font-semibold">{category.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {articles.filter(a => a.category === category.name).length} articles
                                    </p>
                                </div>
                                <Link href={`/category/${category.slug}`} className="text-sm font-medium text-primary hover:underline">
                                    View
                                </Link>
                             </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}

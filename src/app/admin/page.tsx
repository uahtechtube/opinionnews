
'use client';

import Link from 'next/link';
import {
  ArrowUp,
  Newspaper,
  Eye,
  Users,
  MessageSquare,
  Plus,
  Library,
  Tag,
  Settings,
  Calendar,
  PlusCircle,
  Mail,
} from 'lucide-react';
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
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { articles, categories } from '@/lib/data';
import Image from 'next/image';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig
} from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--secondary))",
  },
} satisfies ChartConfig


export default function AdminDashboardPage() {
  const topCategories = [...categories]
    .filter((c) => c.slug !== 'about' && c.slug !== 'contact')
    .sort((a, b) => {
      const aCount = articles.filter((art) => art.category === a.name).length;
      const bCount = articles.filter((art) => art.category === b.name).length;
      return bCount - aCount;
    })
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            An overview of your news website.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/admin/articles/new">
              <Plus className="mr-2 h-4 w-4" /> New Article
            </Link>
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,329</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
            <div className="h-16">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: -20,
                    right: 0,
                    top: 20,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="var(--color-desktop)"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="var(--color-desktop)"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="url(#fillDesktop)"
                    stroke="var(--color-desktop)"
                    stackId="a"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
            <div className="mt-4 h-16">
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <BarChart accessibilityLayer data={chartData} margin={{ top: 20, bottom: 0, left: -20, right: 0 }}>
                        <Bar dataKey="mobile" fill="var(--color-desktop)" radius={2} />
                    </BarChart>
                </ChartContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articles.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 since last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
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
                         <Button key={action.href} variant="outline" className="flex flex-col h-24 gap-2" asChild>
                            <Link href={action.href}>
                                <action.icon className="h-6 w-6" />
                                <span>{action.label}</span>
                            </Link>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
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
                            className="aspect-video rounded-md object-cover"
                          />
                          <div className="flex flex-col">
                            <Link
                              href={`/article/${article.slug}`}
                              className="font-semibold hover:underline"
                            >
                              {article.title}
                            </Link>
                            <span className="text-sm text-muted-foreground">
                              {article.category}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden text-right text-muted-foreground sm:table-cell">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
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
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{category.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {
                          articles.filter((a) => a.category === category.name)
                            .length
                        }{' '}
                        articles
                      </p>
                    </div>
                    <Link
                      href={`/category/${category.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
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

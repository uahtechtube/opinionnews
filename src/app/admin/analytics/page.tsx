
'use client';

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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import { articles } from '@/lib/data';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const chartData = [
  { date: '2024-05-01', pageViews: 2400, visitors: 1500 },
  { date: '2024-05-02', pageViews: 1398, visitors: 900 },
  { date: '2024-0-03', pageViews: 9800, visitors: 6500 },
  { date: '2024-05-04', pageViews: 3908, visitors: 2800 },
  { date: '2024-05-05', pageViews: 4800, visitors: 3200 },
  { date: '2024-05-06', pageViews: 3800, visitors: 2500 },
  { date: '2024-05-07', pageViews: 4300, visitors: 2900 },
];

const chartConfig = {
  pageViews: {
    label: 'Page Views',
    color: 'hsl(var(--primary))',
  },
  visitors: {
    label: 'Unique Visitors',
    color: 'hsl(var(--secondary))',
  },
} satisfies ChartConfig;

const topReferrers = [
  { source: 'Google', count: 1203, trend: 12.5 },
  { source: 'Twitter / X', count: 984, trend: 8.2 },
  { source: 'Facebook', count: 751, trend: -2.1 },
  { source: 'LinkedIn', count: 420, trend: 15.3 },
  { source: 'Direct', count: 301, trend: 5.0 },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
       <Card>
        <CardHeader>
          <CardTitle>Audience Overview</CardTitle>
          <CardDescription>A look at your website traffic over the last 7 days.</CardDescription>
        </CardHeader>
        <CardContent className="h-96">
          <ChartContainer config={chartConfig}>
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} />
              <YAxis />
              <Tooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(label) => new Date(label).toLocaleDateString()}
                  />
                }
              />
              <Legend />
              <Area type="monotone" dataKey="pageViews" stroke="var(--color-pageViews)" fill="var(--color-pageViews)" fillOpacity={0.3} />
              <Area type="monotone" dataKey="visitors" stroke="var(--color-visitors)" fill="var(--color-visitors)" fillOpacity={0.3} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Referrers</CardTitle>
            <CardDescription>Where your traffic is coming from.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source</TableHead>
                  <TableHead className="text-right">Visitors</TableHead>
                  <TableHead className="text-right">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topReferrers.map((referrer) => (
                  <TableRow key={referrer.source}>
                    <TableCell className="font-medium">{referrer.source}</TableCell>
                    <TableCell className="text-right">{referrer.count.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <span className={`flex items-center justify-end ${referrer.trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        <TrendingUp className="h-4 w-4 mr-1" /> {referrer.trend}%
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Your most viewed articles.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Article</TableHead>
                  <TableHead className="text-right">Views</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.slice(0, 5).map((article) => (
                  <TableRow key={article.id}>
                    <TableCell>
                      <Link href={`/article/${article.slug}`} className="font-medium hover:underline truncate block max-w-xs">
                        {article.title}
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">
                        <Link href={`/article/${article.slug}`} className="flex items-center justify-end text-muted-foreground hover:text-primary">
                            {(Math.floor(Math.random() * 5000) + 1000).toLocaleString()} <ArrowUpRight className="h-4 w-4 ml-1" />
                        </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

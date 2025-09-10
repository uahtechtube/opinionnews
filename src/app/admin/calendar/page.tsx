
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { articles } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { addDays, format } from 'date-fns';

export default function AdminCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const articlesByDate = articles.reduce((acc, article) => {
    const dateKey = format(new Date(article.date), 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(article);
    return acc;
  }, {} as Record<string, typeof articles>);


  const selectedDateString = date ? format(date, 'yyyy-MM-dd') : '';
  const articlesForSelectedDate = articlesByDate[selectedDateString] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
         <Card>
            <CardContent className="p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-full"
                    modifiers={{
                        published: articles.map(a => new Date(a.date))
                    }}
                    modifiersStyles={{
                        published: {
                            color: 'hsl(var(--primary-foreground))',
                            backgroundColor: 'hsl(var(--primary))'
                        }
                    }}
                />
            </CardContent>
        </Card>
      </div>
      <div>
        <Card>
            <CardHeader>
                <CardTitle>
                    Schedule for {date ? format(date, 'PPP') : 'N/A'}
                </CardTitle>
                <CardDescription>
                    Articles published on this day.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {articlesForSelectedDate.length > 0 ? (
                    <div className="space-y-4">
                        {articlesForSelectedDate.map(article => (
                            <div key={article.id} className="p-3 rounded-md border bg-card hover:bg-muted/50">
                                <Badge variant="outline" className="mb-2">{article.category}</Badge>
                                <Link href={`/article/${article.slug}`} className="font-semibold block hover:underline">
                                    {article.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1">by {article.author}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground text-center py-8">No articles scheduled for this date.</p>
                )}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}


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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { articles } from '@/lib/data';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle2, MoreHorizontal, Trash2, XCircle } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function AdminCommentsPage() {
    const allComments = articles.flatMap(article => 
        article.comments.map(comment => ({
            ...comment,
            articleTitle: article.title,
            articleSlug: article.slug,
            status: Math.random() > 0.5 ? 'Approved' : 'Pending'
        }))
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


  return (
    <Card>
      <CardHeader>
        <CardTitle>Comments</CardTitle>
        <CardDescription>
          Manage all comments from your articles.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Author</TableHead>
              <TableHead className="w-[50%]">Comment</TableHead>
              <TableHead>In Response To</TableHead>
              <TableHead>Submitted On</TableHead>
              <TableHead>Status</TableHead>
               <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allComments.map((comment) => (
              <TableRow key={comment.id}>
                <TableCell>
                    <div className="flex items-center gap-3">
                         <Avatar className="h-9 w-9">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${comment.author}`} alt={comment.author} />
                            <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{comment.author}</span>
                    </div>
                </TableCell>
                <TableCell>
                    <p className="line-clamp-2 text-muted-foreground">{comment.content}</p>
                </TableCell>
                <TableCell>
                    <Link href={`/article/${comment.articleSlug}`} className="hover:underline">
                        {comment.articleTitle}
                    </Link>
                </TableCell>
                 <TableCell>
                  {new Date(comment.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge variant={comment.status === 'Approved' ? 'default' : 'secondary'}
                   className={comment.status === 'Approved' ? 'bg-green-500/20 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-500/20' : 'bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400 border-yellow-500/20'}>
                    {comment.status}
                  </Badge>
                </TableCell>
                 <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                       <DropdownMenuItem>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

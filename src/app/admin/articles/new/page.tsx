
'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories } from '@/lib/data';
import { Upload, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminCreateArticlePage() {
  return (
    <form className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card>
                 <CardHeader>
                    <CardTitle>Article Details</CardTitle>
                    <CardDescription>Fill out the details for your new article.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                     <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Your amazing article title..." />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea id="content" rows={15} placeholder="Start writing your masterpiece here..." />
                         <p className="text-sm text-muted-foreground">
                            You can use Markdown for formatting.
                        </p>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea id="excerpt" rows={3} placeholder="A short summary of the article." />
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Publish</CardTitle>
                </CardHeader>
                 <CardContent>
                    <div className="grid gap-6">
                        <div className="grid gap-3">
                             <Label htmlFor="status">Status</Label>
                             <Select defaultValue="draft">
                                <SelectTrigger id="status" aria-label="Select status">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="published">Published</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardHeader>
                     <Button size="lg" className="w-full">Save and Publish</Button>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Category</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-3">
                        <Label htmlFor="category">Select Category</Label>
                         <Select>
                            <SelectTrigger id="category" aria-label="Select category">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.filter(c => c.slug !== 'about' && c.slug !== 'contact').map(category => (
                                    <SelectItem key={category.slug} value={category.slug}>
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>
            <Card>
                 <CardHeader>
                    <CardTitle>Featured Image</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-2">
                         <div className="flex aspect-video w-full items-center justify-center rounded-md border border-dashed">
                            <label htmlFor="picture" className="flex flex-col items-center justify-center w-full h-full text-center cursor-pointer">
                                <Upload className="h-8 w-8 text-muted-foreground" />
                                <p className="text-sm mt-2 text-muted-foreground">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                            </label>
                            <Input id="picture" type="file" className="hidden" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </form>
  );
}

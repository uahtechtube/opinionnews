
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Upload } from 'lucide-react';
import Link from 'next/link';

export default function AdminCreateUserPage() {
  return (
    <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="icon" asChild>
                <Link href="/admin/users">
                    <ArrowLeft className="h-4 w-4" />
                </Link>
            </Button>
            <div>
                <h1 className="text-3xl font-bold">Create User</h1>
                <p className="text-muted-foreground">
                Create a new user account and assign them a role.
                </p>
            </div>
        </div>
        <form className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>User Details</CardTitle>
                        <CardDescription>
                            Fill out the form below to create a new user.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="name@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="••••••••" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="role">Role</Label>
                            <Select>
                                <SelectTrigger id="role">
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="admin">Administrator</SelectItem>
                                    <SelectItem value="editor">Editor</SelectItem>
                                    <SelectItem value="author">Author</SelectItem>
                                    <SelectItem value="subscriber">Subscriber</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center space-x-2 pt-2">
                            <Switch id="send-email" />
                            <Label htmlFor="send-email">Send the new user an email about their account.</Label>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Picture</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            <div className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                <label htmlFor="picture" className="flex flex-col items-center justify-center w-full h-full text-center cursor-pointer">
                                    <Upload className="h-8 w-8 text-muted-foreground" />
                                    <p className="text-sm mt-2 text-muted-foreground">
                                        <span className="font-semibold">Click to upload</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground">PNG or JPG</p>
                                </label>
                                <Input id="picture" type="file" className="hidden" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Button type="submit" size="lg" className="w-full">Create User</Button>
            </div>
        </form>
    </div>
  );
}

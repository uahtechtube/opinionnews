
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import Image from 'next/image';
import { articles } from '@/lib/data';

export default function AdminMediaPage() {
  const mediaItems = articles.map(article => ({
      id: article.id,
      src: article.imageUrl,
      alt: article.title,
  }));

  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold">Media Library</h1>
                <p className="text-muted-foreground">
                    Manage your uploaded media files.
                </p>
            </div>
             <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload File
            </Button>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>All Media</CardTitle>
                <CardDescription>
                    Click on an image to see more details.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {mediaItems.map((item) => (
                        <div key={item.id} className="group relative aspect-square">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover rounded-md transition-transform group-hover:scale-105"
                            />
                             <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                                <Button variant="secondary" size="sm">View</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
  );
}

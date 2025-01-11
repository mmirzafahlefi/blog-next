import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function Home() {
  const featuredPosts = [
    {
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications with Next.js',
      date: 'April 1, 2024',
    },
    {
      title: 'The Power of TypeScript',
      excerpt: 'Why TypeScript is essential for large-scale applications',
      date: 'March 30, 2024',
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt: 'Tips and tricks for building beautiful interfaces with Tailwind',
      date: 'March 28, 2024',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">Modern Blog</span>
          </div>
          <nav className="space-x-4">
            <Link href="/blog">Blog</Link>
            <Link href="/admin">
              <Button variant="outline">Admin Dashboard</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to Modern Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover insightful articles about web development and technology
            </p>
            <Link href="/blog">
              <Button size="lg">
                Start Reading
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Card key={post.title}>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Modern Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
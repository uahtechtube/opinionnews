import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Users, Newspaper, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-primary/5 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl font-headline">
                  About Opinion News
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are dedicated to bringing you the most relevant news stories alongside a diverse range of opinions, fostering a well-informed and engaged community.
                </p>
              </div>
              <Image
                src="https://picsum.photos/600/400"
                alt="Our Team"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Our Mission</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                To empower readers by providing a comprehensive view of current events, presenting facts and fostering a marketplace of ideas where diverse perspectives can be explored and understood.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-4xl items-start gap-8 sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 text-center">
                 <Newspaper className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Factual Reporting</h3>
                <p className="text-sm text-muted-foreground">
                  We deliver accurate, timely, and unbiased news to keep you informed about the world around you.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Lightbulb className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Diverse Opinions</h3>
                <p className="text-sm text-muted-foreground">
                  We curate a wide spectrum of opinions to give you a 360-degree view of every important issue.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Users className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Community Engagement</h3>
                <p className="text-sm text-muted-foreground">
                  We encourage respectful dialogue and debate, providing a platform for readers to share their own views.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32 dark:bg-card">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 font-headline">Meet Our Team</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
              {[
                { name: 'Jane Doe', role: 'Editor-in-Chief', avatar: 'https://i.pravatar.cc/150?u=jane' },
                { name: 'John Smith', role: 'Lead Reporter', avatar: 'https://i.pravatar.cc/150?u=john' },
                { name: 'Alex Johnson', role: 'Political Analyst', avatar: 'https://i.pravatar.cc/150?u=alex' },
                { name: 'Emily White', role: 'Creative Director', avatar: 'https://i.pravatar.cc/150?u=emily' },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <Image
                    className="mx-auto h-24 w-24 rounded-full"
                    src={member.avatar}
                    alt={member.name}
                    width={96}
                    height={96}
                  />
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

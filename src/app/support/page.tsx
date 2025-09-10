import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LifeBuoy, Search, BookUser, Settings, ShieldQuestion } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const faqItems = [
    {
        question: "How do I create an account?",
        answer: "You can create an account by navigating to the 'Sign Up' page and filling out the registration form. You will need to provide your name, email address, and a password."
    },
    {
        question: "Can I change my password?",
        answer: "Yes, you can change your password in the 'Account Settings' page after you have logged in. You will be asked to enter your old password and a new one."
    },
    {
        question: "How do I post a comment?",
        answer: "To post a comment, you must be logged into your account. Navigate to any article page, and you will find a comment section at the bottom where you can share your opinion."
    },
    {
        question: "Is there a mobile app?",
        answer: "Currently, we do not have a dedicated mobile app. However, our website is fully responsive and optimized for a great experience on all mobile browsers."
    }
];

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        {/* Hero Section */}
        <section className="w-full bg-primary/5 py-12 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <LifeBuoy className="mx-auto h-16 w-16 text-primary" />
            <h1 className="mt-4 text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl font-headline">
              Support Center
            </h1>
            <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-xl">
              How can we help you today?
            </p>
            <div className="relative mx-auto mt-8 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search our knowledge base..."
                className="w-full rounded-full bg-background py-6 pl-12 pr-4 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12 md:py-20 lg:py-24">
            <div className="container mx-auto max-w-5xl px-4 md:px-6">
                 <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Browse Help Topics
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { icon: BookUser, title: 'Account Management', description: 'Manage your profile, password, and preferences.' },
                        { icon: Settings, title: 'Getting Started', description: 'Learn the basics of using our platform.' },
                        { icon: ShieldQuestion, title: 'Troubleshooting', description: 'Find solutions to common issues and errors.' },
                    ].map(topic => (
                        <Link key={topic.title} href="#" className="group block rounded-lg border bg-card p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1">
                             <topic.icon className="mx-auto h-12 w-12 text-primary" />
                            <h3 className="mt-4 text-xl font-semibold">{topic.title}</h3>
                            <p className="mt-1 text-muted-foreground">{topic.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>


        {/* FAQ & Contact Section */}
        <section className="w-full bg-card py-12 md:py-20 lg:py-24">
          <div className="container mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
            {/* FAQ */}
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tighter font-headline">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact Form */}
            <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tighter font-headline">
                    Still Need Help?
                </h2>
                <p className="mb-6 text-muted-foreground">
                    If you can't find the answer you're looking for, please fill out the form below and our support team will get back to you as soon as possible.
                </p>
              <div className="space-y-4">
                <Input type="text" placeholder="Your Name" className="w-full" />
                <Input type="email" placeholder="Your Email" className="w-full" />
                <Textarea placeholder="Describe your issue..." rows={6} className="w-full" />
                <Button className="w-full" size="lg">Submit Ticket</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

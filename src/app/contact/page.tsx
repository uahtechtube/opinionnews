import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl font-headline">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-xl">
              We&apos;d love to hear from you. Reach out with any questions, feedback, or inquiries.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid max-w-5xl items-center gap-8 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    General Inquiries: contact@opinionnews.com
                  </p>
                  <p className="text-muted-foreground">
                    Support: support@opinionnews.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-muted-foreground">
                    (123) 456-7890
                  </p>
                   <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Office</h3>
                  <p className="text-muted-foreground">
                    123 News Avenue, Suite 100
                  </p>
                  <p className="text-muted-foreground">
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Send us a message</h3>
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Your Message" rows={5} className="w-full" />
                <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

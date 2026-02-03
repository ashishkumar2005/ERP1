import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const contactImage = PlaceHolderImages.find(
  (img) => img.id === 'contact-reception'
);

export default function ContactPage() {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Our Address',
      value: 'S.D.O. ROAD, HAJIPUR, VAISHALI, BIHAR-84101',
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email Us',
      value: 'futurewiseedutech@gmail.com',
      href: 'mailto:futurewiseedutech@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Call Us',
      value: '+91 8579948889',
      href: 'tel:+918579948889',
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        {contactImage && (
          <Image
            src={contactImage.imageUrl}
            alt={contactImage.description}
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint={contactImage.imageHint}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background to-transparent">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We&apos;re here to help. Whether you have a question about our
              courses or need support, we&apos;re ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-6">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Question about courses" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {detail.title}
                    </h3>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="h-80 w-full rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.638912181654!2d85.378964!3d25.749503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed65f555555555%3A0x8633e4bcf84f6962!2sS.D.O.%20Rd%2C%20Hajipur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

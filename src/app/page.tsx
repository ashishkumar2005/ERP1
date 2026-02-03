import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart,
  BookOpen,
  Briefcase,
  Star,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { courses, partners, testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-students');
const courseImages = PlaceHolderImages.filter((img) =>
  courses.map((c) => c.imageId).includes(img.id)
);
const testimonialImages = PlaceHolderImages.filter((img) =>
  testimonials.map((t) => t.imageId).includes(img.id)
);
const partnerLogos = PlaceHolderImages.filter((img) =>
  partners.map((p) => p.imageId).includes(img.id)
);

export default function Home() {
  const stats = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      value: '95%',
      label: 'Students Placed',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      value: '10+',
      label: 'Courses Offered',
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      value: '15+',
      label: 'Years of Experience',
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      value: '5k+',
      label: 'Happy Students',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Shape Your Future with Technology
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Unlock your potential with our expert-led courses in web
              development, data science, and AI. Join Futurewise Edutech and
              start your journey to a rewarding career.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/admissions">
                  Enroll Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                className="rounded-xl object-cover shadow-2xl"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {stat.icon}
                </div>
                <p className="font-headline text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="py-16 sm:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Our Premier Courses
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Choose from a range of courses designed to make you a skilled
              professional in the tech industry.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => {
              const image = courseImages.find((img) => img.id === course.imageId);
              return (
                <Card
                  key={course.id}
                  className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="h-56 w-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">
                      {course.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 pt-2">
                      <span>Duration: {course.duration}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      {course.description}
                    </p>
                  </CardContent>
                  <CardFooter className="bg-secondary/50 p-4">
                    <Button asChild className="w-full" variant="secondary">
                      <Link href={`/courses#${course.id}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Success Stories from Our Alumni
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Hear what our past students have to say about their experience at
              Futurewise Edutech.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => {
              const image = testimonialImages.find(
                (img) => img.id === testimonial.imageId
              );
              return (
                <Card
                  key={testimonial.id}
                  className="flex flex-col justify-between"
                >
                  <CardContent className="pt-6">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4 pt-4">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-card py-16 sm:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-xl font-semibold uppercase tracking-wider text-muted-foreground">
            Our Graduates Work at Top Companies
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partnerLogos.map((logo) => (
              <div key={logo.id} className="relative h-12 w-32 grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100">
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  layout="fill"
                  objectFit="contain"
                  data-ai-hint={logo.imageHint}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

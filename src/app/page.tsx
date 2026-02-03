import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CheckCircle,
  ShieldCheck,
  Star,
  Trophy,
  Users,
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
import { courses, testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-classroom');
const courseImages = PlaceHolderImages.filter((img) =>
  courses.map((c) => c.imageId).includes(img.id)
);
const testimonialImages = PlaceHolderImages.filter((img) =>
  testimonials.map((t) => t.imageId).includes(img.id)
);

export default function Home() {
  const stats = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      label: 'Coaching for Classes 1st to 12th',
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      label: 'IIT-JEE / NEET Foundation Courses',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      label: 'Special Batches for CBSE / ICSE & BSEB',
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      label: 'Focus on Concept Clarity & Smart Learning',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      label: 'Doubt Sessions, Weekly Tests & Performance Tracking',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      label: 'Safe, Supportive, and Motivating Environment',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Quality Coaching for Academic Success
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Expert guidance for classes 1 to 12 (CBSE), IIT-JEE, NEET,
              Olympiads & more.
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

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {stat.icon}
                </div>
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
              Choose from a range of courses designed to build a strong
              academic foundation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const image = courseImages.find(
                (img) => img.id === course.imageId
              );
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
              Success Stories from Our Students
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
    </div>
  );
}

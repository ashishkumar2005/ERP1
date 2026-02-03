import Image from 'next/image';
import { CheckCircle, Lightbulb, Target } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { faculty } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const visionImage = PlaceHolderImages.find((img) => img.id === 'about-vision');
const facultyImages = PlaceHolderImages.filter((img) =>
  faculty.map((f) => f.imageId).includes(img.id)
);

export default function AboutPage() {
  const credibilityBadges = [
    {
      name: 'Certified Instructors',
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Industry-Relevant Curriculum',
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Project-Based Learning',
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      name: 'Career Support',
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            About Futurewise Edutech
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            We are dedicated to shaping the future of tech professionals by
            providing accessible, high-quality education and fostering a
            community of lifelong learners.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="font-headline text-2xl font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="mt-2 text-muted-foreground">
                  To democratize tech education by offering cutting-edge courses
                  that are affordable and accessible to everyone, regardless of
                  their background. We strive to empower our students with the
                  practical skills and confidence needed to excel in the tech
                  industry.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="font-headline text-2xl font-bold text-foreground">
                  Our Vision
                </h2>
                <p className="mt-2 text-muted-foreground">
                  To be a leading global institution for technology education,
                  renowned for our innovative teaching methods, commitment to
                  student success, and contribution to a future where anyone
                  can build a successful career in technology.
                </p>
              </div>
            </div>
          </div>
          <div>
            {visionImage && (
              <Image
                src={visionImage.imageUrl}
                alt={visionImage.description}
                width={600}
                height={400}
                className="rounded-xl object-cover shadow-lg"
                data-ai-hint={visionImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our commitment to quality and student success sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {credibilityBadges.map((badge) => (
              <div
                key={badge.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {badge.icon}
                </div>
                <p className="font-semibold text-foreground">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Meet Our Expert Instructors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Learn from industry veterans who are passionate about teaching.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member) => {
              const image = facultyImages.find(
                (img) => img.id === member.imageId
              );
              return (
                <Card key={member.id} className="text-center">
                  <CardHeader className="items-center">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={128}
                        height={128}
                        className="h-32 w-32 rounded-full object-cover shadow-md"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <CardTitle className="pt-4 font-headline text-xl">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-primary">
                      {member.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

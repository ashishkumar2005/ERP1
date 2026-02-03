import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { courses } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const courseImages = PlaceHolderImages.filter((img) =>
  courses.map((c) => c.imageId).includes(img.id)
);

export default function CoursesPage() {
  return (
    <div className="bg-background">
      <section className="py-2">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Our Courses
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Explore our range of expert-led courses designed to equip you with
            the skills for academic excellence.
          </p>
        </div>
      </section>

      <section className="py-2">
        <div className="container mx-auto grid grid-cols-1 place-items-center gap-8 px-4 md:px-6">
          {courses.map((course) => {
            const image = courseImages.find((img) => img.id === course.imageId);
            return (
              <div
                key={course.id}
                id={course.id}
                className="w-full max-w-3xl scroll-mt-20"
              >
                <Card className="flex h-full flex-col overflow-hidden">
                  <div className="relative h-40 w-full">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="flex flex-grow flex-col">
                    <CardHeader className="p-4">
                      <CardTitle className="font-headline text-lg">
                        {course.name}
                      </CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-x-2 gap-y-2 pt-2">
                        <Badge variant="secondary">
                          Duration: {course.duration}
                        </Badge>
                        <Badge variant="secondary">Fees: {course.fees}</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-3 p-4 pt-0">
                      <p className="text-sm text-muted-foreground">
                        {course.longDescription}
                      </p>
                      <div>
                        <h3 className="mb-1 text-base font-semibold text-foreground">
                          Syllabus Overview
                        </h3>
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full"
                        >
                          {course.syllabus.map((module, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                              <AccordionTrigger className="py-2 text-sm">
                                {module.title}
                              </AccordionTrigger>
                              <AccordionContent className="pb-2">
                                <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                                  {module.content.map((item, j) => (
                                    <li key={j}>{item}</li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button asChild className="w-full">
                        <Link href="/admissions">Enroll in this Course</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

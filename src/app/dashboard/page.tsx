import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Edit, User } from 'lucide-react';
import Link from 'next/link';

// Mock data
const student = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatarUrl: 'https://picsum.photos/seed/601/100/100',
  enrolledDate: '2023-08-15',
};

const enrolledCourses = [
  {
    id: 'full-stack',
    name: 'Full Stack Web Development',
    progress: 75,
    nextLesson: 'Module 4: Deployment',
  },
  {
    id: 'python',
    name: 'Python Programming',
    progress: 100,
    nextLesson: 'Completed',
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-card">
      <div className="container mx-auto p-4 py-8 md:p-8">
        <header className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="font-headline text-3xl font-bold">
              Student Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {student.name}!
            </p>
          </div>
          <Button variant="outline">Log Out</Button>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={student.avatarUrl} alt={student.name} />
                  <AvatarFallback>
                    {student.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{student.name}</CardTitle>
                  <CardDescription>{student.email}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Enrolled since: {student.enrolledDate}</p>
                </div>
                <Separator className="my-4" />
                <Button variant="secondary" className="w-full">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Enrolled Courses Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  My Courses
                </CardTitle>
                <CardDescription>
                  Continue your learning journey.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {enrolledCourses.length > 0 ? (
                  enrolledCourses.map((course) => (
                    <div key={course.id}>
                      <div className="mb-2 flex justify-between">
                        <h3 className="font-semibold">{course.name}</h3>
                        <span className="text-sm font-medium text-primary">
                          {course.progress}%
                        </span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                        <p>Next: {course.nextLesson}</p>
                        <Button asChild variant="link" size="sm">
                          <Link href={`/courses#${course.id}`}>
                            Go to Course
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-muted-foreground">
                    <p>You are not enrolled in any courses yet.</p>
                    <Button asChild className="mt-4">
                      <Link href="/courses">Explore Courses</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Edit, PlusCircle, Trash2 } from 'lucide-react';
import { courses } from '@/lib/data';

// Mock data for student inquiries
const inquiries = [
  {
    id: 'INQ001',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    course: 'Full Stack Web Development',
    date: '2023-10-26',
    status: 'New',
  },
  {
    id: 'INQ002',
    name: 'Bob Williams',
    email: 'bob@example.com',
    course: 'Data Science',
    date: '2023-10-25',
    status: 'Contacted',
  },
  {
    id: 'INQ003',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    course: 'AI & Machine Learning',
    date: '2023-10-24',
    status: 'Enrolled',
  },
  {
    id: 'INQ004',
    name: 'Diana Prince',
    email: 'diana@example.com',
    course: 'Python Programming',
    date: '2023-10-23',
    status: 'New',
  },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-card">
      <div className="container mx-auto p-4 py-8 md:p-8">
        <div className="mb-8">
          <h1 className="font-headline text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage courses and student inquiries.
          </p>
        </div>

        <Tabs defaultValue="courses">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="courses">Manage Courses</TabsTrigger>
            <TabsTrigger value="inquiries">View Inquiries</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Courses</CardTitle>
                <CardDescription>
                  Add, edit, or remove courses from the catalog.
                </CardDescription>
                <div className="flex justify-end">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add New Course
                    </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course Name</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Fees</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell className="font-medium">
                          {course.name}
                        </TableCell>
                        <TableCell>{course.duration}</TableCell>
                        <TableCell>{course.fees}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>Student Inquiries</CardTitle>
                <CardDescription>
                  View and manage inquiries from prospective students.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((inquiry) => (
                      <TableRow key={inquiry.id}>
                        <TableCell className="font-medium">
                          {inquiry.name}
                        </TableCell>
                        <TableCell>{inquiry.email}</TableCell>
                        <TableCell>{inquiry.course}</TableCell>
                        <TableCell>{inquiry.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              inquiry.status === 'Enrolled'
                                ? 'default'
                                : inquiry.status === 'Contacted'
                                ? 'secondary'
                                : 'outline'
                            }
                          >
                            {inquiry.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

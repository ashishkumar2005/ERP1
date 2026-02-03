export type Course = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  duration: string;
  fees: string;
  syllabus: { title: string; content: string[] }[];
  imageId: string;
};

export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  title: string;
  imageId: string;
};

export type Partner = {
  id: number;
  name: string;
  imageId: string;
};

export type Faculty = {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageId: string;
};

export const courses: Course[] = [
  {
    id: 'academic-coaching',
    name: 'Academic Coaching (1st-12th)',
    description:
      'Comprehensive coaching for students from class 1st to 12th (CBSE curriculum).',
    longDescription:
      'Our core academic program provides expert guidance for students from class 1 to 12 following the CBSE curriculum. We focus on building a strong foundation in all subjects, ensuring concept clarity, and fostering smart learning habits. Regular doubt sessions and performance tracking help students excel academically.',
    duration: '1 Year',
    fees: 'Varies by Class',
    syllabus: [
      {
        title: 'Core Subjects',
        content: [
          'Mathematics',
          'Science (Physics, Chemistry, Biology)',
          'English',
          'Social Studies',
        ],
      },
      {
        title: 'Learning Methodology',
        content: [
          'Concept Clarity Sessions',
          'Smart Learning Techniques',
          'Regular Practice & Homework',
        ],
      },
      {
        title: 'Evaluation',
        content: [
          'Weekly Tests',
          'Performance Tracking',
          'Personalized Feedback',
        ],
      },
    ],
    imageId: 'course-classroom',
  },
  {
    id: 'iit-jee-neet',
    name: 'IIT-JEE & NEET Foundation',
    description:
      'Specialized foundation courses to prepare students for top engineering and medical entrance exams.',
    longDescription:
      'Our IIT-JEE and NEET foundation courses are designed for students aiming for a career in engineering or medicine. We provide a rigorous curriculum that covers the depth and breadth of subjects required for these competitive exams. Our experienced faculty provides strategic guidance and mentorship to help students crack these exams.',
    duration: '1-2 Years',
    fees: 'Contact for details',
    syllabus: [
      {
        title: 'Physics',
        content: ['Mechanics', 'Electromagnetism', 'Thermodynamics', 'Modern Physics'],
      },
      {
        title: 'Chemistry',
        content: [
          'Physical, Organic, and Inorganic Chemistry',
          'Problem-Solving Sessions',
        ],
      },
      {
        title: 'Mathematics (for IIT-JEE)',
        content: ['Algebra', 'Calculus', 'Trigonometry', 'Coordinate Geometry'],
      },
      {
        title: 'Biology (for NEET)',
        content: ['Botany', 'Zoology', 'Human Physiology'],
      },
      {
        title: 'Testing',
        content: ['Mock Tests', 'All-India Test Series', 'Performance Analysis'],
      },
    ],
    imageId: 'course-science-lab',
  },
  {
    id: 'olympiads-ntse',
    name: 'Olympiads & NTSE Preparation',
    description:
      'Special batches designed to help students excel in national and international Olympiads and NTSE.',
    longDescription:
      'We offer special batches for students preparing for various competitive examinations like NTSE, Science Olympiads, Math Olympiads, and more. Our program is designed to develop advanced problem-solving skills, logical reasoning, and a competitive mindset from an early age.',
    duration: '6-12 Months',
    fees: 'Contact for details',
    syllabus: [
      {
        title: 'Mental Ability Test (MAT)',
        content: ['Verbal & Non-Verbal Reasoning', 'Logical Puzzles'],
      },
      {
        title: 'Scholastic Aptitude Test (SAT)',
        content: ['Advanced topics in Science, Maths, and Social Science'],
      },
      {
        title: 'Problem Solving',
        content: [
          'Higher Order Thinking Skills (HOTS)',
          'Previous Year Question Papers',
        ],
      },
    ],
    imageId: 'course-library',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Futurewise Edutech has been instrumental in my academic success. The teachers are incredibly supportive and their focus on concept clarity really helped me improve my grades.',
    author: 'Aarav Sharma',
    title: 'Class 12 Topper',
    imageId: 'testimonial-student1',
  },
  {
    id: 2,
    quote:
      'The foundation course for NEET was excellent. The weekly tests and doubt clearing sessions prepared me well for the pressure of the actual exam. I am grateful to the entire team.',
    author: 'Sneha Reddy',
    title: 'NEET Aspirant',
    imageId: 'testimonial-student2',
  },
  {
    id: 3,
    quote:
      'I joined for the Olympiad batch, and it was a fantastic experience. I learned so much beyond my school curriculum and it boosted my confidence immensely.',
    author: 'Rohan Gupta',
    title: 'NTSE Scholar',
    imageId: 'testimonial-student3',
  },
];

export const partners: Partner[] = [
  { id: 1, name: 'Innovate Inc', imageId: 'logo-innovate' },
  { id: 2, name: 'TechCorp', imageId: 'logo-techcorp' },
  { id: 3, name: 'Datawise LLC', imageId: 'logo-datawise' },
  { id: 4, name: 'QuantumLeap', imageId: 'logo-quantumleap' },
  { id: 5, name: 'NextGen Solutions', imageId: 'logo-nextgen' },
];

export const faculty: Faculty[] = [
  {
    id: 1,
    name: 'Mr. Rakesh Verma',
    title: 'Director & Senior Physics Faculty',
    bio: 'With over 20 years of teaching experience, Mr. Verma is a legend in preparing students for IIT-JEE. His teaching methods simplify complex concepts.',
    imageId: 'faculty-teacher1',
  },
  {
    id: 2,
    name: 'Mrs. Anjali Mehta',
    title: 'Head of Biology Dept.',
    bio: 'Mrs. Mehta is a passionate educator with a masters in Zoology. She has mentored hundreds of students to success in NEET and other medical exams.',
    imageId: 'faculty-teacher2',
  },
  {
    id: 3,
    name: 'Mr. Sameer Joshi',
    title: 'Mathematics & NTSE Expert',
    bio: 'An IIT alumnus himself, Mr. Joshi specializes in mathematics for competitive exams and has a unique ability to develop problem-solving skills in students.',
    imageId: 'faculty-teacher3',
  },
];

export const pastSuccesses: string = `
- Student A: Interests in 'Physics' and 'problem-solving', aptitudes in 'analytical thinking' and 'mathematics'. Recommended IIT-JEE Foundation. Result: Secured admission in a top engineering college.
- Student B: Interests in 'Biology' and 'helping others', aptitudes in 'memorization' and 'attention to detail'. Recommended NEET Foundation. Result: Pursuing MBBS from a reputed medical college.
- Student C: Interests in 'puzzles' and 'general knowledge', aptitudes in 'logical reasoning'. Recommended NTSE Preparation. Result: Qualified NTSE stage 2 and received scholarship.
`;

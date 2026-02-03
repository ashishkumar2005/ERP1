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
    id: 'full-stack',
    name: 'Full Stack Web Development',
    description: 'Master front-end and back-end technologies to build complete web applications.',
    longDescription: 'Our Full Stack Web Development course is a comprehensive program designed to equip you with the skills needed to build dynamic, data-driven web applications. You will learn to master both front-end technologies like React, and back-end frameworks like Node.js, along with database management with MongoDB. The course focuses on project-based learning to ensure you have a robust portfolio by the end.',
    duration: '6 Months',
    fees: '$2500',
    syllabus: [
      { title: 'Module 1: Frontend Fundamentals', content: ['HTML5, CSS3, Flexbox, Grid', 'JavaScript (ES6+)', 'DOM Manipulation'] },
      { title: 'Module 2: Advanced Frontend with React', content: ['React.js Components, Props, State', 'Hooks & Context API', 'React Router', 'State Management (Redux/Zustand)'] },
      { title: 'Module 3: Backend Development', content: ['Node.js & Express.js', 'RESTful API Design', 'Middleware and Authentication'] },
      { title: 'Module 4: Database Management', content: ['MongoDB with Mongoose', 'Data Modeling', 'CRUD Operations'] },
      { title: 'Module 5: Deployment & Capstone Project', content: ['Git & GitHub', 'CI/CD Pipelines', 'Deploying to Cloud Services', 'Final Project'] }
    ],
    imageId: 'course-fullstack',
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Learn to analyze data, build predictive models, and make data-driven decisions.',
    longDescription: 'Dive into the world of Data Science and learn how to extract meaningful insights from data. This course covers everything from data collection and cleaning to statistical analysis, machine learning, and data visualization. You will work with popular Python libraries like Pandas, NumPy, Scikit-learn, and Matplotlib to solve real-world problems.',
    duration: '5 Months',
    fees: '$3000',
     syllabus: [
      { title: 'Module 1: Python for Data Science', content: ['Python Basics', 'NumPy for Numerical Data', 'Pandas for Data Manipulation'] },
      { title: 'Module 2: Data Analysis & Visualization', content: ['Data Cleaning and Preparation', 'Exploratory Data Analysis (EDA)', 'Matplotlib and Seaborn'] },
      { title: 'Module 3: Machine Learning Foundations', content: ['Supervised & Unsupervised Learning', 'Regression and Classification', 'Model Evaluation'] },
      { title: 'Module 4: Advanced Machine Learning', content: ['Ensemble Methods', 'Introduction to Deep Learning', 'Natural Language Processing (NLP)'] },
      { title: 'Module 5: Capstone Project', content: ['Real-world Dataset Analysis', 'Building and Deploying a Predictive Model'] }
    ],
    imageId: 'course-datascience',
  },
  {
    id: 'python',
    name: 'Python Programming',
    description: 'A beginner-friendly introduction to Python for scripting, web, and data analysis.',
    longDescription: 'This course is the perfect starting point for anyone new to programming. Python is a versatile and in-demand language used in web development, data analysis, AI, and more. We will cover the fundamentals of programming, object-oriented principles, and popular Python libraries, setting a strong foundation for your coding journey.',
    duration: '3 Months',
    fees: '$1200',
    syllabus: [
      { title: 'Module 1: Python Basics', content: ['Variables, Data Types, Operators', 'Control Flow (if/else, loops)', 'Functions and Modules'] },
      { title: 'Module 2: Data Structures', content: ['Lists, Tuples, Dictionaries', 'Sets', 'Working with Files'] },
      { title: 'Module 3: Object-Oriented Programming (OOP)', content: ['Classes and Objects', 'Inheritance and Polymorphism', 'Encapsulation'] },
      { title: 'Module 4: Practical Python', content: ['Introduction to Web Scraping', 'Building a Simple Web App with Flask', 'Project Work'] }
    ],
    imageId: 'course-python',
  },
  {
    id: 'java',
    name: 'Java Programming',
    description: 'Build robust, enterprise-level applications with the powerful Java language.',
    longDescription: 'Java remains one of the most popular and powerful programming languages for building large-scale, enterprise applications. This course takes you from the basics of Java syntax to advanced topics like concurrency, Spring framework, and building RESTful APIs. It is ideal for aspiring backend developers and software engineers.',
    duration: '4 Months',
    fees: '$2000',
    syllabus: [
      { title: 'Module 1: Core Java', content: ['Java Syntax and Fundamentals', 'Object-Oriented Programming in Java', 'Exception Handling'] },
      { title: 'Module 2: Advanced Java', content: ['Collections Framework', 'Generics', 'Multithreading and Concurrency'] },
      { title: 'Module 3: Building with Spring', content: ['Spring Core and Dependency Injection', 'Spring Boot for Rapid Development', 'Spring MVC'] },
      { title: 'Module 4: Project', content: ['Building an Enterprise-level Web Application', 'Database Integration with JPA/Hibernate'] }
    ],
    imageId: 'course-java',
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Explore the future of technology with our in-depth AI and ML program.',
    longDescription: 'Artificial Intelligence and Machine Learning are transforming industries. This advanced course is for those with a programming background who want to specialize in AI. You will learn about neural networks, deep learning, computer vision, and NLP, using frameworks like TensorFlow and PyTorch to build intelligent systems.',
    duration: '6 Months',
    fees: '$3500',
    syllabus: [
      { title: 'Module 1: Machine Learning Recap', content: ['Advanced Regression and Classification', 'Model Tuning and Optimization'] },
      { title: 'Module 2: Deep Learning', content: ['Neural Networks', 'Convolutional Neural Networks (CNNs)', 'Recurrent Neural Networks (RNNs)'] },
      { title: 'Module 3: AI Frameworks', content: ['TensorFlow and Keras', 'PyTorch'] },
      { title: 'Module 4: Specializations', content: ['Computer Vision with OpenCV', 'Natural Language Processing (NLP) with Transformers'] },
      { title: 'Module 5: AI Ethics & Deployment', content: ['Fairness and Bias in AI', 'Deploying ML Models at Scale'] }
    ],
    imageId: 'course-aiml',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'The Full Stack course was a game-changer for my career. The instructors were amazing, and the hands-on projects gave me the confidence to land a job at a top tech company.',
    author: 'Sarah Johnson',
    title: 'Software Engineer @ TechCorp',
    imageId: 'testimonial-sarah',
  },
  {
    id: 2,
    quote: 'I came with zero coding experience and left with a full-fledged portfolio. Futurewise Edutech provides the perfect environment to learn and grow. Highly recommended!',
    author: 'Michael Chen',
    title: 'Web Developer @ Innovate Inc.',
    imageId: 'testimonial-michael',
  },
  {
    id: 3,
    quote: 'The Data Science program is incredibly comprehensive. The curriculum is up-to-date with industry standards, and the career support team was instrumental in my job search.',
    author: 'Priya Patel',
    title: 'Data Analyst @ Datawise LLC',
    imageId: 'testimonial-priya',
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
    name: 'Dr. Alan Grant',
    title: 'Founder & Head of AI',
    bio: 'With over 20 years of experience in machine learning and a PhD from Stanford, Dr. Grant leads our AI curriculum, bringing real-world industry knowledge to the classroom.',
    imageId: 'faculty-alan',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Lead Instructor, Full Stack',
    bio: 'Jane is a seasoned full-stack developer who has worked with several high-growth startups. She is passionate about teaching modern web technologies and mentoring new developers.',
    imageId: 'faculty-jane',
  },
  {
    id: 3,
    name: 'Robert Brown',
    title: 'Senior Instructor, Data Science',
    bio: 'Robert is a data scientist with a background in finance and e-commerce. He specializes in predictive modeling and big data analytics, helping students navigate the complexities of data.',
    imageId: 'faculty-robert',
  },
];

export const pastSuccesses: string = `
- Student A: Interests in 'visual design' and 'user experience', aptitudes in 'creativity' and 'problem solving'. Recommended Full Stack Web Development. Result: Became a successful Front-end Developer.
- Student B: Interests in 'statistics' and 'puzzles', aptitudes in 'analytical thinking' and 'mathematics'. Recommended Data Science. Result: Thriving as a Data Analyst.
- Student C: Interests in 'building things' and 'automation', aptitudes in 'logical reasoning'. Recommended Python Programming. Result: Works as a successful Automation Engineer.
- Student D: Interests in 'how things work at a large scale', aptitudes in 'systems thinking'. Recommended Java Programming. Result: Works as a Backend Engineer at a large enterprise.
`;

import type { MetadataRoute } from 'next';
import { courses } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://your-domain.com'; // Replace with your actual domain

  const courseRoutes = courses.map((course) => ({
    url: `${siteUrl}/courses#${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.8,
  }));

  const staticRoutes = [
    '/',
    '/about',
    '/courses',
    '/admissions',
    '/career-guidance',
    '/contact',
    '/login',
    '/signup',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));

  return [...staticRoutes, ...courseRoutes];
}

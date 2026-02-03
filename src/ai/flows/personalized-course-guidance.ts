'use server';

/**
 * @fileOverview Provides personalized course recommendations based on user interests and aptitudes.
 *
 * - personalizedCourseGuidance - A function that generates personalized course recommendations.
 * - PersonalizedCourseGuidanceInput - The input type for the personalizedCourseGuidance function.
 * - PersonalizedCourseGuidanceOutput - The return type for the personalizedCourseGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedCourseGuidanceInputSchema = z.object({
  interests: z
    .string()
    .describe('A description of the users interests, such as "data analytics" or "web development".'),
  aptitudes: z
    .string()
    .describe('A description of the users aptitudes, such as "problem solving" or "creativity".'),
  pastSuccesses: z
    .string()
    .describe('A list of past successes of other students, with a description of their interests, aptitudes, and course recommendations.'),
});
export type PersonalizedCourseGuidanceInput = z.infer<
  typeof PersonalizedCourseGuidanceInputSchema
>;

const PersonalizedCourseGuidanceOutputSchema = z.object({
  courseRecommendations: z
    .string()
    .describe('A list of personalized course recommendations based on the users interests and aptitudes.'),
});
export type PersonalizedCourseGuidanceOutput = z.infer<
  typeof PersonalizedCourseGuidanceOutputSchema
>;

export async function personalizedCourseGuidance(
  input: PersonalizedCourseGuidanceInput
): Promise<PersonalizedCourseGuidanceOutput> {
  return personalizedCourseGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedCourseGuidancePrompt',
  input: {schema: PersonalizedCourseGuidanceInputSchema},
  output: {schema: PersonalizedCourseGuidanceOutputSchema},
  prompt: `You are an AI career counselor that specializes in recommending courses to students based on their interests and aptitudes.

  Consider the following past successes of other students on the platform:
  {{pastSuccesses}}

  Based on the user's interests and aptitudes, provide personalized course recommendations.

  Interests: {{interests}}
  Aptitudes: {{aptitudes}}`,
});

const personalizedCourseGuidanceFlow = ai.defineFlow(
  {
    name: 'personalizedCourseGuidanceFlow',
    inputSchema: PersonalizedCourseGuidanceInputSchema,
    outputSchema: PersonalizedCourseGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

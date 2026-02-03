"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Sparkles } from "lucide-react";

import {
  personalizedCourseGuidance,
  type PersonalizedCourseGuidanceOutput,
} from "@/ai/flows/personalized-course-guidance";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { pastSuccesses } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

const guidanceFormSchema = z.object({
  interests: z.string().min(10, {
    message: "Please describe your interests in at least 10 characters.",
  }),
  aptitudes: z.string().min(10, {
    message: "Please describe your aptitudes in at least 10 characters.",
  }),
});

type GuidanceFormValues = z.infer<typeof guidanceFormSchema>;

export function CareerGuidanceForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedCourseGuidanceOutput | null>(
    null
  );

  const form = useForm<GuidanceFormValues>({
    resolver: zodResolver(guidanceFormSchema),
    defaultValues: {
      interests: "",
      aptitudes: "",
    },
  });

  async function onSubmit(data: GuidanceFormValues) {
    setLoading(true);
    setResult(null);
    try {
      const response = await personalizedCourseGuidance({
        ...data,
        pastSuccesses,
      });
      setResult(response);
    } catch (error) {
      console.error("Error getting guidance:", error);
      // You could show an error toast here
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl">
      {!result ? (
        <Card>
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Your Interests</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., solving puzzles, visual design, building things from scratch, video games..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        What topics, hobbies, or activities do you enjoy?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="aptitudes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Your Aptitudes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., good at math, creative problem-solving, logical thinking, communicating ideas..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        What are your natural strengths and skills?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Get My Recommendations
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full">
          <CardContent className="p-8">
            <div className="flex items-center justify-center">
              <Sparkles className="mr-2 h-8 w-8 text-primary" />
              <h2 className="font-headline text-2xl font-bold">
                Your Personalized Path
              </h2>
            </div>

            <div className="prose prose-blue dark:prose-invert mt-6 max-w-none text-foreground">
              <p>
                Based on your interests and aptitudes, here are some course
                recommendations that could be a great fit for you:
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: result.courseRecommendations.replace(/\n/g, '<br />'),
                }}
              />
            </div>

            <Button onClick={() => setResult(null)} className="mt-8 w-full">
              Start Over
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

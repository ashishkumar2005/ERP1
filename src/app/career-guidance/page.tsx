import { CareerGuidanceForm } from "./_components/career-guidance-form";

export default function CareerGuidancePage() {
  return (
    <div className="bg-background">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Find Your Perfect Career Path
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Not sure where to start? Our AI-powered tool can help. Tell us
              about your passions and strengths, and we&apos;ll recommend the best
              courses for you.
            </p>
          </div>
          <CareerGuidanceForm />
        </div>
      </section>
    </div>
  );
}

import { AdmissionForm } from "./_components/admission-form";

export default function AdmissionsPage() {
  return (
    <div className="bg-background">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Join Futurewise Edutech
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Take the first step towards a successful career in tech. Fill out
              the form below to start your application process.
            </p>
          </div>
          <AdmissionForm />
        </div>
      </section>
    </div>
  );
}

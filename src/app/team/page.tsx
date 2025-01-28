import { HeroImage } from "@/components/HeroImage";
import Team from "@/sections/Team";

type Params = Promise<{ organizationId: string }>;

export default async function AboutPage({
  params,
}: {
  params: Params;
}) {
  const { organizationId } = await params;
  return (
    <>
      <HeroImage
        header="LEADERSHIP"
        height={375}
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <main>
        <section>
          <Team organizationId={organizationId} />
        </section>
      </main>
    </>
  );
}

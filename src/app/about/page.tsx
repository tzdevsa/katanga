import { HeroImage } from "@/components/HeroImage";
import getOrganisationId from "@/lib/getOrganisationId";
import Team from "@/sections/Team";

export default async function AboutPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const organisationId = await getOrganisationId(searchParams) as string;

  return (
    <>
      <HeroImage
        header="ABOUT"
        height={375}
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Team organisationId={organisationId} />
    </>
  );
}

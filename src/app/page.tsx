'use server'

import { getOrganisation } from "@/actions/getOrganisation";
import { getServices } from "@/actions/getServices";
import StudentApplication from "@/components/StudentApplication";
import Welcome from "@/components/Welcome";
import getOrganisationId from "@/lib/getOrganisationId";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import { Container } from "@mui/material";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const organizationId = await getOrganisationId(searchParams) as string;
  const organisation = await getOrganisation(organizationId)
  const services = await getServices(organizationId);

  return (
    <Container maxWidth="md">
      {organisation && (
        <>
          <Hero />
          <About services={services} organisation={organisation} />
        </>
      )}
    </Container>
  );
}
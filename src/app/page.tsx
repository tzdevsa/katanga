'use server'

import { getOrganisation } from "@/actions/getOrganisation";
import { getServices } from "@/actions/getServices";
import { Footer } from "@/components/Footer";
import getOrganisationId from "@/lib/getOrganisationId";
import About from "@/sections/About";
import Hero from "@/sections/Hero";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const organizationId = await getOrganisationId(searchParams) as string;
  const organisation = await getOrganisation(organizationId)
  const services = await getServices(organizationId);

  return (
    <>
      {organisation && (<Hero organization={organisation}/>)}
      {organisation && (<About services={services} organisation={organisation} />)}
      <Footer organizationId={organizationId} />
    </>
  );
}
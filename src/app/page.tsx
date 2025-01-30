'use server'

import { getOrganisation } from "@/actions/getOrganisation";
import { getServices } from "@/actions/getServices";
import { Footer } from "@/components/Footer";
import getOrganisationId from "@/lib/getOrganisationId";
import About from "@/sections/About";
import Hero from "@/sections/Hero";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const organisationId = await getOrganisationId(searchParams) as string;
  const organisation = await getOrganisation(organisationId)
  const services = await getServices(organisationId);

  return (
    <>
      {organisation && (<Hero organisation={organisation}/>)}
      {organisation && (<About services={services} organisation={organisation} />)}
      <Footer organisation={organisation} services={services} />
    </>
  );
}
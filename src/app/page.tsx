'use server'

import { getOrganisation } from "@/actions/getOrganisation";
import { getServices } from "@/actions/getServices";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const organisationId = requestHeaders.get("x-organisation-id");

  let organisation = null;
  let services = null;
  if (organisationId) {
    organisation = await getOrganisation(organisationId);
    services = await getServices(organisationId);
  }

  return (
    <>
      {organisation && (<Hero organisation={organisation}/>)}
      {organisation && services && (<About organisation={organisation} href="/about" />)}
      {services && services?.length > 0 && (<Services services={services ?? []} />)}
    </>
  );
}
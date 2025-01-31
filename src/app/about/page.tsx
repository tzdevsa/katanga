import { getOrganisation } from "@/actions/getOrganisation";
import { getStaff } from "@/actions/getStaff";
import About from "@/sections/About";
import Motto from "@/sections/Motto";
import Team from "@/sections/Team";
import { headers } from "next/headers";

export default async function AboutPage() {
  const requestHeaders = await headers();
  const organisationId = requestHeaders.get("x-organisation-id");
  
  let organisation = null;
  let staff = null;

  if (organisationId) {
    organisation = await getOrganisation(organisationId);
    staff = await getStaff(organisationId);
  }

  return (
    <>
      {organisation?.motto && (<Motto organisation={organisation} />)}
      {organisation && (<About organisation={organisation} />)}
      {staff && (<Team staff={staff} />)}
    </>
  );
}

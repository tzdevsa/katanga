import { getStaff } from "@/actions/getStaff";
import Team from "@/sections/Team";
import { headers } from "next/headers";

export default async function AboutPage() {
  const requestHeaders = await headers();
  const organisationId = requestHeaders.get("x-organisation-id");
    
  let staff = null;
  if (organisationId) {
    staff = await getStaff(organisationId);
  }

  return (
    <main>
      <section>
        {staff && (<Team staff={staff} />)}
      </section>
    </main>
  );
}

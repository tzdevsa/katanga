'use server'

import { getOrganisation } from "@/actions/getOrganisation";
import StudentApplication from "@/components/StudentApplication";
import Welcome from "@/components/Welcome";
// import { formatAddressCityPostalCodeProvince } from "@/lib/formatAddress";
import getOrganisationId from "@/lib/getOrganisationId";
import { Container } from "@mui/material";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const organizationId = await getOrganisationId(searchParams) as string;
  const organisation = await getOrganisation(organizationId)
  return (
    <Container maxWidth="md">
      {organisation && (
        <>
          <Welcome organisation={organisation} />
          <StudentApplication organizationId={organisation.envId} />
        </>
      )}
    </Container>
  );
}
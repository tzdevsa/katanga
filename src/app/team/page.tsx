import { getStaff } from "@/actions/getStaff";
import ProfileCard from "@/components/ProfileCard";
import { Container, Grid } from "@mui/material";
import { Staff } from "@think-zambia-foundation/api";
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
      <section id="team">
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            {staff?.map((staff: Staff) => (
              <Grid key={staff.staffId} item xs={6} sm={2}>
                <ProfileCard staff={staff} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </main>
  );
}

import {
  Container,
  Grid,
} from "@mui/material";
import { getStaff } from "@/actions/getStaff";
import { Staff } from "@think-zambia-foundation/api";
import ProfileCard from "@/components/ProfileCard";

export default async function Team({ organisationId }: { organisationId: string }) {
  const staff = await getStaff(organisationId);
  
  return (
    <section id="team">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
        >
          {staff?.map((staff: Staff) => (
            <Grid key={staff.staffId} item xs={12} sm={4}>
              <ProfileCard staff={staff} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}


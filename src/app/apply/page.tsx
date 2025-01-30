import { getOrganisation } from "@/actions/getOrganisation";
import { Container, Grid, Typography } from "@mui/material";
import StudentApplication from "@/components/StudentApplication";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { headers } from "next/headers";

export default async function Apply() {
  const requestHeaders = await headers();
  const organisationId = requestHeaders.get("x-organisation-id");

  let organisation = null;  
  if (organisationId) {
    organisation = await getOrganisation(organisationId);
  }

  return (
    <>
      <section>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item xs={12} sm={5}>
              <Container>
                <Typography
                  component="h6"
                  variant="h6"
                  fontWeight="bold"
                  align="left"
                  gutterBottom
                  textTransform="uppercase"
                >
                  Start your journey with us today!
                </Typography>
                <Typography variant="subtitle1" align="left" gutterBottom>
                  <ArrowRightIcon color="primary" />Complete and submit the form.
                </Typography>
                <Typography variant="subtitle1" align="left" gutterBottom>
                  <ArrowRightIcon color="primary" />Take note of the application number.
                </Typography>
                <Typography variant="subtitle1" align="left" gutterBottom>
                  <ArrowRightIcon color="primary" />Attend an entrance interview.
                </Typography>
                <Typography variant="subtitle1" align="left" gutterBottom>
                  <ArrowRightIcon color="primary" />Receive your admission letter.
                </Typography>
                <Typography variant="subtitle1" align="left" gutterBottom>
                  <ArrowRightIcon color="primary" />Prepare for enrollment.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Container>
                {organisation && <StudentApplication organisationId={organisation.envId} />}
              </Container>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

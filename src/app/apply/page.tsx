import { getOrganisation } from "@/actions/getOrganisation";
import { Container, Grid, Typography } from "@mui/material";
import getOrganisationId from "@/lib/getOrganisationId";
import StudentApplication from "@/components/StudentApplication";
import { HeroImage } from "@/components/HeroImage";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default async function Apply({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const organisationId = await getOrganisationId(searchParams) as string;
  const organisation = await getOrganisation(organisationId)

  return (
    <>
      <HeroImage
        header="ADMISSIONS"
        // subHeader="Explore Our Journey"
        height={375}
        src="https://plus.unsplash.com/premium_photo-1670682102928-fc9050f95f26?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
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

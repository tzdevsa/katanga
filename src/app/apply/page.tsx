import { getOrganisation } from "@/actions/getOrganisation";
import { formatAddressCityPostalCodeProvince } from "@/lib/formatAddress";
import { Container, Grid, Typography } from "@mui/material";
import getOrganisationId from "@/lib/getOrganisationId";
import StudentApplication from "@/components/StudentApplication";
import { Footer } from "@/components/Footer";
import { HeroImage } from "@/components/HeroImage";

export default async function Contact({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const organizationId = await getOrganisationId(searchParams) as string;
  const organisation = await getOrganisation(organizationId)

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
                <Typography textTransform="uppercase" color="primary" fontWeight="bold" variant="body2" align="left" gutterBottom>
                  {organisation?.address?.addressLine1 && (<p>{organisation?.address?.addressLine1}</p>)}
                  {organisation?.address?.addressLine2 && (<p>{organisation?.address?.addressLine2}</p>)}
                  <p>{formatAddressCityPostalCodeProvince(organisation?.address)}</p>
                  <p>{organisation?.address?.country}</p>
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Container>
                {organisation && <StudentApplication organizationId={organisation.envId} />}
              </Container>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer organizationId={organizationId} />
    </>
  );
}

import { getOrganisation } from "@/actions/getOrganisation";
import { formatAddressCityPostalCodeProvince } from "@/lib/formatAddress";
import { Container, Grid, Typography } from "@mui/material";
import getOrganisationId from "@/lib/getOrganisationId";
import StudentApplication from "@/components/StudentApplication";

export default async function Contact({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const organizationId = await getOrganisationId(searchParams) as string;
  const organisation = await getOrganisation(organizationId)

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
            <Grid item xs={12}>
              <Container sx={{ mb: 6 }}>
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'block' }, // Larger screens only
                  }}
                  variant="h2"
                  fontWeight="bold"
                  align="left"
                  gutterBottom>
                  APPLY
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'block', md: 'none' }, // Mobile only
                  }}
                  variant="h4"
                  fontWeight="bold"
                  align="left"
                  gutterBottom>
                  APPLY
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Container>
                <Typography
                  component="h6"
                  variant="body2"
                  align="left"
                  gutterBottom
                  textTransform="uppercase"
                >
                  Application Instruction
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
    </>
  );
}

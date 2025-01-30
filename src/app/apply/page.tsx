import { getOrganisation } from "@/actions/getOrganisation";
import { Container, Grid, Typography } from "@mui/material";
import StudentApplication from "@/components/StudentApplication";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { headers } from "next/headers";
import Head from "next/head";

export default async function Apply() {
  const requestHeaders = await headers();
  const organisationId = requestHeaders.get("x-organisation-id");

  let organisation = null;  
  if (organisationId) {
    organisation = await getOrganisation(organisationId);
  }

  return (
    <>
      <Head>
        <title>{`Apply - ${organisation?.name}`}</title>
        <meta name="description" content={`Learn more about ${organisation?.name}, our mission, vision, and commitment to excellence in education.`} />
        <meta name="keywords" content="Zambia school, Primary school in Zambia, Secondary school in Zambia, Education in Zambia, Best schools in Zambia, Zambia education system, Zambia primary education, Zambia secondary education, Affordable schools in Zambia, Zambia private schools, Top schools in Zambia, Learning institutions in Zambia, Zambia school curriculum, School for children in Zambia, Quality education in Zambia, Co-educational schools Zambia, Boarding schools in Zambia, Zambia school admissions, Zambia high school, Early childhood education Zambia" />
        
        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={`Apply - ${organisation?.name}`} />
        <meta property="og:description" content={`Learn more about ${organisation?.name}, our mission, vision, and commitment to excellence in education.`} />
        <meta property="og:image" content={`${organisation?.image?.src}`} />
        <meta property="og:url" content={`https://${organisation?.envId}.workspacezm.com/`} />
        
        {/* Twitter card meta tags */}
        <meta name="twitter:title" content={`Apply - ${organisation?.name}`} />
        <meta name="twitter:description" content={`Learn more about ${organisation?.name}, our mission, vision, and commitment to excellence in education.`} />
        <meta name="twitter:image" content={`${organisation?.image?.src}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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

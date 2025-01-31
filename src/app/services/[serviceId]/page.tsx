import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { headers } from 'next/headers';
import { getServiceById } from '@/actions/getService';

type Params = Promise<{ serviceId: string}>;

export default async function TeamMember({
  params,
}: {
  params: Params;
}) {
  const { serviceId } = await params;
  const requestHeaders = await headers();
  const organisationId = requestHeaders.get("x-organisation-id");

  let service = null;
  if (organisationId && serviceId) {
    service = await getServiceById(serviceId, organisationId)
  }
  
  return (
    <>
      <main>
        <Box sx={{
          display: { xs: 'none', md: 'block' }, // Larger screens only
        }}>
          <Container maxWidth="lg">
            <Typography
              variant="button"
              href="/services"
              component={Link}
              align="left"
              gutterBottom
              textTransform="capitalize">
              Back to Services<ArrowRightIcon fontSize="small" color="primary" />
            </Typography>
          </Container>
        </Box>
        <section id="team">
          <Container sx={{
            display: { xs: 'block', md: 'none' }, // Mobile only
            mb: 2
          }} maxWidth="lg">
            <Link href={`/services`}>
              <Typography
                variant="button"
                href="/services"
                component={Link}
                align="left"
                gutterBottom
                textTransform="capitalize">
                Back to Services<ArrowRightIcon fontSize="small" color="primary" />
              </Typography>
            </Link>
          </Container>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={3}
            >
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    "&:hover": {
                      borderBottom: "5px solid #d12627",
                    },
                    backgroundImage: `url(${service?.image?.src ??
                      "/placeholder-profile-icon.png"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    backgroundRepeat: "no-repeat",
                    height: "565px",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                    sx={{
                      "&:hover": {
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2))",
                        height: "560px",
                      },
                      height: "565px",
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0))",
                    }}
                  >
                    <Grid item xs={12}>
                      <CardContent />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: "background.default"
                  }}
                >
                  <CardContent>
                    {service?.name && (
                      <>
                        <Typography
                          variant="button"
                          component="h1"
                          align="left"
                          gutterBottom
                          textTransform="capitalize">
                          {service?.name}<ArrowRightIcon fontSize="small" color="primary" />
                        </Typography>
                      </>
                    )}
                    {service?.description && (
                      <Typography variant="h5" align="left">
                        {service.description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

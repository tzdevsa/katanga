import { HeroImage } from '@/components/HeroImage';
import { getStaffById } from '@/actions/getStaffById';
import { Box, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

type Params = Promise<{ staffId: string, organizationId: string }>;

export default async function TeamMember({
  params,
}: {
  params: Params;
}) {
  const { staffId, organizationId } = await params;
  const staff = await getStaffById(staffId, organizationId)

  const position = staff?.positions[0]?.job?.description;

  /*
  if (!staff) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h2 className="text-6xl font-bold text-center p-7">
            Staff not found
          </h2>
        </div>
      </main>
    );
  }
    */

  console.log(staff)
  return (
    <>
      <HeroImage
        header="LEADERSHIP"
        height={375}
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <main>
        <Box sx={{
          display: { xs: 'none', md: 'block' }, // Larger screens only
        }}>
          <section>
            <Container maxWidth="lg">
              <Link href={`/team`}>
                <Typography
                  variant='body2'
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  Back to Leadership<ArrowRightIcon color="primary" />
                </Typography>
              </Link>
            </Container>
          </section>
        </Box>
        <section id="team">
          <Container sx={{
            display: { xs: 'block', md: 'none' }, // Mobile only
            mb: 2
          }} maxWidth="lg">
            <Link href={`/team`}>
              <Typography
                variant='body2'
                textTransform="capitalize"
                fontWeight="500"
              >
                Back to Leadership<ArrowRightIcon color="primary" />
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
              <Grid item xs={12}>
                <Typography

                >
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'block' }, // Larger screens only
                  }}
                  variant="h3"
                  fontWeight="bold"
                  align="left"
                  textTransform="uppercase">
                  {staff?.profile?.firstName} {staff?.profile?.lastName}
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'block', md: 'none' }, // Mobile only
                  }}
                  variant="h5"
                  fontWeight="bold"
                  align="left"
                  textTransform="uppercase">
                  {staff?.profile?.firstName} {staff?.profile?.lastName}
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'block' }, // Larger screens only
                  }}
                  variant="subtitle1"
                  component="p"
                  textTransform="uppercase"
                  fontWeight="500"
                >
                  {position}
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'block', md: 'none' }, // Mobile only
                  }}
                  variant="body2"
                  component="p"
                  textTransform="uppercase"
                  fontWeight="500"
                >
                  {position}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    "&:hover": {
                      borderBottom: "5px solid #d12627",
                    },
                    backgroundImage: `url(${staff?.image?.src ??
                      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    backgroundRepeat: "no-repeat",
                    height: "365px",
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
                        height: "360px",
                      },
                      height: "365px",
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0))",
                    }}
                  >
                    <Grid item xs={12}>
                      <CardContent>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: "whitesmoke"
                  }}
                >
                  <CardContent>
                    <CardContent>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        align="left"
                        gutterBottom
                        textTransform="uppercase"
                      >
                        BIO
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight={500}
                        lineHeight={2}
                        fontSize={18}
                        color="textSecondary"
                      >
                        {staff?.bio ?? "bio"}
                      </Typography>
                    </CardContent>
                    {staff?.credentials && (
                      <CardContent>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          align="left"
                          gutterBottom
                          textTransform="uppercase"
                        >
                          CREDENTIALS
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight={500}
                          lineHeight={2}
                          fontSize={18}
                          color="textSecondary"
                        >
                          {staff.credentials}
                        </Typography>
                      </CardContent>
                    )}
                    {staff?.quote && (
                      <>
                        <CardContent>
                          <Divider />
                        </CardContent>
                        <CardContent>
                          <Typography
                            variant="subtitle2"
                            fontWeight="500"
                          >
                            <FormatQuoteIcon color="primary" fontSize='large' />{staff?.quote}
                          </Typography>
                        </CardContent>
                      </>
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

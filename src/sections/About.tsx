'use client';
import { CardContent, Container, Grid, Typography } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Environment, Service } from "@think-zambia-foundation/api";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export default function About({ 
  services,
  organisation
}: { 
  services: Service[] 
  organisation: Environment
}) {
  return (
    <section>
      <Container id="about" maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <CardContent>
              <Link href="/about">
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'block' }, // Larger screens only
                  }}
                  variant="h4"
                  component="h6"
                  fontWeight="bold"
                  align="left"
                  gutterBottom
                  textTransform="uppercase">
                  ABOUT<ArrowRightIcon color="primary" />
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'block', md: 'none' }, // Mobile only
                  }}
                  variant="h6"
                  component="h6"
                  fontWeight="bold"
                  align="left"
                  gutterBottom
                  textTransform="uppercase">
                  ABOUT<ArrowRightIcon color="primary" />
                </Typography>
              </Link>
              <Typography variant="h6" align="left" fontWeight="500" gutterBottom>
                Welcome to {organisation?.name}, where we nurture academic excellence and moral integrity. Guided by Christian principles, we offer an all-embracing education that inspires our students to excel and become morally responsible citizens.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <CardContent>
              <Link href="/services">
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'block' }, // Larger screens only
                  }}
                  variant="h4"
                  component="h6"
                  fontWeight="bold"
                  align="left"
                  gutterBottom
                  textTransform="uppercase">
                  WHAT WE OFFER<ArrowRightIcon color="primary" />
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'block', md: 'none' }, // Mobile only
                  }}
                  variant="h6"
                  component="h6"
                  fontWeight="bold"
                  align="left"
                  gutterBottom
                  textTransform="uppercase">
                  WHAT WE OFFER<ArrowRightIcon color="primary" />
                </Typography>
              </Link>
            </CardContent>
            <Grid
              sx={{
                padding: 1,
              }}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              {services?.map((service) => (
                <Grid item xs={12} sm={4} key={service.serviceId}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

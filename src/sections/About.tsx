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
                  variant="button"
                  component="h6"
                  align="left"
                  gutterBottom
                  textTransform="capitalize">
                  About Us<ArrowRightIcon color="primary" />
                </Typography>
              </Link>
              <Typography variant="h5" align="left">
                {organisation?.about ?? `Welcome to ${organisation?.name}, where we nurture academic excellence and moral integrity. Guided by Christian principles, we offer an all-embracing education that inspires our students to excel and become morally responsible citizens.`}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <CardContent>
              <Link href="/services">
                <Typography
                  variant="button"
                  component="h6"
                  align="left"
                  textTransform="capitalize">
                  What We Offer<ArrowRightIcon color="primary" />
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

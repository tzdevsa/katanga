import { CardContent, Container, Grid, Typography } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Service } from "@think-zambia-foundation/api";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export default function Services({ 
  services,
}: { 
  services: Service[] 
}) {

  if (!services || services?.length === 0) return <></>
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

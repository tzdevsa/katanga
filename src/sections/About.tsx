'use client';
import { Container, Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Parallax } from 'react-scroll-parallax';
import { Environment, Service } from "@think-zambia-foundation/api";

export default function About({ 
  services,
  organisation
}: { 
  services: Service[] 
  organisation: Environment
}) {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <section>
      <Container id="about" maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={12} sm={9}>
            <Parallax translateY={[-15, 15]} translateX={[-2, 0]}>
              <Typography variant={isMobile ? "h4" : "h2"} fontWeight="bold" align="left" gutterBottom>
                ABOUT
              </Typography>
              <Typography variant={isMobile ? "h6" : "h5"} align="left" fontWeight="500" gutterBottom>
                Welcome to {organisation?.name}, where learning meets inspiration! Our mission is to nurture curious minds and empower students to achieve their full potential. With a commitment to academic excellence and personal growth, we provide a supportive environment that encourages creativity, innovation, and lifelong learning. Join us in shaping bright futures!
              </Typography>
            </Parallax>
          </Grid>
          <Grid item xs={3} sx={{
            display: {
              xs: 'none',
              sm: 'block',
            }
          }}>
            <Parallax translateX={[5, -5]}>
              {services?.length > 0 && (
                <div>
                  <Typography variant="subtitle1" fontWeight="bold" align="left" gutterBottom>
                    What We Offer
                  </Typography>
                  {services?.map((service) => (
                    <Typography key={service.serviceId} variant="subtitle1" align="left" gutterBottom textTransform="capitalize">
                      <ArrowRightIcon color="primary" />{service.name}
                    </Typography>
                  ))}
                </div>
              )}
            </Parallax>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

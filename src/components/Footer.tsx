import { Box, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { SocialMedia } from './SocialMedia';
import { formatAddressCityPostalCodeProvince } from '@/lib/formatAddress';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Environment, Service } from "@think-zambia-foundation/api";

interface FooterProps {
  organisation: Environment | null,
  services: Service[],
}

export function Footer({ organisation, services }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        position: "relative",
        bottom: 0
      }}
    >
      <section>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography variant='button' component="h6" align='left' textTransform="capitalize" gutterBottom>
                  {organisation?.name}<ArrowRightIcon color="primary" />
                </Typography>
                <Typography variant='body2' align='left' color='textSecondary'>
                  Pre-School, Primary School & Secondary School
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant='button' component="h6" align='left' textTransform="capitalize" gutterBottom>
                  About Us<ArrowRightIcon color="primary" />
                </Typography>
                <Typography variant='body2' align='left' color='textSecondary'>
                  Welcome to {organisation?.name}, where learning meets inspiration! Our mission is to nurture curious minds and empower students to achieve their full potential. 
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant='body2' align='left' textTransform="capitalize" color='textSecondary'>
                  © {new Date().getFullYear()} {organisation?.name}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CardContent>
                <Typography variant='button' component="h6" align='left' textTransform="capitalize" gutterBottom>
                  What We Offer<ArrowRightIcon color="primary" />
                </Typography>
                {services?.map((service) => (
                  <Typography key={service.serviceId} variant="body2" align="left" textTransform="capitalize" color='textSecondary'>
                    <ArrowRightIcon color="disabled" />{service.name}
                  </Typography>
                ))}
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CardContent>
                <Typography variant='button' component="h6" align='left' textTransform="capitalize" gutterBottom>
                  Administration<ArrowRightIcon color="primary" />
                </Typography>
                {organisation?.address?.addressLine1 && (<Typography variant='body2' align='left' color='textSecondary'>{organisation?.address?.addressLine1}</Typography>)}
                {organisation?.address?.addressLine2 && (<Typography variant='body2' align='left' color='textSecondary'>{organisation?.address?.addressLine2}</Typography>)}
                {(organisation?.address?.city || organisation?.address?.postalCode || organisation?.address?.province) && (<Typography variant='body2' align='left' color='textSecondary'>{formatAddressCityPostalCodeProvince(organisation?.address)}</Typography>)}
                {organisation?.address?.country && (<Typography variant='body2' align='left' color='textSecondary'>{organisation?.address?.country}</Typography>)}
              </CardContent>
              <CardContent>
                <Typography variant='button' component="h6" align='left' textTransform="capitalize" gutterBottom>
                  Support<ArrowRightIcon color="primary" />
                </Typography>
                <Typography variant='body2' align='left' color='textSecondary'>
                  {organisation?.contact?.email}
                </Typography>
              </CardContent>
              <CardContent>
                <SocialMedia
                  linkedIn={organisation?.contact?.linkedIn}
                  facebook={organisation?.contact?.facebook}
                  instagram={organisation?.contact?.instagram}
                  x={organisation?.contact?.x}
                  github={organisation?.contact?.github}
                  sx={{ left: -11, position: "relative" }}
                />
              </CardContent>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' align='center'>
                Powered by <a href='https://katanga.workspacezm.com/' target='_blank'>Katanga</a>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Box>
  )
}

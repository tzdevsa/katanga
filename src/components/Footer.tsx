"use client"
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
        color: "text.primary"
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
                <Typography variant='h6' fontWeight="bold" align='left' textTransform="capitalize">
                  {organisation?.name}
                </Typography>
                <Typography variant='body2' align='left'>
                  Pre-School, Primary School & Secondary School
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant='h6' fontWeight="bold" align='left' textTransform="capitalize">
                  About Us
                </Typography>
                <Typography variant='body2' align='left'>
                  Welcome to {organisation?.name}, where learning meets inspiration! Our mission is to nurture curious minds and empower students to achieve their full potential. 
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant='body2' align='left' textTransform="capitalize">
                  © {new Date().getFullYear()} {organisation?.name}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CardContent>
                <Typography variant='h6' fontWeight="bold" align='left' textTransform="capitalize">
                  What We Offer
                </Typography>
                {services?.map((service) => (
                  <Typography key={service.serviceId} variant="subtitle1" align="left" gutterBottom textTransform="capitalize">
                    <ArrowRightIcon color="primary" />{service.name}
                  </Typography>
                ))}
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CardContent>
                <Typography variant='h6' fontWeight="bold" align='left' textTransform="capitalize">
                  Administration
                </Typography>
                {organisation?.address?.addressLine1 && (<Typography variant='body2' align='left'>{organisation?.address?.addressLine1}</Typography>)}
                {organisation?.address?.addressLine2 && (<Typography variant='body2' align='left'>{organisation?.address?.addressLine2}</Typography>)}
                {(organisation?.address?.city || organisation?.address?.postalCode || organisation?.address?.province) && (<Typography variant='body2' align='left'>{formatAddressCityPostalCodeProvince(organisation?.address)}</Typography>)}
                {organisation?.address?.country && (<Typography variant='body2' align='left'>{organisation?.address?.country}</Typography>)}
              </CardContent>
              <CardContent>
                <Typography variant='h6' fontWeight="bold" align='left' textTransform="capitalize">
                  Support
                </Typography>
                <Typography variant='body2' align='left'>
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

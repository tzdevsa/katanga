import { Box, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { SocialMedia } from './SocialMedia';
import { formatAddressCityPostalCodeProvince } from '@/lib/formatAddress';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Environment, Service } from "@think-zambia-foundation/api";
import Link from 'next/link';

interface FooterProps {
  organisation: Environment,
  services: Service[],
}

export function Footer({ organisation, services }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        position: "absolute",
        width: "100vw",
        mt: "6rem"
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
                {organisation.motto && (<Typography variant='body2' align='left' color='textSecondary'>
                  {organisation?.motto}
                </Typography>)}
              </CardContent>
              {organisation?.about && (
                <CardContent>
                  <Typography variant='button' component="h6" align='left' textTransform="capitalize" gutterBottom>
                    About Us<ArrowRightIcon color="primary" />
                  </Typography>
                  <Typography variant='body2' align='left' color='textSecondary'>
                    {organisation?.about}
                  </Typography>
                </CardContent>
              )}
              <CardContent>
                <Typography variant='body2' align='left' textTransform="capitalize" color='textSecondary'>
                  © {new Date().getFullYear()} {organisation?.name}
                </Typography>
              </CardContent>
            </Grid>
            {services && services.length > 0 && (
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
            )}
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
                {organisation?.contact?.email && (
                  <Link href={`mailto:${organisation?.contact?.email}`}>
                    <Typography variant='body2' align='left' color='textSecondary'>
                      {organisation?.contact?.email}
                    </Typography>
                  </Link>
                )}
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
                Powered by <Typography component="a" variant="body2" color="primary" href='https://katanga.workspacezm.com/' target='_blank'>Katanga</Typography>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Box>
  )
}

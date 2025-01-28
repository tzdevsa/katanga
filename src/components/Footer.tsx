import { CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { SocialMedia } from './SocialMedia';
import { getOrganisation } from '@/actions/getOrganisation';
import { formatAddressCityPostalCodeProvince } from '@/lib/formatAddress';
import { getServices } from '@/actions/getServices';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export async function Footer({ organizationId }: { organizationId: string }) {
  const organisation = await getOrganisation(organizationId)
  const services = await getServices(organizationId);

  return (
    <footer
      style={{
        backgroundColor: "whitesmoke"
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
                <Typography variant='body2' align='left'>
                  {organisation?.address?.addressLine1 && (<p>{organisation?.address?.addressLine1}</p>)}
                  {organisation?.address?.addressLine2 && (<p>{organisation?.address?.addressLine2}</p>)}
                  <p>{formatAddressCityPostalCodeProvince(organisation?.address)}</p>
                  <p>{organisation?.address?.country}</p>
                </Typography>
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
    </footer>
  )
}

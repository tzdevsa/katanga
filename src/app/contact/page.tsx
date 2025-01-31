import { getOrganisation } from "@/actions/getOrganisation";
import { formatAddressCityPostalCodeProvince } from "@/lib/formatAddress";
import { Container, Grid, Typography } from "@mui/material";
import { SocialMedia } from "@/components/SocialMedia";
import { getGeometry } from "@/actions/getGeometry";
import SendEmail from "@/components/SendEmail";
import { headers } from "next/headers";
import { GetFormattedPhoneNumberString } from "@think-zambia-foundation/utils";

export default async function Contact() {
  const requestHeaders = await headers();
  const organisationId = requestHeaders.get("x-organisation-id");
    
  let organisation = null;
  if (organisationId) {
    organisation = await getOrganisation(organisationId);
  }
  const geometry = await getGeometry()

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "375px" }}>
        <iframe
          src={`https://maps.google.com/maps?q=${geometry?.location?.lat},${geometry?.location?.lng}&t=&z=15&ie=UTF8&wloc&output=embed`}
          width="100%"
          height="375"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.0) 25%, rgba(0,0,0,0.4) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
      <section>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item xs={12}>
              <Container sx={{ mb: 6 }}>
                <Typography
                  sx={{
                    display: { xs: 'none', md: 'block' }, // Larger screens only
                  }}
                  variant="h2"
                  fontWeight="bold"
                  align="left"
                  gutterBottom>
                  CONTACT US
                </Typography>
                <Typography
                  sx={{
                    display: { xs: 'block', md: 'none' }, // Mobile only
                  }}
                  variant="h4"
                  fontWeight="bold"
                  align="left"
                  gutterBottom>
                  CONTACT US
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Container>
                <Typography
                  component="h6"
                  variant="body2"
                  align="left"
                  gutterBottom
                  textTransform="uppercase"
                >
                  Administration
                </Typography>
                {organisation?.address?.addressLine1 && (<Typography textTransform="uppercase" color="primary" fontWeight="bold" variant="body2" align="left">{organisation?.address?.addressLine1}</Typography>)}
                {organisation?.address?.addressLine2 && (<Typography textTransform="uppercase" color="primary" fontWeight="bold" variant="body2" align="left">{organisation?.address?.addressLine2}</Typography>)}
                {(organisation?.address?.city || organisation?.address?.postalCode || organisation?.address?.province) && (<Typography textTransform="uppercase" color="primary" fontWeight="bold" variant="body2" align="left">{formatAddressCityPostalCodeProvince(organisation?.address)}</Typography>)}
                {organisation?.address?.country && (<Typography textTransform="uppercase" color="primary" fontWeight="bold" variant="body2" align="left">{organisation?.address?.country}</Typography>)}
              </Container>
              {organisation?.contact?.phone1 && (
                <Container sx={{ mt: 4 }}>
                  <Typography
                    component="h6"
                    variant="body2"
                    align="left"
                    gutterBottom
                    textTransform="uppercase"
                  >
                    PHONE
                  </Typography>
                  <Typography textTransform="uppercase" color="primary" fontWeight="bold" variant="body2" align="left" gutterBottom>
                    {GetFormattedPhoneNumberString({ phone: organisation?.contact?.phone1 })}
                  </Typography>
                </Container>
              )}
              {organisation?.contact?.email && (
                <Container sx={{ mt: 4 }}>
                  <Typography
                    component="h6"
                    variant="body2"
                    align="left"
                    gutterBottom
                    textTransform="uppercase"
                  >
                    EMAIL
                  </Typography>
                  <Typography textTransform="uppercase" color="primary" fontWeight="bold" variant="body2" align="left" gutterBottom>
                    {organisation?.contact?.email}
                  </Typography>
                </Container>
              )}
              <Container sx={{ mt: 4 }}>
                <Typography
                  component="h6"
                  variant="body2"
                  align="left"
                  gutterBottom
                  textTransform="uppercase"
                >
                  SOCIAL
                </Typography>
                <SocialMedia
                  linkedIn={organisation?.contact?.linkedIn}
                  facebook={organisation?.contact?.facebook}
                  instagram={organisation?.contact?.instagram}
                  x={organisation?.contact?.x}
                  github={organisation?.contact?.github}
                  color="primary"
                  sx={{ left: -11, position: "relative" }}
                />
              </Container>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Container>
                {organisation?.contact?.email && <SendEmail email={organisation?.contact?.email} />}
              </Container>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

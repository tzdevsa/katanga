import { Button, CardContent, Container, Grid, Typography } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Environment } from "@think-zambia-foundation/api";
import Link from "next/link";

export default function About({ 
  organisation,
  href
}: { 
  organisation: Environment,
  href?: string
}) {

  interface ConditionalLinkProps {
    href?: string;
    children: React.ReactNode;
  }

  const ConditionalLink: React.FC<ConditionalLinkProps> = ({ href, children }) => {
    return href ? (
      <Link href={href}>
        {children}
      </Link>
    ) : (
      <>{children}</>
    );
  };

  if (!organisation?.about) return <></>
  return (
    <section id="about">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <CardContent>
              <ConditionalLink href={href}>
                <Typography
                  variant="button"
                  component={ href ? "button" : "p" }
                  align="left"
                  gutterBottom
                  textTransform="capitalize">
                  About Us<ArrowRightIcon fontSize="small" color="primary" />
                </Typography>
              </ConditionalLink>
              <Typography variant="h5" align="left">
                {organisation?.about}
              </Typography>
            </CardContent>
            {href && (
              <CardContent>
                <ConditionalLink href={href}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: 0, pt: 1.3, pb: 1.3, pl: 7, pr: 7 }}
                  >
                    <Typography variant="body2" component="button" fontWeight="400">Learn More</Typography>
                  </Button>
                </ConditionalLink>
              </CardContent>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

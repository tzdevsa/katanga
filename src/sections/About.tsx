import { CardContent, Container, Grid, Typography } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Environment } from "@think-zambia-foundation/api";
import Link from "next/link";

export default function About({ organisation }: { organisation: Environment }) {
  if (!organisation?.about) return <></>
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
                  About Us<ArrowRightIcon fontSize="small" color="primary" />
                </Typography>
              </Link>
              <Typography variant="h5" align="left">
                {organisation?.about}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

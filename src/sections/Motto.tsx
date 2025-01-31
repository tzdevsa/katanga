import { Box, Button, CardContent, Container, Grid, Typography } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Environment } from "@think-zambia-foundation/api";
import Link from "next/link";

export default function Motto({ organisation }: { organisation: Environment }) {
  if (!organisation?.motto) return <></>
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: "5px solid #f3f3f3"
      }}
    >
      <section>
        <Container id="motto" maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12}>
              <CardContent>
                <Typography
                  variant="button"
                  component="h6"
                  align="left"
                  gutterBottom
                  textTransform="capitalize">
                  Our Motto<ArrowRightIcon fontSize="small" color="primary" />
                </Typography>
                <Typography sx={{ display: { xs: "none", sm: "block" }}} variant="h1" align="left">
                  {organisation?.motto}
                </Typography>
                <Typography sx={{ display: { xs: "block", sm: "none" }}} variant="h3" align="left">
                  {organisation?.motto}
                </Typography>
              </CardContent>
              <CardContent>
                <Link href="/apply">
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: 0, p: 2 }}
                  >
                    <Typography sx={{ display: { xs: "none", sm: "block" }}} variant="h6" component="button" fontWeight="400">Start Learning Today</Typography>
                    <Typography sx={{ display: { xs: "block", sm: "none" }}} variant="body2" component="button" fontWeight="400">Start Learning Today</Typography>
                  </Button>
                </Link>
              </CardContent>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Box>
  )
}

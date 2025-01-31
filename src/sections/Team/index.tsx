import {
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Staff } from "@think-zambia-foundation/api";
import ProfileCard from "@/components/ProfileCard";
import Link from "next/link";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default async function Team({ staff }: { staff: Staff[] }) {  
  return (
    <section id="team">
      <Container maxWidth="lg">
        <CardContent>
          <Link href="/team">
            <Typography
              variant="button"
              component="h6"
              align="left"
              gutterBottom
              textTransform="capitalize">
              Meet The Team<ArrowRightIcon fontSize="small" color="primary" />
            </Typography>
          </Link>
        </CardContent>
        <Grid
          container
          direction="row"
          justifyContent={staff?.length > 5 ? "space-evenly": "flex-start"}
          alignItems="flex-start"
          spacing={1}
        >
          {staff?.slice(0, 6).map((staff: Staff) => (
            <Grid key={staff.staffId} item xs={6} sm={2}>
              <ProfileCard staff={staff} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}


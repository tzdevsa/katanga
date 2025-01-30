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
          <Link href="/about">
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
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={3}
        >
          {staff?.map((staff: Staff) => (
            <Grid key={staff.staffId} item xs={12} sm={4}>
              <ProfileCard staff={staff} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}


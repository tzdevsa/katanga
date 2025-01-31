/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReviewCard } from "@/components/ReviewCard";
import { Typography, Grid, Container, CardContent } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface Review {
  profile_photo_url: string;
  author_name: string;
  rating: number;
  text: string;
  time: string;
}

export default async function Testimonials({ reviews }: { reviews: Review[] }) {
  return (
    <section id="reviews">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardContent>
              <Typography
                variant="button"
                component="h6"
                align="left"
                textTransform="capitalize">
                Testimonials<ArrowRightIcon fontSize="small" color="primary" />
              </Typography>
            </CardContent>
          </Grid>
          {reviews.map((review: any) => (
            <Grid item xs={12} sm={6} md={3} key={review.time}>
              <ReviewCard
                avatar={review.profile_photo_url}
                name={review.author_name}
                rating={review.rating}
                text={review.text}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
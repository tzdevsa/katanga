/* eslint-disable @typescript-eslint/no-explicit-any */
import { getReviews } from "@/actions/getReviews";
import { ReviewCard } from "@/components/ReviewCard";
import { Typography, Grid, Container } from "@mui/material";

export default async function Testimonials() {
  // Get the first three reviews with a rating greater than 4
  const reviews = (await getReviews())?.filter((review: { rating: number; }) => review.rating > 4).splice(0, 3);

  return (
    <section id="testimonials" style={{
      backgroundColor: 'whitesmoke',
    }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{
                display: { xs: 'none', md: 'block' }, // Larger screens only
              }}
              variant="h2"
              fontWeight="bold"
              align="center"
              gutterBottom>
              TESTIMONIALS
            </Typography>
            <Typography
              sx={{
                display: { xs: 'block', md: 'none' }, // Mobile only
              }}
              variant="h4"
              fontWeight="bold"
              align="left"
              gutterBottom>
              TESTIMONIALS
            </Typography>
            <Typography
              sx={{
                display: { xs: 'none', md: 'block' }, // Larger screens only
              }}
              variant="h4"
              fontWeight="500"
              align="center"
              gutterBottom>
              {'We value those we serve and their experiences. See what they have to say about us!'}
            </Typography>
            <Typography
              sx={{
                display: { xs: 'block', md: 'none' }, // Mobile only
              }}
              variant="h5"
              fontWeight="500"
              align="left"
              gutterBottom>
              {'We value those we serve and their experiences. See what they have to say about us!'}
            </Typography>
          </Grid>
          {reviews.map((review: any) => (
            <Grid item xs={12} sm={6} md={4} key={review.time}>
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
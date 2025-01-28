import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Avatar, CardHeader, Grid } from '@mui/material';

interface ReviewCardProps {
  name: string
  text: string
  rating?: number
  reviewDate?: string
  avatar?: string
}

export function ReviewCard({
  name,
  text,
  rating,
  avatar,
}: ReviewCardProps) {
  return (
    <Card
      elevation={0}
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <CardHeader
        avatar={<Avatar alt={name} src={avatar} />}
        title={<Rating sx={{
          color: "primary.main",
        }} name="read-only" value={rating} readOnly />}
      />
      <CardContent>
        <Grid container spacing={2}>
          {text && (
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>
                {`"${text}"`}
              </Typography>
            </Grid>
          )}
          {name && (
            <Grid item xs={12}>
              <Typography variant="body2">
                {`- ${name}`}
              </Typography>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
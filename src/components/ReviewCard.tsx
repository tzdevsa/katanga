"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Avatar, CardHeader } from '@mui/material';

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
  const [expanded, setExpanded] = React.useState(false);
  const shortText = text.length > 100 ? text.substring(0, 100) + "..." : text;

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
        avatar={<Avatar alt={name} src={avatar} sx={{ width: 75, height: 75 }}/>}
        title={
          <>
            {name && (
              <Typography variant="body2" gutterBottom sx={{ pl: 1 }}>
                {name}
              </Typography>
            )}
            <Rating 
              sx={{
                color: "primary.main",
              }} 
              name={name}
              value={rating} readOnly
            />
          </>
        }
      />
      <CardContent>
          {text && (
            <>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {expanded ? `"${text}"` : `"${shortText}"`}
              </Typography>
              {text.length > 100 && (
                <Typography textTransform="capitalize" variant='button' color="primary" onClick={() => setExpanded(!expanded)}>
                  {expanded ? "Show Less" : "Read More"}
                </Typography>
              )}
            </>
          )}
      </CardContent>
    </Card>
  );
}
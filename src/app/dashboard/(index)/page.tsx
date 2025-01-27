import * as React from 'react';
import Typography from '@mui/material/Typography';
import { auth } from '@/auth';

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    return <Typography>Sign in to Katanga</Typography>;
  }
  return (
    <>
      <Typography variant="h4">Welcome to Katanga</Typography>
    </>
  )
}

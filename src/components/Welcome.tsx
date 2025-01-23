'use client'

import { formatAddressCityPostalCodeProvince } from '@/lib/formatAddress'
import { Grid2, Typography } from '@mui/material'
import { Environment } from '@think-zambia-foundation/api'
import React from 'react'

export default function Welcome({ organisation }: { organisation: Environment }) {
  return (
    <Grid2
        container
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2 size={12}>
          <Typography variant="h3" textAlign="center">Welcome to {organisation ? organisation.name : 'Default'} School!</Typography>
          <Typography variant="body1" textAlign="center">Organization ID: {organisation.envId || 'No Subdomain Detected'}</Typography>
          <Typography variant="body2" gutterBottom textAlign="center">
            {formatAddressCityPostalCodeProvince(organisation?.address)}
            {organisation?.address?.country ? `, ${organisation.address.country}` : ""}
          </Typography>
        </Grid2>
      </Grid2>
  )
}

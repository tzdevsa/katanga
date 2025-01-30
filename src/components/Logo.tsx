"use client"
import { Typography } from '@mui/material'
import React from 'react'
import { Environment } from "@think-zambia-foundation/api";

export function Logo({organisation}: {organisation?: Environment}) {
    /*
        <Image
            src={logo}
            width={127}
            alt="Umeh Construction — Logo"
        />
    */
    return (
        <Typography variant='subtitle2' fontWeight="bold" textTransform="uppercase">
            {organisation?.name ?? "Katanga School"}
        </Typography>
    )
}

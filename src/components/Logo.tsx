"use client"
import { Typography } from '@mui/material'
import React from 'react'
import { Environment } from "@think-zambia-foundation/api";
import Image from 'next/image';

export function Logo({organisation}: {organisation?: Environment}) {
    const hasLogo = true;
    if (!hasLogo) {
        return (
            <Typography variant="h5" component="a" fontWeight="400" textTransform="capitalize">
                {organisation?.name ?? "Katanga Trust Academy"}
            </Typography>
        )
    }
    return (
        <Image
            src="https://chastenzm.com/static/media/CEC_Logo.cae3c6b6.png"
            alt="CEC Logo"
            width={215}  // Set desired width
            height={75} // Set desired height
            priority // Ensures faster loading
        />
    )
}

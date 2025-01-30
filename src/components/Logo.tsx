import { Typography } from '@mui/material'
import React from 'react'
import { Environment } from "@think-zambia-foundation/api";
import Image from 'next/image';

export function Logo({organisation}: {organisation?: Environment}) {
    if (organisation?.image) {
        return (
            <Image
                src={organisation.image.src}
                alt={organisation.image.alt}
                width={215}
                height={75}
                priority
            />
        )   
    }
    return (
        <Typography variant="h6" component="a" fontWeight="400" textTransform="capitalize">
            {organisation?.name ?? "Katanga School"}
        </Typography>
    )
}

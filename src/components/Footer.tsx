import { Container } from '@mui/material'
import React from 'react'
import getOrganisationId from '@/lib/getOrganisationId';
import { getOrganisation } from '@/actions/getOrganisation';
import { SocialMedia } from './SocialMedia';

export async function Footer({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const organizationId = await getOrganisationId(searchParams) as string;
    const organisation = await getOrganisation(organizationId)
  return (
    <footer
      style={{
        textAlign: 'center',
      }}
    >
      <section>
        <Container maxWidth="xl">
          <SocialMedia
            linkedIn={organisation?.contact?.linkedIn}
            facebook={organisation?.contact?.facebook}
            instagram={organisation?.contact?.instagram}
            x={organisation?.contact?.x}
            github={organisation?.contact?.github}

          />
          <p>© {new Date().getFullYear()} {organisation?.name}</p>
        </Container>
      </section>
    </footer>
  )
}

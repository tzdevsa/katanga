/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";
import { Header } from "@/components/Header";
import { Providers } from "./providers";
import Theme from "@/theme";
import { Box } from "@mui/material";
import { getOrganisation } from "@/actions/getOrganisation";
import { headers } from "next/headers";
import { getServices } from "@/actions/getServices";
import { Footer } from "@/components/Footer";
import { KatangaProvider } from "@/context";

type LayoutProps = {
  children: React.ReactNode;
  searchParams: any;
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const organisationId = requestHeaders.get("x-organisation-id");
  let organisation = null;

  if (organisationId) {
    organisation = await getOrganisation(organisationId);
  }

  return {
    title: organisation ? `${organisation?.name} | School Website` : 'Katanga | School Website',
    description: 'This is a description of my awesome website for better SEO.',
    keywords: ['nextjs', 'seo', 'metadata', 'web development'],
    authors: {
      name: "Workspace Innovations Zambia"
    },
    openGraph: {
      title: 'Katanga | School Website',
      description: 'This is a description of my awesome website for better SEO.',
      url: 'https://example.com',
      images: [
        {
          url: 'https://example.com/image.png',
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Katanga | School Website',
      description: 'This is a description of my awesome website for better SEO.',
      images: ['https://example.com/image.png'],
    },
  };
}

export default async function Layout({ children }: LayoutProps) {
  const requestHeaders = await headers();
  const organisationId = requestHeaders.get("x-organisation-id");

  let organisation = null;
  let services = null;
  
  if (organisationId) {
    organisation = await getOrganisation(organisationId);
    services = await getServices(organisationId)
  }

  if (!organisation) {
    return <div>Loading...</div>;  // Loading or fallback state
  }

  return (
    <html lang="en">
      <Box component="body" sx={{ backgroundColor: "background.default"}}>
        <KatangaProvider organisation={organisation} services={services ?? []}>
          <Providers>
            <AppRouterCacheProvider>
              <Theme>
                <Header organisation={organisation} />
                {children}
                <Footer organisation={organisation} services={services ?? []} />
              </Theme>
            </AppRouterCacheProvider>
          </Providers>
        </KatangaProvider>
      </Box>
    </html>
  );
}

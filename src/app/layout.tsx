import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";
import { Header } from "@/components/Header";
import { Providers } from "./providers";
import Theme from "@/theme";
import { Box } from "@mui/material";

export const metadata:Metadata = {
  title: 'Katanga | School Website',
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="en">
      <Box component="body" sx={{ backgroundColor: "background.default"}}>
        <Providers>
          <AppRouterCacheProvider>
            <Theme>
              <Header />
              {children}
            </Theme>
          </AppRouterCacheProvider>
        </Providers>
      </Box>
    </html>
  );
}

import { AppBar, Box, Button, Container, Divider, Grid, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import { Logo } from "./Logo"
import React from "react"
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { Environment } from "@think-zambia-foundation/api";

export function MobileHeader({organisation}: {organisation?: Environment}) {
  return (
    <Box 
      component="nav"
      sx={{ display: { xs: 'block', sm: 'none' } }}
    >
      {organisation?.name}
    </Box>
  )
}

export function DesktopHeader({organisation}: {organisation?: Environment}) {
  return (
    <Box 
      component="nav"
      sx={{ 
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense">
          <Container>
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item>
                {organisation?.contact?.phone1 && (<Button href={`tel:${organisation?.contact?.phone1}`} color="inherit" startIcon={<PhoneRoundedIcon fontSize="small" color="inherit" />}>
                  <Typography variant="caption" fontWeight="600">{organisation?.contact?.phone1}</Typography>
                </Button>)}
                {organisation?.contact?.email && (<Button href={`mailto:${organisation?.contact?.email}`} color="inherit" startIcon={<MailOutlineRoundedIcon fontSize="small" />}>
                  <Typography variant="caption" fontWeight="600" textTransform="lowercase">{organisation?.contact?.email}</Typography>
                </Button>)}
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <Grid
            container
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              minHeight: 175
            }}
          >
            <Grid item>
              <Link href="/">
                <Logo organisation={organisation}/>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://katanga.workspacezm.com/welcome" target="_blank">
                <Button 
                  variant="outlined"
                  sx={{ borderRadius: 0, pt: 1.1, pb: 1, pl: 7, pr: 7 }}
                  endIcon={<ArrowRightRoundedIcon fontSize="small"/>}
                >
                  <Typography variant="body2" fontWeight="400">LOGIN</Typography>
                </Button>
              </Link>
              <Link href="/apply">
                <Button 
                  variant="contained"
                  sx={{ borderRadius: 0, pt: 1.3, pb: 1.3, pl: 7, pr: 7, ml: 2 }}
                >
                  <Typography variant="body2" fontWeight="400">Apply</Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
        <Divider />
        <Toolbar variant="dense">
          <Grid
            container
            direction="row"
            spacing={6}
            justifyContent="center"
            sx={{
              pt: 3,
              pb: 2,
            }}
          >
            {menu.map((item) => (
              <React.Fragment key={item.key} >
                <Grid item>
                  <Link href={item.href}>
                    <Typography textTransform="capitalize" component="h6" variant="button">
                      {item.text.toLowerCase()}<ArrowRightRoundedIcon color="primary" fontSize="small" />
                    </Typography>
                  </Link>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </Box>
  )
}

export const menu = [
  {
    key: '1',
    text: 'Home',
    href: '/',
  },
  {
    key: '2',
    text: 'About Us',
    href: '/about',
  },
  {
    key: '3',
    text: 'Admissions',
    href: '/apply',
  },
  {
    key: '4',
    text: 'CONTACT',
    href: '/contact',
  },
];

export function Header({organisation}: {organisation?: Environment}) {
  return (
    <>
      <MobileHeader organisation={organisation}/>
      <DesktopHeader organisation={organisation}/>
    </>
  )
}
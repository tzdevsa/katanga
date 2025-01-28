 
'use client';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import {
  Button,
  CardContent,
  CardMedia,
  Container, Drawer, Grid, Slide, Typography, useScrollTrigger,
} from '@mui/material';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import { useState } from 'react';
import Link from 'next/link';
import { ServicesMenu } from './ServicesMenu';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ShowOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!!trigger}>
      {children}
    </Slide>
  );
}

export interface NavBarItemProps {
  key: string
  id: string
  text: string
  href: string
  content?: React.FunctionComponent
  scrollToSection?: string
}

export interface NavBarProps {
  services: NavBarItemProps[]
}

export function NavBar({ services }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: 'justify', color: '#2373cc' }}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <ListItemText
              primary="Home"
            />
          </ListItemButton>
        </ListItem>
        {services.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'justify', color: '#2373cc' }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <ListItemText
                primary={item.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ display: 'flex' }}>
      <AppBar
        sx={{
          display: {
            xs: 'block',
            sm: 'none',
            // backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))',
          },
        }}
        color="transparent"
        elevation={0}
        position="relative"
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          size="large"
          sx={{
            left: 20,
          }}
        >
          <MenuIcon sx={{ color: '#0C67C9' }} />
        </IconButton>
      </AppBar>
      <ShowOnScroll>
        <AppBar elevation={0}>
          <Toolbar>
            <Container disableGutters>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item sx={{ display: { sm: 'none' } }}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item>
                        <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          edge="start"
                          onClick={handleDrawerToggle}
                          sx={{ display: { xs: 'block', sm: 'none' } }}
                        >
                          <MenuIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton
                          color="inherit"
                          aria-label="home"
                          edge="start"
                          sx={{ display: { xs: 'block', sm: 'none' } }}
                        >
                          <HomeTwoToneIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Link
                      href="/"
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <CardContent>
                        <CardMedia
                          component="img"
                          height="50"
                          // image={WilocateLogo}
                          alt="Umeh Construction logo"
                        />
                      </CardContent>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => { }}
                      sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                      <Typography variant="subtitle2" align="center">
                        Get Quote
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Grid item>
                        <IconButton
                          color="inherit"
                          aria-label="call"
                          edge="end"
                          onClick={() => window.open('tel:096 9652663')}
                          sx={{ ml: { xs: 2 } }}
                        >
                          <CallTwoToneIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton
                          color="inherit"
                          aria-label="call"
                          edge="end"
                          onClick={() => window.open('https://goo.gl/maps/uzZm9RhHWZ4Xm1cu7')}
                        >
                          <LocationOnTwoToneIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton
                          color="inherit"
                          aria-label="call"
                          edge="end"
                          onClick={() => window.open('mailto:sales@wilocatelogistics.com')}
                        >
                          <EmailTwoToneIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Container>
          </Toolbar>
        </AppBar>
      </ShowOnScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            opacity: '95%',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '300px' },
          }}
        >
          <Toolbar />
          {drawer}
          <IconButton
            color="inherit"
            aria-label="close-drawer"
            edge="end"
            onClick={handleDrawerToggle}
            style={{
              position: 'absolute',
              left: 20,
              top: 10,
            }}
          >
            <CloseTwoToneIcon sx={{ color: '#0C67C9' }} />
          </IconButton>
        </Drawer>
      </Box>
    </div>
  );
}

export const services: NavBarItemProps[] = [
  {
    id: '1',
    key: '1',
    text: 'Home',
    href: '/',
  },
  {
    id: '2',
    key: '2',
    text: 'Apply',
    href: '/apply',
  },
  {
    id: '3',
    key: '4',
    text: 'CONTACT',
    href: '/contact',
  },
];

export function Header() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      elevation={trigger ? 0 : 0}
      sx={{
        backgroundColor: trigger ? 'white' : 'transparent',
      }}
    >
      <ServicesMenu
        services={services}
        logo={trigger ? "" : ""}
        color={trigger ? 'black' : 'whitesmoke'}
      />
    </AppBar>
  );
}
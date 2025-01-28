
 
'use client';
import { useState } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { Container } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import {
  Paper,
  CardContent,
  Popper,
  Tabs,
  Tab,
  Fade,
  Grid,
  Button,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

export interface ServicesMenuItemProps {
  key: string
  id: string
  text: string
  href: string
  scrollToSection?: string
  content?: React.FunctionComponent
}

export interface ServicesMenuProps {
  services: ServicesMenuItemProps[],
  logo: string,
  color: TypographyProps['color']
}

export function ServicesMenu({
  services,
  logo,
  color,
}: ServicesMenuProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [value, setValue] = useState(1);
  const [content] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pathname = usePathname()
  const router = useRouter()

  const handlePopperOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setValue(index);
  };

  const handlePopperClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      // setOpen(false);
    }
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <Container
        onMouseLeave={handlePopperClose}
        sx={{ display: { xs: 'none', sm: 'block' } }}
        maxWidth="xl"
      >
        {content && (
          <Popper
            open={open}
            anchorEl={anchorEl}
            id="menu-list-grow"
          >
            <div style={{ width: '100vw' }}>
              <Container>
                <Paper style={{
                  borderRadius: 0,
                }}
                >
                  <CardContent>
                    <CardContent>
                      <Container>
                        <Fade in timeout={1000}>
                          {content}
                        </Fade>
                      </Container>
                    </CardContent>
                  </CardContent>
                </Paper>
              </Container>
            </div>
          </Popper>
        )}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={3}>
            <CardContent
              sx={{
                paddingTop: 3,
              }}
              onClick={() => {
                if (pathname === '/') {
                  scrollToSection("hero");
                } else {
                  router.push("/");
                }
              }}
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={() => {
                handlePopperClose();
              }}
            >
              <Image
                src={logo}
                width={127}
                alt="Umeh Construction — Logo"
              />
            </CardContent>
          </Grid>
          <Grid item xs={6}>
            <Tabs
              value={value}
              centered
              TabIndicatorProps={{
                sx: {
                  display: 'none',
                },
              }}
            >
              {services.map((item, index) => (
                <Tab
                  key={item.id}
                  style={index === 0 ? {
                    zIndex: 100,
                    borderRight: 0,
                    borderLeft: 0,
                  } : {
                    zIndex: 100,
                    borderRight: 0,
                  }}
                  onMouseEnter={(event) => {
                    if (item.content) {
                      handlePopperOpen(event, index);
                      // setContent(item.content);
                    }
                  }}
                  onMouseLeave={handlePopperClose}
                  data-key={index}
                  label={(
                    <Typography style={
                      pathname.toLowerCase() === item.href.toLowerCase() ? {
                        fontWeight: "bold",
                        color: 'primary.main',
                      } : {}
                    }
                      variant='subtitle2'
                      fontWeight="bold"
                      sx={{
                        '&:hover': {
                          color: 'primary.main',
                        },
                        color: color
                      }}
                    >
                      {item.text}
                    </Typography>
                  )}
                  aria-owns={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={(e) => {
                    e.preventDefault();
                    if (pathname === '/' && item.scrollToSection) {
                      scrollToSection(item.scrollToSection ?? "#");
                    } else {
                      router.push(item.href);
                    }
                    handlePopperClose();
                  }}
                />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Container>
      <Container
        onMouseLeave={handlePopperClose}
        sx={{ display: { xs: 'block', sm: 'none' } }}
        maxWidth="xl"
      >
        {content && (
          <Popper
            open={open}
            anchorEl={anchorEl}
            id="menu-list-grow"
          >
            <div style={{ width: '100vw' }}>
              <Container>
                <Paper style={{
                  borderRadius: 0,
                }}
                >
                  <CardContent>
                    <CardContent>
                      <Container>
                        <Fade in timeout={1000}>
                          {content}
                        </Fade>
                      </Container>
                    </CardContent>
                  </CardContent>
                </Paper>
              </Container>
            </div>
          </Popper>
        )}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <CardContent
              sx={{
                paddingTop: 3,
              }}
              onClick={() => {
                if (pathname === '/') {
                  scrollToSection("hero");
                } else {
                  router.push("/");
                }
              }}
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={() => {
                handlePopperClose();
              }}
            >
              <Image
                src={logo}
                width={127}
                alt="Umeh Construction — Logo"
              />
            </CardContent>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', sm: 'none' } }}
            >
              <MenuIcon sx={{ color: trigger ? 'black' : 'white' }} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
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
          <div>
            {services.map((item) => (
              <Button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  if (pathname === '/' && item.scrollToSection) {
                    scrollToSection(item.scrollToSection ?? "#");
                  } else {
                    router.push(item.href);
                  }
                  handleDrawerToggle();
                }}
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  fontSize: '1.2em',
                  color: pathname === item.href ? 'primary' : 'inherit',
                  fontWeight: pathname === item.href ? 'bold' : '500',
                }}
              >
                {item.text}
              </Button>
            ))}
          </div>
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
    </>
  );
}

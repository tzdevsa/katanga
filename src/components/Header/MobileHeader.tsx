"use client"

import { Box, CardContent, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import Link from "next/link"
import { Logo } from "../Logo"
import React, { useState } from "react"
import { Environment } from "@think-zambia-foundation/api";
import MenuIcon from "@mui/icons-material/Menu";
import { menu } from ".";
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import CloseIcon from '@mui/icons-material/Close';

export function MobileHeader({organisation}: {organisation?: Environment}) {
  const [open, setOpen] = useState(false);

  return (
    <Box 
      component="nav"
      sx={{ 
        display: { xs: 'block', sm: 'none' },
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", }}>
        {/* Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            <Logo organisation={organisation}/>
          </Link>
        </Box>

        {/* Hamburger Icon */}
        <IconButton onClick={() => setOpen(true)} color="inherit">
          <MenuIcon fontSize="medium" />
        </IconButton>

        {/* Drawer Menu */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <List sx={{ width: "100vw", p: 2 }}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemText primary={<CloseIcon color="primary" fontSize="large" />} />
              </ListItemButton>
            </ListItem>
            {menu.map((item) => (
              <ListItem key={item.key} disablePadding>
                <ListItemButton component={Link} href={item.href} onClick={() => setOpen(false)}>
                  <ListItemText 
                    primary={<Typography textTransform="capitalize" component="h6" variant="h5" sx={{
                      transition: "color 0.3s ease-in-out",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}>
                      {item.text.toLowerCase()}<ArrowRightRoundedIcon color="primary" fontSize="small" />
                    </Typography>
                  } sx={{ textTransform: "uppercase" }}>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </CardContent>
    </Box>
  )
}
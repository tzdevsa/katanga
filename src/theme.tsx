/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { autocompleteClasses, Box, Typography, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { Montserrat, Roboto } from 'next/font/google';

const montserrat = Montserrat({
  weight: 'variable',
  subsets: ["latin"]
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"]
})


const common = {
  spacing: 8,
  typography: {
    fontFamily: [
      roboto.style.fontFamily,
      montserrat.style.fontFamily,
    ].join(','),
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
      },
    },
    MuiBottomNavigation: {
      defaultProps: {
        showLabels: true,
        sx: {
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 6,
          paddingTop: 3,
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        renderOption: (props: any, option: any, state: any, ownerState: any) => (
          <Box
            sx={{
              borderRadius: {
                lg: '4px',
                xs: 0,
              },
              margin: '5px',
              [`&.${autocompleteClasses.option}`]: {
                padding: '8px',
              },
            }}
            component="li"
            {...props}
          >
            <Typography variant="body2" color="textPrimary">
              {ownerState.getOptionLabel(option)}
            </Typography>
          </Box>
        ),
      },
    },
    MuiPaper: {
      defaultProps: {
        sx: {
          xs: {
            borderRadius: 12,
          },
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        color: 'inherit',
      },
    },
    MuiDialogContent: {
      defaultProps: {
        sx: {
          backgroundColor: 'background.default',
        },
      },
    },
    MuiDialogActions: {
      defaultProps: {
        sx: {
          backgroundColor: 'background.default',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        inputProps: {
          sx: {
            backgroundColor: 'background.paper',
            borderRadius: 1,
          },
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        sx: {
          backgroundColor: 'background.paper',
          borderColor: 'background.paper',
          borderRadius: 1,
        },
      },
    },
    MuiFab: {
      defaultProps: {
        sx: {
          backgroundColor: 'secondary.main',
          color: 'text.primary',
        },
      },
    },
  },
  transitions: {
    duration: {
      enteringScreen: 525,
      leavingScreen: 255,
    },
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ab0520',
      dark: '#ab0520',
      light: '#ab0520',
      contrastText: '#f9f9f9',
    },
    secondary: {
      main: '#C7A567',
      dark: '#C7A567',
      light: '#C7A567',
      contrastText: '#f9f9f9',
    },
    info: {
      main: '#808080',
    },
    text: {
      // secondary: '#C7A567',
    },
    background: {
      default: '#fff',
      paper: '#f9f9f9',
    },
  },
});

export const darkTheme = createTheme({
  ...common,
  palette: {
    mode: 'dark',
    primary: {
      main: '#c7a567',
      dark: '#c7a567',
      light: '#c7a567',
      contrastText: '#fff',
    },
    secondary: {
      main: '#c7a567',
      dark: '#c7a567',
      light: '#c7a567',
      contrastText: '#fff',
    },
    info: {
      main: '#808080',
    },
    text: {
      // secondary: '#C7A567',
    },
    background: {
      default: '#0a0a0a',
      paper: '#060606',
    },
  },
})

type ThemeProps = Omit<ThemeProviderProps, 'theme'>;

export default function Theme({children, ...props}: ThemeProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const themePreference = prefersDarkMode ? theme : theme;

  return (
    <ThemeProvider {...props} theme={themePreference}>
      {children}
    </ThemeProvider>
  )
}
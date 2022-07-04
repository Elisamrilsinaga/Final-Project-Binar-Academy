import { createTheme } from "@mui/material";

export const Theme = createTheme({
    breakpoints: {
        values: {
            xs: 320,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1400,
        },
    },
    palette: {
        primary: {
            main: '#4B1979',
            light: '#4B1979',
            dark: '#4B1979',
        },
        secondary: {
            main: '#F1F3FF',
            light: '#F1F3FF',
            dark: '#F1F3FF',
        },
        success: {
            main: '#5CB85F',
        },
        action: {
            active: '#4B1979',
            hover: '#F1F3FF',
        }
    },
    typography: {
        fontFamily: '"Poppins", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightExtraBold: 900,
        h1: {
            fontSize: '2.8rem',
            fontWeight: 700,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        h2: {
            fontSize: '2.4rem',
            fontWeight: 700,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 700,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        h6: {
            fontSize: '1.125rem',
            fontWeight: 700,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        subtitle1: {
            fontSize: '1.125rem',
            fontWeight: 500,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        subtitle2: {
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 300,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
            textTransform: 'none',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '-.02em',
            lineHeight: '1.334',
            margin: 0,
        },
    },

});
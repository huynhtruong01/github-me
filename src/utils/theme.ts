import { createTheme, responsiveFontSizes } from '@mui/material'

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 320,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1280,
        },
    },
    typography: {
        fontFamily: 'Nunito, sans-serif',
    },
    palette: {
        primary: {
            main: '#2f3ab2',
            light: '#3b49df',
            dark: '#2f3ab2',
            contrastText: '#ffffff',
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: 'contained',
                        color: 'primary',
                    },
                    style: {
                        lineHeight: 1,
                        color: '#ffffff',
                        textTransform: 'none',
                        padding: '16px 24px',
                        whiteSpace: 'nowrap',
                        minWidth: 'auto',
                        boxShadow: 'none',
                        fontWeight: 600,
                        fontSize: '16px',
                        borderRadius: '6px',
                        backgroundColor: '#3b49df',

                        '&:hover': {
                            boxShadow: 'none',
                            backgroundColor: '#2f3ab2',
                        },
                    },
                },
            ],
        },
    },
})

theme = responsiveFontSizes({ ...theme })

export { theme }

import { createTheme } from '@mui/material/styles';
import { grey, common } from '@mui/material/colors'

const APPLIGHTTHEME = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#FBE9BE",
            light: "#FCF3DE",
            dark: "#F5B827",
            contrastText: common.black,
        },
        info: {
            main: common.white,
            light: common.white,
            dark: grey[50],
            contrastText: common.black,
        }
    },
    typography: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700,
        fontWeightBold: 900,
        body1: { fontWeight: 400, fontSize: "1.125rem", lineHeight: 1.4, },
        body2: { fontWeight: 300, fontSize: "1rem", lineHeight: 1.4, },
        button: { fontWeight: 700, fontSize: "1rem", lineHeight: 1.4, },
        h1: { fontWeight: 900, fontSize: '4rem', lineHeight: 1.2, },
        h2: { fontWeight: 900, fontSize: '3.75rem', lineHeight: 1.2, },
        h3: { fontWeight: 700, fontSize: '2.25rem', lineHeight: 1.4, },
        h4: { fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.4, },
        h5: { fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.25, },
        h6: { fontWeight: 400, fontSize: '1.25rem', lineHeight: 1.4, },
    },
    transitions: {
        easing: {
            easeOut: "cubic-bezier(0, 0, 0.15, 1)",
            easeIn: "cubic-bezier(0, 0, 0.15, 1)",
        },
        duration: {
            enteringScreen: 2000,
            leavingScreen: 1000,
        }
    },
    shape: {
        borderRadius: 0,
    }
});

const APPDARKTHEME = createTheme(
    APPLIGHTTHEME,
    {
        palette: {
            primary: {
                main: grey[900],
                light: common.black,
                dark: grey[800],
                contrastText: common.white,
            }
        }
    }
);

export { APPLIGHTTHEME, APPDARKTHEME }
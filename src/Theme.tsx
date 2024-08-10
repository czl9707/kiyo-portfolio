import { createTheme } from '@mui/material/styles';
import { grey, common } from '@mui/material/colors'

const APPLIGHTTHEME = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: common.white,
            light: common.white,
            dark: grey[50],
            contrastText: common.black,
        }
    },
    typography: {
        fontFamily: "Lato, serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700,
        fontWeightBold: 900,
        button: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "0.9rem",
            lineHeight: 1.75,
            textTransform: "capitalize"
        }
    }
});

const APPDARKTHEME = createTheme(
    APPLIGHTTHEME,
    {
        palette: {
            primary: {
                main: common.white,
                light: common.white,
                dark: grey[50],
                contrastText: common.black,
            }
        }
    }
);

export { APPLIGHTTHEME, APPDARKTHEME }
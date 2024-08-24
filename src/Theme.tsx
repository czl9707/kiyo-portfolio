import { createTheme, TypographyVariantsOptions, TransitionsOptions, Shadows, BreakpointsOptions, ThemeProvider } from '@mui/material/styles';
import { common } from '@mui/material/colors'
import * as React from 'react';

const IsDarkContext = React.createContext<{ isDark: boolean, setIsDark: (isDark: boolean) => void }>(
    { isDark: false, setIsDark: () => { } }
)

function IsDarkContextProvider({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = React.useState<boolean>(false);
    return (
        <IsDarkContext.Provider value={{ isDark: isDark, setIsDark: setIsDark }}>
            <ThemeProvider theme={isDark ? APPDARKTHEME : APPLIGHTTHEME} >
                {children}
            </ThemeProvider>
        </IsDarkContext.Provider>
    )
}

const APPTYPOGRAPHY: TypographyVariantsOptions = {
    fontFamily: "Lato",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    body1: { fontWeight: 400, fontSize: "1.125rem", lineHeight: 1.4, },
    body2: { fontWeight: 400, fontSize: "1rem", lineHeight: 1.4, },
    button: { fontWeight: 700, fontSize: "1rem", lineHeight: 1.4, textTransform: "capitalize" },
    h1: { fontWeight: 700, fontSize: '4rem', lineHeight: 1.2, marginBlockEnd: ".5em", },
    h2: { fontWeight: 700, fontSize: '3.75rem', lineHeight: 1.2, marginBlockEnd: ".5em", textTransform: "uppercase" },
    h3: { fontWeight: 700, fontSize: '2.25rem', lineHeight: 1.4, marginBlockEnd: ".5em", },
    h4: { fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.4, marginBlockEnd: ".5em", },
    h5: { fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.25, marginBlockEnd: ".5em", },
    h6: { fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.4, marginBlockEnd: ".5em", },
};
const APPTRANSITION: TransitionsOptions = {
    easing: {
        easeOut: "cubic-bezier(0, 0, 0.15, 1)",
        easeIn: "cubic-bezier(0, 0, 0.15, 1)",
    },
    duration: {
        enteringScreen: 1500,
        leavingScreen: 1000,
    }
}
const APPBREAKPOINTS: BreakpointsOptions = {
    values: {
        xs: 0,
        sm: 750,
        md: 1050,
        lg: 1350,
        xl: 1650,
    }
}
const APPCOMPONENTS = {
    MuiGrid: {
        defaultProps: {
            spacing: 6
        }
    },
}
const APPSHAPE = { borderRadius: 0 };
const APPSHADOWS = (dark: boolean): Shadows => {
    const baseColor = dark ? "255,255,255" : "0,0,0"
    return [
        "none",
        `0px 2px 1px -1px rgba(${baseColor},0.07),0px 1px 1px 0px rgba(${baseColor},0.05),0px 1px 3px 0px rgba(${baseColor},0.04)`,
        `0px 3px 1px -2px rgba(${baseColor},0.07),0px 2px 2px 0px rgba(${baseColor},0.05),0px 1px 5px 0px rgba(${baseColor},0.04)`,
        `0px 3px 3px -2px rgba(${baseColor},0.07),0px 3px 4px 0px rgba(${baseColor},0.05),0px 1px 8px 0px rgba(${baseColor},0.04)`,
        `0px 2px 4px -1px rgba(${baseColor},0.07),0px 4px 5px 0px rgba(${baseColor},0.05),0px 1px 10px 0px rgba(${baseColor},0.04)`,
        `0px 3px 5px -1px rgba(${baseColor},0.07),0px 5px 8px 0px rgba(${baseColor},0.05),0px 1px 14px 0px rgba(${baseColor},0.04)`,
        `0px 3px 5px -1px rgba(${baseColor},0.07),0px 6px 10px 0px rgba(${baseColor},0.05),0px 1px 18px 0px rgba(${baseColor},0.04)`,
        `0px 4px 5px -2px rgba(${baseColor},0.07),0px 7px 10px 1px rgba(${baseColor},0.05),0px 2px 16px 1px rgba(${baseColor},0.04)`,
        `0px 5px 5px -3px rgba(${baseColor},0.07),0px 8px 10px 1px rgba(${baseColor},0.05),0px 3px 14px 2px rgba(${baseColor},0.04)`,
        `0px 5px 6px -3px rgba(${baseColor},0.07),0px 9px 12px 1px rgba(${baseColor},0.05),0px 3px 16px 2px rgba(${baseColor},0.04)`,
        `0px 6px 6px -3px rgba(${baseColor},0.07),0px 10px 14px 1px rgba(${baseColor},0.05),0px 4px 18px 3px rgba(${baseColor},0.04)`,
        `0px 6px 7px -4px rgba(${baseColor},0.07),0px 11px 15px 1px rgba(${baseColor},0.05),0px 4px 20px 3px rgba(${baseColor},0.04)`,
        `0px 7px 8px -4px rgba(${baseColor},0.07),0px 12px 17px 2px rgba(${baseColor},0.05),0px 5px 22px 4px rgba(${baseColor},0.04)`,
        `0px 7px 8px -4px rgba(${baseColor},0.07),0px 13px 19px 2px rgba(${baseColor},0.05),0px 5px 24px 4px rgba(${baseColor},0.04)`,
        `0px 7px 9px -4px rgba(${baseColor},0.07),0px 14px 21px 2px rgba(${baseColor},0.05),0px 5px 26px 4px rgba(${baseColor},0.04)`,
        `0px 8px 9px -5px rgba(${baseColor},0.07),0px 15px 22px 2px rgba(${baseColor},0.05),0px 6px 28px 5px rgba(${baseColor},0.04)`,
        `0px 8px 10px -5px rgba(${baseColor},0.07),0px 16px 24px 2px rgba(${baseColor},0.05),0px 6px 30px 5px rgba(${baseColor},0.04)`,
        `0px 8px 11px -5px rgba(${baseColor},0.07),0px 17px 26px 2px rgba(${baseColor},0.05),0px 6px 32px 5px rgba(${baseColor},0.04)`,
        `0px 9px 11px -5px rgba(${baseColor},0.07),0px 18px 28px 2px rgba(${baseColor},0.05),0px 7px 34px 6px rgba(${baseColor},0.04)`,
        `0px 9px 12px -6px rgba(${baseColor},0.07),0px 19px 29px 2px rgba(${baseColor},0.05),0px 7px 36px 6px rgba(${baseColor},0.04)`,
        `0px 10px 13px -6px rgba(${baseColor},0.07),0px 20px 31px 3px rgba(${baseColor},0.05),0px 8px 38px 7px rgba(${baseColor},0.04)`,
        `0px 10px 13px -6px rgba(${baseColor},0.07),0px 21px 33px 3px rgba(${baseColor},0.05),0px 8px 40px 7px rgba(${baseColor},0.04)`,
        `0px 10px 14px -6px rgba(${baseColor},0.07),0px 22px 35px 3px rgba(${baseColor},0.05),0px 8px 42px 7px rgba(${baseColor},0.04)`,
        `0px 11px 14px -7px rgba(${baseColor},0.07),0px 23px 36px 3px rgba(${baseColor},0.05),0px 9px 44px 8px rgba(${baseColor},0.04)`,
        `0px 11px 15px -7px rgba(${baseColor},0.07),0px 24px 38px 3px rgba(${baseColor},0.05),0px 9px 46px 8px rgba(${baseColor},0.04)`,
    ]
}

const APPLIGHTTHEME = createTheme({
    palette: {
        mode: "light",
        background:
        {
            paper: common.white,
            default: common.white
        }
    },
    breakpoints: APPBREAKPOINTS,
    typography: APPTYPOGRAPHY,
    transitions: APPTRANSITION,
    shape: APPSHAPE,
    components: APPCOMPONENTS,
    shadows: APPSHADOWS(false),
});

const APPDARKTHEME = createTheme(
    {
        palette: {
            mode: "dark",
            background:
            {
                paper: common.black,
                default: common.black
            }
        },
        breakpoints: APPBREAKPOINTS,
        typography: APPTYPOGRAPHY,
        transitions: APPTRANSITION,
        shape: APPSHAPE,
        components: APPCOMPONENTS,
        shadows: APPSHADOWS(true),
    });

export default IsDarkContextProvider;
export { IsDarkContext };
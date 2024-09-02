import React from 'react';
import { common } from '@mui/material/colors';
import { Box, Stack, Typography, Unstable_Grid2 as Grid, styled, useTheme, createTheme, ThemeProvider } from '@mui/material';

import Section, { Spacer } from '../Components/Section.tsx';
import { SquareChip } from '../Components/SquareChip.tsx';
import FadeSlide from '../Components/FadeSlideEffect.tsx';
import SliderButton from './Components/SliderButton.tsx';
import Background from './Components/Background.tsx';
import { handleNavigation } from '../Components/Utils.tsx';


const ImageFullPath = (p: string) => `/Home/${p}`;

function Home() {
    const globalTheme = useTheme();
    const localTheme = React.useMemo(() => createTheme(globalTheme,
        {
            palette: {
                primary: {
                    main: globalTheme.palette.mode === "light" ? "#FBE9BE" : "#F5B827",
                    light: globalTheme.palette.mode === "light" ? "#FBE9BE" : "#F5B827",
                    dark: globalTheme.palette.mode === "light" ? "#FBE9BE" : "#F5B827",
                    contrastText: common.black,
                },
            }
        }
    ), [globalTheme]);

    return (
        <ThemeProvider theme={localTheme}>
            <Background />
            <Welcome />
            <Works />
        </ThemeProvider>
    );
}

const featuredProjects = [
    {
        href: "/Works/AnisePatient",
        imgSrc: 'CoverAnisePatientPortal.png',
        tags: ["Web App", "End to End",],
        title: "Improving Mental Healthcare Patient Portal CVR",
        introText: "Enhancing early start-up's client acquisition by removing friction and building trust.",
        buttonText: "VIEW CASE STUDY",
        chipText: 'Shipped in 2023',
    },
    {
        href: "/Works/EdgemereFarm",
        imgSrc: 'CoverEdgemereFarm.png',
        tags: ["Website", "NGO", "0 to 1",],
        title: "Boosting NGO User Engagement and Satisfication",
        introText: "Boosting NGO engagement and increase audience awareness from new user to active supporter.",
        buttonText: "VIEW CASE STUDY",
        chipText: 'Shipped in 2023',
    },
    {
        imgSrc: 'CoverRobotVacuum.png',
        tags: ["Ethnographic Research", "Recruitment", "In-home Interview", "Concept Testing"],
        title: "Uncovering US Household Cleaning Needs for Asian Appliance Giant",
        introText: "How I conducted enthographic research for an Asian robot vacuum company to uncover US users' household cleaning needs in as a user researcher.",
        buttonText: "VIEW CASE STUDY",
        chipText: 'Conducted in 2024',
    },
]

const projects = [
    {
        href: "/Works/Knowunity",
        imgSrc: "CoverKnowunity.png",
        tags: ["User Research", "K-12 Education", "Mobile App",],
        title: "Learning Community Growth",
        introText: "Expanding KnowUnity's creator pool by enhancing creator-audience connections.",
        buttonText: "VIEW CASE STUDY",
        chipText: "Shipped in 2023",
    },
    {
        href: "/Works/MontanaHistoricalSociety",
        imgSrc: "CoverMontanaHistoricalSociety.png",
        tags: ["Web Analytics", "SEO", "Dashboard", "Data Visualization",],
        title: "Digital Strategy Optimization",
        introText: "Refining Montana Historical Society's digital strategy through web analytics and SEO evaluation.",
        buttonText: "VIEW CASE STUDY",
        chipText: "Shipped in 2023",
    },
    // {
    //     href: "https://www.figma.com/proto/tAGAEa0Fvk0mFnT5TXys1T/KFJ-Web-Design-_-Kiyo?page-id=2%3A2&node-id=2528-23279&viewport=3182%2C-5385%2C0.3&t=ZjuksPYBreaQNDx0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2528%3A23279",
    //     external: true,
    //     imgSrc: "CoverKaiFineJewelry.png",
    //     tags: ["Website", "Fashion", "Shopify"],
    //     title: "Jewelry E-Commerce",
    //     introText: "Improving online store revenue by revamping website within 4 days.",
    //     buttonText: "VIEW PROTOTYPES 🔗",
    //     chipText: "Shipped in 2024",
    // },
    // {
    //     href: "/Works/DesignChallenge",
    //     imgSrc: "Cover100DesignChallenge.png",
    //     tags: ["UI Design Practice"],
    //     title: "100-day UI Design Practice",
    //     introText: "Ongoing practices on UI and visual design.",
    //     buttonText: "VIEW MORE",
    //     chipText: "Ongoing",
    // },
]

const totalHeight = '16rem'
function Welcome() {
    return (
        <>
            <Spacer size="xl" />
            <Section>
                <FadeSlide>
                    <Box component="img" src={ImageFullPath('K.svg')} height={totalHeight} zIndex='1'
                        sx={{ float: "left", mr: "-2rem" }} />
                </FadeSlide>

                <Stack height={totalHeight} useFlexGap zIndex='2'
                    justifyContent="space-between" alignItems="stretch"
                    sx={{ float: "left" }} >
                    <FadeSlide delay={150}>
                        <Typography variant="h2"
                            sx={{ mt: "-.9rem" }} // let the text align at top
                        >
                            HELLO <br />
                            I'M KIYO/QING
                        </Typography>
                    </FadeSlide>

                    <FadeSlide delay={300}>
                        <Typography variant="body1"
                            sx={{ ml: "6rem", whiteSpace: "wrap" }}
                        >
                            Product/UX Desiner <br />
                            Solving user problems and business problems with solid research and empathy
                        </Typography>
                    </FadeSlide>

                    <FadeSlide delay={450}>
                        <Box sx={{ ml: "6rem" }}>
                            <SliderButton text='RESUME' externalLink
                                href="https://drive.google.com/file/d/1qmcdUPZFv4bVSLY4pBALD2pzfN6JnDwv/view?usp=drive_link" />
                            <SliderButton text="LET'S CONNECT" externalLink
                                href='https://www.linkedin.com/in/kiyo-yang-46b12a23b/' />
                        </Box>
                    </FadeSlide>
                </Stack>
                <Box sx={{ clear: "left" }} />
            </Section >
            <Spacer size="xl" />
        </>
    )
}



function Works() {
    return (
        <Section id="Works">
            {
                featuredProjects.map(
                    (proj, i) => (
                        <React.Fragment key={i}>
                            <Grid container direction={(i % 2) ? "row" : "row-reverse"} columns={3}
                                rowSpacing={12} alignItems="center" justifyContent={(i % 2) ? "flex-start" : "flex-end"}>

                                <Grid md={3} lg={2}>
                                    {ProjectImage({ ...proj, chipOnRight: !(i % 2) })}
                                </Grid>

                                <Grid md={3} lg={1}>
                                    {ProjectInfo(proj)}
                                </Grid>

                            </Grid>
                            <Spacer size="lg" />
                        </React.Fragment>
                    )
                )
            }
            <Grid container columns={{ sm: 1, md: 2 }} rowSpacing={12} alignItems="top">
                {
                    projects.map(
                        (proj, i) => (
                            <Grid xs={1} key={i}>
                                <Stack spacing={3}>
                                    {ProjectImage(proj)}
                                    {ProjectInfo(proj)}
                                </Stack>
                            </Grid>
                        )
                    )
                }
            </Grid>
        </Section >
    );
}

interface ProjectImageProps {
    href?: string,
    imgSrc: string,
    chipText: string,
    chipOnRight?: boolean,
    external?: boolean
}

function ProjectImage({ href, imgSrc, chipText, chipOnRight, external }: ProjectImageProps) {
    return (
        <FadeSlide>
            <HoverScalingBox onClick={handleNavigation(href, external)}>
                <img src={ImageFullPath(imgSrc)} alt={imgSrc} />
                <SquareChip label={chipText}
                    sx={{
                        zIndex: 2, position: "absolute",
                        right: (chipOnRight ? "1rem" : undefined), left: (chipOnRight ? undefined : "1rem"), top: "1rem",
                        backgroundColor: 'rgba(255, 255, 255, .7)', color: 'black',
                    }} />
                {(!href) &&
                    <Box className="ProjectImageMask">
                        <Typography variant='h2' textAlign="center">
                            Under Construction
                        </Typography>
                    </Box>
                }
            </HoverScalingBox>
        </FadeSlide>
    )
}

interface ProjectInfoProps {
    href?: string,
    tags: Array<string>,
    title: string,
    introText: string,
    buttonText: string,
    external?: boolean,
}

function ProjectInfo({ href, tags, title, introText, buttonText, external }: ProjectInfoProps) {
    return (
        <Stack spacing={2} alignItems="start">
            <FadeSlide>
                <Box>
                    {tags.map((tag) =>
                    (<SquareChip label={tag} color="primary" key={tag}
                        sx={{ m: .5 }} />)
                    )}
                </Box>
            </FadeSlide>

            <FadeSlide delay={150}>
                <Typography variant='h3'>{title}</Typography>
            </FadeSlide>

            <FadeSlide delay={300}>
                <Typography variant='body2'>{introText}</Typography>
            </FadeSlide>

            <Spacer size='sm' />

            <FadeSlide delay={450}>
                <Box><SliderButton href={href} text={buttonText} externalLink={external} /></Box>
            </FadeSlide>
        </Stack>
    )
}

const HoverScalingBox = styled(Box)(({ theme }) => ({
    '&': {
        boxShadow: "none", cursor: "pointer",
        position: 'relative', overflow: "hidden",
        "*": {
            transitionDuration: `${theme.transitions.duration.complex}ms`,
            transitionTimingFunction: theme.transitions.easing.easeIn,
        },
        'img': {
            display: "block", width: "100%", height: "100%", objectFit: "fill",
            transform: 'none',
        },
        ".ProjectImageMask": {
            position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center",
            top: 0, bottom: 0, left: 0, right: 0,
            backgroundColor: "rgba(0,0,0,.5)", color: "white",
            zIndex: 1, opacity: 0,
        }
    },
    '&:hover': {
        boxShadow: theme.shadows[10],
        'img': { transform: 'scale(1.2)' },
        ".ProjectImageMask": { opacity: 0.35 }
    }
}));

export { Home };
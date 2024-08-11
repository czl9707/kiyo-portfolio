import { useEffect, useMemo } from 'react';
import { useLocation } from "react-router-dom";
import Section, { Spacer } from '../Components/Section.tsx';

import { Box, Stack, Link, Typography, Grid, styled } from '@mui/material';
import { SquareChip } from '../Components/SquareChip.tsx';
import FadeSlide from '../Components/FadeSlideEffect.tsx';
import SliderButton from './SliderButton.tsx';
import zIndex from '@mui/material/styles/zIndex';

const ImageFullPath = (p: string) => `/Home/${p}`;

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // setTimeout to avoid ref is not there when loading
            setTimeout(() => {
                const element = document.getElementById(location.hash.substring(1))
                const y = element!.getBoundingClientRect().top - 100;
                window.scrollTo({ behavior: 'smooth', top: y });
            }, 1);
        }
    });

    return (
        <>
            <Welcome />
            <Works />
        </>
    );
}

const featuredProjects = [
    {
        href: "/Works/AnisePatient",
        imgSrc: 'CoverAnisePatientPortal.png',
        tags: ["Web App", "End to End",],
        title: "Improve Healthcare Startup's CVR",
        introText: "Enhancing early start-up's client acquisition by removing friction and building trust.",
        buttonText: "VIEW CASE STUDY 🔒",
        chipText: 'Shipped in 2023',
    },
    {
        href: "/Works/EdgemereFarm",
        imgSrc: 'CoverEdgemereFarm.png',
        tags: ["Website", "NGO", "0 to 1",],
        title: "Boost NGO User Engagement and People Awareness",
        introText: "Boosting NGO engagement and increase audience awareness from new user to active supporter.",
        buttonText: "VIEW CASE STUDY",
        chipText: 'Shipped in 2023',
    },
]

const projects = [
    {
        href: "/Works/Knowunity",
        imgSrc: "CoverKnowunity.png",
        tags: ["User Research", "K-12 Education",],
        title: "Learning Community Growth",
        introText: "Expanding KnowUnity's creator pool by enhancing creator-audience connections.",
        buttonText: "VIEW CASE STUDY",
        chipText: "Shipped in 2023",
    },
    {
        href: "/Works/MontanaHistoricalSociety",
        imgSrc: "CoverMontanaHistoricalSociety.png",
        tags: ["Web Analytics", "SEO", "Dashboard"],
        title: "Digital Strategy Optimization",
        introText: "Refining Montana Historical Society's digital strategy through web analytics and SEO evaluation.",
        buttonText: "VIEW CASE STUDY",
        chipText: "Shipped in 2024",
    },
    {
        href: "https://www.figma.com/proto/tAGAEa0Fvk0mFnT5TXys1T/KFJ-Web-Design-_-Kiyo?page-id=2%3A2&node-id=2528-23279&viewport=3182%2C-5385%2C0.3&t=ZjuksPYBreaQNDx0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2528%3A23279",
        imgSrc: "CoverKaiFineJewelry.png",
        tags: ["Website", "Fashion", "Shopify"],
        title: "Jewelry E-Commerce",
        introText: "Improving online store revenue by revamping website within 4 days.",
        buttonText: "VIEW PROTOTYPES 🔗",
        chipText: "Shipped in 2023",
    },
    {
        href: "/Works/DesignChallenge",
        imgSrc: "Cover100DesignChallenge.png",
        tags: ["UI Design Practice"],
        title: "100-day UI Design Practice",
        introText: "Ongoing practices on UI and visual design.",
        buttonText: "VIEW MORE",
        chipText: "Ongoing",
    },
]

function Welcome() {
    const totalHeight = '16rem'
    return (
        <>
            <Spacer size="xl" />
            <Section>
                <FadeSlide>
                    <Box component="img" src={ImageFullPath('K.svg')} height={totalHeight} zIndex='0'
                        sx={{ float: "left", mr: "-2rem" }} />
                </FadeSlide>

                <Stack height={totalHeight} useFlexGap zIndex='1'
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
                            A Product Desiner with 3 YOE based in NYC <br />
                            Solving complex Business problems with solid research and empathy
                        </Typography>
                    </FadeSlide>

                    <FadeSlide delay={450}>
                        <Box sx={{ ml: "6rem" }}>
                            <SliderButton text='RESUME' externalLink
                                href='https://drive.google.com/file/d/1fRxv_PRcMMl88VN4TpWCalqxGoVQfd5n/view?usp=drive_link' />
                            <SliderButton text="LET'S CONNECT" externalLink
                                href='' />
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
            <Grid container columns={{ md: 4, lg: 6 }} columnSpacing={6} rowSpacing={12} alignItems="center">
                {
                    featuredProjects.map(
                        (proj, i) => (
                            <>
                                {!!(i % 2) &&
                                    <Grid item md={4} lg={4}>
                                        {ProjectImage(proj)}
                                    </Grid>
                                }
                                <Grid item md={4} lg={2}>
                                    {ProjectInfo(proj)}
                                </Grid>
                                {!(i % 2) &&
                                    <Grid item md={4} lg={4}>
                                        {ProjectImage({ ...proj, chipOnRight: true })}
                                    </Grid>
                                }
                            </>
                        )
                    )
                }
                {
                    projects.map(
                        (proj) => (
                            <Grid item md={4} lg={3}>
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
    href: string,
    imgSrc: string,
    chipText: string,
    chipOnRight?: boolean
}

function ProjectImage({ href, imgSrc, chipText, chipOnRight }: ProjectImageProps) {
    const HoverScalingBox = useMemo(
        () => styled(Box)(({ theme }) => ({
            '&': {
                'img': {
                    display: "block", maxWidth: "100%", objectFit: "fill",
                    transitionDuration: `${theme.transitions.duration.complex}ms`,
                    transitionTimingFunction: theme.transitions.easing.easeIn,
                    transform: 'none',
                },
            },
            '&:hover': {
                'img': {
                    transform: 'scale(1.2)',
                },
            }
        })),
        []
    )

    return (
        <Link href={href}>
            <FadeSlide>
                <HoverScalingBox position='relative' overflow="hidden" >
                    <img src={ImageFullPath(imgSrc)} alt={imgSrc} />
                    <SquareChip label={chipText}
                        sx={{
                            zIndex: 2, position: "absolute",
                            right: (chipOnRight ? "1rem" : undefined), left: (chipOnRight ? undefined : "1rem"), top: "1rem",
                            backgroundColor: 'rgba(255, 255, 255, .7)', color: 'black',
                        }} />
                </HoverScalingBox>
            </FadeSlide>
        </Link>
    )
}

interface ProjectInfoProps {
    href: string,
    tags: Array<string>,
    title: string,
    introText: string,
    buttonText: string,
}

function ProjectInfo({ href, tags, title, introText, buttonText }: ProjectInfoProps) {
    return (
        <Stack spacing={2} alignItems="start">
            <FadeSlide>
                <Stack direction="row" spacing={1}>
                    {tags.map((tag) => (<SquareChip label={tag} color="primary" key={tag} />))}
                </Stack>
            </FadeSlide>

            <FadeSlide delay={150}>
                <Typography variant='h3'>{title}</Typography>
            </FadeSlide>

            <FadeSlide delay={300}>
                <Typography variant='body2'>{introText}</Typography>
            </FadeSlide>

            <Spacer size='sm' />

            <FadeSlide delay={450}>
                <Box><SliderButton href={href} text={buttonText} /></Box>
            </FadeSlide>
        </Stack>
    )
}

export { Home };
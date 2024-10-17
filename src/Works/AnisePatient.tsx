import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Unstable_Grid2 as Grid, Box, Typography, createTheme, useTheme, ThemeProvider, styled, Stack } from "@mui/material";
import { common } from '@mui/material/colors'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ProjectHeader from "./Components/ProjectHeader.tsx";
import Section, { Spacer } from "../Components/Section.tsx";
import { PrimaryTypography, WarningTypography } from "./Components/Typography.tsx";
import FadeSlide from "../Components/FadeSlideEffect.tsx";
import ImageWithAnnotation from "./Components/ImageWithAnnotation.tsx";
import ThemedPaper from "../Components/ThemedPaper.tsx";
import { Catagorize, CatagorizeGroup } from "../Components/Catagory.tsx";

const ImageFullPath = (p: string) => `/Works/AnisePatient/${p}`;

function AnisePatient() {
    const globalTheme = useTheme();
    const localTheme = React.useMemo(() => createTheme(globalTheme,
        {
            palette: {
                primary: {
                    main: "#717942",
                    light: "#717942",
                    dark: "#717942",
                    contrastText: common.white,
                },
                secondary: {
                    main: "#F1F2ED",
                    light: "#F1F2ED",
                    dark: "#F1F2ED",
                    contrastText: common.black,
                },
                success: {
                    main: "#FFF6E0",
                    light: "#FFF6E0",
                    dark: "#FFF6E0",
                    contrastText: common.black,
                },
                warning: {
                    main: "#B47E00",
                    light: "#B47E00",
                    dark: "#B47E00",
                    contrastText: common.white,
                }
            }
        }
    ), [globalTheme]);

    return (
        <ThemeProvider theme={localTheme}>
            <ProjectHeader
                name={"Anise Health"}
                desc={"Improved new patient conversion rate by 6% by redesigning patient onboarding journey."}
                chips={["Web App", "Healthcare", "Onboarding", "Conversion Rate"]}
                imgSrc={ImageFullPath("Intro.png")} />
            <CatagorizeGroup catagoryName="Overview">
                <Catagorize id="overview" catagoryName="Info"><Overview /></Catagorize>
                <Catagorize id="impact" catagoryName="Business Impact"><Impact /></Catagorize>
                <Context />
                <Catagorize id="problems" catagoryName="Problems"><Problems /></Catagorize>
                <Catagorize id="solution" catagoryName="Final Design"><Solution /></Catagorize>
            </CatagorizeGroup>

            <DiveDeeper />
            <Catagorize id="research" catagoryName="Research"><Research /></Catagorize>
            <CatagorizeGroup catagoryName="Design Challenge">
                <Catagorize id="design-challenge" catagoryName="Overview"><DesignChallenge /></Catagorize>
                <Catagorize id="design1" catagoryName="Design 1"><Design1 /></Catagorize>
                <Catagorize id="design2" catagoryName="Design 2"><Design2 /></Catagorize>
                <Catagorize id="design3" catagoryName="Design 3"><Design3 /></Catagorize>
                <Catagorize id="design4" catagoryName="Design 4"><Design4 /></Catagorize>
            </CatagorizeGroup>


            <FinalThoughts />
            <Catagorize id="takeaway" catagoryName="Take-Away"><TakeAways /></Catagorize>



        </ThemeProvider>
    )
}

const Overview = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Overview(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <OffsetTitle>01 OVERVIEW</OffsetTitle>
            </FadeSlide>

            <FadeSlide>
                <Typography variant="body1">
                    Anise Health is a startup offering culturally responsive digital mental health services for an Asian American community. As a product designer, I worked with a cross-functional team to redesign the end-to-end patient onboarding experience.  By addressing usability issues and building trust through transparency, we enabled a smoother care start for new patients, boosting conversion rates by 6%.
                </Typography>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2}>
                    <Grid xs={1}>
                        <PrimaryTypography variant="h5">Duration</PrimaryTypography>
                        <Typography variant="body1">
                            4 months (Round 1) + 2 months (Round 2)
                            <br /><br />
                        </Typography>
                        <PrimaryTypography variant="h5">My Contribution</PrimaryTypography>
                        <Typography variant="body1" component="span">
                            <ul style={{ marginLeft: "-1rem" }}>
                                <li>User Research</li>
                                <li>User flows, Wireframes, High-fi prototypes</li>
                                <li>Design-to-developing hand-off</li>
                            </ul>
                        </Typography>
                    </Grid>

                    <Grid xs={1}>
                        <PrimaryTypography variant="h5">Team</PrimaryTypography>
                        <Typography variant="body1">
                            2 Product designers <br />
                            1 Product Manager (COO) <br />
                            2 Software Engineers <br />
                            2 Clinical Consultants <br />
                            1 Head of Growth <br />
                            <br /><br />
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box component={PNGInvertOnTheme} src={ImageFullPath("Process.png")} width="100%" />
            </FadeSlide>
        </Section>);
    }
);


const ImpactContent = [
    {
        title: "Conversion Rate improved by 6%",
        content: "Reached to a higher new patient conversion rate within two months after launching.",
    },
    {
        title: "Net Promoter Score improved by 7%",
        content: "Reached to a higher NPS within two months after launching.",
    }
]
const Impact = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Impact(props, ref) {
        return (<Section {...props} ref={ref} color="success">
            <FadeSlide>
                <Typography variant="h3">Business Impact 🎉</Typography>
            </FadeSlide>
            <br />
            <FadeSlide>
                <Grid container columns={2} alignItems="stretch" spacing={3}>
                    {
                        ImpactContent.map((item, i) => (
                            <Grid sm={2} md={1} key={i}>
                                <ThemedPaper variant="outlined"
                                    sx={{ height: "100%" }}>
                                    <Typography variant="h5">{item.title}</Typography>
                                    <Typography variant="body1">{item.content}</Typography>
                                </ThemedPaper>
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>
        </Section>)

    }
);


const Context = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Context(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Typography variant="h3">Why does Anise focus on culturally-responsive mental health for Asian Community?</Typography>
            </FadeSlide>
            <br />
            <FadeSlide>
                <Grid container columns={3} alignItems="center" spacing={3}>
                    <Grid sm={2} >
                        <Typography component="span" variant="body1">
                            Research shows that people prefer providers who share their cultural background, which is where Anise's story began.
                            <br /><br />
                            Anise Health:
                            <ul>
                                <li>Emphasizes strong provider-patient matching`</li>
                                <li>Provides resources tailored to Eastern culture`</li>
                                <li>Offers monthly care subscriptions`</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid sm={1} >
                        <Box component='img' src={ImageFullPath("Beef.png")} width="100%" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)

    }
);


const Problems = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Problems(props, ref) {
        return (<Section {...props} ref={ref} color="success">
            <FadeSlide>
                <Typography variant="h3">
                    Problem <br />
                    - Patients struggled to find the right provider and were hesitant to start care with the current patient portal.</Typography>
            </FadeSlide>
            <br />
            <FadeSlide>
                <Grid container columns={5} alignItems="center">
                    <Grid xs={5} md={2}>
                        <Box>
                            <Typography variant="body1">
                                When I joined the team, Anise had just launched the Beta MVP.  Our research revealed that patients were confused by the unclear process, uncertain due to a lack of transparent pricing and service info, and had concerns about selecting the right provider.
                            </Typography>
                            <br /><br />
                            <WarningTypography {...props} variant="h5"
                                sx={(theme) => ({
                                    borderLeft: `3px solid ${theme.palette.primary.main}`, pl: "1rem",
                                    fontWeight: 400,
                                })}>
                                <i>
                                    "I can't tell why these providers are a good match for me."
                                    - New patient
                                </i>
                            </WarningTypography>
                        </Box>
                    </Grid>
                    <Grid xs={5} md={3}>
                        <ImageWithAnnotation imgSrc={ImageFullPath("MVP.gif")} annotation="Patient Portal Beta (Before)" />
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box>
                    <Typography variant="h3">
                        - Resulting in low conversion rate
                    </Typography>
                    <Typography variant="body1">
                        New patients struggled to complete the onboarding process and build trust with our providers and services, resulting in low conversion rates. Therefore, removing friction at each step is the key challenge to address.
                    </Typography>
                </Box>
            </FadeSlide>

        </Section>);
    }
);


const solutionContents = [
    {
        step: "01. Register",
        title: "Streamlined registration form with clarity",
        content: "Patients previously had to enter information twice before accessing matched providers. We integrated repetitive steps, easing burden in completing pre-mactch steps and clarifying the matching process.",
        imgSrc: "Solution1.gif",
    },
    {
        step: "02. Landing Page",
        title: "Transparent service and pricing boosted trust-building",
        content: "Patients lacked transparent info about pricing and services details, causing hesitation before subscribing. We redesigned the post-register landing page to introduce products and answer patients' preliminary questions when their motivation is highest.",
        imgSrc: "Solution2.gif",
    },
    {
        step: "03. View Matched Providers",
        title: "Informative profiles helped patients choose confidently",
        content: "Patients were frustrated by the low discoverability and limited information in provider profiles. We offered detailed yet easy-to-scan profiles, helping patients make informed decisions when selecting providers.",
        imgSrc: "Solution3.gif",
    },
    {
        step: "04. Trial & Provider Selection",
        title: "Intuitive guidance with back-up options",
        content: "Patients were frustrated by insufficient guidance and the limitation of one trial. We solved this by offering clear instructions and supportive back-up plans.",
        imgSrc: "Solution4.gif",
    },
]
const Solution = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Solution(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Typography variant="h3">
                    Solution <br />
                    - A seamless patient onboarding journey
                </Typography>
            </FadeSlide>

            {
                solutionContents.map((item, i) => (
                    <React.Fragment key={i}>
                        <Spacer />
                        <TextImagePair reverse={!!(i % 2)} centerAligned
                            content={
                                <>
                                    <WarningTypography variant="h4">{item.step}</WarningTypography>
                                    <Typography variant="h4">{item.title}</Typography>
                                    <Typography variant="body1">{item.content}</Typography>
                                </>
                            }
                            imgSrc={ImageFullPath(item.imgSrc)}
                        />
                    </React.Fragment>
                ))
            }
        </Section>
        )
    }
);

const DiveDeeper = React.forwardRef<HTMLDivElement, { id?: string }>(
    function DiveDeeper(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <Typography variant="body1" textAlign="center">Let's dive deeper :)</Typography>
        </Section >)
    }
);


const KeyProblemAreasContent = [
    {
        step: "01: Register",
        text: "Redundant pre-matching registration flow with ambiguity",
    },
    {
        step: "02: Landing-page",
        text: "Low transparency of pricing & services info in the whole onboarding process",
    },
    {
        step: "03: Viewing matching results",
        text: "Provider profiles with limited information and low discoverability",
    },
    {
        step: "04: Booking a trial and selecting provider",
        text: "Confusing trial to provider selection flow with little guidance",
    },
]
const Research = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Research(props, ref) {
        const StyledPaper = styled(ThemedPaper)({
            padding: "1.5rem", height: "100%",
            "ul": { margin: "0" }
        });

        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <OffsetTitle>02 RESEARCH</OffsetTitle>
            </FadeSlide>


            <FadeSlide>
                <Box>
                    <Typography variant="h3">
                        Usability testings showed patients struggled to complete the steps with poor usability and needed more information to make decisions.
                    </Typography>
                    <br /><br />
                    <Box component={PNGInvertOnTheme} src={ImageFullPath("ResearchProcess.png")} width="100%" />
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2} justifyItems="stretch" spacing={3}>
                    <Grid sm={2}>
                        <Typography variant="h3">
                            Interviews revealed different information needs between two patient types.
                        </Typography>
                    </Grid>
                    <Grid md={1} sm={2}>
                        <StyledPaper color="secondary">
                            <Box component="img" src={ImageFullPath("ResearchFigure1.png")} width="6rem" />
                            <Typography variant="h4">Quick Decision-maker</Typography>
                            <Typography variant="body1" component="span">
                                Needs:
                                <ul>
                                    <li>Quick access to care</li>
                                    <li>A therapist matching their preferred demographics and traits</li>
                                    <li>Clear and concise info</li>
                                </ul>
                                Behaviors:
                                <ul>
                                    <li>Skims through content, avoids lengthy text</li>
                                    <li>Makes quick decisions from first impressions</li>
                                    <li>Prefers to start care without trials</li>
                                </ul>
                            </Typography>
                        </StyledPaper>
                    </Grid>
                    <Grid md={1} sm={2}>
                        <StyledPaper color="secondary">
                            <Box component="img" src={ImageFullPath("ResearchFigure2.png")} width="6rem" />
                            <Typography variant="h4">Detailed Decision-maker</Typography>
                            <Typography variant="body1" component="span">
                                Needs:
                                <ul>
                                    <li>A therapist with shared values and deep understanding</li>
                                    <li>In-depth info to mitigate risks</li>
                                    <li>Full transparency on services and pricing</li>
                                </ul>
                                Behaviors:
                                <ul>
                                    <li>Thoroughly researches before deciding</li>
                                    <li>Takes time for informed decisions</li>
                                    <li>Expects trial sessions before committing</li>
                                </ul>
                            </Typography>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />
            <FadeSlide>
                <Typography variant="h3">
                    Key Problem Areas
                </Typography>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={2} justifyItems="stretch" spacing={3}>
                    {
                        KeyProblemAreasContent.map((item, i) => (
                            <Grid md={1} sm={2} key={i}>
                                <StyledPaper color="success">
                                    <PrimaryTypography variant="h5">{item.step}</PrimaryTypography>
                                    <Typography variant="h4">{item.text}</Typography>
                                </StyledPaper>
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>
        </Section>);
    }
);


const DesignChallengeContent = [
    {
        step: "3.1: Register",
        text: "Help patients get matched with providers easily without confusion",
        href: "#design1"
    },
    {
        step: "3.2: Landing-page",
        text: "Ensure transparency of pricing & services details to build trust",
        href: "#design2"
    },
    {
        step: "3.3: Viewing matching results",
        text: "Offer discoverable and detailed provider profiles to inform provider selection",
        href: "#design3"
    },
    {
        step: "3.4: Booking a trial and selecting provider",
        text: "Guide patients from trial to provider selection after getting matched",
        href: "#design4"
    },
]
const DesignChallenge = React.forwardRef<HTMLDivElement, { id?: string }>(
    function DesignChallenge(props, ref) {
        const OnHoverMoveIconPaper = styled(ThemedPaper)(({ theme }) => ({
            height: "100%",
            ".icon": {
                transitionProperty: 'transform',
                transitionDuration: `${theme.transitions.duration.standard}ms`,
                transitionTimingFunction: theme.transitions.easing.easeIn,
            },
            "&:hover": {
                ".icon": {
                    transform: "translateX(50%)",
                }
            }
        }));
        const navigation = useNavigate();

        return (<Section {...props} ref={ref} color="primary">
            <FadeSlide>
                <OffsetTitle>03 dESIGN CHALLENGES</OffsetTitle>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={2} justifyItems="stretch" spacing={3}>
                    {
                        DesignChallengeContent.map((item, i) => (
                            <Grid sm={2} md={1} key={i}>
                                <OnHoverMoveIconPaper variant="outlined" onClick={() => navigation(item.href)}>
                                    <PrimaryTypography variant="h5">{item.step}</PrimaryTypography>
                                    <Stack direction="row">
                                        <Typography variant="h5">{item.text}</Typography>
                                        <ChevronRightIcon className="icon" fontSize="large" />
                                    </Stack>
                                </OnHoverMoveIconPaper>
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>
        </Section>);
    }
);


const Design1 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Design1(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <OffsetTitle>3.1 - design 1</OffsetTitle>
                    <Typography variant="h3">
                        Help patients get matched with providers easily without confusion
                    </Typography>
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid sm={2}>
                        <Typography variant="h4">
                            Problem <br />
                            - Patients question the reliability of matching results since they're required to enter personal information repetitively.
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <Typography variant="body1">
                            Previously, patients had to set up an account and complete their profile after a 2-day wait for matching results, causing confusion about the matching process and reducing motivation due to the extra effort required.
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <ImageWithAnnotation imgSrc={ImageFullPath("Design1Problem.gif")}
                            annotation={
                                <>
                                    Patients have to build profile before view matching result <br />
                                    (Before)
                                </>
                            } />
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Design1OnboardingProcessBefore.png")}
                    annotation="Onboarding Process (Before)" />
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2}>
                    <Grid sm={2} md={1} >
                        <Typography variant="h4">
                            Competitive Analysis
                        </Typography>
                        <Typography variant="body1">
                            I researched competitors' onboarding flow for inspiration.
                            <br /><br />
                            Main take-away: <br />
                            Patients are most motivated after completing the registration. Streamlining account creation and service introduction helps them complete all steps at once, ensuring quick access to resources and clarified process.
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <ImageWithAnnotation imgSrc={ImageFullPath("Design1CompetiveAnalysis.png")} />
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Typography variant="h4">
                    Solution <br />
                    - Merge repetitive data entry steps to eliminate ambuiguity. <br />
                    - Simplified the integrated register form. <br />
                    - Clarify next steps immediately after registration to set patient expectation. <br />
                </Typography>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Design1OnboardingProcessAfter.png")}
                    annotation="Onboarding Process (After)" />
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Solution1.gif")}
                    annotation="Register Flow (After)" sx={{ px: "10%" }} />
            </FadeSlide>
        </Section>)
    }
);


const Design2 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Design2(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <OffsetTitle>3.2 - design 2</OffsetTitle>
                    <Typography variant="h3">
                        Ensure transparency of pricing & services details to build trust
                    </Typography>
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid sm={2}>
                        <Typography variant="h4">
                            Problem <br />
                            - Low transparency of pricing & services information in the whole onboarding process.
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <Typography variant="body1">
                            Previously, after submitting the registration form, patients received little feedback and lacked detailed information about services and pricing before payment in the whole process.
                            <br /><br />
                            This low transparency hindered trust and made patients, especially informed desicion-makers, hesitant to start care.
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <ImageWithAnnotation imgSrc={ImageFullPath("Design2RegistrationBefore.png")}
                            annotation="End of Registration (Before)" />
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box>
                    <Typography variant="h4">
                        Solutions <br />
                        - Present services and pricing information right after registration. <br />
                        - Accessible via the bottom bar throughout onboarding.
                    </Typography>
                    <ImageWithAnnotation imgSrc={ImageFullPath("Design2UserFlow.png")}
                        annotation="Visualizing user flow to discover the best touchpoint for services introduction" />
                </Box>
            </FadeSlide>

            <Spacer />
            <FadeSlide>
                <Box>
                    <Typography variant="h4">
                        - New landing pages that communicates information that patients expect.
                    </Typography>
                    <br />
                    <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Design2LandingPages.png")} />
                </Box>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Design2PostRegistrationLandingPage.png")}
                    annotation="Post-register Landing Page" sx={{ px: "10%" }} />
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Box>
                    <Typography variant="h4">
                        -  Well-clarified, yet scannable sub-pages that accommodate different patients' needs.
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        Based on our research, we identified two distince patient types: those who prefer to be well-informed and others who prefer decide quickly without reading lengthy text. We kept the information on landing page concise, while designed the info-rich sub-pages to accomodate different patients' needs.
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Design2InfoPlanAndPricing.png")}
                    annotation="In-depth Info about Care Plans & Pricing" sx={{ px: "10%" }} />
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Design2InfoServices.png")}
                    annotation="In-depth Info about Our Services" sx={{ px: "10%" }} />
            </FadeSlide>
        </Section>)
    }
);


const Design3 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Design3(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <OffsetTitle>3.3 - design 3</OffsetTitle>
                    <Typography variant="h3">
                        Offer discoverable, detailed, and scannable provider profiles to inform provider selection
                    </Typography>
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box>
                    <Typography variant="h4">
                        Problems <br />
                        - Provider profiles are hidden. <br />
                        - Patients need more information about providers to make informed decisions.
                    </Typography>
                    <br />
                    <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Design3ProviderProfilesBefore.png")}
                        annotation="View Provide Profiles (Before)" />
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box>
                    <Typography variant="h4">Sketch & Iteration</Typography>
                    <br />
                    <ImageWithAnnotation imgSrc={ImageFullPath("Design3Sketch.png")} />
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Typography variant="h4">
                    Solutions <br />
                    - Highlight key patient-valued info (demographics and traits) upfront. <br />
                    - Provide detailed provider info on key aspects, ensuring scannability. <br />
                    - Improve discoverability of detailed profiles. <br />
                    - Maintain the current layout to save implementation time.
                </Typography>
            </FadeSlide>
            <br />
            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Design3ProviderProfilesAfter.png")}
                    annotation="View Provide Profiles (After)" sx={{ px: "10%" }} />
            </FadeSlide>
        </Section>)
    }
);


const Design4 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Design4(props, ref) {
        const Bubble = styled(ThemedPaper)({
            position: "absolute", borderRadius: ".5rem",
            left: 0, right: "28%", top: 0,
        })

        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <OffsetTitle>3.4 - design 4</OffsetTitle>
                    <Typography variant="h3">
                        Guide patients from booking a trial to provider selection
                    </Typography>
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid sm={2}>
                        <Typography variant="h4">
                            Problem <br />
                            - Disorganized user flow and complex IA confuse patients <br />
                            - Insufficient guidance, with unclear and non-descriptive CTA buttons <br />
                            - Only one free trial option frustrates patients
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <Typography variant="body1">
                            Previously, patients had to navigate between the homepage and appointment page to view provider profiles, book a trial, and select a provider. This disoriented flow caused confusion, with 5/7 participants needing prompts to complete it.
                            <br /><br />
                            Additionally, offering only one free trial frustrated patients, as 4/7 expressed concerns about alternatives if the trial therapist wasn't a good fit.
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <ImageWithAnnotation imgSrc={ImageFullPath("Design4Before.gif")}
                            annotation="Book a trial - Check trial info - Select Provider (Before)" />
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid sm={2}>
                        <Typography variant="h4">
                            Solution <br />
                            - Integrate user flow into one page, remove unrelated pages to eliminate distraction. <br />
                            - Reorganize info hierarchy, clarifying flows with/without booking the optional trial.
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <Typography variant="body1">
                            Based on our research, some patients prefer to choose a provider directly without a trial. I've separated the trial and no-trial options into distinct sections to streamline the flow and accommodate different user needs.
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <Box sx={{ position: "relative" }}>
                            <Stack direction="row">
                                <div style={{ width: "65%" }} />
                                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("ResearchFigure1.png")}
                                    annotation="Quick Decision-maker" />
                            </Stack>
                            <Bubble variant="outlined">
                                <WarningTypography>
                                    <i>"I'd like to start therapy as soon as possible. Let me just skip the trial."</i>
                                </WarningTypography>
                            </Bubble>
                        </Box>
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Solution4.gif")} sx={{ px: "10%" }}
                    annotation="Quick select provider without a trial" />
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid sm={2}>
                        <Typography variant="h4">
                            - Guide patients to focus on the trial provider for a clearer experience <br />
                            - Provide a back-up plan if the trial doesn't work well, balacing our budget and patient expectations.
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <Typography variant="body1">
                            Since we can only offer one free trial consultation, we removed other providers once a trial is booked. This helps patients focus on their chosen provider and enhances their personalized experience.
                            <br /><br />
                            We've also included instructions for requesting additional trials with other providers if needed. Although limiting users to one free trial may cause some friction, this approach balances our budget constraints while providing clarity.                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1} >
                        <Box sx={{ position: "relative" }}>
                            <Stack direction="row">
                                <div style={{ width: "65%" }} />
                                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("ResearchFigure2.png")}
                                    annotation="Detailed Decision-maker" />
                            </Stack>
                            <Bubble variant="outlined">
                                <WarningTypography>
                                    <i>"A trial is neccesary for me before selecting. But I only have one free trial, what if it doesn't work well?"</i>
                                </WarningTypography>
                            </Bubble>
                        </Box>
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Design4After.gif")} sx={{ px: "10%" }}
                    annotation="Quick select provider without a trial" />
            </FadeSlide>
        </Section>)
    }
);

const FinalThoughts = React.forwardRef<HTMLDivElement, { id?: string }>(
    function FinalThoughts(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <Typography variant="h3" textAlign="center">Final Thoughts</Typography>
        </Section >);
    }
);


const TakeAways = React.forwardRef<HTMLDivElement, { id?: string }>(
    function TakeAways(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid xs={1}>
                        <OffsetTitle>TAKE-<br />AWAYS</OffsetTitle>
                    </Grid>
                    <Grid xs={2}>
                        <Typography variant="h4">
                            🙌  Collaborating with cross-functional teams
                        </Typography>
                        <Typography variant="body1">
                            In this project, close collaboration with the cross-functional team was essential. Making design decisions from multiple perspectives and communicating with other teams about development challenges, resource needs, business phases, and marketing strategies helped inform our design choices. I learned the importance of the designer's role in a product team and how to work effectively to benefit both the team and the users.
                        </Typography>
                        <br />

                        <Typography variant="h4">
                            🤝  Solving problems under constraints and balancing stakeholders' needs
                        </Typography>
                        <Typography variant="body1">
                            We addressed solid business and user needs within constraints. This experience highlighted the importance of balancing multiple stakeholder needs as a UX designer and advocating for users during trade-offs.
                        </Typography>
                        <br />

                        <Typography variant="h4">
                            🦻 Accessibility matters, especially in healthcare products
                        </Typography>
                        <Typography variant="body1">
                            This project was unique because many of our users had some level of disability, making accessibility crucial. Ensuring inclusive design goes beyond checking an A11Y checklist; it involves conducting thorough user testing and truly understanding users' perspectives.
                        </Typography>
                        <br />

                        <Typography variant="h4">
                            🧠 Making quick decisions, not necessarily right ones
                        </Typography>
                        <Typography variant="body1">
                            In a startup context, we often make decisions based on hypotheses, learning through trial and error. This approach taught me not to fear making wrong decisions, as gaining insights through experimentation is valuable.
                        </Typography>
                        <br />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const PNGInvertOnTheme = styled('img')(({ theme }) => ({
    filter: theme.palette.mode == "dark" ? "invert(100%)" : undefined
}));


const OffsetTitle = React.forwardRef<HTMLDivElement, React.HtmlHTMLAttributes<HTMLDivElement>>(
    function OffsetTitle({ children, ...other }, ref) {
        return (
            <Box {...other}>
                <Typography ref={ref} variant="h2" sx={{
                    opacity: 0.3
                }} >
                    {children}
                </Typography>
            </Box>
        )
    }
)


const TextImagePair = ({ content, imgSrc, annotation, reverse = false, centerAligned = false, noShadow }:
    {
        content: React.ReactNode,
        imgSrc: string,
        annotation?: string | React.ReactNode,
        reverse?: boolean,
        centerAligned?: boolean,
        noShadow?: boolean
    }
) => (
    <FadeSlide>
        <Grid container columns={5} direction={reverse ? "row-reverse" : "row"} alignItems={centerAligned ? "center" : undefined}>
            <Grid md={2} sm={5}>
                {content}
            </Grid>
            <Grid md={3} sm={5}>
                <ImageWithAnnotation imgSrc={imgSrc} annotation={annotation} noShadow={noShadow} />
            </Grid>
        </Grid>
    </FadeSlide>
)


export default AnisePatient;
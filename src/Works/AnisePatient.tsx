import * as React from "react";
import { Paper, Grid, Box, Typography, createTheme, useTheme, ThemeProvider, styled } from "@mui/material";
import { common } from '@mui/material/colors'

import ProjectHeader from "./Components/ProjectHeader.tsx";
import Section, { Spacer } from "../Components/Section.tsx";
import { PrimaryTypography, WarningTypography } from "./Components/Typography.tsx";
import FadeSlide from "../Components/FadeSlideEffect.tsx";
import ImageWithQuote from "./Components/ImageWithQuote.tsx";

const ImageFullPath = (p: string) => `/Works/AnisePatient/${p}`;

function AnisePatient() {
    const globalTheme = useTheme();
    const localTheme = React.useMemo(() => createTheme(globalTheme,
        {
            palette: {
                primary: {
                    main: "#456354",
                    light: "#456354",
                    dark: "#456354",
                    contrastText: common.white,
                },
                secondary: {
                    main: "#EDF2ED",
                    light: "#EDF2ED",
                    dark: "#EDF2ED",
                    contrastText: common.black,
                },
                success: {
                    main: "#FEF9EC",
                    light: "#FEF9EC",
                    dark: "#FEF9EC",
                    contrastText: common.black,
                },
                warning: {
                    main: "#5F8D4E",
                    light: "#5F8D4E",
                    dark: "#5F8D4E",
                    contrastText: common.white,
                }
            }
        }
    ), [globalTheme]);

    return (
        <ThemeProvider theme={localTheme}>
            <ProjectHeader
                title="Enhancing Client Acquisition by Removing Friction and Building Trust"
                chips={["Web App", "Healthcare", "Conversion Rate"]}
                imgSrc={ImageFullPath("Intro.png")} />
            <Overview />
            <BussinessGoal />
            <Process />
            <FinalDesign />
            <Impact />
            <DiveDeeper />
            <Round1 />
            <Design1 />
            <Design2 />
            <Design3 />
            <Round1Impact />
            <Round2 />
            <DesignIteration1 />
            <DesignIteration2 />
            <Round2Result />
            <FinalThoughts />
            <Learnings />
        </ThemeProvider>
    )
}

function Overview() {
    return (
        <Section>
            <Spacer />

            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Overview</PrimaryTypography>
                    <Typography variant="body1">
                        AnHealth* is a startup offering culturally responsive digital mental health services for an Asian community. As a product designer, I collaborated with the PM, the other designer, engineers, and the clinical team to research and redesign the client onboarding process. By removing friction points and building trust through clear communication and user education, we enhanced client acquisition and support AnHealth's growth.
                        <br /><br />
                    </Typography>
                    <WarningTypography variant="body1">
                        <b>*Due to NDA, I have modified the company name, logo, and theme colors, and omitted key business decision details.</b>
                    </WarningTypography>
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2}>
                    <Grid item xs={1}>
                        <PrimaryTypography variant="h5">Duration</PrimaryTypography>
                        <Typography variant="body1">
                            4 months (Round 1) + 2 months (Round 2)
                            <br /><br />
                        </Typography>
                        <PrimaryTypography variant="h5">Team</PrimaryTypography>
                        <Typography variant="body1">
                            2 UX designers<br />
                            1 Product Manager<br />
                            2 Software Engineers<br />
                            Clinical Team<br />
                            Growth Team<br />
                            <br /><br />
                        </Typography>
                    </Grid>

                    <Grid item xs={1}>
                        <PrimaryTypography variant="h5">Role & Contribution</PrimaryTypography>
                        <Typography variant="body1">
                            As a UX Designer, I: <br />
                        </Typography>
                        <ul>
                            <Typography variant="body1">
                                <li>Conducted user research and data synthesis</li>
                                <li>Facilitated design sprint with cross-functional team</li>
                                <li>Ideated based on findings and insights</li>
                                <li>Crafted user flow, wireframes, Hi-fi prototypes</li>
                                <li>Set up design system</li>
                                <li>Evaluated accessibility and improved UI</li>
                                <li>Proposed the design-to-dev hand-off process</li>
                            </Typography>
                        </ul>
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={{ md: 5, sm: 1 }} alignItems="center">
                    <Grid item md={5} sm={1}>
                        <Box>
                            <PrimaryTypography variant="h5">Problems</PrimaryTypography>
                            <Typography variant="h3">
                                Client drop-offs occur at various onboarding stages.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={5} sm={1}>
                        <Box component={PNGInvertOnTheme} src={ImageFullPath("Dropoff.png")} width="100%" />
                    </Grid>
                    <Grid item md={2} sm={1}>
                        <Typography variant="body1">
                            When I joined the team, AnHealth had just launched the first version of its MVP Beta. The current MVP had only minimal design, causing users to struggle with the onboarding flow, resulting in significant drop-offs and low conversion rates.
                            <br /><br />
                            Analytics data revealed that drop-offs occurred at various onboarding stages. I conducted comprehensive research on each onboarding stage to identify problems.
                        </Typography>
                    </Grid>
                    <Grid item md={3} sm={1}>
                        <ImageWithQuote imgSrc={ImageFullPath("MVP.gif")} quote="Beta MVP before our design" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >
    )
}

function BussinessGoal() {
    return (<>
        <Section color="success">
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Business Goal</PrimaryTypography>
                    <Typography variant="h3">
                        How might we improving the conversion and renewal rate within the early start-up's constrians?
                    </Typography>
                    <Spacer />
                    <PrimaryTypography variant="h5">Constrains</PrimaryTypography>
                    <ul>
                        <Typography variant="body1">
                            <li>Tight timeline</li>
                            <li>Limited developer capacity</li>
                            <li>Limited service resources</li>
                        </Typography>
                    </ul>
                </Box>
            </FadeSlide>
        </Section>
    </>)
}

function Process() {
    return (<>
        <Section color="secondary">
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid item xs={1}>
                        <Typography variant="h3">Progress</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body2">
                            We enhanced the client onboarding experience <b>in 2 rounds of design</b>.<br />
                            In the 1st Round, we simplified the user flow, enhanced transparency and improved overall usability. In the 2nd Round, we mainly focused on further user education and trust-building.
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Box component='img' src={ImageFullPath("Process.png")} width="100%" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>
    </>)
}

const finalDesignContents = [
    {
        title: "Streamlined user flow and informed decision-making",
        content: "The current onboarding process is redundant and lacking guidance. We removed two major drop-off steps, reduced user input burden, and communicated clearly to help users make informed decisions and smoothly proceed to the next steps.",
        imgSrc: "FinalDesign1.gif",
    },
    {
        title: "Early user education increases client confidence",
        content: "Users lacked information about our care model, causing hesitation before subscribing. We redesigned the post-register landing page to introduce products and answer users' preliminary questions when their motivation is highest.",
        imgSrc: "FinalDesign2.gif",
    },
    {
        title: "Building trust with clarity, transparency and support",
        content: "Users drop off without clear provider information and next steps. We ensured the onboarding process offers detailed provider and service information, back-up plans for common concerns, and clear guidance at each step.",
        imgSrc: "FinalDesign3.gif",
    },
    {
        title: "Easy session tracking and management to support care plan adherence",
        content: "Users struggled with care plans and session scheduling. We redesigned the client portal homepage to visualize progress and streamline scheduling, eliminating extra steps. Users can preview next month's care plan, reducing confusion and mistakes, and improving adherence.",
        imgSrc: "FinalDesign4.gif",
    },
]

function FinalDesign() {
    return (
        <Section>
            <FadeSlide>
                <Typography variant="h3">Final Design</Typography>
            </FadeSlide>

            {
                finalDesignContents.map((item, i) => (
                    <React.Fragment key={i}>
                        <Spacer />
                        <FadeSlide>
                            <Grid container columns={5} alignItems="center"
                                direction={(i % 2 ? "row-reverse" : "row")}>
                                <Grid item sm={5} md={2}>
                                    <Typography variant="h4">{item.title}</Typography>
                                    <Typography variant="body1">{item.content}</Typography>
                                </Grid>
                                <Grid item sm={5} md={3}>
                                    <Box component='img' src={ImageFullPath(item.imgSrc)} width="100%"
                                        boxShadow={(theme) => theme.shadows[4]} />
                                </Grid>
                            </Grid>
                        </FadeSlide>
                    </React.Fragment>
                ))
            }
        </Section>
    )
}

const impactRound1Content = [
    {
        title: "Usability Improved",
        content: "Led to minimal complaints and inquiries.",
    },
    {
        title: "NPS Increased by 7%",
        content: "User represented a higher satisfication.",
    },
    {
        title: "Conversion Rate improved by 6%",
        content: "Higher new user conversion rate.",
    },
    {
        title: "Renewal Rate Increase by 11%",
        content: "Renewal rate at the end of the 1st month increased.",
    },
]
const impactRound2Content = [
    {
        title: "Improved User Education",
        content: "5/5 test participants reported high satisfaction with their understanding of service details and upcoming steps before subscribing.",
    },
    {
        title: "Clear Next Steps",
        content: "4/5 test participants completed each step of the process without assistance.",
    },
    {
        title: "Clearer User Communication",
        content: "5/5 participants reported knowing what to do if the trial didn't work well.",
    }
]


function Impact() {
    const ContentCard = ({ title, content }: { title: string, content: string }) => (
        <Paper variant="outlined"
            sx={{ p: "2rem", height: "100%" }}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{content}</Typography>
        </Paper>
    );

    return (
        <Section color="success">
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid item xs={1}>
                        <Typography variant="h3">Impact</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1">
                            The Round 1 Designs, launched in April 2023, significantly improved user satisfication, conversion and renewal rate. The Round 2 designs were released after my tenure, with the team consistently tracking user satisfaction and CVR.
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />
            <FadeSlide>
                <PrimaryTypography variant="h5">Round 1</PrimaryTypography>
            </FadeSlide>
            <FadeSlide>
                <Grid container columns={{ md: 4, sm: 2 }} alignItems="stretch" spacing={3}>
                    {
                        impactRound1Content.map((item, i) => (
                            <Grid item md={1} sm={1}>
                                <ContentCard {...item} key={i} />
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>

            <Spacer />
            <FadeSlide>
                <PrimaryTypography variant="h5">Round 2</PrimaryTypography>
            </FadeSlide>
            <FadeSlide>
                <Grid container columns={{ md: 3, sm: 1 }} alignItems="stretch" spacing={3}>
                    {
                        impactRound2Content.map((item, i) => (
                            <Grid item md={1} sm={1}>
                                <ContentCard {...item} key={i} />
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>
        </Section>
    );
}


function DiveDeeper() {
    return (
        <Section color="primary">
            <Typography variant="body1" textAlign="center">Let's dive deeper :)</Typography>
        </Section>
    )
}


function Round1() {
    return (
        <Section>
            <FadeSlide>
                <Box>
                    <OffsetTitle>Round1</OffsetTitle>
                    <Typography variant="h3" sx={{ zIndex: 1 }}>Broad Explore & Overall Improvement</Typography>
                </Box>
            </FadeSlide>

            <br />

            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Usability Evaluation & Testing</PrimaryTypography>
                    <Typography variant="h3">What causes drop-offs at each step?</Typography>
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={5} >
                    <Grid item xs={2}>
                        <Typography variant="body1">
                            Since I was new to the platform, I first acted as a test user, providing feedback from a novice perspective. We conducted a cognitive walkthrough and hypothesized that poor usability and a disoriented onboarding flow caused user friction.
                            <br /><br />
                            To identify the main issues, we conducted usability testing with 7 participants. We mapped and categorized the findings, then worked with the cross-functional team (PM, developers, clinical team and growth team) to prioritize key tasks based on impact and effort.
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <ImageWithQuote imgSrc={ImageFullPath("BetaMVPTesting.png")} quote="Beta MVP Usability Testing" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>
    )
}


function Design1() {
    return (
        <Section color="secondary">
            <FadeSlide>
                <Box>
                    <WarningTypography variant="h3">Design 1: Register</WarningTypography>
                    <Typography variant="h3">
                        Streamline onboarding flow by reducing redundancy and creating an informative landing page
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>
            <FadeSlide>
                <Box>
                    <Typography variant="h4">
                        Problem 1: <br />
                        Redundant user flow with excessive information requirements and repeated inputs
                    </Typography>
                    <Typography variant="body1">
                        The onboarding process is redundant, requiring repeated personal information input without immediate value, undermining trust in the matching mechanism, causing users to question the reliability of the results and hindering trust-building.
                        <br /><br />
                        The current onboarding consists of 3 stages. Stage 2 has the highest drop-off rate, with 7/7 participants frustrated by excessive information requirements and all feeling stuck during profile-building. Excessive steps overwhelm users, especially those with mental health issues, causing abandonment.
                    </Typography>
                    <br />
                    <ImageWithQuote imgSrc={ImageFullPath("Design1Problem1.png")} quote="Onboarding process with 3 stages (Before Design)" />
                </Box>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Box>
                    <Typography variant="h4">
                        Solution 1: <br />
                        Merge repetitive data-input steps
                    </Typography>
                    <Typography variant="body1">
                        Combine the client register and account creation stages into a single step, allowing users to complete all personal data input at once when their motivation is highest and log in directly after register. This approach reduces the highest drop-off frictions and users' uncertainty in matching mechanism.
                    </Typography>
                    <br />
                    <ImageWithQuote imgSrc={ImageFullPath("Design1Solution1.png")} quote="Onboarding process with 2 stages (After Design)" />
                </Box>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Grid container columns={{ md: 5, sm: 1 }}>
                    <Grid item md={2} sm={1}>
                        <Typography variant="h4">
                            Problem 2: <br />
                            Insufficient feedback after the client register leaves users uncertain
                        </Typography>
                        <Typography variant="body1">
                            After users submit the intake form, they receive insufficient feedback about what to expect. This lack of information leaves users uncertain and uninformed, increasing the likelihood of drop-offs after 2 pending days.
                        </Typography>
                    </Grid>
                    <Grid item md={3} sm={1}>
                        <ImageWithQuote imgSrc={ImageFullPath("Design1Problem2.png")} quote={<span>Before Design <br />  Current client register flow ends with little feedback</span>} />
                    </Grid>
                </Grid>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Grid container columns={{ md: 5, sm: 1 }}>
                    <Grid item md={2} sm={1}>
                        <Typography variant="h4">
                            Solution 2: <br />
                            First-time log-in landing page with informative contents
                        </Typography>
                        <Typography variant="body1">
                            To address this issue, I designed a post-register landing page to end the client application instead of relying on an email.
                            <br /><br />
                            This landing page clearly outlines the next steps, answers users preliminary questions and provides relevant free resources aligned with our niche, offering immediate value and setting clear expectations.
                        </Typography>
                    </Grid>
                    <Grid item md={3} sm={1}>
                        <ImageWithQuote imgSrc={ImageFullPath("Design1Solution2.png")} quote={<span>After Design<br />Post-register landing page</span>} />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>
    )
}


function Design2() {
    return (
        <Section>

        </Section>
    )
}


function Design3() {
    return (
        <Section color="secondary">

        </Section>
    )
}


function Round1Impact() {
    return (
        <Section color="success">

        </Section>
    )
}


function Round2() {
    return (
        <Section>
            <FadeSlide>
                <Box>
                    <OffsetTitle>Round2</OffsetTitle>
                    <Typography variant="h3" sx={{ zIndex: 1 }}>Uncover unsolved frictions</Typography>
                </Box>
            </FadeSlide>

            <br />

            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Usability Testing & Interviews</PrimaryTypography>
                    <Typography variant="h3">Understand the remaining issues and the factors encourage users to adopt our services.</Typography>
                    <Typography variant="body1">
                        To comprehensively understand the strengths and weaknesses of our new onboarding process, we decided to gain feedbacks with 2 research methods:
                    </Typography>
                </Box>
            </FadeSlide>
        </Section>
    )
}

function DesignIteration1() {
    return (
        <Section color="secondary">

        </Section>
    )
}


function DesignIteration2() {
    return (
        <Section>

        </Section>
    )
}


function Round2Result() {
    return (
        <Section color="success">

        </Section>
    )
}


function FinalThoughts() {
    return (
        <Section color="primary">

        </Section>
    )
}


function Learnings() {
    return (
        <Section>

        </Section>
    )
}


const PNGInvertOnTheme = styled('img')(({ theme }) => ({
    filter: theme.palette.mode == "dark" ? "invert(100%)" : undefined
}));

const OffsetTitle = ({ children }: { children: React.ReactNode }) => (
    <Typography variant="h2" sx={{ marginBlockEnd: "-2.5rem", color: "grey", opacity: 0.2 }}>{children}</Typography>
);

export default AnisePatient;
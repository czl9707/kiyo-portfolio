import * as React from "react";
import { Grid, Box, Typography, createTheme, useTheme, ThemeProvider, styled } from "@mui/material";
import { common } from '@mui/material/colors'

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
            }
        }
    ), [globalTheme]);

    return (
        <ThemeProvider theme={localTheme}>
            <ProjectHeader
                title={"Enhancing Client Acquisition by Removing Friction and Building Trust"}
                chips={["Web App", "Healthcare", "Conversion Rate"]}
                imgSrc={ImageFullPath("Intro.png")} />
            <Catagorize id="overview" catagoryName="Overview"><Overview /></Catagorize>
            <Catagorize id="problems" catagoryName="Problems"><Problems /></Catagorize>
            <Catagorize id="bussiness-goal" catagoryName="Business Goal & Constraints"><BussinessGoal /></Catagorize>
            <Catagorize id="process" catagoryName="Process"><Process /></Catagorize>
            <Catagorize id="final-design" catagoryName="Final Design"><FinalDesign /></Catagorize>
            <Catagorize id="impact" catagoryName="Impact"><Impact /></Catagorize>

            <DiveDeeper />

            <CatagorizeGroup catagoryName="Round 1">
                <Catagorize id="round1-research" catagoryName="Research"><Round1 /></Catagorize>
                <Catagorize id="round1-design1" catagoryName="Design 1"><Design1 /></Catagorize>
                <Catagorize id="round1-design2" catagoryName="Design 2"><Design2 /></Catagorize>
                <Catagorize id="round1-design3" catagoryName="Design 3"><Design3 /></Catagorize>
                <Catagorize id="round1-impact" catagoryName="Impact"><Round1Impact /></Catagorize>
            </CatagorizeGroup>

            <CatagorizeGroup catagoryName="Round 2">
                <Catagorize id="round2-research" catagoryName="Research"><Round2 /></Catagorize>
                <Catagorize id="round2-design-iter1" catagoryName="Design Iteration 1"><DesignIteration1 /></Catagorize>
                <Catagorize id="round2-design-iter2" catagoryName="Design Iteration 2"><DesignIteration2 /></Catagorize>
                <Catagorize id="round2-design-impact" catagoryName="Impact"><Round2Impact /></Catagorize>
            </CatagorizeGroup>

            <FinalThoughts />

            <Catagorize id="final-thoughts" catagoryName="Final Thoughts"><Learnings /></Catagorize>

        </ThemeProvider>
    )
}

const Overview = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Overview(props, ref) {
        return (<Section {...props} ref={ref}>
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
                        <Typography variant="body1" component="span">
                            As a UX Designer, I: <br />
                            <ul>
                                <li>Conducted user research and data synthesis</li>
                                <li>Facilitated design sprint with cross-functional team</li>
                                <li>Ideated based on findings and insights</li>
                                <li>Crafted user flow, wireframes, Hi-fi prototypes</li>
                                <li>Set up design system</li>
                                <li>Evaluated accessibility and improved UI</li>
                                <li>Proposed the design-to-dev hand-off process</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>);
    }
);


const Problems = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Problems(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={1} alignItems="center">
                    <Grid item xs={1}>
                        <Box>
                            <PrimaryTypography variant="h5">Problems</PrimaryTypography>
                            <Typography variant="h3">
                                Client drop-offs occur at various onboarding stages.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box component={PNGInvertOnTheme} src={ImageFullPath("Dropoff.png")} width="100%" />
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <TextImagePair
                content={
                    <Typography variant="body1">
                        When I joined the team, AnHealth had just launched the first version of its MVP Beta. The current MVP had only minimal design, causing users to struggle with the onboarding flow, resulting in significant drop-offs and low conversion rates.
                        <br /><br />
                        Analytics data revealed that drop-offs occurred at various onboarding stages. I conducted comprehensive research on each onboarding stage to identify problems.
                    </Typography>
                }
                imgSrc={ImageFullPath("MVP.gif")} annotation="Beta MVP before our design"
            />
        </Section>);
    }
);


const BussinessGoal = React.forwardRef<HTMLDivElement, { id?: string }>(
    function BussinessGoal(props, ref) {
        return (<Section {...props} ref={ref} color="success">
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Business Goal</PrimaryTypography>
                    <Typography variant="h3">
                        How might we improving the conversion and renewal rate within the early start-up's constrians?
                    </Typography>
                    <Spacer />
                    <PrimaryTypography variant="h5">Constrains</PrimaryTypography>
                    <Typography variant="body1" component="span">
                        <ul>
                            <li>Tight timeline</li>
                            <li>Limited developer capacity</li>
                            <li>Limited service resources</li>
                        </ul>
                    </Typography>
                </Box>
            </FadeSlide>
        </Section >)
    }
);


const Process = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Process(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
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
        </Section >)
    }
);


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

const FinalDesign = React.forwardRef<HTMLDivElement, { id?: string }>(
    function FinalDesign(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Typography variant="h3">Final Design</Typography>
            </FadeSlide>

            {
                finalDesignContents.map((item, i) => (
                    <React.Fragment key={i}>
                        <Spacer />
                        <TextImagePair reverse={!!(i % 2)} centerAligned
                            content={
                                <>
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

const Impact = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Impact(props, ref) {
        return (<Section {...props} ref={ref} color="success">
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
                            <Grid item xs={1} key={i}>
                                <InfoContentCard {...item} key={i} />
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
                            <Grid item xs={1} key={i}>
                                <InfoContentCard {...item} />
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>
        </Section>
        );
    }
);


const DiveDeeper = React.forwardRef<HTMLDivElement, { id?: string }>(
    function DiveDeeper(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <Typography variant="body1" textAlign="center">Let's dive deeper :)</Typography>
        </Section >)
    }
);

const Round1 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Round1(props, ref) {
        return (<Section {...props} ref={ref}>
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

            <TextImagePair
                content={
                    <Typography variant="body1">
                        Since I was new to the platform, I first acted as a test user, providing feedback from a novice perspective. We conducted a cognitive walkthrough and hypothesized that poor usability and a disoriented onboarding flow caused user friction.
                        <br /><br />
                        To identify the main issues, we conducted usability testing with 7 participants. We mapped and categorized the findings, then worked with the cross-functional team (PM, developers, clinical team and growth team) to prioritize key tasks based on impact and effort.
                    </Typography>
                }
                imgSrc={ImageFullPath("BetaMVPTesting.png")} annotation="Beta MVP Usability Testing"
            />
        </Section>)
    }
);

const Design1 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Design1(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
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
                    <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Design1Problem1.png")}
                        annotation="Onboarding process with 3 stages (Before Design)" />
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
                    <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Design1Solution1.png")}
                        annotation="Onboarding process with 2 stages (After Design)" />
                </Box>
            </FadeSlide>
            <Spacer />
            <TextImagePair
                content={<>
                    <Typography variant="h4">
                        Problem 2: <br />
                        Insufficient feedback after the client register leaves users uncertain
                    </Typography>
                    <Typography variant="body1">
                        After users submit the intake form, they receive insufficient feedback about what to expect. This lack of information leaves users uncertain and uninformed, increasing the likelihood of drop-offs after 2 pending days.
                    </Typography>
                </>}
                imgSrc={ImageFullPath("Design1Problem2.png")} annotation={<span>Before Design <br />  Current client register flow ends with little feedback</span>}
            />
            <Spacer />
            <TextImagePair
                content={<>
                    <Typography variant="h4">
                        Solution 2: <br />
                        First-time log-in landing page with informative contents
                    </Typography>
                    <Typography variant="body1">
                        To address this issue, I designed a post-register landing page to end the client application instead of relying on an email.
                        <br /><br />
                        This landing page clearly outlines the next steps, answers users preliminary questions and provides relevant free resources aligned with our niche, offering immediate value and setting clear expectations.
                    </Typography>
                </>}
                imgSrc={ImageFullPath("Design1Solution2.png")} annotation={<span>After Design<br />Post-register landing page</span>}
            />
        </Section>);
    }
);

const Design2 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Design2(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <WarningTypography variant="h3">Design 2: from view match to subscription</WarningTypography>
                    <Typography variant="h3">
                        Enhance Transparency, Guidance and flexibility.
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>
            <FadeSlide>
                <Box>
                    <Typography variant="h4">
                        Problems: <br />
                        The current Beta's insufficient clarity and poor transparency hinder users' confidence and decision-making in moving to the next steps.
                    </Typography>
                    <Typography variant="body1" component="span" sx={{ lineHeight: "2rem" }}>
                        <ol>
                            <li><b>Insufficient info in therapist profiles:</b> Participants needed more details about therapist profiles to ensure a good fit.</li>
                            <li><b>Lack of clear guidance on the therapist-selection page:</b> 5/7 participants needed prompts to complete the flow.</li>
                            <li><b>Single-trial hinders user confidence:</b> Concerns about what to do if the trial therapist isn't a good fit, as 4/7 participants were unsure about alternatives.</li>
                            <li><b>Detailed service info missed before payment:</b> 3/7 participants wanted more service details before payment.</li>
                            <li><b>Lack of explanation about the care team collaboration:</b> leading to dissatisfaction when users realized there were two providers (therapist and coach) only after subscription.</li>
                        </ol>
                        <br />
                    </Typography>
                    <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Design2Problems.png")}
                        annotation="From view match to subscribe (Before Design)" />
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box>
                    <Typography variant="h4">Solution</Typography>
                    <br />
                    <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Design2Solutions.png")}
                        annotation="From view match to subscribe (After Design)" />
                </Box>
            </FadeSlide>

            <Spacer />

            <TextImagePair
                content={<>
                    <Typography variant="body1" component="span">
                        To build users' confidence in our services, I implemented the following design changes:
                        <br />
                        <ul>
                            <li><b>Display matched therapist information in the invitation email:</b> Provide details about matched therapists in the initial email to entice users to log into the portal, rather than requiring them to log in first.</li>
                            <br />
                            <li><b>Informative therapist profiles:</b> Offer sufficient and relevant information in therapist profiles to help users understand and select their therapist.</li>
                        </ul>
                    </Typography>
                </>}
                imgSrc={ImageFullPath("Design2Solution1.gif")} annotation="Receive email - Review matchs therapists"
            />

            <Spacer />

            <TextImagePair
                content={
                    <Typography variant="body1" component="span">
                        <ul>
                            <li><b>Flexible Therapist Selection:</b> Although limited by budget that we can only offer one free trial, users can view other therapist profiles and select a new therapist for their subscription even after the trial. Also, we offer an option to skip the trial and directly start the subscription for more flexibility.</li>
                            <br />
                            <li><b>Clear Guidance on each step:</b> Use clear prompts to guide users through each step.</li>
                        </ul>
                    </Typography>
                }
                imgSrc={ImageFullPath("Design2Solution2.gif")} annotation="Trial - Select therapist - Start care plan"
            />

            <Spacer />

            <TextImagePair
                content={
                    <Typography variant="body1" component="span">
                        <ul>
                            <li><b>Access to "Our Care Services" Page:</b> Throughout the trial-to-subscription process, provide access to a detailed "View Care Services" page so users can fully understand the subscription care plans and care model.</li>
                        </ul>
                    </Typography>
                }
                imgSrc={ImageFullPath("Design2Solution3.gif")} annotation="View details about care services"
            />
        </Section>);
    }
);


const Design3 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Design3(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <WarningTypography variant="h3">Design 3: Post-subscription Homepage</WarningTypography>
                    <Typography variant="h3">
                        Streamline Session Scheduling and attending
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Typography variant="h4">
                    Problems: <br />
                    Cluttered information and separate scheduling pages confuse users and hinder care plan adherence
                </Typography>
            </FadeSlide>

            <TextImagePair
                content={
                    <Typography variant="body1" component="span">
                        <ol>
                            <li>
                                <b>User flow gap:</b> Users must schedule sessions on the homepage and attend them on the appointment page. Provider and session info is cluttered, causing confusion for 5/7 participants.
                            </li>
                            <br />
                            <li>
                                <b>Extra effort required:</b> Users must manually follow the subscription care plan to schedule sessions with two providers, leading to potential mistakes and increasing backend management costs.
                            </li>
                            <br />
                            <li>
                                <b>Difficulty in tracking session:</b> Sessions are not intuitively categorized by status or type, making it difficult to track progress and adhere to the care plan.
                            </li>
                        </ol>
                    </Typography>
                }
                imgSrc={ImageFullPath("Design3Solution.gif")} annotation="Trial - Select therapist - Start care plan"
            />

            <FadeSlide>
                <Box>
                    <Spacer />
                    <Typography variant="h5">Solution</Typography>
                    <Typography variant="body1" component="span">
                        <ol>
                            <b>Optimized Schedule-to-Attend Flow:</b>
                            <ul>
                                <li>Integrated all actions related to sessions into the Homepage.</li>
                                <li>Removed less relevant and infrequently used info from the homepage to reduce clutter.</li>
                            </ul>
                            <b>Enhanced Session Management:</b>
                            <ul>
                                <li>Visualized care plan progress for scannable track.</li>
                                <li>Users can now schedule upcoming sessions without manually checking the care plan.</li>
                                <li>Provided access to the next month plan, offering more flexibility and transiting to next month smoothly.</li>
                            </ul>
                        </ol>
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("FinalDesign4.gif")} annotation={"Schedule and attend sessions on Homepage (After)"} />
            </FadeSlide>
        </Section>)
    }
);


const Round1Impact = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Round1Impact(props, ref) {
        return (<Section {...props} ref={ref} color="success">
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid item xs={1}>
                        <Typography variant="h3">Round 1 Impact</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1">
                            The Beta 2.0 were launched at April 2023 and received possitive impact within 2 months of launching.
                            <br /> <br />
                            To continue growing, our team decided to iterate the design, focusing on client acquisition. Our goal was to address remaining frictions to enhance user confidence and adoption.
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Grid container columns={{ md: 4, sm: 2 }} alignItems="stretch" spacing={3}>
                    {
                        impactRound1Content.map((item, i) => (
                            <Grid item xs={1} key={i}>
                                <InfoContentCard {...item} key={i} />
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>
        </Section>);
    }
);


const Round2 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Round2(props, ref) {
        const StyledPaper = styled(ThemedPaper)({
            padding: "1.5rem", height: "100%",
            "ul": { margin: "0" }
        });
        const SecondaryPaper = ({ children }: { children: React.ReactNode }) => (
            <StyledPaper children={children} color="secondary" elevation={0} variant="elevation" />
        )

        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <OffsetTitle>Round2</OffsetTitle>
                    <Typography variant="h3" sx={{ zIndex: 1 }}>Uncover unsolved frictions</Typography>
                </Box>
            </FadeSlide>

            <br />

            <FadeSlide>
                <Grid container columns={{ md: 2, sm: 1 }} justifyItems="stretch">
                    <Grid item xs={2}>
                        <PrimaryTypography variant="h5">Usability Testing & Interviews</PrimaryTypography>
                        <Typography variant="h3">Understand the remaining issues and the factors encourage users to adopt our services.</Typography>
                        <Typography variant="body1">
                            To comprehensively understand the strengths and weaknesses of our new onboarding process, we decided to gain feedbacks with 2 research methods:
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <SecondaryPaper>
                            <Typography variant="h4">Interview with Exisiting Clients</Typography>
                            <Typography variant="body1">
                                Gather feedback from clients who adopted our service after the Beta 2.0 launch to understand what worked for them and what didn't.
                            </Typography>
                        </SecondaryPaper>
                    </Grid>
                    <Grid item xs={1}>
                        <SecondaryPaper>
                            <Typography variant="h4">Usability Testing with Novice Users</Typography>
                            <Typography variant="body1">
                                Test current design with new users to identify any unresolved issues in the onboarding process and gather insights into their experience.
                            </Typography>
                        </SecondaryPaper>
                    </Grid>
                </Grid>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Grid container columns={{ md: 2, sm: 1 }} justifyItems="stretch">
                    <Grid item xs={2}>
                        <PrimaryTypography variant="h5">Insight</PrimaryTypography>
                        <Typography variant="h3">Varying information Needs for two user groups</Typography>
                        <Typography variant="body1">
                            After synthesizing data from two research methods, we identified two user types with different information needs.
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <SecondaryPaper>
                            <Box component="img" src={ImageFullPath("Round2InsightFigure1.png")} width="6rem" />
                            <Typography variant="h4">Quick Deision-maker</Typography>
                            <Typography variant="body1" component="span">
                                Needs:
                                <ul>
                                    <li>Finding a therapist who matches their preferred demographics and traits.</li>
                                    <li>Concise information in one place with easy readability.</li>
                                </ul>
                                Behaviors:
                                <ul>
                                    <li>Avoids reading lengthy texts and relies on initial impressions.</li>
                                    <li>Makes quick decisions and evaluates outcomes later.</li>
                                </ul>
                            </Typography>
                        </SecondaryPaper>
                    </Grid>
                    <Grid item xs={1}>
                        <SecondaryPaper>
                            <Box component="img" src={ImageFullPath("Round2InsightFigure2.png")} width="6rem" />
                            <Typography variant="h4">Detailed Deision-maker</Typography>
                            <Typography variant="body1" component="span">
                                Needs:
                                <ul>
                                    <li>Finding a therapist who shares the same values and understands them.</li>
                                    <li>Being well-informed before making decisions to mitigate potential risks.</li>
                                    <li>Transparency and in-depth information about service details.</li>
                                </ul>
                                Behaviors:
                                <ul>
                                    <li>Takes time to thoroughly research and gather as much information as possible.</li>
                                    <li>Does not rush the decision-making process.</li>
                                </ul>
                            </Typography>
                        </SecondaryPaper>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const DesignIteration1 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function DesignIteration1(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <WarningTypography variant="h3">Design Iteration 1</WarningTypography>
                    <Typography variant="h3">
                        Early user education accommodating Diverse user needs
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <TextImagePair noShadow
                content={
                    <>
                        <Typography variant="h4">
                            Problems:
                        </Typography>
                        <Typography variant="body1" component="span">
                            <ol>
                                <li>
                                    <b>Low Interest in Free Resources:</b> Testers showed weak interest in the free resources provided on the current landing page since it's not high relevant.
                                </li>
                                <br />
                                <li>
                                    <b>Delayed User Education:</b> User education appears only after the second login. Before seeing matched providers, users lack a full understanding of our unique care model, leading to drop-offs before the second login.
                                </li>
                                <br />
                                <li>
                                    <b>Insufficient In-depth Introducation:</b> The care services introduction currently lacks enough detailed information for users who need in-depth knowledge to make decisions.
                                </li>
                            </ol>
                        </Typography>
                    </>
                }
                imgSrc={ImageFullPath("DesignIteration1Problem1.png")} annotation="Post-Register Landing Page in Round 1 Design"
            />
            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("DesignIteration1Problem2.png")}
                    annotation={"Delayed User Education with Insufficient In-depth Introduction (Round 1 Design)"} />
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box>
                    <Typography variant="h4">Solution</Typography>
                    <Typography variant="body1" component="span">
                        <ol>
                            <li>
                                <b>Early User Education:</b> Provide in-depth user education immediately after the client application, giving users the necessary information upfront.
                            </li>
                            <br />
                            <li>
                                <b>Accommodate Different Audience Needs:</b> Keep information on the landing page concise and provide access to deeper details on sub-pages. Ensure these information pages are well-clarified and scannable to enhance readability.
                            </li>
                        </ol>
                    </Typography>
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("DesignIteration1Solution1.png")} />
            </FadeSlide>

            <Spacer />
            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("DesignIteration1Solution2.png")}
                    annotation="Post-register Landing Page (Round 2 Design)"
                    sx={{ width: "80%", ml: "10%" }} />
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2}>
                    <Grid item xs={1}>
                        <ImageWithAnnotation imgSrc={ImageFullPath("DesignIteration1Solution3.png")}
                            annotation={"In-depth Info about Our Care Model (Round 2 Design)"} />
                    </Grid>
                    <Grid item xs={1}>
                        <ImageWithAnnotation imgSrc={ImageFullPath("DesignIteration1Solution4.png")}
                            annotation={"In-depth Info about Care Plans & Pricing (Round 2 Design)"} />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>);
    }
);


const DesignIteration2 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function DesignIteration2(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <WarningTypography variant="h3">Design Iteration 2</WarningTypography>
                    <Typography variant="h3">
                        Balance users' desire for multiple trials and our budget constraints with supportive back-up plans
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box>
                    <Typography variant="h4">Problems</Typography>
                    <Typography variant="body1" component="span">
                        <ol>
                            <li>
                                <b>Users' Frustration with Limited Trial Booking Options:</b> Users were upset to find that 'book a trial' buttons were unavailable for other therapists after scheduling their first trial session, leaving them unsure about what to do next if the trial didn't work well.
                            </li>
                            <br />
                            <li>
                                <b>Preference for Video Trial Sessions:</b> 9/10 test users preferred video trials over phone calls, as face-to-face communication helps build trust and assess compatibility. The lack of video options hinders the user experience and decision-making process.
                            </li>
                        </ol>
                    </Typography>
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("DesignIteration2Problem.png")} />
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box>
                    <Typography variant="h4">Problems</Typography>
                    <Typography variant="body1" component="span">
                        <ol>
                            <li>
                                <b>Focusing on the Chosen Therapist for a Clearer Experience:</b> Since we are currently unable to offer users more than one free trial consultation, we simplified the user path by removing other providers once a trial is booked, helping users focus on their chosen provider and enhancing their personalized experience.
                            </li>
                            <br />
                            <li>
                                <b>Upgraded trial sessions from phone calls to video meetings:</b>  Meeting users preference while requiring users to join the trial session through the desktop portal, facilitating a quicker transition to subscription after the trial ends.
                            </li>
                            <br />
                            <li>
                                <b>Providing a back-up plan if the trial doesn't work well:</b> Provided instructions for requesting additional trial consultations with other providers if the initial provider isn't suitable. While limiting users to one free trial session through the portal may cause some friction, this approach balances our budget constraints while offering clarity and reducing confusion for clients
                            </li>
                        </ol>
                    </Typography>
                </Box>
            </FadeSlide>

            <Spacer />
            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("DesignIteration2Solution.gif")}
                    annotation={"Trial - Select therapist flow (Round 2 Design)"} />
            </FadeSlide>
        </Section>);
    }
);


const round2ImpactContent = [
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
    },
]

const Round2Impact = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Round2Impact(props, ref) {
        return (<Section {...props} ref={ref} color="success">
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid item xs={1}>
                        <Typography variant="h3">Round 2 Impact</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1" component="span">
                            The iterated design was launched after I left AnHealth. To measure its impact, I personally conducted user testing with 5 participants:
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
            <br />

            <FadeSlide>
                <Grid container columns={{ md: 3, sm: 1 }} alignItems="stretch" spacing={3}>
                    {
                        round2ImpactContent.map((item, i) => (
                            <Grid item xs={1} key={i}>
                                <InfoContentCard {...item} />
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>
        </Section>);
    }
);


const FinalThoughts = React.forwardRef<HTMLDivElement, { id?: string }>(
    function FinalThoughts(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <Typography variant="h3" textAlign="center">Final Thoughts</Typography>
        </Section >);
    }
);


const Learnings = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Learnings(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid item xs={1}>
                        <Typography variant="h3">Learnings</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body1">
                            <b>Collaborating with Cross-Functional Teams:</b> <br />
                            In this project, close collaboration with the cross-functional team was essential. Making design decisions from multiple perspectives and communicating with other teams about development challenges, resource needs, business phases, and marketing strategies helped inform our design choices. I learned the importance of the designer's role in a product team and how to work effectively to benefit both the team and the users.
                            <br /><br />
                            <b>Solving Problems Under Constraints and Balancing Stakeholders' Needs:</b> <br />
                            We addressed solid business and user needs within constraints. This experience highlighted the importance of balancing multiple stakeholder needs as a UX designer and advocating for users during trade-offs.
                            <br /><br />
                            <b>Accessibility Matters, Especially in Healthcare Products:</b> <br />
                            This project was unique because many of our users had some level of disability, making accessibility crucial. Ensuring inclusive design goes beyond checking an A11Y checklist; it involves conducting thorough user testing and truly understanding users' perspectives.
                            <br /><br />
                            <b>Making Quick Decisions, Not Necessarily Right Decisions:</b> <br />
                            In a startup context, we often make decisions based on hypotheses, learning through trial and error. This approach taught me not to fear making wrong decisions, as gaining insights through experimentation is valuable.
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const PNGInvertOnTheme = styled('img')(({ theme }) => ({
    filter: theme.palette.mode == "dark" ? "invert(100%)" : undefined
}));

const OffsetTitle = ({ children }: { children: React.ReactNode }) => (
    <Typography variant="h2" sx={{ marginBlockEnd: "-2.5rem", color: "grey", opacity: 0.2 }}>{children}</Typography>
);

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
            <Grid item md={2} sm={5}>
                {content}
            </Grid>
            <Grid item md={3} sm={5}>
                <ImageWithAnnotation imgSrc={imgSrc} annotation={annotation} noShadow={noShadow} />
            </Grid>
        </Grid>
    </FadeSlide>
)

const InfoContentCard = ({ title, content }: { title: string, content: string }) => (
    <ThemedPaper variant="outlined"
        sx={{ height: "100%" }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{content}</Typography>
    </ThemedPaper>
);


export default AnisePatient;
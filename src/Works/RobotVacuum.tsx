import * as React from "react";
import { Unstable_Grid2 as Grid, Box, Typography, createTheme, useTheme, ThemeProvider, Stack } from "@mui/material";
import { common } from '@mui/material/colors'

import ProjectHeader from "./Components/ProjectHeader.tsx";
import Section, { Spacer } from "../Components/Section.tsx";
import FadeSlide from "../Components/FadeSlideEffect.tsx";
import ImageWithAnnotation from "./Components/ImageWithAnnotation.tsx";
import ThemedPaper from "../Components/ThemedPaper.tsx";
import { Catagorize } from "../Components/Catagory.tsx";
import { SuccessTypography, WarningTypography } from "./Components/Typography.tsx";

const ImageFullPath = (p: string) => `/Works/RobotVacuum/${p}`;

function RobotVacuum() {
    const globalTheme = useTheme();
    const localTheme = React.useMemo(() => createTheme(globalTheme,
        {
            palette: {
                secondary: {
                    main: "#FFF9EB",
                    light: "#FFF9EB",
                    dark: "#FFF9EB",
                    contrastText: common.black,
                },
                success: {
                    main: "#8493B3",
                    light: "#8493B3",
                    dark: "#8493B3",
                    contrastText: common.black,
                },
            }
        }
    ), [globalTheme]);

    return (
        <ThemeProvider theme={localTheme}>
            <ProjectHeader
                name={"Robot Vacuum Ethnographic Research"}
                desc={"Uncovering US Household Cleaning Needs for Asian Tech Giant"}
                chips={["Ethnographic Research", "In-home Visit", "Concept Testing", "Recruitment"]}
                imgSrc={ImageFullPath("Intro.png")} />
            <Catagorize id="overview" catagoryName="Overview"><Overview /></Catagorize>
            <Catagorize id="goals" catagoryName="Goals"><Goals /></Catagorize>
            <Catagorize id="team" catagoryName="Team"><Team /></Catagorize>
            <Catagorize id="methodology" catagoryName="Methodology"><Methodology /></Catagorize>
            <Catagorize id="recruitment" catagoryName="Recruitment"><Recruitment /></Catagorize>
            <Catagorize id="one-week-product-trial" catagoryName="One-Week Product Trial"><OneWeekProductTrial /></Catagorize>
            <Catagorize id="inhome-visit-interviews" catagoryName="In-Home Visit Interviews"><InHomeVisitInterviews /></Catagorize>
            <Catagorize id="insights-and-outcomes" catagoryName="Insights & Outcomes"><InsightsAndOutcomes /></Catagorize>
            <Catagorize id="final-thoughts" catagoryName="Final Thoughts"><FinalThoughts /></Catagorize>


        </ThemeProvider>
    )
}

const Overview = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Overview(props, ref) {
        return (<Section {...props} ref={ref}>
            <Spacer />

            <FadeSlide>
                <Box>
                    <Typography variant="h5">Overview</Typography>
                    <Typography variant="body1">
                        This UX research project focused on helping one of Asia's largest household appliance companies understand the unmet cleaning needs of American families as they expand their robot vacuum offerings in the US market.
                        <br /><br />
                        We conducted a one-week product trial followed by in-home interviews with 15 diverse participants. The research revealed significant differences in US households' cleaning habits, challenges, and perceptions of cleanliness compared to the client's initial assumptions. These insights enabled the client to refine their products and marketing strategies to better align with the needs of US consumers.                        <br /><br />
                    </Typography>
                    <WarningTypography variant="body1">
                        * Due to NDA, I cannot share the client's company name or specific details from the study. If you'd like to learn more about my experience, please feel free to contact me.
                    </WarningTypography>
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2}>
                    <Grid xs={1}>
                        <Typography variant="h5">Duration</Typography>
                        <Typography variant="body1">
                            2 months (2024)
                            <br /><br />
                        </Typography>
                        <Typography variant="h5">Team</Typography>
                        <Typography variant="body1">
                            3 UX Researchers <br />
                            2 Representatives from the client's product team <br />
                            <br /><br />
                        </Typography>
                    </Grid>

                    <Grid xs={1}>
                        <Typography variant="h5">My Contribution</Typography>
                        <Typography variant="body1" component="span">
                            <ul>
                                <li>Assisted in designing research protocols and participant screener. </li>
                                <li>Independently recruited 15 participants from 500+ candidates. </li>
                                <li>Coordinated product trials and in-home interviews. </li>
                                <li>Moderated interviews and collected in-field data. </li>
                                <li>Synthesized and reported key insights for the client. </li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>);
    }
);


const Goals = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Goals(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid xs={1}>
                        <Typography variant="h3">Goals</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Typography variant="body1">
                            Our client, one of the largest household appliance companies in Asia, aimed to expand its presence in the US market. After launching several robot vacuum models in the US, they sought to uncover unmet floor-cleaning needs of American households to refine and expand their product offerings.
                            <br /><br />
                            The study had two primary objectives:
                        </Typography>
                        <br /><br />
                        <ThemedPaper variant="outlined">
                            <Typography variant="h4">🧹 Identify the unmet cleaning needs of American families.</Typography>
                        </ThemedPaper>
                        <br />
                        <ThemedPaper variant="outlined">
                            <Typography variant="h4">🤖 Evaluate how our client's product (robot vacuum) performs in real homes.</Typography>
                        </ThemedPaper>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >);
    }
);

const Team = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Team(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid xs={1}>
                        <Typography variant="h3">Team</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Typography variant="body1">
                            This research was conducted by a team of three Mandarin-speaking UX researchers based in the US. Our collaborative process involved close communication with the client's product team to align on objectives, finalize research methodologies, and manage the project budget dynamically.
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >);
    }
);

const Methodology = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Methodology(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid xs={1}>
                        <Typography variant="h3">Methodology</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Typography variant="body1">
                            We conducted a one-week product trial followed by a 1.5-hour in-home interview. This approach allowed us to capture rich, contextual insights by engaging participants in their own living spaces. Spanning 2 cities, we interviewed 15 participants, employing in-depth conversation with contextual inquiries and observations.
                        </Typography>
                    </Grid>
                    <Grid xs={1} />
                    <Grid xs={1}>
                        <ThemedPaper variant="outlined" sx={{ height: "100%" }}>
                            <SuccessTypography variant="h5">01</SuccessTypography>
                            <Typography variant="h5">One-week Unmorderated Product Trial</Typography>
                        </ThemedPaper>
                    </Grid>
                    <Grid xs={1}>
                        <ThemedPaper variant="outlined" sx={{ height: "100%" }}>
                            <SuccessTypography variant="h5">02</SuccessTypography>
                            <Typography variant="h5">1.5-hour In-home Interview</Typography>
                        </ThemedPaper>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >);
    }
);

const Recruitment = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recruitment(props, ref) {
        return (<Section {...props} ref={ref} >
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid xs={1}>
                        <Typography variant="h3">Recruitment</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Typography variant="body1">
                            I independently handled the recruitment process, recruited 15 participants by screening over 500 candidates and conducting over 50 phone interviews. Participants were sourced from four vendor platforms: User Interviews, Respondent, Reddit, and our internal company panel.
                        </Typography>
                        <br />
                        <Stack direction={"row"} alignItems="center" useFlexGap={true} spacing={2}>
                            <Box component='img' src={ImageFullPath("RecruitmentToolUserinterviews.png")} />
                            <Box component='img' src={ImageFullPath("RecruitmentToolRespondent.png")} />
                            <Box component='img' src={ImageFullPath("RecruitmentToolReddit.png")} />
                        </Stack>
                        <br />
                        <Typography variant="body1">
                            The selection criteria included various demographic and household factors, such as gender, age, family structure, home type, income, and existing cleaning habits. I ensured participants had the necessary articulation skills for ethnographic research and verified their authenticity by collecting photos of their homes and cleaning tools.
                            <br /><br />
                            We ultimately assembled a diverse cohort representing a broad range of life stages, family structures, housing types, and cleaning habits, and the brands of robot vacuums they owned.
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <ImageWithAnnotation imgSrc={ImageFullPath("RecruitmentSheet.png")} annotation="Recruitment Quota" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >);
    }
);


const OneWeekProductTrial = React.forwardRef<HTMLDivElement, { id?: string }>(
    function OneWeekProductTrial(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid xs={1}>
                        <Typography variant="h3">One-week Product Trial</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Typography variant="body1">
                            Each participant received a test unit of the robot vacuum and was asked to use it for at least one week before the in-home interview. During this phase, we checked in to confirm product usage and encouraged participants to share photos and videos to preview their experiences.
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("ProductTrial.png")} annotation="Check-in Photos during Product Trial" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >);
    }
);

const InHomeVisitInterviews = React.forwardRef<HTMLDivElement, { id?: string }>(
    function InHomeVisitInterviews(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid xs={1}>
                        <Typography variant="h3">In-home Visit Interviews</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Typography component="span" variant="body1">
                            Over the course of 10 days, we conducted in-home interviews with all 12 participants. Our sessions began by discussing participants' backgrounds and gaining an understanding of their home environments, focusing on floor types, rugs, and specific cleaning challenges.
                            <br /><br />
                            Key interview questions included but not limited:
                            <ul>
                                <li>What does your usual cleaning workflow look like before using our robot vacuum? Can you give us a demo?</li>
                                <li>What factors influence your decision when purchasing cleaning tools?</li>
                                <li>How do you define "clean" vs. "dirty," and when do you feel the cleaning is complete?</li>
                                <li>How has your experience with our product been so far?</li>
                            </ul>
                            <br />
                            In the second part of the session, we presented multiple product concepts and gathered feedback on features, pricing expectations, and whether certain functionalities should be included in basic or premium models.
                            <br /><br />
                            Throughout the interviews, I collected in-field data, including measurements of spaces the robot struggled to clean, photos of floor types, and home layouts. These insights were especially valuable for the client, as US homes tend to differ from those in Asia, providing a clear understanding of product adjustments needed for the US market.
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Interview1.png")} annotation="In-home interview Sessions" />
                    </Grid>
                    <Grid xs={3}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Interview2.png")} annotation="In-field Data - Measurement" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >);
    }
);


const InsightsAndOutcomes = React.forwardRef<HTMLDivElement, { id?: string }>(
    function InsightsAndOutcomes(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid xs={1}>
                        <Typography variant="h3">Insights & Outcomes</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Typography component="span" variant="body1">
                            Our research uncovered following main areas of findings:
                            <br /><br />
                            <ul>
                                <li>
                                    <b>Differences in Cleaning Needs</b> <br />
                                    Our research revealed significant differences between US families' cleaning needs, use cases, challenges, habits, and even perceptions of "cleanliness" compared to the client's initial assumptions. This insight highlighted the need for a more localized approach to product design.
                                </li>
                                <li>
                                    <b>Purchase Considerations</b> <br />
                                    We gained a deep understanding of the factors influencing purchasing decisions, including user expectations and the product's value proposition. These insights will guide our client's future marketing and sales strategies.
                                </li>
                                <li>
                                    <b>New Concept Feedback</b><br />
                                    Participants shared feedback and ratings on various new product concepts, offering valuable input that will inform the design of the client's next-generation robot vacuum products.
                                </li>
                            </ul>

                            <br />
                            While I am unable to disclose specific insights due to NDA, the success of this project led to our team being commissioned to conduct similar ethnographic research in Germany and Turkey for the same product.
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >);
    }
);


const FinalThoughts = React.forwardRef<HTMLDivElement, { id?: string }>(
    function FinalThoughts(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid xs={1}>
                        <Typography variant="h3">Final Thoughts</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Typography variant="body1">
                            This research extended beyond just cleaning habits—it offered a window into the lifestyles of diverse American households. The insights gathered have the potential to inspire not only product innovation but also refine the personas the client uses to understand their US target market.
                        </Typography>
                        <br /><br />
                        <Typography variant="h4">
                            🤝  If we could do it again...
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            Given the budget constraints, we opted for unmoderated product testing. In hindsight, I would redesign the protocol to include a week-long diary study prior to the in-home interviews. This would capture a more detailed account of participants' daily cleaning activities, helping us craft interview guidelines tailored to each participant's specific context.
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >);
    }
);

export default RobotVacuum;
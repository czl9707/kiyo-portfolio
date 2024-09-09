import * as React from "react";
import { Unstable_Grid2 as Grid, Box, Typography, createTheme, useTheme, ThemeProvider, Link, Stack } from "@mui/material";
import { common } from '@mui/material/colors'

import ProjectHeader from "./Components/ProjectHeader.tsx";
import Section, { Spacer } from "../Components/Section.tsx";
import { SuccessTypography, PrimaryTypography } from "./Components/Typography.tsx";
import FadeSlide from "../Components/FadeSlideEffect.tsx";
import ImageWithAnnotation from "./Components/ImageWithAnnotation.tsx";
import ThemedPaper from "../Components/ThemedPaper.tsx";
import { Catagorize, CatagorizeGroup } from "../Components/Catagory.tsx";


const ImageFullPath = (p: string) => `/Works/MontanaHistoricalSociety/${p}`;

const PRESENTATIONLINK = "https://www.figma.com/proto/RM4q8G8HKw7fwTLDHo1wnj/Montana-Historic-Museum?type=design&node-id=84-1587&t=rilYH0JpqNKBWdW0-0&scaling=contain&page-id=9%3A4045"


function MontanaHistoricalSociety() {
    const globalTheme = useTheme();
    const localTheme = React.useMemo(() => createTheme(globalTheme,
        {
            palette: {
                primary: {
                    main: "#455A64",
                    light: "#455A64",
                    dark: "#455A64",
                    contrastText: common.white,
                },
                secondary: {
                    main: "#F7F7F1",
                    light: "#F7F7F1",
                    dark: "#F7F7F1",
                    contrastText: common.black,
                },
                success: {
                    main: "#FFF4DA",
                    light: "#FFF4DA",
                    dark: "#FFF4DA",
                    contrastText: common.black,
                }
            }
        }
    ), [globalTheme]);

    return (
        <ThemeProvider theme={localTheme}>
            <ProjectHeader
                title={"Evaluating Web analytics and SEO to refine Montana Historical Society's Digital Strategy"}
                chips={["Web Analytics", "SEO Audit", "Data Visualization",]} />

            <Catagorize id="overview" catagoryName="Overview"><Overview /></Catagorize>
            <Catagorize id="organization-goal" catagoryName="Organization Goal"><Intro /></Catagorize>
            <Catagorize id="research-question" catagoryName="Research Question"><ResearchQuestion /></Catagorize>
            <Catagorize id="research-methods" catagoryName="Research Methods"><Methods /></Catagorize>


            <CatagorizeGroup catagoryName="Findings & Recommendations">
                <Catagorize id="findings-and-recommendations-overview" catagoryName="Overview"><FindingsAndRecommendations /></Catagorize>
                <Catagorize id="findings-and-recommendations-dashboard" catagoryName="Dashboard"><Dashboard /></Catagorize>
                <Catagorize id="findings-and-recommendations-1" catagoryName="F&R 1">
                    <div>
                        <Findings1 />
                        <Recommendation1 />
                    </div>
                </Catagorize>
                <Catagorize id="findings-and-recommendations-2" catagoryName="F&R 2">
                    <div>
                        <Findings2 />
                        <Recommendation2 />
                    </div>
                </Catagorize>
                <Catagorize id="findings-and-recommendations-3" catagoryName="F&R 3">
                    <div>
                        <Findings3 />
                        <Recommendation3 />
                    </div>
                </Catagorize>
                <Catagorize id="findings-and-recommendations-4" catagoryName="F&R 4">
                    <div>
                        <Findings4 />
                        <Recommendation4 />
                    </div>
                </Catagorize>
            </CatagorizeGroup>

            <FinalThoughts />
            <Catagorize id="takeaways" catagoryName="Final Thoughts"><TakeAways /></Catagorize>

        </ThemeProvider>
    )
}


const Overview = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Overview(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid xs={1}>
                        <SuccessTypography variant="h5">Overview</SuccessTypography>
                        <Typography variant="h3">
                            Montana Historical Society
                        </Typography>
                        <Typography variant="body1">
                            The <Link variant="body1" color="inherit" href="https://mhs.mt.gov/" target="_blank">Montana Historical Society (MHS)</Link> is a state agency and nonprofit org dedicated to preserving and promoting the history of Montana State. While its core audience is local, MHS aims to boost traffic by expanding its audience beyond local visitors and tailoring content for a diverse audience, both in and outside Montana.
                            <br /><br />
                            Our team of four digital analysts evaluated the MHS's web analytics data to compare the behaviors of local and non-local audiences, and audited SEO performance to provide improvement suggestions. Furthermore, we developed a dashboard to visually represent the data for ongoing tracking purposes.
                        </Typography>
                    </Grid>

                    <Grid xs={1}>
                        <Box component="img" src={ImageFullPath('Intro.png')}
                            minHeight="100%" maxWidth="200%" sx={{ ml: 10 }} />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >)
    }
);


const Intro = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Intro(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid xs={1}>
                        <PrimaryTypography variant="h5">Duration</PrimaryTypography>
                        <Typography variant="body1">Nov 2023 - Dec 2023 (4 weeks)</Typography>
                        <br />
                        <PrimaryTypography variant="h5">Tool</PrimaryTypography>
                        <Typography variant="body1">Google Analytics, Google Looker Studio, Woorank, Screamingfrog, Google Lighthouse</Typography>
                    </Grid>

                    <Grid xs={1}>
                        <PrimaryTypography variant="h5">Team</PrimaryTypography>
                        <Typography variant="body1">4 digital analyst</Typography>
                        <br />
                        <PrimaryTypography variant="h5">My Contribution</PrimaryTypography>
                        <Typography variant="body1">
                            Drafted research plan; identified web analytics findings, <br />
                            assessed the SEO of the website, created dashboard, <br />
                            developed finding and recommendation. <br />
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Organizational Goal</PrimaryTypography>
                    <Typography variant="h3">
                        Increase traffic by reaching a broader, more diverse audience, both local and non-local.
                    </Typography>

                    <Grid container columns={2} alignItems="center">
                        <Grid xs={1}>
                            <Typography variant="body1">
                                The Montana Historical Society (MHS) operates as both a state agency and nonprofit organization, dedicated to preserving and promoting Montana's historical narrative.
                                <br /><br />
                                While its primary audience consists of local Montana visitors, MHS strives to expand its reach to include a more diverse audience, including those from outside the state. Furthermore, MHS seeks to understand audience preferences to customize its content for a wider reach.
                            </Typography>
                        </Grid>
                        <Grid xs={1}>
                            <ImageWithAnnotation imgSrc={ImageFullPath("OrganizationalGoal.png")} />
                        </Grid>
                    </Grid>
                </Box>
            </FadeSlide>
        </Section>)
    }
);


const researchQuestionContent = [
    {
        num: "01",
        text: "How do the behavior of local vs non-local audiences compare?",
    },
    {
        num: "02",
        text: "What types of content are audiences viewing?",
    },
    {
        num: "03",
        text: "How is the current SEO performing?",
    },
]

const ResearchQuestion = React.forwardRef<HTMLDivElement, { id?: string }>(
    function ResearchQuestion(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <Typography variant="h3">Research questions</Typography>
                    <Typography variant="body1">
                        We interviewed the stakeholders of MHS to discuss the project scope and objectives around their website. <br />
                        We used three research questions to drive our analysis:
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Grid container columns={3} alignItems="stretch" justifyContent="stretch">
                    {
                        researchQuestionContent.map((item, i) => (
                            <Grid sm={3} md={1} key={i}>
                                <ThemedPaper variant="outlined">
                                    <PrimaryTypography variant="h4">{item.num}</PrimaryTypography>
                                    <Typography variant="body1">{item.text}</Typography>
                                </ThemedPaper>
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const Methods = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Methods(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Methods</PrimaryTypography>
                    <Typography variant="h3">
                        We evaluated MHS website's performance with web analytics and SEO audit.
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid sm={2} md={1}>
                        <Typography variant="body1">
                            We analyzed the MHS's Google Analytics data on key metrics from <b>Sep 1st, 2023 (the starting time of their GA set-up) to present</b> for understanding how users are interacting with the web. <br />
                            Furthermore, we created segments for non-local users and <b>Montana local users</b> to compare their behaviors and preferences. <br />
                            <br />
                            The primary metrics includes: <br />
                            <ul>
                                <li><b>Sessions</b>: Avg. session duration, Pages / Session, Number of sessions</li>
                                <li><b>Traffic funnel</b>: Source, Medium</li>
                                <li><b>Users</b>: Region, New & Returning, Device category</li>
                                <li><b>Behaviors</b>: Bounce rate, Avg. time on page, Engagement rate, Pageviews, Page path</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1}>
                        <ImageWithAnnotation imgSrc={ImageFullPath("Method1.png")} annotation="New user source (data in MHS Google Analytics)" />
                    </Grid>

                    <Grid sm={2} md={1}>
                        <Typography variant="body1">
                            Since we realized the major traffic come from organic search, our team also conducted a <b>search engine optimization</b> audit to drive insights on making the site appealing to both users and search engines.
                            <br /><br />
                            {"The on-page SEO audit is a process of evaluating the website's current search engine performance by using a rubric to examine specific criteria that determines its passability."}
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1}>
                        <ImageWithAnnotation imgSrc={ImageFullPath("Method2.png")} annotation="MHS SEO audit" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);



const findingsAndRecommendationsContent = [
    {
        finding: "Non-local users favor mobile devices for accessing the web compared to local users.",
        recommendation: "Improve mobile responsiveness, prioritizing specific pages.",
    },
    {
        finding: "Local users prioritize education resources.",
        recommendation: "Increasing presence in education sector by optimizing page slugs.",
    },
    {
        finding: "Lack of meta description in critical pages resulted in low traffic.",
        recommendation: "Increasing presence in education sector.",
    },
    {
        finding: "Accessibility failed in image URLs.",
        recommendation: "Fill missing Alt text in image URLs with concise content under 100 characters.",
    },
];

const FindingsAndRecommendations = React.forwardRef<HTMLDivElement, { id?: string }>(
    function FindingsAndRecommendations(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <FadeSlide>
                <Box>
                    <Typography variant="h3">Findings & Recommendations</Typography>
                    <Typography variant="body1">
                        Overall, we found local and non-local users have different preference on contents and device categories: <br />
                        Local users predominantly used desktop devices during weekdays, while non-local users, who discovered the site mostly through organic search, showed a preference for mobile devices. <br />
                        Furthermore, our SEO research led us to believe that addressing some shortcomings such as inadequate meta descriptions and sitemap issues could help users discover MHS easier when searching for keywords.
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Grid container columns={2} alignItems="stretch" rowSpacing={3}>
                    <Grid xs={1}>
                        <Typography variant="h5">Findings</Typography>
                    </Grid>
                    <Grid xs={1}>
                        <SuccessTypography variant="h5">Recommendations</SuccessTypography>
                    </Grid>
                    {
                        findingsAndRecommendationsContent.map((item, i) => (
                            <React.Fragment key={i}>
                                <Grid xs={1}>
                                    <ThemedPaper sx={{ height: "100%" }}>
                                        <Typography variant="body1">
                                            {item.finding}
                                        </Typography>
                                    </ThemedPaper>
                                </Grid>
                                <Grid xs={1}>
                                    <ThemedPaper color="success" sx={{ height: "100%" }}>
                                        <Typography variant="body1">
                                            {item.recommendation}
                                        </Typography>
                                    </ThemedPaper>
                                </Grid>
                            </React.Fragment>
                        ))
                    }
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const Dashboard = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Dashboard(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <FadeSlide>
                <Box>
                    <Typography variant="h3">Dashboard</Typography>
                    <Typography variant="body1">
                        We developed a dashboard in Looker Studio to visually represent the data for ongoing tracking purposes.
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Dashboard.png")} />
            </FadeSlide>
        </Section>)
    }
);


const Findings1 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Findings1(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Findings 1</PrimaryTypography>
                    <Typography variant="h3">
                        Non-local users favor mobile devices for accessing the web compared to Montana locals.
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />

            <FadeSlide>
                <Grid container columns={3} alignItems="center">
                    <Grid sm={3} md={2}>
                        <Typography variant="body1">
                            The MHS website attracts a majority of desktop users (72.7%), with local users showing a strong preference for desktops (89.7%). In contrast, <b>non-local users lean towards mobile devices (45.6%), almost evenly split with desktop usage (52.3%)</b>. (fig 1.1-1.3)
                            <br /><br />
                            Even though mobile devices are popular among non-local users, desktop users tend to spend more time on the website. However, <b>mobile users experience a 8.43% higher bounce rate(41.41%) than desktop users (32.98%)</b>, possibly indicating a suboptimal mobile experience. (fig. 1.4)
                        </Typography>
                    </Grid>
                    <Grid sm={3} md={1}>
                        <Grid container columns={2} spacing={3}>
                            <Grid sm={2} md={1}>
                                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings1_Graph1.png")} annotation="Fig.1.1 Device category All users" />
                            </Grid>
                            <Grid sm={2} md={1}>
                                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings1_Graph2.png")} annotation="Fig.1.2 Device category Montana local users" />
                            </Grid>
                            <Grid sm={2} md={1}>
                                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings1_Graph3.png")} annotation="Fig.1.3 Device category Non-local users" />
                            </Grid>
                            <Grid sm={2} md={1}>
                                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings1_Legend.png")} sx={{ width: "60%", ml: "20%" }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings1_Breakdown.png")} annotation="Fig.1.4 Users Device Usage Breakdown" />
            </FadeSlide>
        </Section>)
    }
);



const Recommendation1 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recommendation1(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Recommandation 1</PrimaryTypography>
                    <Typography variant="h3">
                        Improve mobile responsiveness, prioritizing specific pages.
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        The current mobile web navigation is challenging: the hamburger menu is positioned at the bottom left, separate from the main CTA buttons. This non-standard alignment may make it difficult for users to navigate through pages.
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid xs={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Recomandation1_1.png")} />
                    </Grid>
                    <Grid xs={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Recomandation1_2.png")} />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);



const Findings2 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Findings2(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Findings 2</PrimaryTypography>
                    <Typography variant="h3">
                        Local users prioritize education resources.
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="stretch">
                    <Grid sm={2} md={1}>
                        <Stack height="100%" justifyContent="space-between" >
                            <Typography variant="body1">
                                Compared to non-local users, local users frequently use the website for education-related content. (Fig.2.2) Also, education-related pages show a higher engagement rate (80%+) than other pages.
                                <br /><br />
                                A major source of traffic for mths.mt.gov is classroom.google.com, which refers 86% of users to “Stories of the Land” (fig. 2.1)
                            </Typography>
                            <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings2_2.png")} annotation="Fig. 2.2: Breakdown of traffic by source" />
                        </Stack>
                    </Grid>
                    <Grid sm={2} md={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings2_1.png")} annotation="Fig. 2.1: Breakdown of traffic by source" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const Recommendation2 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recommendation2(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Recommandation 2</PrimaryTypography>
                    <Typography variant="h3">
                        Increase presence in education sector by optimizing page slugs.
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="stretch">
                    <Grid xs={1}>
                        <Typography variant="body1">
                            Optimize web page discoverability by ensuring all page slugs are relevant, and sitemap XML is structured properly. For example: the page path for Stories of the Land page is currently set to index4 and Museum Tours is under education.
                            <br /><br />
                            Additionally, we recommend seeking partnership with Education Officials, such as the State Superintendent, to make Stories of the Land the predominant free education resource for Montana-based schools.
                        </Typography>
                    </Grid>
                    <Grid xs={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Recomandation2_1.png")} />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);



const Findings3 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Findings3(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Findings 3</PrimaryTypography>
                    <Typography variant="h3">
                        Lack of meta description in critical pages led to a lower traffic reach.
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid xs={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings3_1.png")} annotation="Fig.3.1  Top Page views: Local users" />
                    </Grid>
                    <Grid xs={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings3_2.png")} annotation="Fig.3.2  Top Page views: Local users" />
                    </Grid>
                    <Grid xs={1}>
                        <Typography variant="body1">
                            "Montana The Magazine of Western History" ranks among the top three landing pages for non-local users in contrast to local users. (Fig.3.1-3.2)
                            <br /><br />
                            However, this page lacks a meta description, relegating it to a lower information level compared to an unrelated page that does have a meta description. (Fig. 3.3)
                            <br /><br />
                            Beyond the "Montana The Magazine of Western History" page, a total of 70 sites still lack meta descriptions.
                        </Typography>
                    </Grid>
                    <Grid xs={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings3_3.png")} annotation="Fig.3.3  Comparison of Magazine page (without meta description) and a unrelated page with meta descriptions." />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const Recommendation3 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recommendation3(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Recommandation 3</PrimaryTypography>
                    <Typography variant="h3">
                        Ensure important pages have meta descriptions
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid xs={1}>
                        <Typography variant="body1">
                            Ensure important pages with high reach have meta descriptions, prioritizing the "Montana The Magazine of Western History"  page.                        </Typography>
                    </Grid>
                    <Grid xs={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Recomandation3_1.png")} />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const Findings4 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Findings4(props, ref) {
        return (<Section {...props} ref={ref} >
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Findings 4</PrimaryTypography>
                    <Typography variant="h3">
                        Accessibility failed in image URLs
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid xs={1}>
                        <Typography variant="body1" component="span">
                            The development and enhancement of image accessibility including the necessary improvements for the required URLs are currently not satisfactory:
                            <ul>
                                <li>37 image URLs are missing Alt text</li>
                                <li>32 image URLs are missing size attribute</li>
                                <li>2 image URLs Alt text are over 100 characters</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid xs={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Findings4_1.png")} annotation="Fig.4 SEO analysis by Screaming Frog under Image Sector" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const Recommendation4 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recommendation4(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Recommandation 4</PrimaryTypography>
                    <Typography variant="h3">
                        Fill missing Alt text in image URLs with concise content under 100 characters.
                    </Typography>
                </Box>
            </FadeSlide>
            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid xs={1}>
                        <Typography variant="body1">
                            Ensuring each image URLs contains useful alt text and keep the length of alt text below 100 characters to enhance the overall quality and efficiency of online experiences for users of screen readers, and other special accommodations.
                        </Typography>
                    </Grid>
                    <Grid xs={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Recomandation4_1.png")} />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const FinalThoughts = React.forwardRef<HTMLDivElement, { id?: string }>(
    function FinalThoughts(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <Typography variant="h3" textAlign="center">Final Thoughts</Typography>
        </Section>)
    }
);


const TakeAways = React.forwardRef<HTMLDivElement, { id?: string }>(
    function TakeAways(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid sm={3} md={1}>
                        <Typography variant="h3">Takeaways</Typography>
                    </Grid>

                    <Grid sm={3} md={2}>
                        <Typography variant="body1">
                            My team and I successfully <Link color="primary" href={PRESENTATIONLINK} target="_blank"><b>presented</b></Link> our research report to the client, receiving positive feedback on our work. Additionally, we supplied them with a SEO appendix and a dashboard for future data tracking.
                            <br /><br />
                            Personally, delving into the integration of digital analytics into website audits and user behavior research, complete with quantitative data, proved fascinating. Prior to this, my experience was mainly in collaboration with data analysts. Analyzing the analytics data independently for the first time was truly inspiring, offering me a better understanding of how web analytics metrics and KPIs align with organizational goals.
                            <br /><br />
                            Our project was constrained by incomplete web analytics settings for user demographics. If I were to continue this project, I would prioritize optimizing Google Analytics settings and exploring user behaviors through an age dimension. This approach would provide deeper insights into how we can extend our audience reach to a younger demographic.
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);

export default MontanaHistoricalSociety;
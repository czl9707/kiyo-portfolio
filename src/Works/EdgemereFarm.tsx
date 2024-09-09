import { Box, Button, createTheme, Unstable_Grid2 as Grid, Link, Stack, ThemeProvider, Typography, TypographyProps, useTheme } from "@mui/material";
import { common } from "@mui/material/colors";
import * as React from "react";
import ProjectHeader from "./Components/ProjectHeader";
import Section, { Spacer } from "../Components/Section";
import FadeSlide from "../Components/FadeSlideEffect";
import { PrimaryTypography } from "./Components/Typography";
import ThemedPaper from "../Components/ThemedPaper";
import ImageWithAnnotation from "./Components/ImageWithAnnotation";
import { handleNavigation } from "../Components/Utils";
import { Catagorize, CatagorizeGroup } from "../Components/Catagory";

const ImageFullPath = (p: string) => `/Works/EdgemereFarm/${p}`;


const PROTOTYPEEMBEDLINK = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fg308nEAbRheb5UjOXGgQmP%2FEdgemere-Farm-Web-_-Kiyo%3Fnode-id%3D4771-2494%26t%3D2pAgkmhVwW2wISCT-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D4701%253A9449%26starting-point-node-id%3D4771%253A2494";
const DOCLINK = "https://www.figma.com/proto/3KFIpSFBiLxXdR68qbeQEv/Edgemere-Farm-Group-Project?node-id=951-5084&t=Dh75iNsD1MSixVtd-1&scaling=contain&content-scaling=fixed&page-id=264%3A2831&starting-point-node-id=951%3A5084";
const PROTOTYPELINK = "https://www.figma.com/proto/g308nEAbRheb5UjOXGgQmP/Edgemere-Farm-Web-_-Kiyo?node-id=4771-2494&t=qJvbhELHzVjt3EaH-1&scaling=min-zoom&content-scaling=fixed&page-id=4701%3A9449&starting-point-node-id=4771%3A2494";
const TESTINGDOC = "https://drive.google.com/file/d/1bVvT8-b3rCHp-qTjFjMQrF6FzYfqphxl/view?usp=drive_link";

function EdgemereFarm() {
    const globalTheme = useTheme();
    const localTheme = React.useMemo(() => createTheme(globalTheme,
        {
            palette: {
                primary: {
                    main: "#185C45",
                    light: "#185C45",
                    dark: "#185C45",
                    contrastText: common.white,
                },
                secondary: {
                    main: "#EFF5EF",
                    light: "#EFF5EF",
                    dark: "#EFF5EF",
                    contrastText: common.black,
                },
                success: {
                    main: "#FCECC3",
                    light: "#FCECC3",
                    dark: "#FCECC3",
                    contrastText: common.black,
                },
            }
        }
    ), [globalTheme]);


    return (
        <ThemeProvider theme={localTheme}>
            <ProjectHeader
                title={"Boost Edgemere Farm's community engagment in the digital landscape"}
                chips={["0 to 1", "Website Design", "Information Architecture", "Visual Design"]}
                imgSrc={ImageFullPath("Intro.png")} />

            <Catagorize id="overview" catagoryName="Overview"><Overview /></Catagorize>
            <Catagorize id="problem" catagoryName="Problem"><ProblemStatement /></Catagorize>
            <Catagorize id="final-delivery" catagoryName="Final Delivery"><FinalDelivery /></Catagorize>

            <DiveDeeper />

            <CatagorizeGroup catagoryName="Research">
                <Catagorize id="research-overview" catagoryName="Research Overview"><ResearchOverview /></Catagorize>
                <Catagorize id="target-audience" catagoryName="Target Audience"><EcosystemMapAndTargetAudience /></Catagorize>
                <Catagorize id="insights-design-strategy" catagoryName="Insights & Design Strategy"><KeyInsightsAndDesignStrategy /></Catagorize>
                <Catagorize id="user-journey" catagoryName="User Journey"><UserJourney /></Catagorize>
            </CatagorizeGroup>

            <Catagorize id="design-sketch-testing" catagoryName="Design Sketch & Testing"><DesignSketchAndUserTesting /></Catagorize>
            <Catagorize id="high-fidelity-prototypes" catagoryName="High-fidelity Prototypes"><FinalDesign /></Catagorize>

            <FinalThoughts />

            <Catagorize id="final-reflections" catagoryName="Final Reflections"><Reflections /></Catagorize>
        </ThemeProvider>

    );
}

const overviewGoals = [
    {
        title: "Tell Edgemere Farm's Story",
        text: "Edgemere Farm seeks to showcase their mission, history, team, and achievements."
    },
    {
        title: "Educate Users",
        text: "EF seeks to improve people's awareness about food justice and sustainable farming."
    },
    {
        title: "Encourage Participaton",
        text: "EF prioritizes community participation and hope to get people ivolved."
    },
    {
        title: "Facilitate Support",
        text: "As a zero-profit org, EF relies on the assistance of volunteers, donations, and collaborative partnerships."
    }
]

const Overview = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Overview(props, ref) {
        return (<Section {...props} ref={ref}>
            <Spacer />
            <FadeSlide>
                <Grid container columns={2}>
                    <Grid xs={1}>
                        <PrimaryTypography variant="h5">Duration</PrimaryTypography>
                        <Typography variant="body1">
                            Sep 2023 - Dec 2023 (14 weeks)
                            <br /><br />
                        </Typography>
                        <PrimaryTypography variant="h5">Team</PrimaryTypography>
                        <Typography variant="body1">
                            4 UX designers
                        </Typography>
                    </Grid>

                    <Grid xs={1}>
                        <PrimaryTypography variant="h5">My Contribution</PrimaryTypography>
                        <Typography component="span" variant="body1">
                            As a UX Designer, I: <br />
                            <ul>
                                <li>Led the exploratory research (ecosystem map, social media audit, competitive analysis and user interview)</li>
                                <li>Proposed the design concept</li>
                                <li>Led the wireframe sketch and design iteration</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Overview</PrimaryTypography>
                    <Typography variant="h3">
                        Enhance the Edgemere local community by redesigning the browsing experience on the EF website.
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">About our client: Edgemere Farm</PrimaryTypography>
                    <Typography variant="body1">
                        Edgemere Farm is a volunteer-run, zero-profit urban farm in Rockaway, NY with a mission to provide produce, open space, and education to the historically low-income community.
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>


            <FadeSlide>
                <Grid container columns={2} justifyContent={"stretch"}>
                    <Grid md={1} sm={2}>
                        <PrimaryTypography variant="h5">Organizational Goal</PrimaryTypography>
                        <Typography variant="body1">
                            As we redesigned the website, we focused on these four organizational goals:
                        </Typography>
                    </Grid>
                    {
                        overviewGoals.map((item, i) => (
                            <Grid xs={1} key={i}>
                                <ThemedPaper color="secondary" sx={{ height: "100%" }}>
                                    <Typography variant="h5">{item.title}</Typography>
                                    <Typography variant="body1">{item.text}</Typography>
                                </ThemedPaper>
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid md={1} sm={2}>
                        <PrimaryTypography variant="h5">Why redesigning?</PrimaryTypography>
                        <Typography variant="body1">
                            The current website with unstructured information and absent navigation showed
                            <PrimaryTypography component="span" variant="body1"><b> a weak visual hierarchy and low readability</b></PrimaryTypography>
                            , making it difficulty for users to locate key information and get a quick understanding of contents at a glance.
                        </Typography>
                    </Grid>
                    <Grid md={1} sm={2}>
                        <ImageWithAnnotation imgSrc={ImageFullPath("CurrentWebsite.gif")} annotation="Current Website" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>);
    }
);


const ProblemStatement = React.forwardRef<HTMLDivElement, { id?: string }>(
    function ProblemStatement(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Problem Statement</PrimaryTypography>
                    <Typography variant="h3">
                        How might we redesign the website to present EF' story & impact, and motivate user engagement?
                    </Typography>
                </Box>
            </FadeSlide>
        </Section>);
    }
);


const FinalDelivery = React.forwardRef<HTMLDivElement, { id?: string }>(
    function FinalDelivery(props, ref) {
        const [iframeBoundingWidth, setWidth] = React.useState<number>(500);
        const iframeBoundingRef = React.useRef<HTMLDivElement | undefined>();

        React.useEffect(() => {
            if (!iframeBoundingRef.current) return;
            const resizeObserver = new ResizeObserver(() => {
                setWidth(iframeBoundingRef.current!.offsetWidth);
            });
            resizeObserver.observe(iframeBoundingRef.current);

            return function cleanup() {
                resizeObserver.disconnect();
            }
        }, [iframeBoundingRef])

        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={3}>
                    <Grid sm={3} md={1}>
                        <Typography variant="h3">Final Delivery</Typography>
                    </Grid>

                    <Grid sm={3} md={2}>
                        <Typography variant="body1">
                            By implementing a user-centric approach, my team successfully enhanced the website's usability, accessibility and aesthetics.
                            <br /><br />
                        </Typography>
                        <Typography variant="h5">Our final delivery included:</Typography>
                        <ul>
                            <Typography variant="body1">
                                <li>16 new-designed pages & clickable prototypes</li>
                                <li>Visual design guidelines and component library</li>
                                <li>Content strategy guidance</li>
                                <li>
                                    A full documentation of research with meta-data and insights
                                    <Link color="primary" href={DOCLINK} target="_blank">(Link)</Link>
                                </li>
                            </Typography>
                        </ul>
                    </Grid>
                </Grid>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Box position='relative'>
                    <Box component='img' src={ImageFullPath("FinalPrototypeScreen.png")} width="100%" />
                    <Box position="absolute" top="3%" left="11%" width="78%" height="85%"
                        zIndex={1} ref={iframeBoundingRef}>
                        <iframe src={PROTOTYPEEMBEDLINK} frameBorder={0}
                            style={{
                                width: 1400, height: 935,
                                transform: `scale(calc(${iframeBoundingWidth} / 1400))`,
                                transformOrigin: "left top"
                            }} />
                    </Box>
                </Box>
            </FadeSlide>
        </Section>);
    }
);


const DiveDeeper = React.forwardRef<HTMLDivElement, { id?: string }>(
    function DiveDeeper(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <Typography variant="body1" textAlign="center">Let's dive deeper :)</Typography>
        </Section>)
    }
);


const researchOverviewMetrics = [
    {
        number: 3,
        title: "Client Meetings",
        dives: [
            "2 client meetings",
            "1 in-person volunteering"
        ]
    },
    {
        number: 5,
        title: "Desktop Research",
        dives: [
            "Ecosystem Map",
            "Technical Analysis",
            "Social Media Audit",
            "Competitive Analysis",
            "Literature Review",
        ]
    },
    {
        number: 5,
        title: "User Interviews",
        dives: [
            "1 local restaurant owner",
            "2 long term volunteers",
            "1 co - founder",
            "1 local artist",
        ]
    },
    {
        number: 6,
        title: "Usability Testings",
        dives: [
            "2 internal stakeholders",
            "4 new users",
        ]
    }
]

const ResearchOverview = React.forwardRef<HTMLDivElement, { id?: string }>(
    function ResearchOverview(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Research Overview</PrimaryTypography>
                    <Typography variant="h3">A solid research foundation of our design.</Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={2} spacing={2}>
                    {
                        researchOverviewMetrics.map((item, i) => (
                            <Grid md={1} sm={2} key={i}>
                                <ThemedPaper color="secondary" sx={{ height: "100%" }}>
                                    <Typography variant="h2" textAlign="center">{item.number}</Typography>
                                    <Typography variant="h5" textAlign="center">{item.title}</Typography>
                                    <Typography variant="body1" textAlign="center">
                                        {
                                            item.dives.map(((t, j) => (
                                                <React.Fragment key={j}>{t}<br /></React.Fragment>
                                            )))
                                        }
                                    </Typography>
                                </ThemedPaper>
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>

            <FadeSlide>
                <Typography variant="body2">
                    <br />
                    *Find the full documentation of research process, meta-data and insights
                    <Link color="primary" href={DOCLINK} target="_blank"> here</Link>.
                </Typography>
            </FadeSlide>
        </Section>);
    }
);

const EcosystemMapAndTargetAudience = React.forwardRef<HTMLDivElement, { id?: string }>(
    function EcosystemMapAndTargetAudience(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Ecosystem Map & Target Audience</PrimaryTypography>
                    <Typography variant="h3">
                        Design for two user groups: <br />
                        local community members (primarily engagment) and new users (primarily browsing).
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid sm={2} md={1}>
                        <Typography variant="body1">
                            I created an ecosystem map to analyze the participants in both online and on-site interactions and their relationships with the farm. EF primarily caters to local residents, supplemented by a mix of distant visitors and individuals engaging with us online.
                            <br /><br />
                        </Typography>

                        <Typography variant="body1" component="span">
                            <b>
                                Target Audience Group:
                                <ul>
                                    <li>Remote users / Community newcomer (Primarily browsing)</li>
                                    <li>Local community members (Primarily engaging)</li>
                                </ul>

                            </b>
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("EcosystemMap.png")}
                            annotation="Ecosystem Map: How do stakeholders work together" />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>);
    }
);


const KeyInsightsAndDesignStrategy = React.forwardRef<HTMLDivElement, { id?: string }>(
    function KeyInsightsAndDesignStrategy(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Key Insights & Design Strategy</PrimaryTypography>
                    <Typography variant="h3">What motivates users to engage actively?</Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={3} alignItems="center">
                    <Grid sm={3} md={2}>
                        <Typography variant="body1">
                            We conducted 5 Zoom interviews with various engagers at the farm contributing as volunteers, customers or business partners. These discussions provided insights into local residents' motivation to get engaged. Corresponding to these two motivations, we broke down our design goals into two design strategies.
                        </Typography>
                    </Grid>
                    <Grid sm={3} md={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("UserInterview.png")}
                            annotation="User interview with a volunteer" />
                    </Grid>
                </Grid>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <Grid container columns={3} alignItems="stretch" rowSpacing={3}>
                    <Grid sm={3} md={2}>
                        <ThemedPaper color="secondary" sx={{ height: "100%" }}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Box component="img" src={ImageFullPath("Stars.png")} alt="Stars.png" width="7em" />
                                <Typography variant="h4">
                                    Understanding and valuing EF's mission and story inspires local residents to advocate for and support Edgemere Farm.
                                </Typography>
                            </Stack>
                            <br />
                            <Quote>
                                "I understand how hard farming is. So I really admire what they're doing. I would definitely want to support them as much as I can. "
                                <br /><br />
                                - Matt, Local restaurant owner
                            </Quote>
                        </ThemedPaper>
                    </Grid>
                    <Grid sm={3} md={1}>
                        <ThemedPaper color="success" sx={{ height: "100%" }}>
                            <Typography variant="h4">
                                Design Strategy 1
                            </Typography>
                            <Typography variant="body1">
                                <br />
                                Crafting a delightful browsing experience for easy comprehension of EF's mission, story and impact.
                            </Typography>
                        </ThemedPaper>
                    </Grid>
                    <Grid sm={3} md={2}>
                        <ThemedPaper color="secondary" sx={{ height: "100%" }}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Box component="img" src={ImageFullPath("Friends.png")} alt="Friends.png" width="7em" />
                                <Typography variant="h4">
                                    Connecting with a diverse and inclusive community inspires active engagement among local residents.
                                </Typography>
                            </Stack>
                            <br />
                            <Quote>
                                "What I enjoy most is to interact with folks, neighbors and kids. EF is a space getting people together in a nice environment."
                                <br /><br />
                                - Jeff, Long-term volunteer
                            </Quote>
                        </ThemedPaper>
                    </Grid>
                    <Grid sm={3} md={1}>
                        <ThemedPaper color="success" sx={{ height: "100%" }}>
                            <Typography variant="h4">
                                Design Strategy 2
                            </Typography>
                            <Typography variant="body1">
                                <br />
                                Building an engaging platform that strengthens community bonding - to facilitate participation and support.
                            </Typography>
                        </ThemedPaper>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>);
    }
);


const UserJourney = React.forwardRef<HTMLDivElement, { id?: string }>(
    function UserJourney(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">User Journey</PrimaryTypography>
                    <Typography variant="h3">From a newcomer to active supporter</Typography>
                    <br />
                    <Typography variant="body1">
                        I structured the information architecture based on insights we gained from the research.
                    </Typography>
                </Box>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("FromANewcomerToActiveSupporter_1.png")} />
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2} columnSpacing={12}
                    justifyContent="center" alignItems="center">
                    <Grid xs={2}>
                        <Typography variant="body1">
                            The information spectrum reflects how we've organized content—from informative elements like EF's mission, story, and daily services to engaging aspects that encourage users to become part of the community.
                            <br /><br />
                            Newcomers initially prioritize information gathering. As they familiarize themselves with EF, their focus shifts toward active participation in daily activities. Increased engagement deepens their understanding of EF's efforts and strengthens their connections with the community, motivating them to become more involved and supportive.
                        </Typography>
                    </Grid>
                    <Grid sm={2} md={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("FromANewcomerToActiveSupporter_2.png")} />
                    </Grid>
                    <Grid sm={2} md={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath("FromANewcomerToActiveSupporter_3.png")} />
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>);
    }
);

const DesignSketchAndUserTesting = React.forwardRef<HTMLDivElement, { id?: string }>(
    function DesignSketchAndUserTesting(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={3} alignItems="center">
                    <Grid sm={3} md={1}>
                        <Typography variant="h3">Design Sketch & User Testing</Typography>
                    </Grid>
                    <Grid sm={3} md={2}>
                        <Typography variant="body1">
                            My team and I developed 16 new pages following our newly proposed information architecture.
                            <br />
                            We carried out 7 usability tests involving 5 new users and 2 internal stakeholders to gather insights for design iteration. We recruited participants aged 25-70 to ensure a diverse range of perspectives.
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("DesignSketchUserTesting.png")}
                    annotation={
                        <>
                            Low-fi Wireframs & Feedback from Usability Testing <br />
                            <Link color="primary" href={TESTINGDOC} target="_blank"><b>(View Details)</b></Link>
                        </>
                    } />
            </FadeSlide>
        </Section>);
    }
);


const finalDesignContent = [
    {
        imgSrc: "HomepagePage.png",
        title: "Homepage",
        text: "Homepage provides new users with the first impression and offering community members easy access to get involved into multiple actions."
    },
    {
        imgSrc: "OurMissionPage.png",
        title: "Our Mission",
        text: "Our Mission page offers users an in-depth exploration of Edgemere Farm's story and philosophy, designed to both enlighten and inspire."
    },
    {
        imgSrc: "VolunteerPage.png",
        title: "Volunteer",
        text: "Volunteer page serves as an inspiring platform to motivate user engagement in this volunteer-run farm."
    },
]

const FinalDesign = React.forwardRef<HTMLDivElement, { id?: string }>(
    function FinalDesign(props, ref) {
        const PrototypleButton = (() =>
            <Button onClick={handleNavigation(PROTOTYPELINK, true)}
                color="primary" variant="contained" size="large">
                View Clickable Prototypes
            </Button>
        );

        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Grid container columns={3} >
                    <Grid sm={3} md={1}>
                        <Typography variant="h3">Hi-fi Design</Typography>
                        <PrototypleButton />
                    </Grid>
                    <Grid sm={3} md={2}>
                        <Typography component="span" variant="body1">
                            We iterated the wireframes into hi-fi prototypes corresponding to the insights we gained from the user testing. Feel free to explore the clickable prototypes to see the full scope of our design work :)
                            <br /><br />
                            <b>
                                Below are 3 representative pages in a typical user journey:
                                <ol>
                                    <li>Homepage</li>
                                    <li>Our Mission</li>
                                    <li>Volunteer</li>
                                </ol>
                            </b>
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>

            {
                finalDesignContent.map((item, i) =>
                    <React.Fragment key={i}>
                        <Spacer />
                        <FadeSlide>
                            <ThemedPaper>
                                <PrimaryTypography variant="h3">{item.title}</PrimaryTypography>
                                <Typography variant="body1">{item.text}</Typography>
                            </ThemedPaper>
                        </FadeSlide>

                        <FadeSlide>
                            <Box component="img" src={ImageFullPath(item.imgSrc)} width="100%" />
                        </FadeSlide>
                    </React.Fragment>
                )
            }

            <Spacer />
            <FadeSlide>
                <ThemedPaper>
                    <Stack alignItems="center">
                        <Typography variant="h4">To learn more about other pages...</Typography>
                        <PrototypleButton />
                    </Stack>
                </ThemedPaper>
            </FadeSlide>
        </Section>);
    }
);


const FinalThoughts = React.forwardRef<HTMLDivElement, { id?: string }>(
    function FinalThoughts(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <Typography variant="h3" textAlign="center">Final Thoughts</Typography>
        </Section>)
    }
);

const Reflections = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Reflections(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Grid container columns={3} >
                    <Grid sm={3} md={1}>
                        <Typography variant="h3">Reflections</Typography>
                    </Grid>
                    <Grid sm={3} md={2}>
                        <Typography variant="body1">
                            My team and I delivered a <Link color="primary"><b>presentation</b></Link> to the founder of Edgemere Farm and received enthusiastic feedback and high praise. Our client mentioned that our research inspired a new perspective on how they view themselves, motivating both their audience and their team.
                            <br /><br /><br />
                        </Typography>
                        <Quote>
                            "Excellent work! The overall process was professional, friendly and efficient and I was impressed with how quickly and deeply they familiarized themselves with our organization. Their re-design acknowledges our organization's history, is informed by their insightful and in-depth research, and truly represents us while also driving the organization forward."
                            <br /><br />
                            - Vanessa, the founder of Edgemere Farm
                        </Quote>
                        <Typography variant="body1">
                            <br /><br />
                            The experience of this project has been immensely rewarding for me, beginning with comprehensive user research and culminating in successful outcomes. By addressing user and organizational needs and refining our designs iteratively, we have enhanced community engagement through the website. However, our work isn't finished. We must continue to listen attentively to our audience and stay flexible to meet evolving user needs.
                            <br /><br />
                            This project also opened my eyes to how effectively a virtual website can integrate with in-person services and organizations. The success of this initiative highlights the impact of research-driven design. To deeply empathize with our audience, we served as volunteers to truly experience the user's perspective—an incredible journey!
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("VolunteerPhoto.png")} />
            </FadeSlide>
        </Section>
        )
    }
);

const Quote = React.forwardRef<HTMLSpanElement, TypographyProps>(
    function Quote({ children, ...props }, ref) {
        return <Typography {...props} variant="body2" color="grey" ref={ref}
            sx={(theme) => ({ borderLeft: `5px solid ${theme.palette.primary.main}`, pl: "1rem" })}>
            <i>{children}</i>
        </Typography>
    }
);

export default EdgemereFarm;
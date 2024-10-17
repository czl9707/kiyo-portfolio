import * as React from "react";
import { Unstable_Grid2 as Grid, Box, Typography, createTheme, useTheme, ThemeProvider, Stack, TypographyProps } from "@mui/material";
import { common } from '@mui/material/colors'

import ProjectHeader from "./Components/ProjectHeader.tsx";
import Section, { Spacer } from "../Components/Section.tsx";
import { PrimaryTypography } from "./Components/Typography.tsx";
import FadeSlide from "../Components/FadeSlideEffect.tsx";
import ImageWithAnnotation from "./Components/ImageWithAnnotation.tsx";
import ThemedPaper from "../Components/ThemedPaper.tsx";
import { Catagorize, CatagorizeGroup } from "../Components/Catagory.tsx";


const ImageFullPath = (p: string) => `/Works/Knowunity/${p}`;


function Knowunity() {
    const globalTheme = useTheme();
    const localTheme = React.useMemo(() => createTheme(globalTheme,
        {
            palette: {
                primary: {
                    main: "#3947BE",
                    light: "#3947BE",
                    dark: "#3947BE",
                    contrastText: common.white,
                },
                secondary: {
                    main: "#EAF1F6",
                    light: "#EAF1F6",
                    dark: "#EAF1F6",
                    contrastText: common.black,
                },
                info: {
                    main: "#F6F6F6",
                    light: "#F6F6F6",
                    dark: "#F6F6F6",
                    contrastText: common.black,
                },
            }
        }
    ), [globalTheme]);

    return (
        <ThemeProvider theme={localTheme}>
            <ProjectHeader
                name="Knowunity"
                desc="Expand lighthouse creator pool by connecting better with regular users"
                chips={["User Interview", "Usability Improvement", "App Community",]} />

            <Catagorize id="overview" catagoryName="Overview"><Overview /></Catagorize>
            <Catagorize id="bussiness-goal" catagoryName="Bussiness Goal"><Intro /></Catagorize>
            <Catagorize id="context" catagoryName="Context"><Context /></Catagorize>
            <Catagorize id="research-question" catagoryName="Research Questions"><ResearchQuestions /></Catagorize>
            <Catagorize id="audience-recruitment" catagoryName="Audience Recruitment"><AudienceRecruitment /></Catagorize>

            <CatagorizeGroup catagoryName="Finding & Recommendations">
                <Catagorize id="finding-and-recommendations-overview" catagoryName="Overview"><FindingAndRecommendations /></Catagorize>
                <Catagorize id="finding1" catagoryName="F&R 1">
                    <div>
                        <Findings1 />
                        <Recommendation1 />
                    </div>
                </Catagorize>
                <Catagorize id="finding2" catagoryName="F&R 2">
                    <div>
                        <Findings2 />
                        <Recommendation2 />
                    </div>
                </Catagorize>
                <Catagorize id="finding3" catagoryName="F&R 3">
                    <div>
                        <Findings3 />
                        <Recommendation3 />
                    </div>
                </Catagorize>
                <Catagorize id="finding4" catagoryName="F&R 4">
                    <div>
                        <Findings4 />
                        <Recommendation4 />
                    </div>
                </Catagorize>
                <Catagorize id="finding5" catagoryName="F&R 5">
                    <div>
                        <Findings5 />
                        <Recommendation5 />
                    </div>
                </Catagorize>
                <Catagorize id="finding6" catagoryName="F&R 6">
                    <div>
                        <Findings6 />
                        <Recommendation6 />
                    </div>
                </Catagorize>
            </CatagorizeGroup>

            <FinalThoughts />
            <Catagorize id="takeaways" catagoryName="Final Thoughts"><TakeAways /></Catagorize>
        </ThemeProvider>
    );
}

const Overview = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Overview(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Grid container columns={2}>
                    <Grid xs={1}>
                        <PrimaryTypography variant="h5">Overview</PrimaryTypography>
                        <Typography variant="h3">
                            Knowunity
                        </Typography>
                        <Typography variant="body1">
                            Knowunity is a dynamic learning platform with a mission to offer free digital education to students, seamlessly integrating social learning with user-generated content. At its core, a vibrant community of active and motivated users serves as influencers, fostering a collaborative learning environment.
                            <br /><br />
                            In our study, we identified 7 recommendations based on user data and interviews to increase engagement between creators and regular users, under the assumption that increased interactions between the two will lead to a higher conversion rate from regular creator to a Lighthouse creator.
                        </Typography>
                    </Grid>

                    <Grid xs={1}>
                        <Box component="img" src={ImageFullPath('Intro.png')} width="100%" />
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
                        <Typography variant="body1">Nov 2023 - Dec 2023 (6 weeks)</Typography>
                        <br />
                        <PrimaryTypography variant="h5">Team</PrimaryTypography>
                        <Typography variant="body1">4 user researchers</Typography>
                    </Grid>

                    <Grid xs={1}>
                        <PrimaryTypography variant="h5">My Contribution</PrimaryTypography>
                        <Typography variant="body1">
                            Drafted research plan protocol.<br />
                            Facilitated interview sessions.<br />
                            Synthesized data (affinity diagram).<br />
                            Provided design recommendations and visual mock-up.<br />
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Business Goal</PrimaryTypography>
                    <Typography variant="h3">
                        Growing the pool of lighthouse creators in order to boost active user growth
                    </Typography>
                    <Typography variant="body1">
                        Presently, Knowunity is exploring a hypothesis: elevating engagement and fostering growth within top creator groups, lighthouse creators, will inherently enhance engagement among regular users and bring in more new users.
                        <br /><br />
                        Our project objective is to provide recommendations for the Lighthouse Creator growth strategy by enhancing their connection with regular users.
                    </Typography>
                </Box>
            </FadeSlide>
        </Section>)
    }
);


const contextCardsContent = [
    {
        imgSrc: "IconNote.png",
        content: "Publish 15 notes",
    },
    {
        imgSrc: "IconTask.png",
        content: "Gain 100 members in their group chat",
    },
    {
        imgSrc: "IconUser.png",
        content: "Gain 100 followers",
    },
]

const Context = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Context(props, ref) {
        return (<Section {...props} ref={ref} color="info">
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Context</PrimaryTypography>
                    <Typography variant="h3">
                        Becoming a lighthouse creator involves interacting with regular users at various touchpoints.
                    </Typography>
                    <Typography component="span" variant="body1">
                        Presen;The project's business objective is to expand the Lighthouse Creator base.  <br />
                        To become Lighthouse Creator, they must reach the 3 bars: <br />
                        <ul>
                            <li>Generate 15 notes (knows)</li>
                            <li>Get 100 members in their group chat</li>
                            <li>Gain 100 followers (knows)</li>
                        </ul>
                    </Typography>
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={3} columnSpacing={3}>
                    {
                        contextCardsContent.map((item, i) => (
                            <Grid sm={3} md={1} key={i}>
                                <ThemedPaper sx={{ height: "100%" }}>
                                    <Stack alignItems="center">
                                        <Box component="img" src={ImageFullPath(item.imgSrc)} width="3rem" />
                                        <br />
                                        <Typography variant="h5" textAlign="center">{item.content}</Typography>
                                    </Stack>
                                </ThemedPaper>
                            </Grid>
                        ))
                    }
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Typography variant="body1" textAlign="center">
                    Building on past research, the majority of creators demonstrated a commendable track record in publishing notes. Therefore, our project concentrated on the remaining two engaging touchpoints with regular users: growing group chat and gaining followers.
                </Typography>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Context.png")} annotation={(
                    <>
                        Path to become a Lighthouse creator: <br />
                        We focus on their engagement with regular users
                    </>
                )} />
            </FadeSlide>
        </Section>)
    }
);


const ResearchQuestions = React.forwardRef<HTMLDivElement, { id?: string }>(
    function ResearchQuestions(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Research Question</PrimaryTypography>
                    <Typography variant="h3">
                        Uncovering motivations and issues in forming a connection between Creators & Regular Users
                    </Typography>
                    <Typography variant="body1">
                        In order to facilitate the engagement and elevation of content creators to become Lighthouse creators, our focus is on understanding the motivations and challenges faced by creators currently. <br />
                        Additionally, we aim to identify obstacles hindering regular users' connections with content creators, particularly in joining group chats and following creators.<br />
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={11} alignItems="center" columnSpacing={1} rowSpacing={1}>
                    <Grid xs={4}>
                        {
                            [
                                "What motivates engagement?",
                                "How do they promote their own contents?",
                                "What are challenges in engaging with their audience?",
                            ].map(text => (
                                <ThemedPaper variant="outlined" sx={{ borderRadius: ".5rem", p: "1.2rem", my: ".7rem" }} >
                                    <Typography variant="body1">{text}</Typography>
                                </ThemedPaper>
                            ))
                        }
                    </Grid>

                    <Grid xs={3}>
                        <Box component="img" src={ImageFullPath("QuestionSpider.png")} width="100%" />
                    </Grid>

                    <Grid xs={4}>
                        {
                            [
                                "What motivates connection with content creators?",
                                "Can they find desire contents?",
                                "What do they expect from following creators?",
                            ].map(text => (
                                <ThemedPaper variant="outlined" sx={{ borderRadius: ".5rem", p: "1.1rem", my: ".8rem" }} >
                                    <Typography variant="body1">{text}</Typography>
                                </ThemedPaper>
                            ))
                        }
                    </Grid>

                    <Grid xs={4}>
                        <PrimaryTypography variant="h5" textAlign="center">Creater</PrimaryTypography>
                    </Grid>

                    <Grid xs={3}>
                    </Grid>

                    <Grid xs={4}>
                        <PrimaryTypography variant="h5" textAlign="center">Reqular Users</PrimaryTypography>
                    </Grid>
                </Grid>
            </FadeSlide>

        </Section>)
    }
);


const AudienceRecruitment = React.forwardRef<HTMLDivElement, { id?: string }>(
    function AudienceRecruitment(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Audience Recruitment</PrimaryTypography>
                    <Typography variant="h3">
                        We interviewed 5 active creators and 5 regular users to participate.
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid xs={1}>
                        <Typography variant="body1">
                            We sent out screeners via email to both two group of users from the data we got from Knowunity team. After collecting the data from our screener questionnaire, based on people's activeness, we decided to target people who meet the following requirements. We recruited 10 participants (5 for creators and 5 for regular users) from the screener respondents.
                        </Typography>
                    </Grid>

                    <Grid xs={1}>
                        <ImageWithAnnotation imgSrc={ImageFullPath('InterviewRecruitment.png')} width="100%" annotation="Interview with regular users" />
                    </Grid>
                </Grid>
            </FadeSlide>

            <Spacer />

            <FadeSlide>
                <Grid container columns={2} alignItems="center">
                    <Grid xs={1}>
                        <Stack direction="row" spacing={3} alignItems="center">
                            <GirlProfileImg set="Happy" />
                            <PrimaryTypography variant="body1"><b>Creators</b></PrimaryTypography>
                        </Stack>
                        <Typography component="span" variant="body1">
                            <ul>
                                <li>Lighthouse Creators or a part of the Knowunity Student Leader Program (on the verge of attaining Lighthouse Creator status. </li>
                                <li>iOS user.</li>
                            </ul>
                        </Typography>
                    </Grid>

                    <Grid xs={1}>
                        <Stack direction="row" spacing={3} alignItems="center">
                            <BoyProfileImg set="Happy" />
                            <PrimaryTypography variant="body1"><b>Regular users</b></PrimaryTypography>
                        </Stack>
                        <Typography component="span" variant="body1">
                            <ul>
                                <li>Active on the platform, at least 3 days in the past week.</li>
                                <li>Not a creator themselves.</li>
                                <li>Recently followed a Lighthouse Creator within 2 weeks (ideally).</li>
                                <li>iOS user.</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const findingAndRecommendationsContent = [
    {
        title: "📍Lighthouse creators' self-positioning",
        bullets: ["Lighthouse creators aren't prioritizing follower growth as anticipated: They value an \"authentic\" community.",]
    },
    {
        title: "📝 Note discovery",
        bullets: ["Users seek relevant notes, but there's a gap in lighthouse creators' notes reaching them.",]
    },
    {
        title: "🧪 Subject focus",
        bullets: [
            "In-app engagement relates to specific subjects, but creator profiles lack visibility of subject expertise.",
            "Creators struggle to efficiently grasp their audience's needs for notes.",
        ]
    },
    {
        title: "🗨️ Group chat",
        bullets: [
            "Creators prioritize group chat connections, but current promotion methods are limited.",
            "Users focus on group chat Q&A,  yet the hidden question reaction feature hinders engagement.",
        ]
    }
]

const FindingAndRecommendations = React.forwardRef<HTMLDivElement, { id?: string }>(
    function FindingAndRecommendations(props, ref) {
        return (<Section {...props} ref={ref} color="primary">
            <FadeSlide>
                <Box>
                    <Typography variant="h3">Findings & Recommendations</Typography>
                    <Typography variant="body1">
                        Overall, we have 6 major findings revolved around 4 topics:
                    </Typography>
                    <br /><br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={2} spacing={3} alignItems="stretch">
                    {findingAndRecommendationsContent.map((item, i) => (
                        <Grid sm={2} md={1} key={i}>
                            <ThemedPaper sx={{ height: "100%" }}>
                                <Typography variant="h5">{item.title}</Typography>
                                <Typography variant="body1">
                                    <ul>
                                        {item.bullets.map((b, j) => (
                                            <li key={j}>{b}</li>
                                        ))}
                                    </ul>
                                </Typography>
                            </ThemedPaper>
                        </Grid>
                    ))}
                </Grid>
            </FadeSlide>
        </Section>)
    }
);


const Findings1 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Findings1(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Finding 1</PrimaryTypography>
                    <Typography variant="h3">
                        Lighthouse creators aren't prioritizing follower growth as anticipated: They value an "authentic" community.
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={2} alignItems="center" justifyContent="space-between">
                    <Grid sm={2} md={1}>
                        <Typography variant="body1">
                            Lighthouse values authenticity and building connections with people , and don't identify themselves as influencer, or experts, or someone with a huge following.
                        </Typography>
                        <br /><br />
                        <Quote>
                            "We're here to to share notes and get information, not to be famous on an app." <br />
                            - Lighthouse Creator 1
                        </Quote>
                        <br />
                        <Quote>
                            "I've been trying to make like more actual friends. rather than how normal social media ( following) is an illusion of friends type thing." <br />
                            - Lighthouse creator 2
                        </Quote>
                        <br />
                        <Quote>
                            "I focused on growing and promoting groups instead of like growing follower numbers."  <br />
                            - Lighthouse creator 4
                        </Quote>
                    </Grid>
                    <Grid sm={2} md={1}>
                        <Stack alignItems="center">
                            <GirlProfileImg set="Happy" size="big" />
                        </Stack>
                    </Grid>
                </Grid>
            </FadeSlide>
        </Section >)
    }
);


const Recommendation1 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recommendation1(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Recommendation 1</PrimaryTypography>
                    <Typography variant="h3">
                        Reconsider lighthouse creators' market positioning: Emphasize their role as super helpers rather than promoting them solely as influencers.
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>
        </Section>)
    }
);


const Findings2 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Findings2(props, ref) {
        return (<Section {...props} ref={ref}>
            <FindingsSection
                title="Finding 2"
                subtitle="Users seek relevant notes, but there's a gap in Lighthouse creators' content reaching them."
                imgSrc="Finding2_1.png"
                annotation="Current Search tab">
                <Typography component="span" variant="body1">
                    <ul>
                        <li>Lighthouse creators don't know how to increase visibility of their notes, but they don't actively aim to promote it. </li>
                        <br />
                        <li>
                            Regular users struggle to discover notes from Lighthouse creators before and after following them:
                            <br /><br />
                            <ul style={{ listStyleType: "disc" }}>
                                <li>There is not access to contents from following creators on Homepage, which doesn't meet users' expectation.</li>
                                <li>3 of 5 regular users seldom use note-scrolling feature in search tab since it provides repeating and non-customized notes, which is a missed opportunity of exposing lighthouse knowers' notes.</li>
                            </ul>
                        </li>
                    </ul>
                </Typography>
                <br /><br />

                <Stack direction="row" spacing={3} alignItems="center">
                    <GirlProfileImg set="Happy" />
                    <Quote>
                        "I don't know how to promote because I don't try it. I just post notes and hope that it gets to people who are interested in."<br />
                        - Lighthouse creator
                    </Quote>
                </Stack>
                <br /><br />
                <Stack direction="row-reverse" spacing={3} alignItems="center">
                    <BoyProfileImg set="Unhappy" />
                    <Quote>
                        "I have to check my following list to see if they have new notes published. It would be helpful if I can see more easily. "<br />
                        - Regular User
                    </Quote>
                </Stack>
            </FindingsSection>
        </Section>)
    }
);


const Recommendation2 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recommendation2(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <RecommendationSection
                title="Recommendation 2"
                subtitle={`Add a "following & explore" filter to Search scrolling and optimize the algorithm for better exploration.`}
                imgSrc="Recommendation2_1.png"
                annotation="Recommended Search tab">
                <Typography component="span" variant="body1">
                    <b>Adding a filter including “following” and "explore"</b>
                    <ul>
                        <li>Help users choose the types of contents source: either keep up with who they followed of explore new creators, helping increase content exposure of both followed and unfollowed ones</li>
                    </ul>
                    <br /><br />
                    <b>Optimize the current algorithm to intrigue users' interest in explore more notes here</b>
                    <ul>
                        <li>promote content from creators who meet lighthouse criteria</li>
                        <li>provide content based on regular users' interest</li>
                        <li>avoid providing repeating content </li>
                    </ul>
                    This will increase the opportunity for them to discover notes from lighthouse knowers and build connection with them
                </Typography>
            </RecommendationSection>
        </Section>)
    }
);


const Findings3 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Findings3(props, ref) {
        return (<Section {...props} ref={ref}>
            <FindingsSection
                title="Finding 3"
                subtitle="In-app engagement relates to specific subjects, but creator profiles lack visibility of subject expertise."
                imgSrc="Finding3_1.png"
                annotation="Current Creator Profile">
                <Typography component="span" variant="body1">
                    <b>Subject expertise remains unapparent in creators' profile bio.</b>
                    <ul>
                        <li>Users follow creators for subject-specific notes, and want to see their subject specialty in profile. (5/5)</li>
                        <li>Lighthouse creators post notes on many subjects, but hesitant to refer to themselves as experts in one area - they do it for the rewarding experience of helping others. (5/5)</li>
                    </ul>
                </Typography>
                <Stack direction="row-reverse" spacing={3} alignItems="center">
                    <BoyProfileImg set="Unhappy" />
                    <Quote>
                        "The primary reason I follow someone is if he has consistent notes on subjects I need, rather than uploading a bunch of different subjects randomly."

                    </Quote>
                </Stack>
                <br /><br />

                <Typography component="span" variant="body1">
                    <b>Subject-based content classification is in need.</b>
                    <ul>
                        <li>Regular users struggle to efficiently find specific subject notes in creators' profiles (4/5).</li>
                        <li>Creators expect an easier way to classify their notes by subject.</li>
                    </ul>
                </Typography>
                <Stack direction="row-reverse" spacing={3} alignItems="center">
                    <BoyProfileImg set="Crazy" />
                    <Quote>
                        "He has 60 notes, so that would be a long time scrolling. I'm taking biology. Does he have biology? I guess maybe a filter will help." <br />
                        - Regular user
                    </Quote>
                </Stack>
                <br />
                <Stack direction="row" spacing={3} alignItems="center">
                    <GirlProfileImg set="Unhappy" />
                    <Quote>
                        "I would like to have better classification system in my notes."<br />
                        - Lighthouse creator
                    </Quote>
                </Stack>
            </FindingsSection>
        </Section>)
    }
);


const Recommendation3 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recommendation3(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <RecommendationSection
                title="Recommendation 3"
                subtitle={`Optimize creators' profile by introducing a "subject leader" badge and adding a subject filter in content collection.`}
                imgSrc="Recommendation3_1.png"
                annotation="Recommended Creator Profile">
                <Typography component="span" variant="body1">
                    <b>Introduce a “subject leader” badge in creators' bio</b>
                    <ul>
                        <li>Allow creators to gain a “subject leader” status in specific areas and display it in their bio as a signifier for potential followers to know they can help in this subject.</li>
                    </ul>
                    <br /><br />
                    <b>Add a subject filter in content collection on profiles</b>
                    <ul>
                        <li>Add a subject tag filter will help users to know what contents the knower at a glance, and filter out all contents at a simple clicking. </li>
                        <li>Users would expect to see more contents in this subject upcoming. </li>
                        <li>For creators, they can organize their contents more efficiently and clearly.</li>
                    </ul>
                </Typography>
            </RecommendationSection>
        </Section>)
    }
);


const Findings4 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Findings4(props, ref) {
        return (<Section {...props} ref={ref}>
            <FindingsSection
                title="Finding 4"
                subtitle="Creators struggle to efficiently grasp their audience's needs for notes."
                imgSrc="Finding4_1.png"
                annotation="Current Creator Profile">
                <Typography component="span" variant="body1">
                    <ul>
                        <li>Lighthouse creators tailor notes based on followers' needs (4/5), while they presently rely on guessing or responding to group chat requests (3/5).</li>
                        <li>2 of 5 Lighthouse creators wish to have a request feature for users to propose their need.</li>
                    </ul>
                </Typography>
                <br /><br />

                <Stack direction="row" spacing={3} alignItems="center">
                    <GirlProfileImg set="Happy" />
                    <Quote>
                        "I ask people, so some people will be like, hey, can you write me a note about blah, blah, blah and then I'll ask them, would you rather I handwrite it or type it up and I'll do it like however they prefer."<br />
                        - Lighthouse creator
                    </Quote>
                </Stack>
                <br />
                <Stack direction="row-reverse" spacing={3} alignItems="center">
                    <GirlProfileImg set="Unhappy" />
                    <Quote>
                        "I hope to have a section where you ask a specific person for notes or ask a specific person for more information based on their notes." <br />
                        - Lighthouse creator
                    </Quote>
                </Stack>
            </FindingsSection>
        </Section>)
    }
);


const Recommendation4 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recommendation4(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <RecommendationSection
                title="Recommendation 4"
                subtitle={`Add "Ask" section in creator's profile, especially "subject leaders".`}
                imgSrc="Recommendation4_1.png"
                annotation="Recommended Creator Profile">
                <Typography component="span" variant="body1">
                    Including an "Ask" section as an access point for users to leave requests on notes will assist creators in efficiently understanding users' expectations for content.
                </Typography>
            </RecommendationSection>
        </Section>)
    }
);


const Findings5 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Findings5(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Finding 5</PrimaryTypography>
                    <Typography variant="h3">
                        Creators prioritize group chat connections, but the current promotion method is limited.
                    </Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Box>
                    <Typography component="span" variant="body1">
                        <ul>
                            <li>Lighthouse creators check their top group chats on a daily basis (4/5) and they value authentic community interactions with the people they are helping. (5/5)</li>
                            <li>However, they find current promotion method is limited: currently they can only promote groups through relevant groups (5/5) yet some feel like they are spamming. (3/5)</li>
                        </ul>
                    </Typography>
                    <br />

                    <Stack direction="row" spacing={3} alignItems="center">
                        <GirlProfileImg set="Happy" />
                        <Quote>
                            "You can actually <b>have engagement</b> with the person you're helping in group chat."
                        </Quote>
                    </Stack>
                </Box>
            </FadeSlide>
        </Section>)
    }
);


const Recommendation5 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recommendation5(props, ref) {
        return (<Section {...props} ref={ref}>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">Recommendation 5</PrimaryTypography>
                    <Typography variant="h3">
                        Add a link to the creator's group chat under same subject in profile folder.
                    </Typography>
                    <br />

                    <ImageWithAnnotation noShadow imgSrc={ImageFullPath("Recommendation5_1.png")} />
                </Box>
            </FadeSlide>
        </Section>)
    }
);


const Findings6 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Findings6(props, ref) {
        return (<Section {...props} ref={ref}>
            <FindingsSection
                title="Finding 6"
                subtitle="Users focus on group chat Q&A,  yet the hidden question reaction feature hinders engagement."
                imgSrc="Finding6_1.png"
                annotation="Current Group chat">
                <Typography component="span" variant="body1">
                    <ul>
                        <li>Regular users use group chats mainly for viewing and answering questions, and quality of the Q&A impacts their willingness to join the group (5/5) </li>
                    </ul>
                </Typography>
                <br /><br />

                <Stack direction="row" spacing={3} alignItems="center">
                    <BoyProfileImg set="Unhappy" />
                    <Quote>
                        "If there's a lot of people who are asking & answering questions that I may have, I will join that chat. But if people just talking about unrelated stuff, then that turns me off from joining."
                        - Regular user
                    </Quote>
                </Stack>
            </FindingsSection>
        </Section>)
    }
);


const Recommendation6 = React.forwardRef<HTMLDivElement, { id?: string }>(
    function Recommendation6(props, ref) {
        return (<Section {...props} ref={ref} color="secondary">
            <RecommendationSection
                title="Recommendation 6"
                subtitle="Surface the reaction feature of group chat Q&A for more discoverable."
                imgSrc="Recommendation6_1.png"
                annotation="Recommended Group Chat">
                <Typography component="span" variant="body1">
                    Make the reaction feature visible to provide an easy way to participate in Q&A: <br />
                    Users won't have to propose questions or answers; they can simply express having the same question with a click.
                </Typography>
            </RecommendationSection>
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
                            My team and I delivered our presentation to Knowunity stakeholders and they were very impressed by our work as they gained a better understanding of <b>what lighthouse creators value </b>and<b> how regular users interact with creators</b>. Our recommendation 1 particularly led to their reconsideration about strategy on lighthouse creators' criteria.
                        </Typography>
                        <br />
                        <Quote>
                            "I'm thinking whether we should remove gaining 100 followers as one of criteria."<br />
                            - Knowunity PM
                        </Quote>
                        <Typography variant="body1">
                            They decided to adopt all of our recommendations and implement in the upcoming development. We will receive the improvement metrics soon!
                        </Typography>
                    </Grid>
                </Grid>
            </FadeSlide>
            <Spacer />
            <FadeSlide>
                <ImageWithAnnotation imgSrc={ImageFullPath("Takeaways.png")} />
            </FadeSlide>
        </Section>)
    }
);


function BoyProfileImg({
    set, size = "small"
}: {
    set: "Happy" | "Unhappy" | "Crazy",
    size?: "small" | "big",
}) {
    const source = ImageFullPath(`ProfileBoy${set}.png`);
    const sizeRem = size == "small" ? "6rem" : "15rem"
    return (
        <img src={source} alt={source} style={{ width: sizeRem, height: sizeRem }} />
    );
}

function GirlProfileImg({
    set, size = "small"
}: {
    set: "Happy" | "Unhappy",
    size?: "small" | "big",
}) {
    const source = ImageFullPath(`ProfileGirl${set}.png`);
    const sizeRem = size == "small" ? "6rem" : "15rem"
    return (
        <img src={source} alt={source} style={{ width: sizeRem, height: sizeRem }} />
    );
}

const Quote = React.forwardRef<HTMLSpanElement, TypographyProps>(
    function Quote({ children, ...props }, ref) {
        return <Typography {...props} variant="body2" color="grey" ref={ref}
            sx={(theme) => ({ borderLeft: `5px solid ${theme.palette.secondary.main}`, pl: "1rem" })}>
            <i>{children}</i>
        </Typography>
    }
);

function FindingsSection({ title, subtitle, children, imgSrc, annotation }: {
    title: string,
    subtitle: string,
    children: React.ReactNode,
    imgSrc: string,
    annotation: string,
}) {
    return (
        <>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">{title}</PrimaryTypography>
                    <Typography variant="h3">{subtitle}</Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={3} alignItems="center" spacing={12}>
                    <Grid sm={3} md={2}>
                        {children}
                    </Grid>
                    <Grid sm={3} md={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath(imgSrc)} annotation={annotation} />
                    </Grid>
                </Grid>
            </FadeSlide>
        </>
    )
}


function RecommendationSection({ title, subtitle, children, imgSrc, annotation }: {
    title: string,
    subtitle: string,
    children: React.ReactNode,
    imgSrc: string,
    annotation: string,
}) {
    return (
        <>
            <FadeSlide>
                <Box>
                    <PrimaryTypography variant="h5">{title}</PrimaryTypography>
                    <Typography variant="h3">{subtitle}</Typography>
                    <br />
                </Box>
            </FadeSlide>

            <FadeSlide>
                <Grid container columns={2} alignItems="center" spacing={12}>
                    <Grid sm={2} md={1}>
                        <ImageWithAnnotation noShadow imgSrc={ImageFullPath(imgSrc)}
                            annotation={
                                <>
                                    <span>{annotation}</span>
                                    <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                                </>
                            } />
                    </Grid>
                    <Grid sm={2} md={1}>{children}</Grid>
                </Grid>
            </FadeSlide>
        </>
    )
}

export default Knowunity;
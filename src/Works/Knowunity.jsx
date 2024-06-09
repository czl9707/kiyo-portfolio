import React from "react";
import WorksHeader from '../Components/Works/WorksHeader';
import Overview from "../Components/Works/Overview";
import { FullWidthSection, NotFullWidthSection, GrowSectionCell, FixedSectionCell, SECTION_PADDING } from "../Components/Section";
import { SectionGrid, GridCell } from "../Components/SectionGrid";
import { CardCell, CardImageCell } from "../Components/Works/CardCell";

const ImageFullPath = (p) => `/Works/Knowunity/${p}`;

const COLOR = {
    prussia: "#3947BE",
    baby: "#EAF1F6",
    ocean: "#CCC1F0",
    dim: "#F6F6F6",
}

const PROFILE_SIZE = {
    small: "6em",
    big: "15em",
}

function ProfileImg({ character, set, size }) {
    let source = ImageFullPath(`Profile${character === "boy" ? "Boy" : "Girl"}${set}.png`)
    return (
        <img src={source} alt={source} style={{ width: size, height: size }} />
    );
}


function Quote({ children }) {
    return (
        <p className="text-text" style={{
            borderLeft: `2px ${COLOR.ocean} solid`,
            paddingLeft: "1em",
            color: "grey"
        }}>
            <i>
                {children}
            </i>
        </p>
    );
}


function Knowunity() {
    return (
        <>
            <WorksHeader
                title="Expand lighthouse creator pool by connecting better with regular users"
                tags={["User Interview", "Usability", "Online Community",]}
                color={COLOR.baby} />
            <Overview
                backgroundColor={COLOR.baby}
                titleColor={COLOR.prussia}
                img={ImageFullPath("Intro.png")}
                content={<>
                    <p className="title-section">
                        Knowunity
                        <br /><br />
                    </p>
                    <p className="text-text">
                        Knowunity is a dynamic learning platform with a mission to offer free digital education to students, seamlessly integrating social learning with user-generated content. At its core, a vibrant community of active and motivated users serves as influencers, fostering a collaborative learning environment.
                        <br /><br />
                        In our study, we identified 7 recommendations based on user data and interviews to increase engagement between creators and regular users, under the assumption that increased interactions between the two will lead to a higher conversion rate from regular creator to a Lighthouse creator.
                    </p>
                </>}
            />
            <Intro />
            <Context />
            <ResearchQuestion />
            <AudienceRecruitment />
            <FindingAndRecommendations />
            <Findings1 />
            <Recommendation1 />
            <Findings2 />
            <Recommendation2 />
            <Findings3 />
            <Recommendation3 />
            <Findings4 />
            <Recommendation4 />
            <Findings5 />
            <Recommendation5 />
            <Findings6 />
            <Recommendation6 />
            <FinalThoughts />
            <TakeAways />
        </>
    );
}

function Intro() {
    return (
        <>
            <SectionGrid gridMinColumn={1} gridMaxColumn={2}
                gridColumnGap={2} gridRowGap={2}
                verticalPadding={SECTION_PADDING.DEFAULT}>
                <GridCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Duration<br />
                    </p>
                    <p className="text-text">
                        Nov 2023 - Dec 2023 (6 weeks)
                    </p>
                    <br /><br />
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Team<br />
                    </p>
                    <p className="text-text">
                        4 user researchers
                    </p>
                    <br />
                </GridCell>
                <GridCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        My Contribution<br />
                    </p>
                    <p className="text-text">
                        Drafted research plan protocol.<br />
                        Facilitated interview sessions.<br />
                        Synthesized data (affinity diagram).<br />
                        Provided design recommendations and visual mock-up.<br />
                    </p>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Business Goal<br />
                    </p>
                    <p className="title-section">
                        Growing the pool of lighthouse creators in order to boost active user growth
                    </p>
                    <p className="text-text">
                        <br />
                        Presently, Knowunity is exploring a hypothesis: elevating engagement and fostering growth within top creator groups, lighthouse creators, will inherently enhance engagement among regular users and bring in more new users.
                        <br /><br />
                        Our project objective is to provide recommendations for the Lighthouse Creator growth strategy by enhancing their connection with regular users.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Context() {
    function Card({ img, text }) {
        return (
            <CardCell>
                <NotFullWidthSection verticalPadding={SECTION_PADDING.MINOR}>
                    <GrowSectionCell />
                    <FixedSectionCell>
                        <img src={ImageFullPath(img)} alt={img}
                            style={{ maxHeight: "2em" }} />
                    </FixedSectionCell>
                    <GrowSectionCell />
                </NotFullWidthSection>
                <FullWidthSection>
                    <GrowSectionCell>
                        <p className="text-text"
                            style={{
                                textAlign: "center",
                                fontSize: "1.25em"
                            }}>
                            {text}
                        </p>
                    </GrowSectionCell>
                </FullWidthSection>
            </CardCell>
        );
    }

    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.dim} />
            <NotFullWidthSection backgroundColor={COLOR.dim}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Context<br />
                    </p>
                    <p className="title-section">
                        Becoming a lighthouse creator involves interacting with regular users at various touchpoints.
                    </p>
                    <p className="text-text">
                        <br />
                        The project's business objective is to expand the Lighthouse Creator base.  <br />
                        To become Lighthouse Creator, they must reach the 3 bars: <br />
                        <ul>
                            <li>Generate 15 notes (knows)</li>
                            <li>Get 100 members in their group chat</li>
                            <li>Gain 100 followers (knows)</li>
                        </ul>
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                backgroundColor={COLOR.dim}
                gridMaxColumn={3} gridMinColumn={3}
                verticalPadding={SECTION_PADDING.DEFAULT}>
                <Card img="IconNote.png"
                    text="Publish 15 notes" />
                <Card img="IconTask.png"
                    text="Gain 100 members in their group chat" />
                <Card img="IconUser.png"
                    text="Gain 100 followers" />
            </SectionGrid>

            <NotFullWidthSection backgroundColor={COLOR.dim}>
                <GrowSectionCell>
                    <p className="text-text">
                        Building on past research, the majority of creators demonstrated a commendable track record in publishing notes. Therefore, our project concentrated on the remaining two engaging touchpoints with regular users: growing group chat and gaining followers.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection backgroundColor={COLOR.dim}>
                <CardImageCell img={ImageFullPath("Context.png")} shadow={false}
                    annotation={
                        <>
                            Path to become a Lighthouse creator: <br />
                            We focus on their engagement with regular users
                        </>
                    } />
            </NotFullWidthSection>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.dim} />
        </>
    );
}

function ResearchQuestion() {
    const IMAGE_WIDTH = "30%";
    const SIDE_WIDTH = "35%";

    function Cell({ text, height = 1 }) {
        return (
            <div className="card-cell"
                style={{
                    width: "100%", padding: "0 10%", height: `${height * 5 + 5}vh`,
                    boxShadow: "0 0 1em rgb(0, 0, 0, 0.05)", margin: "0.5em 0",
                    display: "flex", alignItems: "center"
                }
                }>
                <p className="text-text">{text}</p>
            </div >
        );
    }

    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
            <NotFullWidthSection>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Research Question<br />
                    </p>
                    <p className="title-section">
                        Uncovering motivations and issues in forming a connection between Creators & Regular Users
                    </p>
                    <p className="text-text">
                        <br />
                        In order to facilitate the engagement and elevation of content creators to become Lighthouse creators, our focus is on understanding the motivations and challenges faced by creators currently. <br />
                        Additionally, we aim to identify obstacles hindering regular users' connections with content creators, particularly in joining group chats and following creators.<br />
                        <br />
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection>
                <FixedSectionCell width={SIDE_WIDTH}>
                    <Cell height={1} text="What motivates engagement?" />
                    <Cell height={2} text="How do they promote their own contents?" />
                    <Cell height={2} text="What are challenges in engaging with their audience?" />
                </FixedSectionCell>
                <CardImageCell width={IMAGE_WIDTH} shadow={false}
                    img={ImageFullPath("QuestionSpider.png")} />
                <FixedSectionCell width={SIDE_WIDTH}>
                    <Cell height={2} text="What motivates connection with content creators?" />
                    <Cell height={1} text="Can they find desire contents?" />
                    <Cell height={2} text="What do they expect from following creators?" />
                </FixedSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection>
                <FixedSectionCell width={SIDE_WIDTH}>
                    <p className="text-brief"
                        style={{ color: COLOR.prussia, textAlign: "center", fontSize: "1em" }}>
                        Creators
                    </p>
                </FixedSectionCell>
                <FixedSectionCell width={IMAGE_WIDTH} />
                <FixedSectionCell width={SIDE_WIDTH}>
                    <p className="text-brief"
                        style={{ color: COLOR.prussia, textAlign: "center", fontSize: "1em" }}>
                        Regular Users
                    </p>
                </FixedSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function AudienceRecruitment() {
    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
            <NotFullWidthSection>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Audience recruitment<br />
                    </p>
                    <p className="title-section">
                        Uncovering motivations and issues in forming a connection between Creators & Regular Users
                    </p>
                    <p className="text-text">
                        <br />
                        We sent out screeners via email to both two group of users from the data we got from Knowunity team. After collecting the data from our screener questionnaire, based on people's activeness, we decided to target people who meet the following requirements. We recruited 10 participants (5 for creators and 5 for regular users) from the screener respondents.
                        <br /><br />
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMinColumn={1} gridMaxColumn={2}>
                <GridCell>
                    <FullWidthSection fadedIn={false}>
                        <FixedSectionCell>
                            <ProfileImg character="girl" set={1} size={PROFILE_SIZE.small} />
                        </FixedSectionCell>
                        <FixedSectionCell width="2em" />
                        <GrowSectionCell>
                            <p className="text-brief"
                                style={{ color: COLOR.prussia, fontSize: "1em" }}>
                                Creators
                            </p>
                        </GrowSectionCell>
                    </FullWidthSection>
                    <FullWidthSection fadedIn={false}>
                        <p className="text-text">
                            <ul>
                                <li>Lighthouse Creators or a part of the Knowunity Student Leader Program (on the verge of attaining Lighthouse Creator status. </li>
                                <li>iOS user.</li>
                            </ul>
                        </p>
                    </FullWidthSection>
                </GridCell>
                <GridCell>
                    <FullWidthSection fadedIn={false}>
                        <FixedSectionCell>
                            <ProfileImg character="boy" set={2} size={PROFILE_SIZE.small} />
                        </FixedSectionCell>
                        <FixedSectionCell width="2em" />
                        <GrowSectionCell>
                            <p className="text-brief"
                                style={{ color: COLOR.prussia, fontSize: "1em" }}>
                                Regular Users
                            </p>
                        </GrowSectionCell>
                    </FullWidthSection>
                    <FullWidthSection fadedIn={false}>
                        <p className="text-text">
                            <ul>
                                <li>Active on the platform, at least 3 days in the past week.</li>
                                <li>Not a creator themselves.</li>
                                <li>Recently followed a Lighthouse Creator within 2 weeks (ideally).</li>
                                <li>iOS user.</li>
                            </ul>
                        </p>
                    </FullWidthSection>
                </GridCell>
            </SectionGrid >
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />

        </>
    );
}

function FindingAndRecommendations() {
    function CardWithBulletPoints({ title, bullets = [] }) {
        return (
            <CardCell>
                <p className="text-bond">
                    {title}
                </p>
                <ul style={{ paddingInlineStart: "1.5em" }}>
                    {bullets.map((b, _) => <li>
                        <p className="text-quote">{b}</p>
                    </li>)}
                </ul>
            </CardCell>
        );
    }

    return (
        <SectionGrid
            gridMaxColumn={2} gridMinColumn={1}
            gridRowGap={4}
            verticalPadding={SECTION_PADDING.DEFAULT}
            backgroundColor={COLOR.prussia} >
            <GridCell startPosition={1} endPosition={-1}>
                <p className="title-section" style={{ color: "white" }}>Findings & Recommendations</p>
                <p className="text-text" style={{ color: "white" }}>
                    Overall, we have 6 major findings revolved around 4 topics:
                    <br /><br />
                </p>
            </GridCell>
            <CardWithBulletPoints title="📍Lighthouse creators' self-positioning"
                bullets={["Lighthouse creators aren't prioritizing follower growth as anticipated: They value an \"authentic\" community.",]} />
            <CardWithBulletPoints title="📝 Note discovery"
                bullets={["Users seek relevant notes, but there's a gap in lighthouse creators' notes reaching them.",]} />
            <CardWithBulletPoints title="🧪 Subject focus"
                bullets={["In-app engagement relates to specific subjects, but creator profiles lack visibility of subject expertise.",
                    "Creators struggle to efficiently grasp their audience's needs for notes.",]} />
            <CardWithBulletPoints title="🗨️ Group chat"
                bullets={["Creators prioritize group chat connections, but current promotion methods are limited.",
                    "Users focus on group chat Q&A,  yet the hidden question reaction feature hinders engagement.",]} />
            <GrowSectionCell />
        </SectionGrid >
    );
}

function Findings1() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Finding 1<br />
                    </p>
                    <p className="title-section">
                        Lighthouse creators aren't prioritizing follower growth as anticipated: They value an "authentic" community.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridRowGap={4}
                alignItem="center">
                <GridCell>
                    <p className="text-text">
                        Lighthouse values authenticity and building connections with people , and don't identify themselves as influencer, or experts, or someone with a huge following.
                    </p>
                    <br />
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
                </GridCell>
                <GridCell>
                    <FullWidthSection fadedIn={false}>
                        <GrowSectionCell />
                        <ProfileImg character="girl" set={1} size={PROFILE_SIZE.big} />
                        <GrowSectionCell />
                    </FullWidthSection>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Recommendation1() {
    return (
        <>
            <NotFullWidthSection backgroundColor={COLOR.baby} verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Recommendation 1<br />
                    </p>
                    <p className="title-section">
                        Reconsider lighthouse creators' market positioning: Emphasize their role as super helpers rather than promoting them solely as influencers.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
        </>
    );
}

function Findings2() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Finding 2<br />
                    </p>
                    <p className="title-section">
                        Users seek relevant notes, but there's a gap in Lighthouse creators' content reaching them.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridRowGap={4}
                alignItem="center">
                <GridCell>
                    <p className="text-text">
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
                    </p>
                    <br />
                    <FullWidthSection fadedIn={false}>
                        <ProfileImg character="girl" set={1} size={PROFILE_SIZE.small} />
                        <FixedSectionCell width="2em" />
                        <Quote>
                            "I don't know how to promote because I don't try it. I just post notes and hope that it gets to people who are interested in."<br />
                            - Lighthouse creator
                        </Quote>
                    </FullWidthSection>
                    <br />
                    <FullWidthSection fadedIn={false}>
                        <Quote>
                            "I have to check my following list to see if they have new notes published. It would be helpful if I can see more easily. "<br />
                            - Regular User
                        </Quote>
                        <FixedSectionCell width="2em" />
                        <ProfileImg character="boy" set={2} size={PROFILE_SIZE.small} />
                    </FullWidthSection>
                </GridCell>
                <GridCell>
                    <FullWidthSection fadedIn={false}>
                        <GrowSectionCell />
                        <CardImageCell img={ImageFullPath("Finding2_1.png")} width="50%"
                            shadow={false} annotation={"Current Search tab"} />
                        <GrowSectionCell />
                    </FullWidthSection>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Recommendation2() {
    return (
        <>
            <NotFullWidthSection backgroundColor={COLOR.baby} verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Recommendation 2<br />
                    </p>
                    <p className="title-section">
                        Add a "following & explore" filter to Search scrolling and optimize the algorithm for better exploration.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                backgroundColor={COLOR.baby}
                gridMaxColumn={2} gridMinColumn={1}
                gridRowGap={4}
                alignItem="center">
                <CardImageCell img={ImageFullPath("Recommendation2_1.png")} shadow={false}
                    annotation={"Recommended Search tab"} annotationOffset="-24%" />
                <GridCell>
                    <p className="text-text">
                        <b>Adding a filter including “following” and "explore"</b>
                        <ul>
                            <li>Help users choose the types of contents source: either keep up with who they followed of explore new creators, helping increase content exposure of both followed and unfollowed ones</li>
                        </ul>
                    </p>
                    <br /><br /><br />
                    <p className="text-text">
                        <b>Optimize the current algorithm to intrigue users' interest in explore more notes here</b>
                        <ul>
                            <li>promote content from creators who meet lighthouse criteria</li>
                            <li>provide content based on regular users' interest</li>
                            <li>avoid providing repeating content </li>
                        </ul>
                        This will increase the opportunity for them to discover notes from lighthouse knowers and build connection with them
                    </p>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.baby} />
        </>
    );
}

function Findings3() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Finding 3<br />
                    </p>
                    <p className="title-section">
                        In-app engagement relates to specific subjects, but creator profiles lack visibility of subject expertise.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridRowGap={4}
                alignItem="center">
                <GridCell>
                    <p className="text-text">
                        <b>Subject expertise remains unapparent in creators' profile bio.</b>
                        <ul>
                            <li>Users follow creators for subject-specific notes, and want to see their subject specialty in profile. (5/5)</li>
                            <li>Lighthouse creators post notes on many subjects, but hesitant to refer to themselves as experts in one area - they do it for the rewarding experience of helping others. (5/5)</li>
                        </ul>
                    </p>
                    <br />
                    <FullWidthSection fadedIn={false}>
                        <Quote>
                            "The primary reason I follow someone is if he has consistent notes on subjects I need, rather than uploading a bunch of different subjects randomly."
                        </Quote>
                        <FixedSectionCell width="2em" />
                        <ProfileImg character="boy" set={3} size={PROFILE_SIZE.small} />
                    </FullWidthSection>
                    <br />
                    <p className="text-text">
                        <b>Subject-based content classification is in need.</b>
                        <ul>
                            <li>Regular users struggle to efficiently find specific subject notes in creators' profiles (4/5).</li>
                            <li>Creators expect an easier way to classify their notes by subject.</li>
                        </ul>
                    </p>
                    <br />
                    <FullWidthSection fadedIn={false}>
                        <Quote>
                            "He has 60 notes, so that would be a long time scrolling. I'm taking biology. Does he have biology? I guess maybe a filter will help." <br />
                            - Regular user
                        </Quote>
                        <FixedSectionCell width="2em" />
                        <ProfileImg character="boy" set={1} size={PROFILE_SIZE.small} />
                    </FullWidthSection>
                    <br />
                    <FullWidthSection fadedIn={false}>
                        <ProfileImg character="girl" set={2} size={PROFILE_SIZE.small} />
                        <FixedSectionCell width="2em" />
                        <Quote>
                            "I would like to have better classification system in my notes."
                            - Creator
                        </Quote>
                    </FullWidthSection>
                </GridCell>
                <GridCell>
                    <FullWidthSection fadedIn={false}>
                        <GrowSectionCell />
                        <CardImageCell img={ImageFullPath("Finding3_1.png")} width="50%"
                            shadow={false} annotation={"Current Search tab"} />
                        <GrowSectionCell />
                    </FullWidthSection>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Recommendation3() {
    return (
        <>
            <NotFullWidthSection backgroundColor={COLOR.baby} verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Recommendation 3<br />
                    </p>
                    <p className="title-section">
                        Optimize creators' profile by introducing a "subject leader" badge and adding a subject filter in content collection.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                backgroundColor={COLOR.baby}
                gridMaxColumn={2} gridMinColumn={1}
                gridRowGap={4}
                alignItem="center">
                <CardImageCell img={ImageFullPath("Recommendation3_1.png")} shadow={false}
                    annotation={"Recommended Search tab"} annotationOffset="-24%" />
                <GridCell>
                    <p className="text-text">
                        <b>Introduce a “subject leader” badge in creators' bio</b>
                        <ul>
                            <li>Allow creators to gain a “subject leader” status in specific areas and display it in their bio as a signifier for potential followers to know they can help in this subject.</li>
                        </ul>
                    </p>
                    <br /><br /><br />
                    <p className="text-text">
                        <b>Add a subject filter in content collection on profiles</b>
                        <ul>
                            <li>Add a subject tag filter will help users to know what contents the knower at a glance, and filter out all contents at a simple clicking. </li>
                            <li>Users would expect to see more contents in this subject upcoming. </li>
                            <li>For creators, they can organize their contents more efficiently and clearly.</li>
                        </ul>
                    </p>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.baby} />
        </>
    );
}

function Findings4() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Finding 4<br />
                    </p>
                    <p className="title-section">
                        Creators struggle to efficiently grasp their audience's needs for notes.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridRowGap={4}
                alignItem="center">
                <GridCell>
                    <p className="text-text">
                        <ul>
                            <li>Lighthouse creators tailor notes based on followers' needs (4/5), while they presently rely on guessing or responding to group chat requests (3/5).</li>
                            <li>2 of 5 Lighthouse creators wish to have a request feature for users to propose their need.</li>
                        </ul>
                    </p>
                    <br />
                    <FullWidthSection fadedIn={false}>
                        <ProfileImg character="girl" set={1} size={PROFILE_SIZE.small} />
                        <FixedSectionCell width="2em" />
                        <Quote>
                            "I ask people, so some people will be like, hey, can you write me a note about blah, blah, blah and then I'll ask them, would you rather I handwrite it or type it up and I'll do it like however they prefer."
                        </Quote>
                    </FullWidthSection>
                    <br />
                    <FullWidthSection fadedIn={false}>
                        <Quote>
                            "I hope to have a section where you ask a specific person for notes or ask a specific person for more information based on their notes."
                        </Quote>
                        <FixedSectionCell width="2em" />
                        <ProfileImg character="girl" set={2} size={PROFILE_SIZE.small} />
                    </FullWidthSection>
                </GridCell>
                <GridCell>
                    <FullWidthSection fadedIn={false}>
                        <GrowSectionCell />
                        <CardImageCell img={ImageFullPath("Finding4_1.png")} width="50%"
                            shadow={false} annotation={"Current Search tab"} />
                        <GrowSectionCell />
                    </FullWidthSection>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Recommendation4() {
    return (
        <>
            <NotFullWidthSection backgroundColor={COLOR.baby} verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Recommendation 4<br />
                    </p>
                    <p className="title-section">
                        Add "Ask" section in creator's profile, especially "subject leaders".
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                backgroundColor={COLOR.baby}
                gridMaxColumn={2} gridMinColumn={1}
                gridRowGap={4}
                alignItem="center">
                <CardImageCell img={ImageFullPath("Recommendation4_1.png")} shadow={false}
                    annotation={"Recommended Search tab"} annotationOffset="-24%" />
                <GridCell>
                    <p className="text-text">
                        Including an "Ask" section as an access point for users to leave requests on notes will assist creators in efficiently understanding users' expectations for content.
                    </p>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.baby} />
        </>
    );
}

function Findings5() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Finding 5<br />
                    </p>
                    <p className="title-section">
                        Creators prioritize group chat connections, but the current promotion method is limited.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection>
                <p className="text-text">
                    <ul>
                        <li>Lighthouse creators check their top group chats on a daily basis (4/5) and they value authentic community interactions with the people they are helping. (5/5)</li>
                        <li>However, they find current promotion method is limited: currently they can only promote groups through relevant groups (5/5) yet some feel like they are spamming. (3/5)</li>
                    </ul>
                    <br />
                </p>
            </NotFullWidthSection>
            <NotFullWidthSection>
                <ProfileImg character="girl" set={1} size={PROFILE_SIZE.small} />
                <FixedSectionCell width="2em" />
                <Quote>
                    "You can actually have engagement with the person you're helping in group chat."
                </Quote>
            </NotFullWidthSection>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Recommendation5() {
    return (
        <>
            <NotFullWidthSection backgroundColor={COLOR.baby} verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Recommendation 5<br />
                    </p>
                    <p className="title-section">
                        Add a link to the creator’s group chat under same subject in profile folder.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection backgroundColor={COLOR.baby}>
                <GrowSectionCell />
                <CardImageCell img={ImageFullPath("Recommendation5_1.png")} shadow={false} />
                <GrowSectionCell />
            </NotFullWidthSection>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.baby} />
        </>
    );
}

function Findings6() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Finding 6<br />
                    </p>
                    <p className="title-section">
                        Users focus on group chat Q&A,  yet the hidden question reaction feature hinders engagement.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridRowGap={4}
                alignItem="center">
                <GridCell>
                    <p className="text-text">
                        <ul>
                            <li>Regular users use group chats mainly for viewing and answering questions, and quality of the Q&A impacts their willingness to join the group (5/5) </li>
                        </ul>
                    </p>
                    <br />
                    <FullWidthSection fadedIn={false}>
                        <ProfileImg character="boy" set={3} size={PROFILE_SIZE.small} />
                        <FixedSectionCell width="2em" />
                        <Quote>
                            "If there's a lot of people who are asking & answering questions that I may have, I will join that chat. But if people just talking about unrelated stuff, then that turns me off from joining."
                            - Regular user
                        </Quote>
                    </FullWidthSection>
                </GridCell>
                <GridCell>
                    <FullWidthSection fadedIn={false}>
                        <GrowSectionCell />
                        <CardImageCell img={ImageFullPath("Finding6_1.png")} width="50%"
                            shadow={false} annotation={"Current Search tab"} />
                        <GrowSectionCell />
                    </FullWidthSection>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Recommendation6() {
    return (
        <>
            <NotFullWidthSection backgroundColor={COLOR.baby} verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.prussia }}>
                        Recommendation 6<br />
                    </p>
                    <p className="title-section">
                        Surface the reaction feature of group chat Q&A for more discoverable.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                backgroundColor={COLOR.baby}
                gridMaxColumn={2} gridMinColumn={1}
                gridRowGap={4}
                alignItem="center">
                <CardImageCell img={ImageFullPath("Recommendation6_1.png")} shadow={false}
                    annotation={"Recommended Search tab"} annotationOffset="-24%" />
                <GridCell>
                    <p className="text-text">
                        Make the reaction feature visible to provide an easy way to participate in Q&A: <br />
                        Users won't have to propose questions or answers; they can simply express having the same question with a click.
                    </p>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.baby} />
        </>
    );
}

function FinalThoughts() {
    return (
        <NotFullWidthSection
            verticalPadding={SECTION_PADDING.DEFAULT}
            backgroundColor={COLOR.prussia} >
            <GrowSectionCell />
            <FixedSectionCell>
                <p className="title-section" style={{ color: "white" }}>Final Thoughts</p>
            </FixedSectionCell >
            <GrowSectionCell />
        </NotFullWidthSection >
    );
}

function TakeAways() {
    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
            <SectionGrid
                gridMaxColumn={3} gridMinColumn={2}
                verticalPadding={SECTION_PADDING.DEFAULT}>
                <GridCell>
                    <p className="title-section">Takeaways</p>
                </GridCell>
                <GridCell startPosition="span 2">
                    <p className="text-text">
                        My team and I delivered our presentation to Knowunity stakeholders and they were very impressed by our work as they gained a better understanding of <b>what lighthouse creators value </b>and<b> how regular users interact with creators</b>. Our recommendation 1 particularly led to their reconsideration about strategy on lighthouse creators' criteria.
                        <br /><br />
                    </p>
                    <Quote>
                        "I'm thinking whether we should remove gaining 100 followers as one of criteria."<br />
                        - Knowunity PM
                    </Quote>
                    <p className="text-text">
                        <br />
                        They decided to adopt all of our recommendations and implement in the upcoming development. We will receive the improvement metrics soon!
                    </p>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection>
                <CardImageCell img={ImageFullPath("Takeaways.png")} />
            </NotFullWidthSection>
        </>
    );
}

export default Knowunity;
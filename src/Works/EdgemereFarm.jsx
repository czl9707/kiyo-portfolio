import React from "react";
import WorksHeader from '../Components/Works/WorksHeader.jsx';
import { FullWidthSection, NotFullWidthSection, GrowSectionCell, FixedSectionCell, SECTION_PADDING } from "../Components/Section.tsx";
import { SectionGrid, GridCell } from "../Components/SectionGrid.jsx";
import { CardCell, CardImageCell } from "../Components/Works/CardCell.jsx";

const ImageFullPath = (p) => `/Works/EdgemereFarm/${p}`;

const COLOR = {
    mint: "#EEF5EE",
    racing: "#F7F7F7",
    seeweed: "#C0CD8C",
    dark: "#004B32",
    yogurt: "#FCECC3",
}

const PROTOTYPELINK = "https://www.figma.com/proto/QcqFyd52RajavhEKPW07TQ/Edgemere-Farm-_-Kiyo?page-id=2308%3A17625&node-id=2308-19281&viewport=6595%2C956%2C0.36&t=3bz5Tbgz0FOAT2xk-1&scaling=min-zoom";
const DOCLINK = "https://www.figma.com/proto/QcqFyd52RajavhEKPW07TQ/Edgemere-Farm-_-Kiyo?page-id=6840%3A2911&node-id=6840-8246&viewport=1119%2C-200%2C0.08&t=5oNOZrdrYfPqLALg-1&scaling=contain&starting-point-node-id=6840%3A8246";

const NavigateToPrototype = () => window.open(PROTOTYPELINK, '_blank', 'noopener,noreferrer');
const NavigateToDoc = () => window.open(DOCLINK, '_blank', 'noopener,noreferrer');

function ProtoTypesButton() {


    return (
        <div onClick={NavigateToPrototype} className="button"
            style={{
                backgroundColor: COLOR.dark,
                borderRadius: "0.5em",
                padding: "0.4em 1em",
                display: "inline-block",
                cursor: "pointer",
            }}>
            <p className="text-text" style={{ color: "white" }}><b>
                View Clickable Prototypes
            </b></p>
        </div>
    );
}

function Quote({ children }) {
    return (
        <p className="text-text" style={{
            borderLeft: `2px ${COLOR.seeweed} solid`,
            paddingLeft: "1em",
            color: "grey",
            fontSize: ".8em"
        }}>
            <i>
                {children}
            </i>
        </p>
    );
}


function EdgemereFarm() {
    return (
        <>
            <style>
                {
                    `
                        u {cursor: pointer;}
                        .button:hover {box-shadow: var(--primary-shadow);}
                    `
                }
            </style>
            <WorksHeader
                title="Boost Edgemere Farm's community engagment in the digital landscape"
                tags={["User Interview", "Usability", "Online Community",]}
                color={COLOR.mint} />
            <FullWidthSection>
                <img src={ImageFullPath("Intro.png")}
                    alt="Intro.png" width="100%" />
            </FullWidthSection>
            <Intro />
            <ProblemStatement />
            <DiveDeep />
            <ResearchOverview />
            <EcosystemMapAndTargetAudience />
            <KeyInsightsAndDesignStrategy />
            <UserJourney />
            <DesignSketchAndUserTesting />
            <FinalDesign />
            <FinalThoughts />
            <Reflections />
        </>
    );
}

function Intro() {
    function GoalCard({ title, text }) {
        return (
            <CardCell backgroundColor={COLOR.mint} border={false} height="100%">
                <p className="text-brief" style={{ fontWeight: 500 }}>
                    {title} <br />
                </p>
                <p className="text-text">
                    <ul style={{ margin: ".5em 0" }}><li>
                        {text}
                    </li></ul>
                </p>
            </CardCell>
        );
    }

    return (
        <>
            <SectionGrid gridMinColumn={1} gridMaxColumn={2}
                gridColumnGap={2} gridRowGap={2}
                verticalPadding={SECTION_PADDING.DEFAULT}>
                <GridCell>
                    <p className="text-brief" style={{ color: COLOR.dark }}>
                        Duration<br />
                    </p>
                    <p className="text-text">
                        Sep 2023 - Dec 2023 (14 weeks)
                    </p>
                    <br /><br />
                    <p className="text-brief" style={{ color: COLOR.dark }}>
                        Team<br />
                    </p>
                    <p className="text-text">
                        4 UX designers
                    </p>
                    <br />
                </GridCell>
                <GridCell>
                    <p className="text-brief" style={{ color: COLOR.dark }}>
                        My Contribution<br />
                    </p>
                    <p className="text-text">
                        <ul>
                            <li>
                                Led the exploratory research (ecosystem map, social media audit, competitive analysis and user interview)
                            </li>
                            <li>
                                Proposed the design concept
                            </li>
                            <li>
                                Led the wireframe sketch and design iteration
                            </li>
                        </ul>
                    </p>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.dark }}>
                        Overview<br />
                    </p>
                    <p className="title-section">
                        Enhance the Edgemere local community by redesigning the browsing experience on the EF website.
                    </p>
                    <br />
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.MINOR}>
                <GrowSectionCell>
                    <p className="text-text">
                        <b>About our client: Edgemere Farm</b>
                        <br />
                        Edgemere Farm is a volunteer-run, zero-profit urban farm in Rockaway, NY with a mission to provide produce, open space, and education to the historically low-income community.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.MINOR}>
                <GrowSectionCell>
                    <p className="text-text">
                        <b>Organizational Goal</b>
                        <br />
                        As we redesigned the website, we focused on these four organizational goals:
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection height={SECTION_PADDING.MINOR} />
            <SectionGrid gridMinColumn={1} gridMaxColumn={2}
                gridColumnGap={1} gridRowGap={1}>
                <GoalCard
                    title={"Tell Edgemere Farm's Story"}
                    text={"Edgemere Farm seeks to showcase their mission, history, team, and achievements."}
                />
                <GoalCard
                    title={"Educate Users"}
                    text={"EF seeks to improve people's awareness about food justice and sustainable farming."}
                />
                <GoalCard
                    title={"Encourage Participaton"}
                    text={"EF prioritizes community participation and hope to get people ivolved."}
                />
                <GoalCard
                    title={"Facilitate Support"}
                    text={"As a zero-profit org, EF relies on the assistance of volunteers, donations, and collaborative partnerships."}
                />
            </SectionGrid>
            <SectionGrid gridMinColumn={1} gridMaxColumn={2}
                gridColumnGap={2} gridRowGap={2} alignItem="center"
                verticalPadding={SECTION_PADDING.DEFAULT}>
                <GridCell>
                    <p className="text-text">
                        <b> Why redesigning? </b><br />
                    </p>
                    <br />
                    <p className="text-text">
                        The current website with <b>unstructured information</b> and <b>absent navigation</b> showed a weak visual hierarchy and low readability, making it difficulty for users to locate key information and get a quick understanding of contents at a glance.
                    </p>
                </GridCell>
                <CardImageCell img={ImageFullPath("CurrentWebsite.gif")} annotation={"Current Website"} />
            </SectionGrid>
        </>
    );
}

function ProblemStatement() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.mint}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.dark }}>
                        Problem Statement
                        <br />
                    </p>
                    <p className="title-section">
                        How might we redesign the website to present EF' story & impact, and motivate user engagement?
                        <br />
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>

            <SectionGrid
                gridMaxColumn={3} gridMinColumn={2}
                verticalPadding={SECTION_PADDING.DEFAULT}>
                <GridCell startPosition="1">
                    <p className="title-section">
                        Final Delivery<br />
                    </p>
                </GridCell>
                <GridCell startPosition="span 2">
                    <p className="text-text">
                        By implementing a user-centric approach, my team successfully enhanced the website's usability, accessibility and aesthetics.
                    </p>
                    <br />
                    <p className="text-text">
                        <b>
                            Our final delivery included:
                        </b>
                        <ul>
                            <li>
                                16 new-designed pages & clickable prototypes <u onClick={NavigateToPrototype}>clickable prototypes</u>
                            </li>
                            <li>Visual design guidelines and component library</li>
                            <li>Content strategy guidance</li>
                            <li>
                                <u onClick={NavigateToDoc}>A full documentation</u> of research with meta-data and insights
                            </li>
                        </ul>
                    </p>
                </GridCell>
            </SectionGrid >

            <NotFullWidthSection>
                <GrowSectionCell />
                <FixedSectionCell >
                    <u className="title-section-sub" style={{ textAlign: "center" }}>
                        <u onClick={NavigateToPrototype}>
                            Explore the final prototypes
                        </u>
                    </u>
                </FixedSectionCell>
                <FixedSectionCell width="6em">
                    <img style={{ height: "100%", padding: "0 1em" }}
                        src={ImageFullPath("FigmaLogo.png")} alt="FigmaLogo.png"
                        onClick={NavigateToPrototype} />
                </FixedSectionCell>
                <GrowSectionCell />
            </NotFullWidthSection>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <img style={{ width: "100%" }} onClick={NavigateToPrototype}
                        src={ImageFullPath("FinalPrototype.png")} alt="FinalPrototype.png" />
                </GrowSectionCell>
            </NotFullWidthSection>
        </>
    )
}

function ResearchOverview() {
    function MetricCard({ num, title, text }) {
        return (
            <CardCell backgroundColor={COLOR.mint} border={false} height="100%">
                <p className="title-page" style={{ textAlign: "center" }} >
                    {num}
                </p>
                <p className="text-brief" style={{ textAlign: "center" }} >
                    {title}
                </p>
                <div style={{ height: ".5em" }} />
                <p className="text-text" style={{ textAlign: "center" }} >
                    {text}
                </p>
            </CardCell>
        )
    }
    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
            <NotFullWidthSection >
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.dark }}>
                        Research Overview<br />
                    </p>
                    <p className="title-section">
                        A solid research foundation of our design.
                    </p>
                    <br />
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid MinColumn={2} gridMaxColumn={4}
                gridColumnGap={1} gridRowGap={1} alignItem="center">
                <MetricCard num={3} title={"Client Meetings"} text={<>
                    2 client meetings <br />
                    1 in-person volunteering
                </>} />
                <MetricCard num={5} title={"Desktop Research"} text={<>
                    Ecosystem Map <br />
                    Technical Analysis <br />
                    Social Media Audit <br />
                    Competitive Analysis <br />
                    Literature Review <br />
                </>} />
                <MetricCard num={5} title={"User Interviews"} text={<>
                    1 local restaurant owner <br />
                    2 long term volunteers <br />
                    1 co-founder <br />
                    1 local artist <br />
                </>} />
                <MetricCard num={6} title={"Usability Testings"} text={<>
                    2 internal stakeholders <br />
                    4 new users <br />
                </>} />
            </SectionGrid >
            <NotFullWidthSection verticalPadding={SECTION_PADDING.MINOR}>
                <p className="text-text">
                    *Find the full documentation of research process, meta-data and insights <u onClick={NavigateToDoc}>here</u>.
                </p>
            </NotFullWidthSection>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    )
}

function EcosystemMapAndTargetAudience() {
    return (
        <>
            <NotFullWidthSection >
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.dark }}>
                        Ecosystem Map & Target Audience<br />
                    </p>
                    <p className="title-section">
                        Design for two user groups:
                        local community members (primarily engagment) and new users (primarily browsing).
                    </p>
                    <br />
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid verticalPadding={SECTION_PADDING.DEFAULT}
                gridMaxColumn={2} gridMinColumn={1} gridColumnGap={2}
                alignItem="center">
                <GridCell>
                    <p className="text-text">
                        I created an ecosystem map to analyze the participants in both online and on-site interactions and their relationships with the farm. EF primarily caters to local residents, supplemented by a mix of distant visitors and individuals engaging with us online.
                        <br /><br />
                        <b>
                            Target Audience Group:
                            <ul>
                                <li>Remote users / Community newcomer (Primarily browsing)</li>
                                <li>Local community members (Primarily engaging)</li>
                            </ul>

                        </b>
                    </p>
                </GridCell>
                <CardImageCell img={ImageFullPath("EcosystemMap.png")} shadow={false}
                    annotation="Ecosystem Map: How do stakeholders work together" />
            </SectionGrid>
        </>
    );
}

function KeyInsightsAndDesignStrategy() {
    function Pointer() {
        return (
            <div style={{
                width: "100%", height: "100%",
                display: "inline-flex", alignItems: "center"
            }}>
                <div style={{
                    minWidth: "100%", height: "2px",
                    backgroundColor: COLOR.dark,
                }} />
                <div style={{
                    width: "0px", height: "0px", backgroundColor: COLOR.dark, zIndex: 1,
                    borderRadius: "6px", border: `6px ${COLOR.dark} solid`,
                    transform: "translateX(-50%)"
                }} />
            </div>
        );
    }

    return (
        <>
            <NotFullWidthSection >
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.dark }}>
                        Key Insights & Design Strategy<br />
                    </p>
                    <p className="title-section">
                        What motivates users to engage actively?
                    </p>
                    <br />
                    <p className="text-text">
                        We conducted 5 Zoom interviews with various engagers at the farm contributing as volunteers, customers or business partners. These discussions provided insights into local residents’ motivation to get engaged. Corresponding to these two motivations, we broke down our design goals into two design strategies.
                    </p>
                    <br />
                </GrowSectionCell>
            </NotFullWidthSection>

            <NotFullWidthSection stretch={true}>
                <CardCell width="62%" backgroundColor={COLOR.mint} border={false}>
                    <FullWidthSection fadedIn={false}>
                        <FixedSectionCell width="3em">
                            <img src={ImageFullPath("Stars.png")} alt="Stars.png"
                                style={{ width: "100%" }} />
                        </FixedSectionCell>
                        <FixedSectionCell width="2em" />
                        <GrowSectionCell>
                            <p className="title-text">
                                Understanding and valuing EF's mission and story inspires local residents to advocate for and support Edgemere Farm.
                            </p>
                        </GrowSectionCell>
                    </FullWidthSection>
                    <FullWidthSection height={SECTION_PADDING.MINOR} fadedIn={false} />
                    <FullWidthSection fadedIn={false}>
                        <Quote>
                            "I understand how hard farming is. So I really admire what they're doing. I would definitely want to support them as much as I can. "
                            <br /><br />
                            - Matt, Local restaurant owner
                        </Quote>
                    </FullWidthSection>
                </CardCell>
                <FixedSectionCell width="6%">
                    <Pointer />
                </FixedSectionCell>
                <CardCell width="32%" backgroundColor={COLOR.yogurt} border={false}>
                    <p className="title-section-sub" style={{ color: COLOR.dark }}>
                        Design Strategy 1
                    </p>
                    <br />
                    <p className="title-text">
                        Crafting a delightful browsing experience for easy comprehension of EF's mission, story and impact.
                    </p>
                </CardCell>
            </NotFullWidthSection>

            <NotFullWidthSection height={SECTION_PADDING.MINOR} />

            <NotFullWidthSection stretch={true}>
                <CardCell width="62%" backgroundColor={COLOR.mint} border={false}>
                    <FullWidthSection fadedIn={false}>
                        <FixedSectionCell width="3em">
                            <img src={ImageFullPath("Friends.png")} alt="Friends.png"
                                style={{ width: "100%" }} />
                        </FixedSectionCell>
                        <FixedSectionCell width="2em" />
                        <GrowSectionCell>
                            <p className="title-text">
                                Connecting with a diverse and inclusive community inspires active engagement among local residents.                            </p>
                        </GrowSectionCell>
                    </FullWidthSection >
                    <FullWidthSection height={SECTION_PADDING.MINOR} fadedIn={false} />
                    <FullWidthSection fadedIn={false}>
                        <Quote>
                            "What I enjoy most is to interact with folks, neighbors and kids. EF is a space getting people together in a nice environment."
                            <br /><br />
                            - Jeff, Long-term volunteer
                        </Quote>
                    </FullWidthSection>
                </CardCell>
                <FixedSectionCell width="6%">
                    <Pointer />
                </FixedSectionCell>
                <CardCell width="32%" backgroundColor={COLOR.yogurt} border={false}>
                    <p className="title-section-sub" style={{ color: COLOR.dark }}>
                        Design Strategy 2
                    </p>
                    <br />
                    <p className="title-text">
                        Building an engaging platform that strengthens community bonding - to facilitate participation and support.
                    </p>
                </CardCell>
            </NotFullWidthSection>
        </>
    );
}

function UserJourney() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.dark }}>
                        User Journey<br />
                    </p>
                    <p className="title-section">
                        From a newcomer to active supporter
                    </p>
                    <br />
                    <p className="text-text">
                        I structured the information architecture based on insights we gained from the research.
                    </p>
                    <br />
                    <img style={{ width: "100%" }}
                        src={ImageFullPath("FromANewcomerToActiveSupporter_1.png")} alt="FromANewcomerToActiveSupporter_1.png" />
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection >
                <GrowSectionCell>
                    <p className="text-text">
                        The information spectrum reflects how we've organized content—from informative elements like EF's mission, story, and daily services to engaging aspects that encourage users to become part of the community.
                        <br /><br />
                        Newcomers initially prioritize information gathering. As they familiarize themselves with EF, their focus shifts toward active participation in daily activities. Increased engagement deepens their understanding of EF's efforts and strengthens their connections with the community, motivating them to become more involved and supportive.                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid verticalPadding={SECTION_PADDING.DEFAULT}
                gridMaxColumn={2} gridMinColumn={1}
                gridColumnGap={3}
                alignItem="center">
                <GridCell>
                    <img style={{ width: "100%" }}
                        src={ImageFullPath("FromANewcomerToActiveSupporter_2.png")} alt="FromANewcomerToActiveSupporter_2.png" />
                </GridCell>
                <GridCell>
                    <img style={{ width: "100%" }}
                        src={ImageFullPath("FromANewcomerToActiveSupporter_3.png")} alt="FromANewcomerToActiveSupporter_3.png" />
                </GridCell>
            </SectionGrid>
        </>
    );
}

function DesignSketchAndUserTesting() {
    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.racing} />
            <SectionGrid backgroundColor={COLOR.racing}
                gridMaxColumn={3} gridMinColumn={2}>
                <GridCell>
                    <p className="title-section">Design Sketch & User Testing</p>
                </GridCell>
                <GridCell startPosition="span 2">
                    <p className="text-text">
                        My team and I developed 16 new pages following our newly proposed information architecture.
                        <br />
                        We carried out 7 usability tests involving 5 new users and 2 internal stakeholders to gather insights for design iteration. We recruited participants aged 25-70 to ensure a diverse range of perspectives.
                    </p>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.MINOR} backgroundColor={COLOR.racing} />
            <NotFullWidthSection backgroundColor={COLOR.racing}>
                <CardImageCell img={ImageFullPath("DesignSketchUserTesting.png")}
                    shadow={false} annotation={<p>
                        Low-fi Wireframs & Feedback from Usability Testing <br />
                        <u>(View Details)</u>
                    </p>} />
            </NotFullWidthSection>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.racing} />
        </>
    )
}

function FinalDesign() {
    return (
        <>
            <SectionGrid backgroundColor={COLOR.mint}
                verticalPadding={SECTION_PADDING.DEFAULT}
                gridMaxColumn={3} gridMinColumn={2}>
                <GridCell>
                    <p className="title-section">Final Design</p>
                    <br />
                    <ProtoTypesButton />
                </GridCell>
                <GridCell startPosition="span 2">
                    <p className="text-text">
                        We iterated the wireframes into hi-fi prototypes corresponding to the insights we gained from the user testing. Feel free to explore the clickable prototypes to see the full scope of our design work :)
                        <br /><br />
                        <b>Below are 3 representative pages in a typical user journey:</b>
                        <ul>
                            <li>Homepage</li>
                            <li>Our Mission</li>
                            <li>Volunteer</li>
                        </ul>
                    </p>
                </GridCell>
            </SectionGrid>

            <NotFullWidthSection backgroundColor={COLOR.mint}>
                <CardCell border={false}>
                    <p className="title-section-sub">
                        Homepage
                    </p>
                    <br />
                    <p className="text-text">
                        Homepage provides new users with the first impression and offering community members easy access to get involved into multiple actions.
                    </p>
                </CardCell>
            </NotFullWidthSection>
            <NotFullWidthSection backgroundColor={COLOR.mint}
                verticalPadding={SECTION_PADDING.MINOR}>
                <img style={{ width: "110%", transform: "translateX(-4%)" }}
                    src={ImageFullPath("HomepagePage.png")} alt="HomepagePage.png" />
            </NotFullWidthSection>

            <NotFullWidthSection backgroundColor={COLOR.mint}>
                <CardCell border={false}>
                    <p className="title-section-sub">
                        Our Mission
                    </p>
                    <br />
                    <p className="text-text">
                        Our Mission page offers users an in-depth exploration of Edgemere Farm's story and philosophy, designed to both enlighten and inspire.                    </p>
                </CardCell>
            </NotFullWidthSection>
            <NotFullWidthSection backgroundColor={COLOR.mint}
                verticalPadding={SECTION_PADDING.MINOR}>
                <img style={{ width: "110%", transform: "translateX(-4%)" }}
                    src={ImageFullPath("OurMissionPage.png")} alt="OurMissionPage.png" />
            </NotFullWidthSection>

            <NotFullWidthSection backgroundColor={COLOR.mint}>
                <CardCell border={false}>
                    <p className="title-section-sub">
                        Volunteer
                    </p>
                    <br />
                    <p className="text-text">
                        Volunteer page serves as an inspiring platform to motivate user engagement in this volunteer-run farm.                    </p>
                </CardCell>
            </NotFullWidthSection>
            <NotFullWidthSection backgroundColor={COLOR.mint}
                verticalPadding={SECTION_PADDING.MINOR}>
                <img style={{ width: "110%", transform: "translateX(-4%)" }}
                    src={ImageFullPath("VolunteerPage.png")} alt="VolunteerPage.png" />
            </NotFullWidthSection>

            <NotFullWidthSection backgroundColor={COLOR.mint}>
                <CardCell border={false} width="100%">
                    <p className="title-section-sub" style={{ textAlign: "center" }}>
                        To learn more about other pages...
                    </p>
                    <br />
                    <div style={{ textAlign: "center", width: "100%" }}>
                        <ProtoTypesButton />
                    </div>
                </CardCell>
            </NotFullWidthSection>
            <NotFullWidthSection backgroundColor={COLOR.mint} height={SECTION_PADDING.DEFAULT} />
        </>
    )
}

function DiveDeep() {
    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.MINOR} backgroundColor={COLOR.dark} />
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.dark}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: "white", "textAlign": "center" }}>
                        Let's dive deeper into the process :)
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection height={SECTION_PADDING.MINOR} backgroundColor={COLOR.dark} />
        </>
    )
}

function FinalThoughts() {
    return (
        <NotFullWidthSection
            verticalPadding={SECTION_PADDING.DEFAULT}
            backgroundColor={COLOR.dark} >
            <GrowSectionCell>
                <p className="title-section" style={{ color: "white", textAlign: "center" }}>Final Thoughts</p>
            </GrowSectionCell >
        </NotFullWidthSection >
    );
}

function Reflections() {
    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
            <SectionGrid
                gridMaxColumn={3} gridMinColumn={2}
                verticalPadding={SECTION_PADDING.DEFAULT}>
                <GridCell>
                    <p className="title-section">Reflections</p>
                </GridCell>
                <GridCell startPosition="span 2">
                    <p className="text-text">
                        My team and I delivered a presentation to the founder of Edgemere Farm and received enthusiastic feedback and high praise. Our client mentioned that our research inspired a new perspective on how they view themselves, motivating both their audience and their team.
                        <br /><br />
                    </p>
                    <Quote>
                        "Excellent work! The overall process was professional, friendly and efficient and I was impressed with how quickly and deeply they familiarized themselves with our organization. Their re-design acknowledges our organization's history, is informed by their insightful and in-depth research, and truly represents us while also driving the organization forward."
                        - Vanessa, the founder of Edgemere Farm
                    </Quote>
                    <p className="text-text">
                        <br />
                        The experience of this project has been immensely rewarding for me, beginning with comprehensive user research and culminating in successful outcomes. By addressing user and organizational needs and refining our designs iteratively, we have enhanced community engagement through the website. However, our work isn't finished. We must continue to listen attentively to our audience and stay flexible to meet evolving user needs.
                        <br /><br />
                        This project also opened my eyes to how effectively a virtual website can integrate with in-person services and organizations. The success of this initiative highlights the impact of research-driven design. To deeply empathize with our audience, we served as volunteers to truly experience the user's perspective—an incredible journey!
                    </p>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection>
                <CardImageCell img={ImageFullPath("VolunteerPhoto.png")} width="100%" />
            </NotFullWidthSection>
        </>
    );
}

export default EdgemereFarm;
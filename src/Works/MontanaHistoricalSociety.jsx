import React from "react";
import WorksHeader from '../Components/Works/WorksHeader';
import Overview from "../Components/Works/Overview";
import { FullWidthSection, NotFullWidthSection, GrowSectionCell, FixedSectionCell, SECTION_PADDING } from "../Components/Section";
import { SectionGrid, GridCell } from "../Components/SectionGrid";
import { CardCell, CardImageCell } from "../Components/Works/CardCell";

const ImageFullPath = (p) => `/Works/MontanaHistoricalSociety/${p}`;


const COLOR = {
    jade: "#567582",
    cream: "#FFF4DA",
    skin: "#F7F7F1",
    juice: "#F7DDA4",
}

function MontanaHistoricalSociety() {
    return (
        <>
            <WorksHeader
                title="Evaluating Web analytics and SEO to refine Montana Historical Society's Digital Strategy"
                tags={["Web Analytics", "SEO Audit", "Data Visualization",]}
                color={COLOR.skin} />
            <Overview
                backgroundColor={COLOR.jade}
                titleColor={COLOR.cream}
                img={ImageFullPath("Intro.png")}
                imgOverflow={true}
                content={<>
                    <p className="title-section" style={{ color: "white" }}>
                        Revamp experience within sessions and out of sessions.
                        <br /><br />
                    </p>
                    <p className="text-text" style={{ color: "white" }}>
                        The <u>Montana Historical Society (MHS)</u> is a state agency and nonprofit org dedicated to preserving and promoting the history of Montana State. While its core audience is local, MHS aims to boost traffic by expanding its audience beyond local visitors and tailoring content for a diverse audience, both in and outside Montana.
                        <br /><br />
                        Our team of four digital analysts evaluated the MHS's web analytics data to <b>compare the behaviors of local and non-local audiences</b>, and <b>audited SEO performance</b> to provide improvement suggestions. Furthermore, we developed a dashboard to visually represent the data for ongoing tracking purposes.
                    </p>
                </>}
            />
            <Intro />
            <ResearchQuestion />
            <Methods />
            <FindingsAndRecommendations />
            <Findings1 />
            <Recommendation1 />
            <Findings2 />
            <Recommendation2 />
            <Findings3 />
            <Recommendation3 />
            <Findings4 />
            <Recommendation4 />
            <FinalThoughts />
            <TakeAways />
        </>
    )
}


function Intro() {
    return (
        <>
            <SectionGrid gridMinColumn={1} gridMaxColumn={2}
                gridColumnGap={2} gridRowGap={2}
                verticalPadding={SECTION_PADDING.DEFAULT}>
                <GridCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Duration<br />
                    </p>
                    <p className="text-text">
                        Nov 2023 - Dec 2023 (4 weeks)
                    </p>
                    <br /><br />
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Tool<br />
                    </p>
                    <p className="text-text">
                        Google Analytics, Google Looker Studio, Woorank, Screamingfrog, Google Lighthouse
                    </p>
                </GridCell>
                <GridCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Team<br />
                    </p>
                    <p className="text-text">
                        4 digital analyst
                    </p>
                    <br /><br />
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        My Contribution<br />
                    </p>
                    <p className="text-text">
                        Drafted research plan; identified web analytics findings,
                        assessed the SEO of the website, created dashboard,
                        developed finding and recommendation.
                    </p>
                </GridCell>
            </SectionGrid>
            <SectionGrid gridMinColumn={1} gridMaxColumn={2}
                gridColumnGap={2} gridRowGap={2}
                alignItem="center">
                <GridCell takeWholeLine={true}>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Organizational Goal<br />
                    </p>
                    <p className="title-section">
                        Increase traffic by reaching a broader, more diverse audience, both local and non-local.
                    </p>
                </GridCell>
                <GridCell>
                    <p className="text-text">
                        <br />
                        The Montana Historical Society (MHS) operates as both a state agency and nonprofit organization, dedicated to preserving and promoting Montana's historical narrative.
                        <br /><br />
                        While its primary audience consists of local Montana visitors, MHS strives to expand its reach to include a more diverse audience, including those from outside the state. Furthermore, MHS seeks to understand audience preferences to customize its content for a wider reach.
                    </p>
                </GridCell>
                <CardImageCell img={ImageFullPath("OrganizationalGoal.png")} />
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}


function ResearchQuestion() {
    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.skin} />
            <NotFullWidthSection backgroundColor={COLOR.skin}>
                <GrowSectionCell>
                    <p className="title-section">
                        Research questions<br />
                    </p>
                    <br />
                    <p className="text-text">
                        We interviewed the stakeholders of MHS to discuss the project scope and objectives around their website. <br />
                        We used three research questions to drive our analysis:
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid backgroundColor={COLOR.skin}
                gridMaxColumn={3} gridMinColumn={3}
                verticalPadding={SECTION_PADDING.DEFAULT}>
                <CardCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        01<br />
                    </p>
                    <br />
                    <p className="text-text">
                        How do the behavior of local vs non-local audiences compare?
                    </p>
                </CardCell>
                <CardCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        02<br />
                    </p>
                    <br />
                    <p className="text-text">
                        What types of content are audiences viewing?
                    </p>
                </CardCell>
                <CardCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        03<br />
                    </p>
                    <br />
                    <p className="text-text">
                        How is the current SEO performing?
                    </p>
                </CardCell>
            </SectionGrid>
        </>
    );
}


function Methods() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Methods
                        <br />
                    </p>
                    <p className="title-section">
                        We evaluated MHS website's performance with web analytics and SEO audit.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridColumnGap={4} gridRowGap={4}
                alignItem="center">
                <GridCell>
                    <p className="text-text">
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
                    </p>
                </GridCell>
                <CardImageCell img={ImageFullPath("Method1.png")}
                    annotation="New user source (data in MHS Google Analytics)"
                    shadow={false} />
                <GridCell>
                    <p className="text-text">
                        Since we realized the major traffic come from organic search, our team also conducted a <b>search engine optimization</b> audit to drive insights on making the site appealing to both users and search engines.
                        <br /><br />
                        {"The on-page SEO audit is a process of evaluating the website's current search engine performance by using a rubric to examine specific criteria that determines its passability."}
                    </p>
                </GridCell>
                <CardImageCell img={ImageFullPath("Method2.png")}
                    annotation="MHS SEO audit"
                    shadow={false} />
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function FindingsAndRecommendations() {
    const GAP_WIDTH = "10%";
    const SIDE_WIDTH = "45%";
    function Row({ findings, recommendation }) {
        return (
            <FullWidthSection verticalPadding={SECTION_PADDING.MINOR}
                fadedIn={false} height={"5em"}>
                <div className={"card-cell section-cell"}
                    style={{
                        width: SIDE_WIDTH, padding: "1em 2em",
                        display: "flex", alignItems: "center",
                    }}>
                    <p className="text-bond" style={{ fontSize: "1em" }}>{findings}</p>
                </div>
                <FixedSectionCell width={GAP_WIDTH}>
                    <div style={{ width: "100%" }}>
                        <div style={{
                            width: "100%", height: "2px", backgroundColor: COLOR.juice
                        }} />
                        <div style={{
                            width: "0px", height: "0px", zIndex: "1", backgroundColor: COLOR.juice, float: "right",
                            borderRadius: "6px", border: `6px ${COLOR.juice} solid`,
                            transform: "translateX(6px) translateY(-6px)"
                        }} />
                    </div>
                </FixedSectionCell>
                <div className={"card-cell section-cell"}
                    style={{
                        width: SIDE_WIDTH, padding: "1em 2em",
                        backgroundColor: COLOR.cream,
                        display: "flex", alignItems: "center",
                    }}>
                    <p className="text-bond" style={{ fontSize: "1em" }}>{recommendation}</p>
                </div>
            </FullWidthSection>
        );
    }
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}
                backgroundColor={COLOR.jade}>
                <GrowSectionCell>
                    <p className="title-section" style={{ color: "white" }}>
                        Findings & Recommendations
                    </p>
                    <br />
                    <p className="text-text" style={{ color: "white" }}>
                        Overall, we found local and non-local users have different preference on contents and device categories: <br />
                        Local users predominantly used desktop devices during weekdays, while non-local users, who discovered the site mostly through organic search, showed a preference for mobile devices. <br />
                        Furthermore, our SEO research led us to believe that addressing some shortcomings such as inadequate meta descriptions and sitemap issues could help users discover MHS easier when searching for keywords.
                    </p>
                    <br />
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection backgroundColor={COLOR.jade}>
                <GrowSectionCell>
                    <FullWidthSection verticalPadding={SECTION_PADDING.MINOR}>
                        <FixedSectionCell width={SIDE_WIDTH}>
                            <p className="text-brief" style={{ color: "white" }}>Findings</p>
                        </FixedSectionCell>
                        <FixedSectionCell width={GAP_WIDTH} />
                        <FixedSectionCell width={SIDE_WIDTH}>
                            <p className="text-brief" style={{ color: COLOR.cream }}>Recomandation</p>
                        </FixedSectionCell>
                    </FullWidthSection>
                    <Row findings="Non-local users favor mobile devices for accessing the web compared to local users."
                        recommendation="Improve mobile responsiveness, prioritizing specific pages." />
                    <Row findings="Local users prioritize education resources."
                        recommendation="Increasing presence in education sector by optimizing page slugs." />
                    <Row findings="Lack of meta description in critical pages resulted in low traffic."
                        recommendation="Increasing presence in education sector." />
                    <Row findings="Accessibility failed in image URLs."
                        recommendation="Fill missing Alt text in image URLs with concise content under 100 characters." />
                </GrowSectionCell>
            </NotFullWidthSection>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.jade} />

        </>
    );
}

function Findings1() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Findings1
                        <br />
                    </p>
                    <p className="title-section">
                        Non-local users favor mobile devices for accessing the web compared to Montana locals.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridColumnGap={4} gridRowGap={4}
                alignItem="center">
                <GridCell>
                    <p className="text-text">
                        The MHS website attracts a majority of desktop users (72.7%), with local users showing a strong preference for desktops (89.7%). In contrast, <b>non-local users lean towards mobile devices (45.6%), almost evenly split with desktop usage (52.3%)</b>. (fig 1.1-1.3)
                        <br /><br />
                        Even though mobile devices are popular among non-local users, desktop users tend to spend more time on the website. However, <b>mobile users experience a 8.43% higher bounce rate(41.41%) than desktop users (32.98%)</b>, possibly indicating a suboptimal mobile experience. (fig. 1.4)
                    </p>
                </GridCell>
                <GridCell>
                    <FullWidthSection>
                        <CardImageCell img={ImageFullPath("Findings1_Graph1.png")}
                            shadow={false} width="40%"
                            annotation="Fig.1.1 Device category All users" />
                        <FixedSectionCell width="30%" />
                        <CardImageCell img={ImageFullPath("Findings1_Legend.png")}
                            shadow={false} width="18%" />
                    </FullWidthSection>
                    <FullWidthSection height={SECTION_PADDING.DEFAULT} />
                    <FullWidthSection>
                        <CardImageCell img={ImageFullPath("Findings1_Graph2.png")}
                            shadow={false} width="40%"
                            annotation="Fig.1.2 Device category Montana local users" />
                        <FixedSectionCell width="20%" />
                        <CardImageCell img={ImageFullPath("Findings1_Graph3.png")}
                            shadow={false} width="40%"
                            annotation="Fig.1.3 Device category Non-local users" />
                    </FullWidthSection>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <CardImageCell img={ImageFullPath("Findings1_Breakdown.png")}
                    shadow={false}
                    annotation="Fig.1.4 Users Device Usage Breakdown" />
            </NotFullWidthSection>
        </>
    );
}

function Recommendation1() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.skin}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Recommandation1
                        <br />
                    </p>
                    <p className="title-section">
                        Improve mobile responsiveness, prioritizing specific pages.
                        <br /><br />
                    </p>
                    <p className="text-text">
                        The current mobile web navigation is challenging: the hamburger menu is positioned at the bottom left, separate from the main CTA buttons. This non-standard alignment may make it difficult for users to navigate through pages.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={2}
                gridColumnGap={2}
                alignItem="center" backgroundColor={COLOR.skin}
                verticalPadding={SECTION_PADDING.MINOR}>
                <CardImageCell img={ImageFullPath("Recomandation1_1.png")} shadow={false} />
                <CardImageCell img={ImageFullPath("Recomandation1_2.png")} shadow={false} />
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.skin} />
        </>
    );
}

function Findings2() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Findings2
                        <br />
                    </p>
                    <p className="title-section">
                        Local users prioritize education resources.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridColumnGap={2} gridRowGap={4}>
                <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
                    <p className="text-text">
                        Compared to non-local users, local users frequently use the website for education-related content. (Fig.2.2) Also, education-related pages show a higher engagement rate (80%+) than other pages.
                        <br /><br />
                        A major source of traffic for mths.mt.gov is <b>classroom.google.com</b>, which refers 86% of users to “Stories of the Land” (fig. 2.1)
                        <br /><br />
                    </p>
                    <div style={{ flex: "1 1" }}></div>
                    <CardImageCell img={ImageFullPath("Findings2_1.png")} shadow={false}
                        annotation="Fig. 2.1: Breakdown of traffic by source" />
                </div>
                <CardImageCell img={ImageFullPath("Findings2_2.png")} shadow={false}
                    annotation="Fig. 2.2: Breakdown of traffic by source" />
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Recommendation2() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.skin}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Recommandation2
                        <br />
                    </p>
                    <p className="title-section">
                        Increase presence in education sector by optimizing page slugs.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridColumnGap={2} gridRowGap={4}
                alignItem="center" backgroundColor={COLOR.skin}
                verticalPadding={SECTION_PADDING.MINOR}>
                <GridCell>
                    <p className="text-text">
                        Optimize web page discoverability by ensuring all page slugs are relevant, and sitemap XML is structured properly. For example: the page path for Stories of the Land page is currently set to index4 and Museum Tours is under education.
                        <br /><br />
                        Additionally, we recommend seeking partnership with Education Officials, such as the State Superintendent, to make Stories of the Land the predominant free education resource for Montana-based schools.
                    </p>
                </GridCell>
                <CardImageCell img={ImageFullPath("Recomandation2_1.png")} shadow={false} />
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.skin} />
        </>
    );
}

function Findings3() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Findings3
                        <br />
                    </p>
                    <p className="title-section">
                        Lack of meta description in critical pages led to a lower traffic reach.
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridColumnGap={2} gridRowGap={4}
                alignItem="center">
                <CardImageCell img={ImageFullPath("Findings3_1.png")} shadow={false}
                    annotation="Fig.3.1  Top Page views: Local users" />
                <CardImageCell img={ImageFullPath("Findings3_2.png")} shadow={false}
                    annotation="Fig.3.2  Top Page views: Local users" />
                <GridCell>
                    <p className="text-text">
                        "Montana The Magazine of Western History" ranks among the top three landing pages for non-local users in contrast to local users. (Fig.3.1-3.2)
                        <br /><br />
                        However, this page lacks a meta description, relegating it to a lower information level compared to an unrelated page that does have a meta description. (Fig. 3.3)
                        <br /><br />
                        Beyond the "Montana The Magazine of Western History" page, a total of 70 sites still lack meta descriptions.
                    </p>
                </GridCell>

                <CardImageCell img={ImageFullPath("Findings3_3.png")} shadow={false}
                    annotation="Fig.3.3  Comparison of Magazine page (without meta description) and a unrelated page with meta descriptions." />
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Recommendation3() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.skin}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Recommandation3
                        <br />
                    </p>
                    <p className="title-section">
                        Ensure important pages have meta descriptions
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridColumnGap={2} gridRowGap={4}
                alignItem="center" backgroundColor={COLOR.skin}
                verticalPadding={SECTION_PADDING.MINOR}>
                <GridCell>
                    <p className="text-text">
                        Ensure important pages with high reach have meta descriptions, prioritizing the “Montana The Magazine of Western History”  page.
                    </p>
                </GridCell>
                <CardImageCell img={ImageFullPath("Recomandation3_1.png")} shadow={false} />
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.skin} />
        </>
    );
}

function Findings4() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Findings4
                        <br />
                    </p>
                    <p className="title-section">
                        Accessibility failed in image URLs
                    </p>
                </GrowSectionCell>
            </NotFullWidthSection>
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridColumnGap={2} gridRowGap={4}
                alignItem="center"
                verticalPadding={SECTION_PADDING.MINOR}>
                <GridCell>
                    <p className="text-text">
                        The development and enhancement of image accessibility including the necessary improvements for the required URLs are currently not satisfactory:
                        <ul>
                            <li>37 image URLs are missing Alt text</li>
                            <li>32 image URLs are missing size attribute</li>
                            <li>2 image URLs Alt text are over 100 characters</li>
                        </ul>
                    </p>
                </GridCell>
                <CardImageCell img={ImageFullPath("Findings4_1.png")} shadow={false}
                    annotation="Fig.4 SEO analysis by Screaming Frog under Image Sector" />
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Recommendation4() {
    return (
        <>
            <NotFullWidthSection verticalPadding={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.skin}>
                <GrowSectionCell>
                    <p className="text-brief" style={{ color: COLOR.jade }}>
                        Recommandation4
                        <br />
                    </p>
                    <p className="title-section">
                        Fill missing Alt text in image URLs with concise content under 100 characters.
                    </p>
                </GrowSectionCell >
            </NotFullWidthSection >
            <SectionGrid
                gridMaxColumn={2} gridMinColumn={1}
                gridColumnGap={2} gridRowGap={4}
                alignItem="center" backgroundColor={COLOR.skin}
                verticalPadding={SECTION_PADDING.MINOR}>
                <GridCell>
                    <p className="text-text">
                        Ensuring each image URLs contains useful alt text and keep the length of alt text below 100 characters to enhance the overall quality and efficiency of online experiences for users of screen readers, and other special accommodations.
                    </p>
                </GridCell>
                <CardImageCell img={ImageFullPath("Recomandation4_1.png")} shadow={false} />
            </SectionGrid>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} backgroundColor={COLOR.skin} />
        </>
    );
}

function FinalThoughts() {
    return (
        <NotFullWidthSection
            verticalPadding={SECTION_PADDING.DEFAULT}
            backgroundColor={COLOR.jade} >
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
                gridColumnGap={2}
                verticalPadding={SECTION_PADDING.DEFAULT}>
                <GridCell>
                    <p className="title-section">Takeaways</p>
                </GridCell>
                <GridCell startPosition="span 2">
                    <p className="text-text">
                        My team and I successfully presented our research report to the client, receiving positive feedback on our work. Additionally, we supplied them with a SEO appendix and a dashboard for future data tracking.
                        <br /><br />
                        Personally, delving into the integration of digital analytics into website audits and user behavior research, complete with quantitative data, proved fascinating. Prior to this, my experience was mainly in collaboration with data analysts. Analyzing the analytics data independently for the first time was truly inspiring, offering me a better understanding of how web analytics metrics and KPIs align with organizational goals.
                        <br /><br />
                        Our project was constrained by incomplete web analytics settings for user demographics. If I were to continue this project, I would prioritize optimizing Google Analytics settings and exploring user behaviors through an age dimension. This approach would provide deeper insights into how we can extend our audience reach to a younger demographic.
                    </p>
                </GridCell>
            </SectionGrid>
        </>
    );
}

export default MontanaHistoricalSociety;
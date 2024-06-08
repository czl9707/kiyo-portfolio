import React from "react";
import WorksHeader from '../Components/Works/WorksHeader';
import { FullWidthSection, NotFullWidthSection, GrowSectionCell, FixedSectionCell, SECTION_PADDING } from "../Components/Section";
import { SectionGrid, GridCell } from "../Components/SectionGrid";
import { CardCell, CardImageCell } from "../Components/Works/CardCell";

const ImageFullPath = (p) => `/Works/EdgemereFarm/${p}`;

const COLOR = {
    mint: "#EEF5EE",
    racing: "#F0F0F0",
    dark: "#004B32",
}

function EdgemereFarm() {
    return (
        <>
            <WorksHeader
                title="Boost Edgemere Farm's community engagment in the digital landscape"
                tags={["User Interview", "Usability", "Online Community",]}
                color={COLOR.mint} />
            <FullWidthSection>
                <img src={ImageFullPath("Intro.png")}
                    alt="Intro.png" width="100%" />
            </FullWidthSection>
            <Intro></Intro>
        </>
    );
}

function Intro() {
    function GoalCard({ title, text }) {
        return (
            <CardCell backgroundColor={COLOR.mint} border={false}>
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
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
            <SectionGrid gridMinColumn={1} gridMaxColumn={2}
                gridColumnGap={2} gridRowGap={2} alignItem="center">
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

export default EdgemereFarm;
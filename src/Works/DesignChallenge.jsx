import React, { useContext, useEffect } from "react";
import WorksHeader from '../Components/Works/WorksHeader';
import { SECTION_PADDING } from "../Components/Section";
import { SectionGrid, GridCell } from "../Components/SectionGrid";
import { CardImageCell } from "../Components/Works/CardCell";
import { ThemeContext } from "../App"


const ImageFullPath = (p) => `/Works/DesignChallenge/${p}`;


function DesignChallenge() {
    const { setTheme } = useContext(ThemeContext)
    useEffect(() => {
        setTheme("DARK");
        return () => setTheme("LIGHT");
    });

    return (
        <>
            <WorksHeader
                title="100 Days UI Design Challenge"
                tags={["User Interface Design", "Visual Design",]}
                color={"var(--secondary-background)"} />
            <Overview />
            <Day title="Day 8: Title & Body"
                image="Day8.png"
                content={
                    <>
                        <p>Layout 3 different artboards or frames with the following contents:</p>
                        <ul>
                            <li>Title</li>
                            <li>Body copy</li>
                            <li>Secondary title</li>
                            <li>More body copy</li>
                        </ul>
                    </>
                } />
            <Day title="Day 7: Implicit Grid"
                image="Day7.png"
                content="Design one screen of an audiobook app." />
            <Day title="Day 6: Hierarchy"
                image="Day6.png"
                content={
                    <p>Design a "leader board" module—like the top ten people who finished a race or any other kind of event that interests you.</p>
                } />
            <Day title="Day 5: Grids & Containers"
                image="Day5.png"
                content="Design an artboard (1440px) with a 12 column grid with component lists of a TV show or movie." />
            <Day title="Day 4: Box Model"
                image="Day4.png"
                content="Design an accounting web app screen." />
            <Day title="Day 3: Font Weight"
                image="Day3.png"
                content={
                    <p>Revise the existing Coffee Cup "Setting" page design to use only 1 type size and any weight.</p>
                } />
            <Day title="Day 2: Font Size"
                image="Day2.png"
                content={
                    <p>Design a conceptual "Settings" screen for controlling a coffee cup via a mobile device: Limit to a maximum of FOUR type sizes only.</p>
                } />
            <Day title="Day 1: Dribbble shot-sized self-introduction card"
                image="Day1.png" />
        </>
    );
}

function Overview() {
    return (
        <SectionGrid gridMinColumn={2} gridMaxColumn={2}
            gridColumnGap={6} gridRowGap={2}
            verticalPadding={SECTION_PADDING.DEFAULT}
            backgroundColor={"var(--secondary-background)"}
            alignItem="center">
            <GridCell>
                <p className="text-brief">
                    Overview <br /><br />
                </p>
                <p className="text-text">
                    Explore my "100 Days UI Design Challenges" collection, where each day focuses on a specific key point in UI design.
                    Updated regularly, this collection showcases my continuous growth and creativity. Check back often for new and exciting projects!
                </p>
            </GridCell>
            <GridCell>
                <img src={ImageFullPath("Overview.png")} alt={ImageFullPath("Overview.png")}
                    style={{ width: "100%" }} />
            </GridCell>
        </SectionGrid>
    );
}

function Day({ title, content, image }) {
    return (
        <SectionGrid gridMinColumn={2} gridMaxColumn={2}
            gridColumnGap={6} gridRowGap={2}
            verticalPadding={SECTION_PADDING.DEFAULT}>
            <GridCell>
                <p className="title-section">
                    {title} <br />
                </p>
                <p className="text-text">
                    <br />
                    {content}
                </p>
            </GridCell>
            <GridCell>
                <img src={ImageFullPath(image)} alt={ImageFullPath(image)}
                    style={{ width: "100%" }} />
            </GridCell>
        </SectionGrid>
    );
}


export default DesignChallenge;
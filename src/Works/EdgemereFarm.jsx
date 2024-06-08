import React from "react";
import WorksHeader from '../Components/Works/WorksHeader';
import Overview from "../Components/Works/Overview";
import { FullWidthSection, NotFullWidthSection, GrowSectionCell, FixedSectionCell, SECTION_PADDING } from "../Components/Section";
import { SectionGrid, GridCell } from "../Components/SectionGrid";
import { CardCell, CardImageCell } from "../Components/Works/CardCell";

const ImageFullPath = (p) => `/Works/EdgemereFarm/${p}`;

const COLOR = {
    mint: "#EEF5EE",
    racing: "#F0F0F0",
}

function EdgemereFarm() {
    return (
        <>
            <WorksHeader
                title="Boost Edgemere Farm's community engagment in the digital landscape"
                tags={["User Interview", "Usability", "Online Community",]}
                color={COLOR.mint} />
            <Overview
                backgroundColor={COLOR.mint}
                titleColor={COLOR.mint}
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
        </>
    );
}


export default EdgemereFarm;
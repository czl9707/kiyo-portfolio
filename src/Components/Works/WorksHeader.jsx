import React from "react";
import {
    NotFullWidthSection,
    GrowSectionCell,
    FixedSectionCell,
    SECTION_PADDING,
} from '../Section.tsx';

import "./Works.css"

function WorksHeader({
    title,
    tags = [],
    color,
    fontColor,
}) {
    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
            <NotFullWidthSection>
                <p className="title-page" style={{ textAlign: "center", width: "100%" }}>
                    {title}
                </p>
            </NotFullWidthSection>
            <NotFullWidthSection verticalPadding="1em">
                <GrowSectionCell />
                <div style={{ width: "100%", height: "100%", display: "inline", textAlign: "center" }}>
                    {tags.map((t, _) => <Tag text={t} color={color} fontColor={fontColor} />)}
                </div>
                <GrowSectionCell />
            </NotFullWidthSection >
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
        </>
    );
}

function Tag({
    text,
    color = "var(--secondary-background)",
    fontColor = "var(--primary-text)",
}) {
    return (
        <FixedSectionCell>
            <div className='works-tag' style={{
                "color": fontColor,
                "backgroundColor": color,
            }}>
                <p>{text}</p>
            </div>
        </FixedSectionCell>
    );
}

export default WorksHeader;
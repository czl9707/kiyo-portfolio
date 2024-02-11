import React from "react";
import {
    NotFullWidthSection,
    GrowSectionCell,
    FixedSectionCell,
} from '../../Components/Section';

import "./Works.css"

function WorksHeader({
    title,
    tags = [],
    color,
    fontColor,
}) {
    return (
        <>
            <NotFullWidthSection height="3em" />
            <NotFullWidthSection>
                <p className="title-page" style={{ "textAlign": "center" }}>
                    {title}
                </p>
            </NotFullWidthSection>
            <NotFullWidthSection vertical_padding="1em">
                <GrowSectionCell />
                {tags.map((t, _) => <Tag text={t} color={color} fontColor={fontColor} />)}
                <GrowSectionCell />
            </NotFullWidthSection >
        </>
    );
}

function Tag({
    text,
    color = "grey",
    fontColor = "black",
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

export { WorksHeader };
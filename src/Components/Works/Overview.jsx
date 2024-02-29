import React from "react";
import { SectionGrid, GridCell } from "../SectionGrid";

function Overview({
    backgroundColor,
    titleColor,
    content,
    img,
    imgOverflow = false
}) {
    return (
        <SectionGrid gridMinColumn={1} gridMaxColumn={2}
            gridColumnGap={2}
            verticalPadding={"3em"}
            backgroundColor={backgroundColor}
            alignItem="center">
            <GridCell>
                <p className="text-brief" style={{ color: titleColor }}>
                    Overview<br />
                </p>
                <div style={{ height: "0.5em" }} />
                {content}
            </GridCell>
            <GridCell>
                <div style={{ width: "100%", height: "100%" }}>
                    <img src={img} alt={img}
                        width={imgOverflow ? "180%" : "100%"} />
                </div>
            </GridCell>
        </SectionGrid>
    );
}

export default Overview;
import React from "react"
import { NotFullWidthSection } from "./Section";

function SectionGrid({
    gridMinColumn = 1,
    gridMaxColumn,
    gridColumnGap = 1,
    gridRowGap = 1,
    alignItem = 'start',
    children,
    backgroundColor,
    verticalPadding,
}) {
    return (
        <NotFullWidthSection backgroundColor={backgroundColor} verticalPadding={verticalPadding}>
            <div className='section-grid'
                style={{
                    gridTemplateColumns:
                        `repeat(auto-fill, minmax(min(
                            (100% - ${gridMinColumn * gridColumnGap}em) / ${gridMinColumn}, 
                            max(
                                (100% - ${gridMaxColumn * gridColumnGap}em) / ${gridMaxColumn},
                                ${800 / gridMaxColumn}px
                            )
                        ), 1fr))`,
                    columnGap: `${gridColumnGap}em`,
                    rowGap: `${gridRowGap}em`,
                    alignItems: alignItem,
                }}>
                {children}
            </div>
        </NotFullWidthSection>
    )
}

function GridCell({
    children,
    backgroundColor = 'rgb(0, 0, 0, 0)',
    startPosition = "auto",
    endPosition = "auto",
    takeWholeLine = false,
}) {
    let gridColumn = takeWholeLine ? "1/-1" : `${startPosition}/${endPosition}`;

    return (
        <div className="section-cell"
            style={{
                backgroundColor: backgroundColor,
                flex: "1 1",
                display: "inline-block",
                gridColumn: gridColumn,
            }}>
            {children}
        </div>
    )
}


export { SectionGrid, GridCell };
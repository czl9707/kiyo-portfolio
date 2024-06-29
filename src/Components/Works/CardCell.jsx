import React from "react";

const CELL_PADDING = {
    MAJOR: "3em",
    NORMAL: "2em",
    MINOR: "1em",
    NONE: "0",
}

function CardCell({
    children,
    startPosition = "auto",
    endPosition = "auto",
    backgroundColor = 'var(--primary-background)',
    annotation,
    width,
    height,
    border = true,
    padding = CELL_PADDING.NORMAL
}) {
    let classes = ["card-cell", "section-cell"];

    return (
        <div className={classes.join(" ")}
            style={{
                backgroundColor: backgroundColor,
                gridColumn: `${startPosition}/${endPosition}`,
                width: width,
                height: height,
                borderStyle: border ? "solid" : "none",
                padding: padding
            }}>
            {children}
        </div>
    )
}

function CardImageCell({
    img = "",
    startPosition = "auto",
    endPosition = "auto",
    annotation,
    shadow = true,
    width = "auto",
}) {
    let classes = ["card-image-cell"];
    if (shadow) classes.push("shadow");

    return (
        <div className="section-cell"
            style={{
                gridColumn: `${startPosition}/${endPosition}`,
                width: width,
            }}>
            <div className={classes.join(" ")}
            >
                <img src={img} alt={img.split("/").pop()} />
            </div>
            {
                annotation &&
                <>
                    <div style={{ height: "0.6em" }} />
                    <p className="text-quote"
                        style={{ textAlign: "center" }}>
                        {annotation}
                    </p>
                </>
            }
        </div>
    );
}

export { CardCell, CardImageCell, CELL_PADDING }
import React from "react";

function CardCell({
    children,
    startPosition = "auto",
    endPosition = "auto",
    annotation,
}) {
    let classes = ["card-cell", "section-cell"];

    return (
        <div className={classes.join(" ")}
            style={{
                gridColumn: `${startPosition}/${endPosition}`,
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
}) {
    let classes = ["card-image-cell", "section-cell"];

    console.log(img)
    return (
        <div className="section-cell"
            style={{
                gridColumn: `${startPosition}/${endPosition}`,
            }}>
            <div className="card-image-cell"
            >
                <img src={img} alt={img.split("/").pop()} />
            </div>
            {
                annotation &&
                <p className="text-quote"
                    style={{ textAlign: "center" }}>
                    {annotation}
                </p>
            }
        </div>
    );
}

export { CardCell, CardImageCell }
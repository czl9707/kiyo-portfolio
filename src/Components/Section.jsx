import React from "react";
import { useInView } from 'react-intersection-observer';

const SECTION_PADDING = {
    DEFAULT: "3em",
    MINOR: "1em",
    NONE: "0",
}

function Section({
    children,
    fullWidth,
    backgroundColor = 'rgb(0, 0, 0, 0)',
    verticalPadding = SECTION_PADDING.NONE,
    fadedIn = true,
    height = 'auto',
    stretch = false,
}) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        initialInView: false,
        threshold: 0.1,
        onChange: (inView, entry) => {
            if (!fadedIn) return;
            if (inView) {
                entry.target.classList.remove("section-content-out");
            }
            else {
                entry.target.classList.add("section-content-out");
            }
        }
    });

    let wrapper_classes = ["section-wrapper"];

    let content_classes = [
        "section-content",
        fullWidth ? "section-content-full-width" : "section-content-no-full-width"
    ];
    if (fadedIn) {
        content_classes.push("section-content-out");
    }

    return (
        <div className={wrapper_classes.join(" ")}
            style={{
                backgroundColor: backgroundColor,
                height: height,
                paddingTop: verticalPadding,
                paddingBottom: verticalPadding,
            }}>
            <div className={content_classes.join(" ")} ref={ref}
                style={{ alignItems: stretch ? "stretch" : "center" }}>
                {children}
            </div>
        </div>
    )
}


function FullWidthSection({
    children,
    backgroundColor,
    verticalPadding,
    height,
    fadedIn,
    stretch,
}) {
    return (
        <Section backgroundColor={backgroundColor}
            verticalPadding={verticalPadding}
            fullWidth={true}
            height={height}
            fadedIn={fadedIn}
            stretch={stretch}>
            {children}
        </Section>
    )
}

function NotFullWidthSection({
    children,
    backgroundColor,
    verticalPadding,
    height,
    fadedIn,
    stretch,
}) {
    return (
        <Section backgroundColor={backgroundColor}
            verticalPadding={verticalPadding}
            fullWidth={false}
            height={height}
            fadedIn={fadedIn}
            stretch={stretch}>
            {children}
        </Section>
    )
}

function SectionCell({
    children,
    backgroundColor = 'rgb(0, 0, 0, 0)',
    width = 'auto',
    grow,
    takeWholeLine = false,
}) {
    return (
        <div className="section-cell"
            style={{
                backgroundColor: backgroundColor,
                flex: grow ? `1 1 ${width}` : `0 0 ${width}`,
                gridColumn: takeWholeLine ? '1/-1' : 'auto',
            }}>
            {children}
        </div>
    )
}

function FixedSectionCell({ children, backgroundColor, width, takeWholeLine }) {
    return (
        <SectionCell
            backgroundColor={backgroundColor}
            grow={false}
            width={width}
            takeWholeLine={takeWholeLine}>
            {children}
        </SectionCell>
    )
}

function GrowSectionCell({ children, backgroundColor, takeWholeLine }) {
    return (
        <SectionCell
            backgroundColor={backgroundColor}
            grow={true}
            takeWholeLine={takeWholeLine}>
            {children}
        </SectionCell>
    )
}

export { FullWidthSection, NotFullWidthSection, FixedSectionCell, GrowSectionCell, SECTION_PADDING };
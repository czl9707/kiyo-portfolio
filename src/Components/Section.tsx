import * as React from "react";
import { useInView } from 'react-intersection-observer';

import Container from '@mui/material/Container';
import { Box, PropTypes, styled, useTheme } from "@mui/material";

const SECTION_PADDING = {
    DEFAULT: "3em",
    MINOR: "1em",
    NONE: "0",
}

function DeprecatedSection({
    children,
    fullWidth,
    backgroundColor = "transparent",
    verticalPadding = SECTION_PADDING.NONE,
    fadedIn = true,
    height = 'auto',
    stretch = false,
}) {
    const { ref } = useInView({
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
                backgroundColor,
                height,
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
        <DeprecatedSection backgroundColor={backgroundColor}
            verticalPadding={verticalPadding}
            fullWidth={true}
            height={height}
            fadedIn={fadedIn}
            stretch={stretch}>
            {children}
        </DeprecatedSection>
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
        <DeprecatedSection backgroundColor={backgroundColor}
            verticalPadding={verticalPadding}
            fullWidth={false}
            height={height}
            fadedIn={fadedIn}
            stretch={stretch}>
            {children}
        </DeprecatedSection>
    )
}

function SectionCell({
    children,
    backgroundColor = 'transparent',
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

interface SectionProperties {
    children?: React.ReactNode,
    ref?: ((instance: HTMLDivElement | null) => void) | null | undefined,
    id?: string,
    disableGutters?: boolean,
    color?: Exclude<PropTypes.Color | 'error' | 'info' | 'success' | 'warning', 'inherit' | 'default'>,
};

function Section({ children, ref, id, color, disableGutters = false }: SectionProperties) {
    const ColoredBox = React.useMemo(() => styled(Box)(({ theme }) => ({
        width: "100%", padding: '4rem',
        paddingTop: disableGutters ? 0 : undefined,
        paddingBottom: disableGutters ? 0 : undefined,
        color: color ? theme.palette[color].contrastText : undefined,
        backgroundColor: color ? theme.palette[color].main : undefined
    })),
        [color, disableGutters]
    )

    return (
        <ColoredBox component="section">
            <Container maxWidth="md" disableGutters ref={ref} id={id}>
                {children}
            </Container>
        </ColoredBox>
    );
}

const SizeMap = {
    'sm': '1rem',
    'md': '4rem',
    'lg': '8rem',
    'xl': '16rem',
}

interface SpacerProperties {
    size?: keyof typeof SizeMap
}

function Spacer({ size = 'md' }: SpacerProperties) {
    return (
        <Box component="section" sx={{ height: SizeMap[size] }} />
    );
}

export default Section;
export { Spacer, FullWidthSection, NotFullWidthSection, FixedSectionCell, GrowSectionCell, SECTION_PADDING };
import * as React from "react";

import { Box, PropTypes, styled, Container } from "@mui/material";


interface SectionProperties {
    children?: React.ReactNode,
    disableGutters?: boolean,
    id?: string,
    color?: Exclude<PropTypes.Color | 'error' | 'info' | 'success' | 'warning', 'inherit' | 'default'>,
};

const Section = React.forwardRef<HTMLDivElement, SectionProperties>(
    function Section({ children, id, color, disableGutters = false }, ref) {
        const ColoredBox = React.useMemo(() => styled(Box)(({ theme }) => ({
            width: "100%", padding: '4rem', overflow: "hidden",
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
)

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
export { Spacer, };
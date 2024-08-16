import * as React from "react";

import { Box, PropTypes, styled, Container } from "@mui/material";


interface SectionProperties {
    children?: React.ReactNode,
    ref?: ((instance: HTMLDivElement | null) => void) | null | undefined,
    id?: string,
    disableGutters?: boolean,
    color?: Exclude<PropTypes.Color | 'error' | 'info' | 'success' | 'warning', 'inherit' | 'default'>,
};

function Section({ children, ref, id, color, disableGutters = false }: SectionProperties) {
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
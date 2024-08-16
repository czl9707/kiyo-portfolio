import * as React from "react";

import { Paper, PropTypes, PaperProps, styled } from "@mui/material";

interface ThemedPaperProperties {
    color?: Exclude<PropTypes.Color | 'error' | 'info' | 'success' | 'warning', 'inherit' | 'default'>,
};

function addAlpha(color: string, alpha: number): string {
    if (color.startsWith("rgb")) return color;

    let r = 0, g = 0, b = 0;

    if (color.length === 4) {
        r = parseInt(color[1] + color[1], 16);
        g = parseInt(color[2] + color[2], 16);
        b = parseInt(color[3] + color[3], 16);
    } else if (color.length === 7) {
        r = parseInt(color[1] + color[2], 16);
        g = parseInt(color[3] + color[4], 16);
        b = parseInt(color[5] + color[6], 16);
    }

    return `rgba(${r}, ${g}, ${b}, .${alpha})`;
}

const ThemedPaper = React.forwardRef<HTMLDivElement, ThemedPaperProperties & PaperProps>(({ color, ...other }, ref) => {
    const ThemedPaper = React.useMemo(
        () => styled(Paper)(({ theme }) => ({
            backgroundColor: color ? theme.palette[color].main : undefined,
            color: color ? theme.palette[color].contrastText : undefined,
            borderColor: color ? addAlpha(theme.palette[color].contrastText, 15) : undefined,
        })),
        [color]
    );

    return <ThemedPaper ref={ref} {...other} />
}
)



export default ThemedPaper;

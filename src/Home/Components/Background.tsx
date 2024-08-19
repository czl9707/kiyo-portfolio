import * as React from 'react'

import { Container, Box, useTheme } from "@mui/material";

const renderGap = 50
const channelWidth = 16;

function Background() {
    return (
        <Box component="section" id="background" sx={{
            width: "100%", px: '4rem', position: "fixed", height: "100vh"
        }}>
            <Container maxWidth="md" disableGutters sx={{ height: "100%", display: "flex", zindex: -1, opacity: ".2" }}>
                <Channel />
                <div style={{ flex: "1 1" }} />
                <Channel />
                <div style={{ flex: "1 1" }} />
                <Channel />
                <div style={{ flex: "1 1" }} />
                <Channel />
                <div style={{ flex: "1 1" }} />
                <Channel />
            </Container>
        </Box>
    );
}


function Channel() {
    const [elements, setElements] = React.useState<ChannelItem[]>(initRandomElement());
    React.useEffect(() => {
        setInterval(() => {
            setElements(elements => calcNextTSElements(elements))
        }, renderGap)
    }, []);

    return (
        <div style={{ overflow: "invisible" }}>
            <svg height="100vh" width={`${channelWidth}px`} xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
                <line x1={channelWidth / 2} y1={0} x2={channelWidth / 2} y2="100%"
                    style={{ stroke: "grey", strokeWidth: 2, strokeDasharray: "2,5" }} />
                {elements.map((item, i) => <ChannelItemFragment item={item} key={i} />)}
            </svg>
        </div>
    );
}

const ChannelItemType = ["rect", "circle", "tria"] as const;
const ChannelItemColor = ["secondary", "warning", "error", "success"] as const;


class ChannelItem {
    type: typeof ChannelItemType[number];
    rotate: number;
    offset: number;
    color: typeof ChannelItemColor[number];

    constructor(offset?: number, rotate?: number) {
        this.rotate = rotate === undefined ? Math.floor(Math.random() * 360) : rotate;
        this.offset = offset === undefined ? Math.floor(Math.random() * 100) : offset;
        this.color = ChannelItemColor[Math.floor(Math.random() * ChannelItemColor.length)];
        this.type = ChannelItemType[Math.floor(Math.random() * ChannelItemType.length)];
    }
}

function ChannelItemFragment({ item }: { item: ChannelItem }) {
    const theme = useTheme();
    const style = {
        strokeWidth: "3", stroke: theme.palette[item.color].main, fill: "none",
        transform: `translateY(${item.offset}vh) rotate(${item.rotate}deg)`,
    }
    const transformOrigin = `${channelWidth / 2} ${channelWidth / 2}`;
    return (
        <>
            {item.type === "rect" && <rect x={0} y={0} width={channelWidth} height={channelWidth} style={style}
                transform-origin={transformOrigin} />}
            {item.type === "circle" && <circle r={channelWidth / 2} cx={channelWidth / 2} cy={channelWidth / 2} style={style}
                transform-origin={transformOrigin} />}
            {item.type === "tria" && <polygon style={style}
                points={`${channelWidth / 2},0 0,${channelWidth * 0.7} ${channelWidth},${channelWidth * 0.7}`}
                transform-origin={transformOrigin} />}
        </>
    );
}

const elementCountEst = 4;

function initRandomElement(): ChannelItem[] {
    return [...Array(elementCountEst)].map(() => new ChannelItem());
}

function calcNextTSElements(elements: ChannelItem[]): ChannelItem[] {
    const offsetStep = 0.2;
    const rotateStep = 2;

    return [...elements.map((element) => {
        element.offset = element.offset + offsetStep;
        element.rotate = (element.rotate + rotateStep) % 360;
        return (element.offset < 110) ? element : undefined;
    }), ...[
        ((Math.random() * (100 / offsetStep / elementCountEst)) < 1) ?
            new ChannelItem(0) : undefined]
    ].filter(item => item != undefined)
}

export default Background;
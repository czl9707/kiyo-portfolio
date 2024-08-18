import { Box, Drawer, Typography, useForkRef } from '@mui/material';
import * as React from 'react'
import { useInView } from 'react-intersection-observer';
import { handleNavigation } from './Utils';

class CatagoryEntry {
    name: string;
    id: string;
    active: boolean;
    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
        this.active = false;
    }

    get children(): CatagoryEntries {
        return [];
    }
}

class CatagoryGroupEntry {
    name: string;
    children: CatagoryEntries;
    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    get id(): string | undefined {
        return this.children.length > 0 ? this.children[0].id : undefined;
    }

    get active(): boolean {
        return this.children.some(c => c.active);
    }
}

type CatagoryEntries = (CatagoryEntry | CatagoryGroupEntry)[];

const CatagoryNestingContext = React.createContext<CatagoryGroupEntry | undefined>(undefined);

// use this to wrap a component, to add a catagory entry
const Catagorize = React.forwardRef<HTMLDivElement, {
    id: string,
    catagoryName: string,
    children: React.ReactElement
}>(
    function Catagorize({ id, catagoryName, children }, ref) {
        const current = React.useMemo(() => new CatagoryEntry(catagoryName, id), []);
        const { setCatagories } = React.useContext(CatagoriesContext);
        const catagoryParent = React.useContext(CatagoryNestingContext);

        React.useEffect(
            () => {
                if (catagoryParent) {
                    catagoryParent.children.push(current);
                    setCatagories(c => [...c]);
                    return () => {
                        catagoryParent.children = catagoryParent.children.filter(
                            c => c.id != current.id
                        );
                        setCatagories(c => [...c]);
                    }
                }
                else {
                    setCatagories(c => [...c, current]);
                    return () => {
                        setCatagories(c => c.filter(
                            c => c.id != current.id
                        ));
                    }
                }
            },
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []
        )

        const { ref: inViewRef } = useInView({
            triggerOnce: false,
            initialInView: true,
            threshold: 0,
            onChange: (inView) => {
                current.active = inView;
                setCatagories(c => [...c]);
            }
        });
        const handleRef = useForkRef(ref, inViewRef);

        return React.cloneElement(children, {
            ref: handleRef,
            id: id,
            style: children.props.style,
        });
    }
);

// use this to wrap components, to have one level up catagory 
function CatagorizeGroup({ catagoryName, children }: {
    catagoryName: string,
    children: React.ReactNode
}) {
    const current = React.useMemo(() => new CatagoryGroupEntry(catagoryName), []);
    const { setCatagories } = React.useContext(CatagoriesContext);
    const catagoryParent = React.useContext(CatagoryNestingContext);

    React.useEffect(
        () => {
            if (catagoryParent) {
                catagoryParent.children.push(current);
                setCatagories(c => [...c]);
                return () => {
                    catagoryParent.children = catagoryParent.children.filter(
                        c => c.id != current.id
                    );
                    setCatagories(c => [...c]);
                }
            }
            else {
                setCatagories(c => [...c, current]);
                return () => {
                    setCatagories(c => c.filter(
                        c => c.id != current.id
                    ));
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    return (
        <CatagoryNestingContext.Provider value={current}>
            {children}
        </CatagoryNestingContext.Provider>
    );
}

const CatagoriesContext = React.createContext<{
    catagories: CatagoryEntries,
    setCatagories: (
        (catagory: CatagoryEntries | ((c: CatagoryEntries) => CatagoryEntries)) => void
    ),
}>({
    catagories: [],
    setCatagories: () => { },
});

function CatagoriesContextProvider({ children }: { children: React.ReactNode }) {
    const [catagories, setCatagories] = React.useState<CatagoryEntries>([])

    return (
        <CatagoriesContext.Provider value={{ catagories, setCatagories }}>
            <Catagory />
            {children}
        </CatagoriesContext.Provider>
    )
}


// Rendered Catagory
function Catagory() {
    const { catagories } = React.useContext(CatagoriesContext);
    const maxDepth = GetMaxDepth(catagories);

    return (
        <Drawer variant="permanent"
            PaperProps={{ sx: { justifyContent: "center", backgroundColor: "transparent", border: "none" } }}
            sx={(theme) => ({
                overflowX: "auto",
                "*": {
                    transitionDuration: `${theme.transitions.duration.leavingScreen}ms`,
                    transitionTimingFunction: theme.transitions.easing.easeIn,
                },
                ".CatagoryContainer": {
                    opacity: 0.3,
                    "&:hover": {
                        opacity: 0.6,
                        ".CatagoryContent": { textDecoration: "underline" }
                    },
                    ".CatagoryPlaceholder": {
                        height: "2px", backgroundColor: theme.palette.text.primary,
                        transform: "translateY(.8rem)",
                    },
                    ".CatagoryContent": {
                        transform: "translateX(-100%)",
                    }
                },
                "&:hover": {
                    ".CatagoryPlaceholder": {
                        transform: "translateY(.8rem) translateX(-100%)",
                    },
                    ".CatagoryContent": {
                        transform: "none",
                    }
                }
            })}
        >
            <Box>
                {catagories.map((item, i) => <CatagoryItem key={i} item={item} maxDepth={maxDepth} />)}
            </Box>
        </Drawer>
    )
}

function CatagoryItem({ item, depth = 1, maxDepth }: { item: CatagoryEntry | CatagoryGroupEntry, maxDepth: number, depth?: number }) {
    return (
        <>
            <Box className="CatagoryContainer" sx={{ opacity: item.active ? "0.8 !important" : undefined }}
                onClick={item.active ? undefined : handleNavigation(`#${item.id}`)}>
                <Box className="CatagoryPlaceholder" width={`${(maxDepth - depth + 1) * 1.2}rem`} />
                <Typography component="p" className="CatagoryContent" sx={{ paddingLeft: `${depth * 2}rem` }} variant="button">
                    {item.name}
                </Typography>
            </Box >
            {item.children.map((item, i) => <CatagoryItem key={i} item={item} depth={depth + 1} maxDepth={maxDepth} />)}
        </>
    )
}

function GetMaxDepth(entries: CatagoryEntries): number {
    if (entries.length === 0) return 0;
    let depth = 1;
    for (const entry of entries) {
        depth = Math.max(depth, GetMaxDepth(entry.children) + 1);
    }
    return depth;
}

export default CatagoriesContextProvider;
export { Catagorize, CatagorizeGroup };
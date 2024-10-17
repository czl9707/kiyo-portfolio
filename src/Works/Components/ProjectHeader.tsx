import * as React from 'react';

import { Typography, Stack, Box } from "@mui/material";
import { SquareChip } from "../../Components/SquareChip";
import Section, { Spacer } from "../../Components/Section";
import FadeSlide from "../../Components/FadeSlideEffect";
import { PrimaryTypography } from './Typography';

interface ProjectHeaderProps {
    desc: string,
    chips: string[],
    imgSrc?: string,
    name: string,
}

function ProjectHeader({ desc, chips, imgSrc, name }: ProjectHeaderProps) {
    return (
        <>
            {imgSrc &&
                <FadeSlide>
                    <Box component="img" src={imgSrc} width="100%" />
                </FadeSlide>
            }
            <Spacer />
            <Section>
                <FadeSlide>
                    <Stack spacing={2} >
                        <Typography variant='h1'>
                            {name}
                        </Typography>
                        <PrimaryTypography variant="h4">
                            {desc}
                        </PrimaryTypography>
                        <Stack direction="row" spacing={2}>
                            {
                                chips.map(chip => <SquareChip label={chip} color="secondary" key={chip} />)
                            }
                        </Stack>
                    </Stack>
                </FadeSlide>
            </Section>
        </>
    )
}

export default ProjectHeader;
import * as React from 'react';

import { Typography, Stack, Box } from "@mui/material";
import { SquareChip } from "../../Components/SquareChip";
import Section, { Spacer } from "../../Components/Section";
import FadeSlide from "../../Components/FadeSlideEffect";

interface ProjectHeaderProps {
    title: string,
    chips: string[],
    imgSrc?: string,
}

function ProjectHeader({ title, chips, imgSrc }: ProjectHeaderProps) {
    return (
        <>
            <Spacer />
            <Section>
                <FadeSlide>
                    <Stack spacing={2} alignItems="center">
                        <Typography variant='h1' className='TypographyText' textAlign="center">
                            {title}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {
                                chips.map(chip => <SquareChip label={chip} color="secondary" key={chip} />)
                            }
                        </Stack>
                    </Stack>
                </FadeSlide>
            </Section>
            <Spacer />
            {imgSrc &&
                <FadeSlide>
                    <Box component="img" src={imgSrc} width="100%" />
                </FadeSlide>
            }
        </>
    )
}

export default ProjectHeader;
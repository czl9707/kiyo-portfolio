import * as React from 'react';
import Section, { Spacer } from '../Components/Section';
import { createSvgIcon, Unstable_Grid2 as Grid, Stack, styled, Typography } from '@mui/material';
import { Mail } from '@mui/icons-material';
import ImageWithAnnotation from '../Works/Components/ImageWithAnnotation';
import FadeSlide from '../Components/FadeSlideEffect';

const Linkedin = createSvgIcon(
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>,
    "Linkedin"
)

function AboutMe() {
    const HighLight = styled("span")({ color: "#3947BE" })

    return (
        <>
            <Spacer />
            <Section>

                <FadeSlide>
                    <Grid container columns={2}>
                        <Grid md={1} sm={2}>
                            <ImageWithAnnotation imgSrc="Home/AboutMe.jpg" />
                        </Grid>
                        <Grid md={1} sm={2}>
                            <Typography variant='h3'>
                                Hi, I'm Kiyo.<br />
                                Nice to meet you:)
                            </Typography>
                            <Typography variant='body1'>
                                I'm pursuing an M.S. in Information Experience Design at Pratt Institute in New York, driven by my passion for design and innovation.
                                <br /><br />
                                In my previous role as a UX designer at <HighLight>Anise Health</HighLight>, I didn't just create products - I brought two groundbreaking solutions to life, championing HCD principles and collaborating with cross-functional teams.
                                <br /><br />
                                My UX adventure began with a Master degree in Architecture from the <HighLight>National University of Singapore</HighLight>, followed by a transformative UX design internship at <HighLight>Philips</HighLight>, where I focused on healthcare solutions for Alzheimer's patients and their families.
                                <br /><br />
                                With a global perspective shaped by living in five cities across three countries, I thrive in diverse cultural contexts, using this diversity to fuel my creative thinking.
                                <br /><br />
                                My background in architecture equips me to approach challenges with an open mindset, skillfully navigate complex scenarios, address problems from multiple angles, and consider both macro and micro perspectives.
                                <br /><br />
                                I'm thrilled to join open and diverse teams, eager to dive into exhilarating explorations to create user-centric, impactful solutions. Let's ignite innovation together!
                                <br /><br />
                                Out of work, you will find me practicing yoga 🧘, cooking 🥘, visiting museum 🖼️.
                            </Typography>
                        </Grid>
                    </Grid >
                </FadeSlide>

                <Spacer />

                <FadeSlide>
                    <Grid container columns={2}>
                        <Grid sm={2} md={1}>
                            <Typography variant='h3'>
                                Let's connect!
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Linkedin htmlColor="#3947BE" fontSize="large" />
                                <Mail htmlColor="#3947BE" fontSize="large" />
                            </Stack>
                        </Grid>
                        <Grid sm={2} md={1}>
                            <Typography variant='body2'>
                                Thanks for coming over!
                                Please feel free to email me at <HighLight>kiyoyangqing@gmail.com</HighLight> if you are interested in learning more about my work, giving feedback or working on an exciting project together!
                            </Typography>
                        </Grid>
                    </Grid >
                </FadeSlide>
            </Section>
        </>
    );
}

export default AboutMe;
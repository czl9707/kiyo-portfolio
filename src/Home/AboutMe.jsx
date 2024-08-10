import React from 'react';
import {
    NotFullWidthSection,
    SECTION_PADDING,
} from '../Components/Section.tsx';
import { SectionGrid, GridCell } from '../Components/SectionGrid';
import { CardImageCell } from '../Components/Works/CardCell'

function AboutMe() {
    return (
        <>
            <NotFullWidthSection height={SECTION_PADDING.DEFAULT} />
            <SectionGrid verticalPadding={SECTION_PADDING.DEFAULT}
                gridMaxColumn={2} gridMinColumn={2}>
                <CardImageCell img="Home/AboutMe.jpg" width='80%' />
                <GridCell>
                    <p className="title-section">
                        I'm Kiyo. Nice to meet you:)<br />
                    </p>
                    <br />
                    <p className="text-text">
                        I'm pursuing an M.S. in Information Experience Design at Pratt Institute in New York, driven by my passion for design and innovation.
                        <br /><br />
                        In my previous role as a UX designer at Anise Health, I didn't just create products - I brought two groundbreaking solutions to life, championing HCD principles and collaborating with cross-functional teams.
                        <br /><br />
                        My UX adventure began with a Master degree in Architecture from the National University of Singapore, followed by a transformative UX design internship at Philips, where I focused on healthcare solutions for Alzheimer's patients and their families.
                        <br /><br />
                        With a global perspective shaped by living in five cities across three countries , I thrive in diverse cultural contexts, using this diversity to fuel my creative thinking.
                        <br /><br />
                        My background in architecture equips me to approach challenges with an open mindset, skillfully navigate complex scenarios, address problems from multiple angles, and consider both macro and micro perspectives.
                        <br /><br />
                        I'm thrilled to join open and diverse teams, eager to dive into exhilarating explorations to create user-centric, impactful solutions. Let's ignite innovation together!Out of work, you will find me practicing yoga 🧘, cooking 🥘, visiting museum 🖼️.
                    </p>
                    <br /><br /><br />
                    <p className="title-section">
                        Interested in learning more?<br />
                    </p>
                    <br />
                    <p className="text-text">
                        Thanks for coming over!Please feel free to email me at kiyoyangqing@gmail.com if you are interested in learning more about my work, giving feedback or working on an exciting project together!
                    </p>
                </GridCell>
            </SectionGrid>
        </>
    );
}

export default AboutMe;
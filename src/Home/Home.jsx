import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import {
    FullWidthSection,
    NotFullWidthSection,
    FixedSectionCell,
} from '../Components/Section';
import { SectionGrid, GridCell } from '../Components/SectionGrid';

import "./Home.css";

const WORKSHASH = 'Works';

function Home() {
    const location = useLocation();
    const ref = useRef();

    const scrollHandler = () => ref.current.scrollIntoView({ behavior: 'smooth' });

    useEffect(() => {
        if (location.hash === `#${WORKSHASH}`) {
            console.log(ref.current);
            scrollHandler();
        }
    });

    return (
        <>
            <Welcome />
            <ViewMyWork />
            <div ref={ref} id={WORKSHASH} />
            <Works />
        </>
    );
}

function Welcome() {
    return (
        <>
            <NotFullWidthSection height="8em" />
            <NotFullWidthSection verticalPadding="1.5em">
                <p id='home-hello-text'>
                    Hi, I'm Kiyo :)
                </p>
            </NotFullWidthSection>
            <NotFullWidthSection >
                <p id='home-intro-text'>
                    A UX designer loving warm hugs!!! ⛄<br />
                </p>
            </NotFullWidthSection>
        </>
    )
}

function ViewMyWork() {
    return (
        <>
            <NotFullWidthSection height="3em" />
            <NotFullWidthSection verticalPadding="4em">
                <Link className='text-text' to={`/Home#${WORKSHASH}`}>
                    View my work ↓
                </Link>
            </NotFullWidthSection>
            <NotFullWidthSection height="5em" />
        </>
    )
}

function Works() {
    return (
        <>
            <SectionGrid
                gridMinColumn={1} gridMaxColumn={2}
                gridColumnGap={1} gridRowGap={3}
            >
                <ContentCard
                    url="/Works/EdgemereFarm"
                    image="CoverEdgemereFarm.png"
                    title="Edgemere Farm"
                    subTitle="Boost Edgemere Farm's community engagment in the digital landscape."
                    tags={["0 to 1", "Website Design",]} />

                <ContentCard
                    url="/Works/Knowunity"
                    image="CoverKnowunity.png"
                    title="Knowunity"
                    subTitle="Expand lighthouse creator pool by connecting better with regular users."
                    tags={["User Interview", "Usability", "Online Community",]} />

                <ContentCard
                    url="/Works/AnisePatient"
                    image="CoverAnisePatientPortal.png"
                    title="Anise Health: Patient Portal Beta 2.0"
                    subTitle="Creating immersive mental health experience: from session to beyond."
                    tags={["UX Design", "End-to-End", "Usability Improvement", "Renewal Rate",]} />

                <ContentCard
                    image="CoverAniseOnboarding.png"
                    title="Anise Health: Patient Onboarding"
                    subTitle="Improve conversion rates by eliminating client onboarding friction."
                    tags={["UX Design", "Conversion Rate", "Coming Soon :)",]} />

                <ContentCard
                    url="/Works/MontanaHistoricalSociety"
                    image="CoverMontanaHistoricalSociety.png"
                    title="Montana Historical Society"
                    subTitle="Evaluating Web analytics and SEO to refine Montana Historical Society's Digital Strategy."
                    tags={["Web Analytics", "SEO Audit", "Data Visualization",]} />
            </SectionGrid>
        </>
    )
}

function ContentCard({ image, title, subTitle, url, tags = [] }) {
    return (
        <GridCell>
            <Link style={{ color: "black", textDecoration: "none" }}
                to={url}>
                <FullWidthSection>
                    <img className='home-card-image'
                        src={`/Home/${image}`} alt={title}
                    />
                </FullWidthSection>
                <FullWidthSection height="1em" />
                <FullWidthSection>
                    <p className='home-card-title'>
                        {title}
                    </p>
                </FullWidthSection>
                <FullWidthSection height="0.5em" />
                <FullWidthSection>
                    <p className='text-quote' style={{ fontSize: "1em" }}>
                        {subTitle}
                    </p>
                </FullWidthSection>
                <FullWidthSection height="0.5em" />
                <FullWidthSection>
                    <div style={{ display: "inline", width: "100%" }}>
                        {[...tags].map((t, i) => <CardTag text={t} key={i} />)}
                    </div>
                </FullWidthSection>
            </Link>
        </GridCell>
    )
}

function CardTag({ text }) {
    return (
        <FixedSectionCell>
            <div className='home-card-tag'>
                <p>
                    {text}
                </p>
            </div>
        </FixedSectionCell>
    )
}
export { Home, WORKSHASH };
import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import {
    FullWidthSection,
    NotFullWidthSection,
    GrowSectionCell,
    FixedSectionCell,
} from '../Components/Section';
import { SectionGrid, GridCell } from '../Components/SectionGrid';

import "./Home.css";

const WORKS = 'Works';

function Home() {
    const location = useLocation();
    const ref = useRef();

    useEffect(() => {
        if (location.hash.slice(1,) === WORKS && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    });

    return (
        <>
            <Welcome />
            <ViewMyWork />
            <Works scrollRef={ref} />
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
            <NotFullWidthSection verticalPadding="7em">
                <Link className='text-text' to={`/Home#${WORKS}`}>
                    View my work ↓
                </Link>
            </NotFullWidthSection>
            <NotFullWidthSection height="10em" />
        </>
    )
}

function Works({ scrollRef }) {
    return (
        <>
            <div ref={scrollRef} />
            <SectionGrid
                gridMinColumn={1} gridMaxColumn={2}
                gridColumnGap={1} gridRowGap={3}
            >
                <ContentCard
                    url="/Works/AnisePatient"
                    image="CoverAniseOnboarding.png"
                    title="Anise Health: Patient Portal Beta 2.0"
                    subTitle="Creating immersive mental health experience: from session to beyond."
                    tags={["UX Design", "End-to-End", "Usability Improvement", "Renewal Rate",]} />

                <ContentCard
                    image="CoverAnisePatientPortal.png"
                    title="Anise Health: Patient Onboarding"
                    subTitle="Improve conversion rates by eliminating client onboarding friction."
                    tags={["UX Design", "Conversion Rate", "Coming Soon :)",]} />
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
                        {[...tags].map((t, _) => <CardTag text={t} />)}
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
export { Home, WORKS };
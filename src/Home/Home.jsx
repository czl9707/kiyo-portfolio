import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {
    FullWidthSection,
    NotFullWidthSection,
    FixedSectionCell,
    GrowSectionCell,
} from '../Components/Section';
import { SectionGrid, GridCell } from '../Components/SectionGrid';

import "./Home.css";

const WORKSHASH = 'Works';

function Home() {
    const location = useLocation();
    const ref = useRef();

    useEffect(() => {
        if (location.hash === `#${WORKSHASH}`) {
            // setTimeout to avoid ref is not there when loading
            setTimeout(() => {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }, 1);
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
                    A research-driven UI/UX designer, adept in diverse methods to create intuitive design and boost user engagement. ⛄<br />
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
                    url="/Works/MontanaHistoricalSociety"
                    image="CoverMontanaHistoricalSociety.png"
                    title="Montana Historical Society"
                    subTitle="Evaluating Web analytics and SEO to refine Montana Historical Society's Digital Strategy."
                    tags={["Web Analytics", "SEO Audit", "Data Visualization",]} />

                <ContentCard
                    // url="/Works/100DesignChallenge"
                    image="Cover100DesignChallenge.png"
                    title="100 Days Design Challange"
                    subTitle="UI Design Challenge."
                    tags={["On Going",]} />

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
                    tags={["UX Design", "Conversion Rate",]} />

                <ContentCard
                    image="CoverKaiFineJewelry.png"
                    title="Kai Fine Jewelry"
                    subTitle="Fancy Jewelrys :)."
                    tags={["UX Design", "End-to-End", "Usability Improvement",]} />

            </SectionGrid>
        </>
    )
}

function ContentCard({ image, title, subTitle, url, tags = [] }) {
    let [isHovering, setIsHovered] = useState(false);


    return (
        <GridCell>
            <Link style={{ color: "black", textDecoration: "none" }}
                onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                to={url}>
                <FullWidthSection>
                    <GrowSectionCell>
                        <img className={isHovering ? 'home-card-image home-card-image-hover' : 'home-card-image'}
                            src={`/Home/${image}`} alt={title}
                        />
                        {
                            !url && isHovering &&
                            <div className='home-card-image-comming-soon-mask'>
                                <p>Comming Soon</p>
                            </div>
                        }
                    </GrowSectionCell>
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
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {
    FullWidthSection,
    NotFullWidthSection,
    FixedSectionCell,
    GrowSectionCell,
    SECTION_PADDING,
} from '../Components/Section';
import { SectionGrid } from '../Components/SectionGrid';

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
                    A research-driven UX designer with 3 years of work experience, adept in diverse methods to create intuitive design and boost user engagement. ⛄<br />
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
        <SectionGrid
            gridMinColumn={1} gridMaxColumn={2}
            gridColumnGap={1} gridRowGap={3}
        >
            <ContentCard
                url="/Works/EdgemereFarm"
                image="CoverEdgemereFarm.png"
                title="Edgemere Farm Website"
                subTitle="Boosting NGO engagement and increase audience awareness: enhancing the information experience from new user to active supporter."
                tags={["Website", "NGO", "0 to 1",]}
                shippingTag="Shipped in 2023"
                featured />

            <ContentCard
                url="/Works/AnisePatient"
                image="CoverAnisePatientPortal.png"
                title="AN Health Client Portal"
                subTitle="Creating immersive mental health experience: from session to beyond."
                tags={["Web App", "Healthcare", "End to End",]}
                shippingTag="Shipped in 2023"
                featured />

            <ContentCard
                url="https://www.figma.com/proto/tAGAEa0Fvk0mFnT5TXys1T/KFJ-Web-Design-_-Kiyo?page-id=2%3A2&node-id=2528-23279&viewport=3182%2C-5385%2C0.3&t=ZjuksPYBreaQNDx0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2528%3A23279"
                image="CoverKaiFineJewelry.png"
                title="Kai Fine Jewelry"
                subTitle="Improving online store revenue by revamping website browsing experience."
                tags={["Website Design", "Fashion",]}
                shippingTag="Shipped in 2024"
                isLinkPrototype />

            <ContentCard
                url="/Works/Knowunity"
                image="CoverKnowunity.png"
                title="Knowunity"
                subTitle="Expanding the lighthouse creator pool by strengthening connections between creators and their audience."
                tags={["User Research", "K-12 Education",]}
                shippingTag="Shipped in 2023" />

            <ContentCard
                url="/Works/MontanaHistoricalSociety"
                image="CoverMontanaHistoricalSociety.png"
                title="Montana Historical Society"
                subTitle="Refining MHS's website and social media digital strategy by evaluating web analytics and SEO."
                tags={["Web Analytics", "SEO", "Dashboard",]}
                shippingTag="Shipped in 2023" />

            <ContentCard
                url="/Works/DesignChallenge"
                image="Cover100DesignChallenge.png"
                title="100-day Design Challange"
                subTitle="Ongoing practices on UI design theory."
                tags={["On Going", "UI Design Theory",]} />

            {/* <ContentCard
                image="CoverAniseOnboarding.png"
                title="Anise Health: Patient Onboarding"
                subTitle="Improve conversion rates by eliminating client onboarding friction."
                tags={["UX Design", "Conversion Rate",]}
                shippingTag="Shipped in 2023" /> */}


        </SectionGrid>
    );
}

function ContentCard({ image, title, subTitle, url, shippingTag, isLinkPrototype = false, featured = false, tags = [] }) {
    let [isHovering, setIsHovered] = useState(false);

    let classes = ["card-cell", "section-cell", "home-card"];
    if (isHovering) classes.push("home-card-hover");

    return (
        <div className={classes.join(" ")}
            style={{ height: "100%", border: "none", borderRadius: "0", gridColumn: featured ? "1/-1" : undefined }}>
            <Link
                style={{ color: "black", textDecoration: "none" }}
                onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                to={url} rel={isLinkPrototype ? "noopener noreferrer" : undefined} target={isLinkPrototype ? "_blank" : undefined}>
                <FullWidthSection fadedIn={false}>
                    <GrowSectionCell>
                        <img style={{ width: "100%" }}
                            src={`/Home/${image}`} alt={title}
                        />
                        {
                            !url && isHovering &&
                            <div className='home-card-image-comming-soon-mask'>
                                <p>Comming Soon</p>
                            </div>
                        }
                        {
                            !!shippingTag &&
                            <ShippingTag text={shippingTag} />
                        }
                    </GrowSectionCell>
                </FullWidthSection>
                <FullWidthSection verticalPadding={SECTION_PADDING.MINOR} fadedIn={false} />
                <FullWidthSection fadedIn={false}>
                    <FixedSectionCell width="7.5%" />
                    <GrowSectionCell>
                        <p className='home-card-title'>
                            {title} <br />
                        </p>
                        <div style={{ height: ".4em" }} />
                        <div style={{ display: "inline", width: "100%" }}>
                            {[...tags].map((t, i) => <CardTag text={t} key={i} />)}
                        </div>
                        <div style={{ height: ".4em" }} />
                        <p className='text-quote' style={{ fontSize: "1em" }}>
                            {subTitle}
                        </p>
                    </GrowSectionCell>
                    <FixedSectionCell width="7.5%" />
                </FullWidthSection>
                <FullWidthSection verticalPadding={SECTION_PADDING.DEFAULT} fadedIn={false} />

                <ViewProject isLinkPrototype={isLinkPrototype} url={url} />
            </Link>
        </div >
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

function ViewProject({ isLinkPrototype = false, url }) {
    return (
        <p className='text-brief' style={{
            color: "#3947BE",
            fontSize: "1em",
            position: "absolute",
            left: "7.5%", bottom: "1.5em"
        }}>
            {isLinkPrototype ? "View Prototypes 🔗" : "View Project"}
        </p>
    );
}

function ShippingTag({ text }) {
    return (
        <div className='shipping-tag'
            style={{ right: ".75em", top: ".75em" }}>
            <p style={{ color: "white" }}>
                {text}
            </p>
        </div>
    )
}


export { Home, WORKSHASH };
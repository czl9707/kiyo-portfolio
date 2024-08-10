import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {
    FullWidthSection,
    NotFullWidthSection,
    FixedSectionCell,
    GrowSectionCell,
    SECTION_PADDING,
} from '../Components/Section.tsx';
import { SectionGrid, GridCell } from '../Components/SectionGrid';

import "./Home.css";

const ImageFullPath = (p) => `/Home/${p}`;

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            // setTimeout to avoid ref is not there when loading
            setTimeout(() => {
                let element = document.getElementById(location.hash.substring(1))
                let y = element.getBoundingClientRect().top - 100;
                window.scrollTo({ behavior: 'smooth', top: y });
            }, 1);
        }
    });

    return (
        <>
            <Welcome />
            <ViewMyWork />
            <div id="Works" />
            <Works />
        </>
    );
}

function Welcome() {
    return (
        <>
            <NotFullWidthSection height="8em" />
            <SectionGrid
                gridMinColumn={1} gridMaxColumn={2}
                gridColumnGap={1} gridRowGap={6}
                alignItem='center'
            >
                <GridCell>
                    <p id='home-hello-text'>
                        ✍️ Problem-solver, Critical Thinker ⛄, <br />
                        🧠 Life-long Learner, <br />
                        Architect-turned UX Designer 🏛️
                    </p>
                </GridCell>
                <GridCell>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <img src={ImageFullPath("HomeProfile.png")} alt="HomeProfile.png"
                            style={{ width: "75%" }} />
                    </div>
                </GridCell>
            </SectionGrid>
            <NotFullWidthSection height="8em" />
        </>
    )
}

function ViewMyWork() {
    return (
        <>
            <NotFullWidthSection height="3em" />
            <NotFullWidthSection verticalPadding="4em">
                <Link className='text-text' to={`/Home#Works`}
                    style={{ textAlign: 'center', width: "100%" }}>
                    ↓ View my work ↓
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
            <FeaturedContentCard
                url="/Works/AnisePatient"
                image="CoverAnisePatientPortal.png"
                title="AN Health Client Portal"
                subTitle="Creating immersive mental health experience: from session to beyond."
                tags={["Web App", "Healthcare", "End to End",]}
                shippingTag="Shipped in 2023" />

            <FeaturedContentCard
                url="/Works/EdgemereFarm"
                image="CoverEdgemereFarm.png"
                title="Edgemere Farm Website"
                subTitle="Boosting NGO engagement and increase audience awareness: enhancing the information experience from new user to active supporter."
                tags={["Website", "NGO", "0 to 1",]}
                shippingTag="Shipped in 2023" />

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

function ContentCard({ image, title, subTitle, url, shippingTag, isLinkPrototype = false, tags = [] }) {
    let [isHovering, setIsHovered] = useState(false);

    let classes = ["home-card"];
    if (isHovering) classes.push("home-card-hover");

    return (
        <>
            <GridCell >
                <Link
                    style={{ color: "black", textDecoration: "none", height: "100%" }}
                    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                    to={url} rel={isLinkPrototype ? "noopener noreferrer" : undefined} target={isLinkPrototype ? "_blank" : undefined}>
                    <FullWidthSection height="100%" stretch>
                        <GrowSectionCell>
                            <div style={{ width: "100%", height: "100%" }}
                                className={classes.join(" ")}>
                                <FullWidthSection fadedIn={false}>
                                    <img style={{ width: "100%" }}
                                        src={ImageFullPath(image)} alt={title}
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
                                </FullWidthSection>
                                <CardTextContent title={title} subTitle={subTitle} isLinkPrototype={isLinkPrototype} tags={tags} />
                            </div>
                        </GrowSectionCell>
                    </FullWidthSection>
                </Link>
            </GridCell>
        </>

    )
}

function FeaturedContentCard({ image, title, subTitle, url, shippingTag, isLinkPrototype = false, tags = [] }) {
    let [isHovering, setIsHovered] = useState(false);

    let classes = ["section-cell", "home-card"];
    if (isHovering) classes.push("home-card-hover");

    return (
        <>
            <GridCell takeWholeLine={true}>
                <Link
                    style={{ color: "black", textDecoration: "none" }}
                    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                    to={url} rel={isLinkPrototype ? "noopener noreferrer" : undefined} target={isLinkPrototype ? "_blank" : undefined}>

                    <FullWidthSection height="13em" >
                        <img style={{ width: "100%", top: "0", position: "absolute", boxShadow: "var(--secondary-shadow)" }}
                            src={ImageFullPath(image)} alt={title}
                        />
                        {
                            !!shippingTag &&
                            <ShippingTag text={shippingTag} />
                        }
                    </FullWidthSection>
                    <FullWidthSection>
                        <GrowSectionCell />
                        <div className={classes.join(" ")}
                            style={{
                                backgroundColor: "var(--primary-background)",
                                width: "500px", maxWidth: "80%", zIndex: "1"
                            }}>
                            <CardTextContent title={title} subTitle={subTitle} isLinkPrototype={isLinkPrototype} tags={tags} />
                        </div>
                    </FullWidthSection>
                </Link >
            </GridCell>
        </>
    );
}

function CardTextContent({ title, subTitle, isLinkPrototype = false, tags = [] }) {
    return (
        <>
            <FullWidthSection verticalPadding={SECTION_PADDING.MINOR} fadedIn={false} />
            <FullWidthSection fadedIn={false}>
                <FixedSectionCell width="7.5%" />
                <GrowSectionCell>
                    <p className='home-card-title'>
                        {title} <br />
                    </p>
                    <div style={{ height: ".5em" }} />
                    <div style={{ display: "inline", width: "100%" }}>
                        {[...tags].map((t, i) => <CardTag text={t} key={i} />)}
                    </div>
                    <div style={{ height: ".5em" }} />
                    <p className='text-quote' style={{ fontSize: "1em" }}>
                        {subTitle}
                    </p>
                </GrowSectionCell>
                <FixedSectionCell width="7.5%" />
            </FullWidthSection>
            <FullWidthSection verticalPadding={SECTION_PADDING.DEFAULT} fadedIn={false} />
            <ViewProject isLinkPrototype={isLinkPrototype} />
        </>
    );
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

function ViewProject({ isLinkPrototype = false }) {
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


export { Home };
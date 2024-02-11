import React from "react";
import { WorksHeader } from '../Components/Works/WorksHeader'
import { FullWidthSection, NotFullWidthSection, GrowSectionCell, FixedSectionCell } from "../Components/Section";
import { SectionGrid, GridCell } from "../Components/SectionGrid";
import { CardCell, CardImageCell } from "../Components/Works/CardCell";

import "./AnisePatient.css";
const ImageFullPath = (p) => `/Works/AnisePatient/${p}`;


const COLOR = {
    vanilla: "#FEF6E0",
    cream: "#FFFCF3",
    chai: "#986d2a",
    olive: "#8c8049",
}

function AnisePatient() {
    return (
        <>
            <WorksHeader
                title="Creating immersive mental health experience: from session to beyond"
                tags={["End-to-end", "Usability Improvement", "User Satisfaction", "Subscription Renewal",]}
                color={COLOR.vanilla} />
            <Overview />
            <Intro />
            <Journey />
            <Solution />
            <FinalResults />
            <DefineScope />
            <ResearchIdeation />
            <Bar backgroundColor={COLOR.chai}
                title="Key Finding 1"
                statement="Patients find difficulty in care plan adherence and get hindered in session process." />
            <KeyFinding1 />
            <Bar backgroundColor={COLOR.olive}
                title="Design Question 1"
                statement="How might we streamline patient experience in scheduling, attending sessions, and care plan adherence?" />
            <DesignQuestion1 />
            <Bar backgroundColor={COLOR.chai}
                title="Key Finding 2"
                statement="Patients find the self-service resources overwhelming and unengaging, impeding their utilization outside of sessions." />
            <KeyFinding2 />
            <Bar backgroundColor={COLOR.olive}
                title="Design Question 2"
                statement="How might we improve the usability of self-service tools to encourage patients’ utilization outside of sessions?" />
            <DesignQuestion2 />
        </>
    )
}

function Bar({ backgroundColor, title, statement }) {
    return (
        <NotFullWidthSection backgroundColor={backgroundColor} vertical_padding="3em">
            <GrowSectionCell>
                <p className="text-brief" style={{ color: "white" }}>
                    {title}<br /><br />
                </p>
                <p className="title-section" style={{ color: "white" }}>
                    {statement}
                </p>
            </GrowSectionCell>
        </NotFullWidthSection>
    )
}

function BulletPoints({ bullets = [] }) {
    return (
        <ul style={{ paddingInlineStart: "1.5em" }}>
            {bullets.map((b, _) => <li>
                <p className="text-quote">{b}</p>
            </li>)}
        </ul>
    );
}

function CardWithBulletPoints({ title, bullets = [] }) {
    return (
        <CardCell>
            <p className="text-bond">
                {title}<br />
            </p>
            <BulletPoints bullets={bullets} />
        </CardCell>
    );
}


function QuoteAndImg({ children, img, annotation, hasLeftBorder = true }) {
    return (
        <>
            <GridCell startPosition="1">
                <FullWidthSection fadedIn={false}>
                    <GrowSectionCell>
                        <p style={{
                            borderLeft: hasLeftBorder ? "2px #E0E0E0 solid" : "",
                            paddingLeft: hasLeftBorder ? "1em" : ""
                        }}>
                            {children}
                        </p>
                    </GrowSectionCell>
                    <FixedSectionCell width="2.5em" />
                </FullWidthSection>
            </GridCell>
            <CardImageCell startPosition="2" endPosition="-1"
                annotation={annotation} img={ImageFullPath(img)} />
        </>
    );
}

function Overview() {
    return (
        <SectionGrid gridMinColumn={1} gridMaxColumn={2}
            gridColumnGap={2}
            vertical_padding={"3em"}
            backgroundColor={COLOR.vanilla}
            alignItem="center">
            <GridCell>
                <p className="text-brief" style={{ color: COLOR.chai }}>
                    OVERVIEW<br />
                </p>
                <p className="text-text">
                    During my experience at Anise Health, I worked as a UX designer & researcher, taking ownership of the <b>client portal</b>.
                    <br /><br />
                    Anise Health is a culturally-responsive digital mental health platform for Asian American. The patient portal Beta 1.0 was launched in June 2022. However, the <b>initial MVP was built with minimal design</b>, leading to some usability issues.
                    <br /><br />
                    Collaborating closely with a cross-functional team, <b>I redesigned the Patient Portal Beta 1.0 to 2.0.</b> The redesign encompassed all the primary features essential for a client's care journey.
                </p>
            </GridCell>
            <GridCell>
                <div style={{ width: "100%", height: "100%" }}>
                    <img src="/Works/AnisePatient/AnisePatientIntro.png"
                        alt="AnisePatientIntro.png" width="180%" />
                </div>
            </GridCell>
        </SectionGrid>
    );
}

function Intro() {
    return (
        <SectionGrid gridMinColumn={2} gridMaxColumn={2}
            gridColumnGap={2}
            gridRowGap={4}
            vertical_padding={"3em"}
            backgroundColor={COLOR.cream}>
            <GridCell>
                <p className="text-brief" style={{ color: COLOR.chai }}>
                    Duration<br />
                </p>
                <p className="text-text">
                    Nov 2022 - Feb 2023
                </p>
                <br /><br />
                <p className="text-brief" style={{ color: COLOR.chai }}>
                    Team<br />
                </p>
                <p className="text-text">
                    1 Product Manager, 2 UX designers, Engineering team, Clinical team, Growth team
                </p>
            </GridCell>
            <GridCell>
                <p className="text-brief" style={{ color: COLOR.chai }}>
                    My Contribution<br />
                </p>
                <p className="text-text">
                    🔎 Research: Usablity Testing, Heuristic Evaluation, Data Synthesis<br />
                    ✏️ Design: Design Sprint, Design Recommendations, Prototyping, Hi-fi interfaces, Design System<br />
                    🤝 Management: Cross-functional collaboration, Design Walk-through, Design Hand-off<br />
                </p>
            </GridCell>
            <GridCell takeWholeLine={true}>
                <p className="text-brief" style={{ color: COLOR.chai }}>
                    Project Goal<br />
                </p>
                <p className="title-section">
                    Enhance patient engagement and satisfaction, facilitate subscription renewals.
                </p>
                <p className="text-text">
                    <br />
                    The patient portal is the primary platform for online sessions and self-service resources beyond sessions. However, user-friendliness in Beta 1.0 hinders monitoring monthly care plans (with 4 sessions) and limits self-service resources usage. This impedes patient engagement, satisfaction, and overall clinical progress, consequently impacting business growth.
                    <br /><br />
                    Recognizing limitations, we're dedicated to enhancing the platform for a smoother user experience: <b> Addressing usability will drive patient engagement, satisfaction, forster their clinical progress, and ultimately contributing to business growth.</b>
                </p>
            </GridCell>
        </SectionGrid>
    );
}

function Journey() {
    return (
        <>
            <NotFullWidthSection vertical_padding="2em">
                <GrowSectionCell />
                <FixedSectionCell>
                    <p className="text-brief" style={{ color: COLOR.chai }}>
                        Agile UX Journey
                    </p>
                </FixedSectionCell>
                <GrowSectionCell />
            </NotFullWidthSection>
            <FullWidthSection>
                <div style={{ width: "100%", height: "100%", justifyContent: "center", display: "flex" }}>
                    <img src="/Works/AnisePatient/AnisePatientJourney.png"
                        alt="AnisePatientJourney.png" width="80%" />
                </div>
            </FullWidthSection>
            <FullWidthSection height="4em" />
        </>
    )
}

function Solution() {
    function ImageCard({ img }) {
        return (
            <CardImageCell img={img} />
        );
    }

    return (
        <SectionGrid
            backgroundColor={COLOR.vanilla}
            gridMaxColumn={3} gridMinColumn={2}
            vertical_padding="3em"
            gridColumnGap={1} gridRowGap={0.5}>
            <GridCell takeWholeLine={true}>
                <FullWidthSection>
                    <GrowSectionCell>
                        <p className="text-brief" style={{ color: COLOR.chai }}>
                            Solutions<br />
                        </p>
                        <p className="text-text">
                            <br />
                            I redesigned the patient portal from Beta 1.0 to 2.0, focusing on four critical tasks: <b>optimizing information architecture, addressing usability issues, incorporating new functionalities, and aesthetically revamped UI. </b><br />
                            The redesign covered all primary features for a patient's care journey: from sessions to supporting outside of sessions.
                            <br /><br />
                        </p>
                    </GrowSectionCell>
                </FullWidthSection>
            </GridCell>
            <CardImageCell img={ImageFullPath("AnisePatientSolution1.png")} />
            <CardImageCell img={ImageFullPath("AnisePatientSolution2.png")} />
            <CardImageCell img={ImageFullPath("AnisePatientSolution3.png")} />
            <CardImageCell img={ImageFullPath("AnisePatientSolution4.png")} />
            <CardImageCell img={ImageFullPath("AnisePatientSolution5.png")} />
            <CardImageCell img={ImageFullPath("AnisePatientSolution6.png")} />
        </SectionGrid>

    )
}

function FinalResults() {
    function Card({ img, text }) {
        return (
            <CardCell>
                <NotFullWidthSection vertical_padding="1em" fadedIn={false}>
                    <GrowSectionCell />
                    <FixedSectionCell>
                        <img src={`/Works/AnisePatient/${img}`} alt={img}
                            style={{ height: "5em" }} />
                    </FixedSectionCell>
                    <GrowSectionCell />
                </NotFullWidthSection>
                <NotFullWidthSection fadedIn={false}>
                    <p className="text-text"
                        style={{
                            textAlign: "center",
                            fontSize: "1.25em"
                        }}>
                        {text}
                    </p>
                </NotFullWidthSection>
            </CardCell>
        );
    }

    return (
        <>
            <SectionGrid
                backgroundColor={COLOR.vanilla}
                gridMaxColumn={3} gridMinColumn={3}
                gridColumnGap={1} gridRowGap={0.5}>
                <GridCell takeWholeLine={true}>
                    <FullWidthSection>
                        <GrowSectionCell>
                            <p className="text-brief" style={{ color: COLOR.chai }}>
                                <br /><br />Final Results<br />
                            </p>
                            <p className="text-text">
                                <br />
                                Within 2 months of its launch, Patient Portal Beta 2.0 has significantly improved usability, resulting in fewer complaints, reduced customer service costs, <b> a 7% increase in NPS</b>, and an <b>11% boost in monthly subscription renewals</b>, surpassing our business objectives.                            <br /><br />
                            </p>
                        </GrowSectionCell>
                    </FullWidthSection>
                </GridCell>
                <Card img="AnisePatientIconUsability.png"
                    text="Improved usability significantly" />
                <Card img="AnisePatientIconSatisfactory.png"
                    text="Improved NPS (Net Promoter Score) by 7%" />
                <Card img="AnisePatientIconGrowth.png"
                    text="Improved subscription renewal rate at EO Mon1 by 11%" />
            </SectionGrid>
            <FullWidthSection
                backgroundColor={COLOR.vanilla}
                height="3em" />
        </>
    );
}

function DefineScope() {
    function Card({ img, title, text }) {
        return (
            <CardCell>
                <NotFullWidthSection fadedIn={false}>
                    <GrowSectionCell />
                    <FixedSectionCell>
                        <img src={`/Works/AnisePatient/${img}`} alt={img}
                            style={{ height: "10em" }} />
                    </FixedSectionCell>
                    <GrowSectionCell />
                </NotFullWidthSection>
                <NotFullWidthSection fadedIn={false}>
                    <GrowSectionCell>
                        <p className="text-brief"
                            style={{ textAlign: "center" }}>
                            <br />
                            {title}
                            <br />
                        </p>
                    </GrowSectionCell>
                </NotFullWidthSection>
                <NotFullWidthSection fadedIn={false}>
                    <p className="text-text"
                        style={{ textAlign: "center" }}>
                        {text}
                    </p>
                </NotFullWidthSection>
            </CardCell >
        );
    }

    return (
        <SectionGrid
            backgroundColor="white"
            gridMaxColumn={2} gridMinColumn={2}
            vertical_padding="3em"
            gridColumnGap={1} gridRowGap={2}>
            <GridCell takeWholeLine={true}>
                <p className="text-brief" style={{ color: COLOR.chai }}>
                    Define Scope<br />
                </p>
                <p className="title-section">
                    Revamp experience within sessions and out of sessions.
                </p>
                <p className="text-text">
                    <br />
                    Kicking off the project, I emphazised with Anise's target users, understood how Anise service works and identified <b>two primary use cases</b> in the services, which shape the design focus: Anise offers monthly subscribed care palns (with 4 online sessions) and self-services tools for patients to support their long-term well-being.                </p>
            </GridCell>
            <Card img="AnisePatientScopeIllustration1.png"
                title={<p> Online sessions in <br /> subscribed care plans </p>}
                text="The monthly-subscribed care plan includes 4 weekly sessions of therapy and coaching, provided by a therapist and coach respectively.  Patients are required to schedule and attend sessions through the portal." />
            <Card img="AnisePatientScopeIllustration2.png"
                title={<p>Self-service resources <br /> beyond sessions </p>}
                text="Outside of sessions, patients are encrouraged to use self-service resources in portal to practice the skills they learned. The resources include editable worksheets, daily mood recording, and learning materials." />
        </SectionGrid>
    );
}

function ResearchIdeation() {
    return (
        <SectionGrid
            backgroundColor="white"
            gridMaxColumn={2} gridMinColumn={2}
            vertical_padding="3em"
            gridColumnGap={4} gridRowGap={2}
            alignItem="center">
            <GridCell takeWholeLine={true}>
                <p className="text-brief" style={{ color: COLOR.chai }}>
                    Research & Ideation<br />
                </p>
                <p className="title-section">
                    Usability testings with current Beta & Design sprint in cross-functional team.
                </p>
            </GridCell>
            <GridCell>
                <p className="text-text">
                    I conducted <b>usability testings with 8 participants</b> to understand underlying issues.
                    <br /><br />
                    I synthesized data with an <b>affinity diagram</b>, transforming painpoints into insights and focused design questions. After prioritizing, I facilitaed a <b>design sprint workshop with 10 participants</b> from the cross-functional team to brainstorm concepts. Following ideation, categorization, voting, and analysis, I derived practical design recommendations.
                </p>
            </GridCell>
            <GridCell>
                <img src="/Works/AnisePatient/AnisePatientWorkshopSnapshoot.png" alt="AnisePatientWorkshopSnapshoot.png"
                    width="100%" />
                <p className="text-quote"
                    style={{ textAlign: "center" }}>
                    Design sprint workshop
                </p>
            </GridCell>
        </SectionGrid>
    );
}


function KeyFinding1() {
    return (
        <SectionGrid
            backgroundColor={COLOR.cream}
            gridMaxColumn={3} gridMinColumn={2}
            vertical_padding="3em"
            gridColumnGap={1} gridRowGap={1}
            alignItem="center">
            <GridCell takeWholeLine={true}>
                <p className="text-brief" style={{ color: COLOR.chai }}>
                    Usability issues<br />
                </p>
            </GridCell>
            <CardWithBulletPoints
                title="Cluttered IA"
                bullets={[
                    "Information about sessions,  care plan, and providers are cluttered in the top banner and two pages.",
                    "User flow gap: Patients need to schedule in Home page and join session Appointment page.",
                    "Sessions not categorzied intuitively by types, by status or chronically.",
                ]} />
            <CardWithBulletPoints
                title="Extra effort required leading to potential errors"
                bullets={[
                    "Care plans include two session types (therapy & coaching), arranged differently based on each plan. Patients must follow the outlined care plan to schedule sessions with therapist / coach respectively, leading to potential errors when the care plan changes.",
                ]} />
            <CardWithBulletPoints
                title="Insufficient & unclear guidance "
                bullets={[
                    "The guidance is inadequate and lacks clarity, making patients uncertain about system status and their next steps, especially concerning mandatory weekly check-in forms prior to session attendance.",
                ]} />


            <QuoteAndImg img="AnisePatientKeyFinding1_1.png" annotation="Flow 1: schedule session">
                <p className="text-text" ><i>
                    “It says coach... Should I follow what it tells me to schedule in terms of therapy vs coaching?” 🤔
                    <br />
                    -- Participant 5
                </i></p>
            </QuoteAndImg>
            <QuoteAndImg img="AnisePatientKeyFinding1_2.png" annotation="Flow 2: Check-in before session and attend session">
                <p className="text-text" ><i>
                    “I didn't know how to join in until the button poped up after submit the check-in form.” 😵‍💫
                    <br />
                    -- Participant 4
                </i></p>
            </QuoteAndImg>
        </SectionGrid>

    );
}

function DesignQuestion1() {
    return (
        <SectionGrid
            backgroundColor={COLOR.cream}
            gridMaxColumn={3} gridMinColumn={2}
            vertical_padding="3em"
            gridColumnGap={1} gridRowGap={1}
            alignItem="center">
            <GridCell takeWholeLine={true}>
                <p className="text-brief" style={{ color: COLOR.chai }}>
                    Solution<br />
                </p>
                <p className="title-section">
                    Track and manage sessions at a glance.
                </p>
            </GridCell>
            <CardWithBulletPoints
                title="Optimize IA"
                bullets={[
                    "Prioritize critical info & actions, remove less relevant info from Homepage.",
                    "Separate provider information from session information.",
                    "Integrate relevant actions into one page to eliminate flow gap.",
                    "Categorize sessions by status, type and chronological order.",
                ]} />
            <CardWithBulletPoints
                title="Simplify scheduling & Visualize care plan"
                bullets={[
                    "Improve scheduling mechanism to meet patient conceptual model: allow patients to schedule upcoming sessions without having to check care plan manually.",
                    "Visualize care plan progress to reduce cognitive load: revamp layout and feedback effectivly.",
                ]} />
            <CardWithBulletPoints
                title="Intuitive guidance"
                bullets={[
                    "Uitilize documentation and help (reminding emails / text messages, pop-up texts, and visual cues) to ensure system visibility and indicate actions.",
                ]} />


            <QuoteAndImg hasLeftBorder={false}
                img="AnisePatientDesignQuestion1_1.png" annotation="Flow 1: schedule session">
                <p className="title-section-sub">
                    Is the next session for therapy or coaching?<br />
                    Just book it.
                </p>
                <br />
                <BulletPoints bullets={[
                    "A clear linear visualization simplifies patient awareness of care plan progress.",
                    "Sessions are automatically listed in accordance with the care plan, removing the need for patients to verify the next session type when scheduling.",
                    "Patients get a preview of the upcoming month's care plan."
                ]} />
            </QuoteAndImg>
            <QuoteAndImg hasLeftBorder={false}
                img="AnisePatientDesignQuestion1_2.png" annotation="Flow 2: Check-in before session and attend session">
                <p className="title-section-sub">
                    We lead your way to attend.
                </p>
                <br />
                <BulletPoints bullets={[
                    "An email will be sent 2 days before session to remind patients complete weekly check-in. ",
                    "\"Join Session\" button will become active once the check-in form is submitted.",
                    "If patients click \"Join Session\" before completing check-in, a text reminder will pop up to guide them.",
                ]} />
            </QuoteAndImg>
        </SectionGrid>
    );
}


function KeyFinding2() {
    return (
        <>
            <SectionGrid
                backgroundColor={COLOR.cream}
                gridMaxColumn={2} gridMinColumn={2}
                vertical_padding="3em"
                gridColumnGap={1} gridRowGap={1}>
                <GridCell takeWholeLine={true}>
                    <p className="text-brief" style={{ color: COLOR.chai }}>
                        Usability issues<br />
                    </p>
                </GridCell>
                <CardWithBulletPoints
                    title="Overwhelming contents without effective category, clarification and personalization"
                    bullets={[
                        "Patients are overwhelmed by the amount of documents, struggling to differentiate and decide which ones to use.",
                    ]} />
                <CardWithBulletPoints
                    title="Redundancy in user flow of worksheet"
                    bullets={[
                        "Patients have to download, complete offline, and upload worksheets, which doesn't match to user expecation.",
                    ]} />
                <CardWithBulletPoints
                    title="Non-visualized UI: not appealing "
                    bullets={[
                        "The tools are displayed in a bare-bone document format, and patients show minimal interest in exploring or utilizing them unless prompted by providers.",
                    ]} />
                <CardWithBulletPoints
                    title="Absent feedback to patients' input"
                    bullets={[
                        "Patients get no feedback so have no idea why completing worksheets or check-in forms matters and feel little motivated to complete.",
                    ]} />
            </SectionGrid>

            <SectionGrid
                backgroundColor={COLOR.cream}
                gridMaxColumn={3} gridMinColumn={2}
                gridColumnGap={1} gridRowGap={1}
                alignItem="center">

                <QuoteAndImg img="AnisePatientKeyFinding2_1.png" annotation="Resources page before redesign">
                    <p className="text-text" ><i>
                        “I'm not sure about the purpose of these files. Dealing with downloads and uploads is quite a hassle; I wouldn't bother unless my therapist prompts”
                        <br />
                        -- Participant 1
                    </i></p>
                </QuoteAndImg>
            </SectionGrid>
            <NotFullWidthSection backgroundColor={COLOR.cream} height="3em" />
        </>
    );
}

function DesignQuestion2() {
    return (
        <SectionGrid
            backgroundColor={COLOR.cream}
            gridMaxColumn={3} gridMinColumn={2}
            vertical_padding="3em"
            gridColumnGap={1} gridRowGap={1}
            alignItem="center">
            <GridCell takeWholeLine={true}>
                <p className="text-brief" style={{ color: COLOR.chai }}>
                    Solution<br />
                </p>
                <p className="title-section">
                    Comprehensive, effortless, personalized and interactive.
                </p>
            </GridCell>
            <CardWithBulletPoints
                title="Categorize contents & clarify usage"
                bullets={[
                    "Reorganize contents based on use case to improve scannability.",
                    "Clarify usage and benefits of each category with clear lables and help text.",
                ]} />
            <CardWithBulletPoints
                title="Improve info hierarchy with subtab"
                bullets={[
                    "Divide multiple categories into distinct subtabs to simplify each interface and lessen cognitive burden.",
                ]} />
            <CardWithBulletPoints
                title="Integrate all steps of using worksheet in portal"
                bullets={[
                    "Enable patients preview, edit, and submit worksheets without leaving portal.",
                ]} />
            <CardWithBulletPoints
                title="Personalize recommendation"
                bullets={[
                    "Patient data-driven recommendations: combining algorithms and manual provider input.",
                    "Use tags & labels to highlight affinifty and recommendation.",
                ]} />
            <CardWithBulletPoints
                title="Refresh UI & visual hierarchy"
                bullets={[
                    "Improve visual hierarchy.",
                    "Illustrate usage of tools with visual representations.",
                    "Incorporate gamified elements into interactive UI.",
                ]} />
            <CardWithBulletPoints
                title="Provide Informative feedback"
                bullets={[
                    "Visualize patient clinical quantitive data to show progress and achivement.",
                    "Provide consistent and regular feedback during sessions.",
                ]} />

            <QuoteAndImg hasLeftBorder={false}
                img="AnisePatientDesignQuestion2_1.png" annotation="Flow 3: Check clinical progress">
                <p className="title-section-sub">
                    "Am I making progress?"
                </p>
                <br />
                <BulletPoints bullets={[
                    "Visualized clinical progress (Depression, Anxiety, Stress) empowers patients in their care journey.",
                    "Transparency enhances the trust between patients and their providers.",
                ]} />
            </QuoteAndImg>
            <QuoteAndImg hasLeftBorder={false}
                img="AnisePatientDesignQuestion2_2.png" annotation="Flow 4: Write worksheets recommended by providers">
                <p className="title-section-sub">
                    Practice session-learned skills effortlessly
                </p>
                <br />
                <BulletPoints bullets={[
                    "Following sessions, patients will receive personalized worksheets assigned by providers.",
                    "In-portal worksheets streamline patient engagement  without downloads or uploads.",
                    "Worksheets become visible to providers only after submission,  protecting patients' privacy and autonomy.",
                ]} />
            </QuoteAndImg>
            <QuoteAndImg hasLeftBorder={false}
                img="AnisePatientDesignQuestion2_3.png" annotation="Flow 5: Read learning resources">
                <p className="title-section-sub">
                    Access to personalized & unique contents
                </p>
                <br />
                <BulletPoints bullets={[
                    "We offer patients content that aligns with Anise’s distinctive niche.",
                    "Content is ranked with personalization based on data and provider recommendations.",
                ]} />
            </QuoteAndImg>
            <QuoteAndImg hasLeftBorder={false}
                img="AnisePatientDesignQuestion2_4.png" annotation="Flow 6: Record daily mood">
                <p className="title-section-sub">
                    Record mood with fun
                </p>
                <br />
                <BulletPoints bullets={[
                    "Gamification and interaction make mood recording more engaging for patients, promoting data input to aid treatment.",
                    "Emoji and precise words streamline mood selection and recording without additional descriptions or input.",
                ]} />
            </QuoteAndImg>
        </SectionGrid>
    );
}



export { AnisePatient };
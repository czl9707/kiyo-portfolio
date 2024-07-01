import React from "react";

import { NotFullWidthSection, GrowSectionCell, FixedSectionCell } from "./Section";
import { Link } from "react-router-dom";
import { WORKSHASH } from "../Home/Home.jsx"

function Header() {
    return (
        <div className="sticky-header">
            <NotFullWidthSection backgroundColor={"var(--primary-background)"} verticalPadding="1.5em" fadedIn={false}>
                <Logo />
                <GrowSectionCell />
                <Links />
            </NotFullWidthSection>
        </div >
    );
}

function Logo() {
    return (
        <FixedSectionCell>
            <Link className="text-logo"
                to={'/Home'} >KIYO YANG</Link>
        </FixedSectionCell >
    )
}

function Links() {
    return (
        <>
            <Link className="text-text" style={{ fontSize: "1.25em" }} to={`/Home#${WORKSHASH}`}> Work </Link>
            <FixedSectionCell width="1.5em" />
            <Link className="text-text" style={{ fontSize: "1.25em" }} to={'/AboutMe'}> About</Link>
            <FixedSectionCell width="1.5em" />
            <Link className="text-text" style={{ fontSize: "1.25em" }} target="_blank" rel="noopener noreferrer" to={
                `https://drive.google.com/file/d/1fRxv_PRcMMl88VN4TpWCalqxGoVQfd5n/view?usp=drive_link`
            }> Resume</Link>
        </>
    )
}

export { Header };
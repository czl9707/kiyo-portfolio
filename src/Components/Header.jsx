import React from "react";

import { NotFullWidthSection, GrowSectionCell, FixedSectionCell } from "./Section";
import { Link } from "react-router-dom";
import { WORKS } from "../Home/Home.jsx"

function Header() {
    return (
        <div className="sticky-header">
            <NotFullWidthSection backgroundColor={"white"} vertical_padding="1.5em" fadedIn={false}>
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
                to={'/Home'} >KIYO</Link>
        </FixedSectionCell >
    )
}

function Links() {
    return (
        <>
            <Link className="text-text" style={{ fontSize: "1.25em" }} to={`/Home#${WORKS}`}> Work </Link>
            <FixedSectionCell width="1.5em" />
            <Link className="text-text" style={{ fontSize: "1.25em" }} to={'/'}> About</Link>
            <FixedSectionCell width="1.5em" />
            <Link className="text-text" style={{ fontSize: "1.25em" }} to={'/'}> Resume</Link>
        </>
    )
}

export { Header };
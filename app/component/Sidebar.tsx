import React from "react";
import {Envelope, Twitter, Linkedin, Github} from "../../icons/index";

interface SidebarData {
    name: string;
    role: string;
    education: string[];
    contactLinks: string[];
}

const Sidebar = ({ data }: { data: SidebarData}) => {
    const {name, role, education, contactLinks} = data;
    return (
    <div>
        <div>
            {/* <Image /> */}
            <h1>{name}</h1>
            <h2>{role}</h2>
            <p>{education[0]}</p>
            <p>{education[1]}</p>
            <div>
                <h3>Contact Me</h3>
                <a href={contactLinks?.[0]} aria-label={"twitter link"}><Envelope className={undefined} /></a>
                <a href={contactLinks?.[1]} aria-label={"linkedin link"}><Twitter className={undefined} /></a>
                <a href={contactLinks?.[2]} aria-label={"twitter link"}><Linkedin className={undefined} /></a>
                <a href={contactLinks?.[3]} aria-label={"github link"}><Github className={undefined} /></a>

            </div>
        </div>
    </div>
    )
}

export default Sidebar
"use client";
import Image from "next/image"
import React, {useId, useState} from "react";
import {Envelope, Twitter, Linkedin, Github, Vercel, Telephone} from "../../icons/index";

interface SidebarData {
    name: string;
    role: string;
    education: string[];
    contactLinks: string[];
}

const Sidebar = ({ data }: { data: SidebarData}) => {
    const {name, role, education, contactLinks} = data;
    const id = useId();
    
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    return (
    <div className="bg-black flex flex-col sm:h-screen min-h-screen justify-between content-between w-full h-auto  sm:justify-around sm:w-1/3 sm:fixed">
        <div className="text-white flex flex-col p-10 items-center">
            <Image
                priority
                width={300}
                height={300}
                className="rounded-full h-full mb-6"
                src="/images/prikazna.jpg"
                alt="profile picture"
            />
            <h1 className="mb-2">{name}</h1>
            <h2 className="mb-8 text-center">{role}</h2>
            {education?.map((el, index) => (
                <p className="mb-2 text-center" key={`${id}_${index}`}>{el}</p>
            ))}
            <div className="text-white text-center mb-4 mt-4 sm:mt-8">
                <h3 className="mb-2">KONTAKT</h3>
                <div className="flex flex-row justify-center gap-2 relative">
                <span
                        className="contact-icons"
                        aria-label="phone number"
                        onMouseEnter={() => setShowPhoneNumber(true)}
                        onMouseLeave={() => setShowPhoneNumber(false)}
                    >
                            <Telephone className={undefined} />
                            {showPhoneNumber && (
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 bg-white text-black py-1 px-2 rounded font-bold">
                                    {contactLinks?.[0]}
                                </span>
                            )}
                    </span>
                    <a className="contact-icons" href={contactLinks?.[1]} aria-label={"twitter link"}><Envelope className={undefined} /></a>
                    <a className="contact-icons" href={contactLinks?.[2]} aria-label={"twitter link"}><Linkedin className={undefined} /></a>
                    <a className="contact-icons" href={contactLinks?.[3]} aria-label={"github link"}><Github className={undefined} /></a>
                    <a className="contact-icons" href={contactLinks?.[4]} aria-label={"vercel link"}><Vercel className={undefined} /></a>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Sidebar
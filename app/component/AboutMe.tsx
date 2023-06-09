"use client"
import React, {useId} from "react";
import Skills from "./Skills";


type AboutMeProps = {
  data: {
    title: string;
    body: string[];
  };
  skills: {
    [key: string]: {
      icon: string;
      text: string;
    }[];
    mehke: {
      icon: string;
      text: string;
    }[];
    trde: {
      icon: string;
      text: string;
    }[];
  };
};


const AboutMe = ({data, skills}: AboutMeProps) => {
    const{title, body} = data;
    const id = useId()

    return (
    <section>
        <h2 className="mb-8">{title}</h2>
        {body?.map((el: string, i: number) => (
        <p key={`${id}_${i}`} className= "mb-6 text-lg text-justify">
            {el}
            </p>))}
        <Skills data={skills}  />
    </section>
    )
}

export default AboutMe;
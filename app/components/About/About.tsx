"use client";
import "./About.css";
import AboutCard from "./components/AboutCard/AboutCard";
import Technologies from "./components/Technologies/Technologies";
import Highlights from "./components/Highlights/Highlights";

export default function About() {
  return (
        <section className="about-section" id="about">
            <div className="about-container">

                <AboutCard />

                <Technologies />

                <Highlights />

            </div>
        </section>
    );
};



"use client";

import Link from "next/link";
import "./Hero.css";

import HeroCodingWindow from "./components/HeroCodingWindow/HeroCodingWindow";
import Stats from "./components/Stats/Stats";

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">

          <div className="hero-inner">

            {/* LEFT */}

            <div className="hero-left">

              <span className="hero-badge">
                Senior Software Engineer (Frontend)
              </span>

              <h1>
                Building scalable
                <br />
                React applications
                <br />
                that solve <span>real</span>
                <br />
                business problems.
              </h1>

              <p>
                Over 15 years of commercial software engineering experience
                delivering enterprise software, leading frontend initiatives,
                and collaborating with product teams to build high-quality user
                experiences.
              </p>

              <div className="hero-buttons">

                <Link
                  href="/projects"
                  className="primary-btn"
                >
                  View My Work →
                </Link>

                <Link
                  href="/cv/Graeme_Taylor_CV.pdf"
                  download
                  className="secondary-btn"
                >
                  Download CV
                </Link>

                <Link
                  href="/contact"
                  className="secondary-btn"
                >
                  Contact Me
                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="hero-right">
              <div className="code-window-wrapper">
                <div className="code-glow" />
                <HeroCodingWindow />
              </div>  
            </div>

          </div>

        </div>
      </section>

      <Stats />
    </>
  );
}
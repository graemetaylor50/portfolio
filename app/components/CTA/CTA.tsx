import "./CTA.css";
import { SendHorizontal, ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="cta-section" id="contact">
            <div className="container">
                <div className="cta">

                    <div className="cta-left">
                        <div className="cta-icon">
                            <SendHorizontal size={22} />
                        </div>

                        <div className="cta-text">
                            <h2>Interested in working together?</h2>
                            <p>
                                I'm currently open to senior frontend and software
                                engineering opportunities.
                            </p>
                        </div>
                    </div>

                    <a
                        href="mailto:scoopsy@gmail.com"
                        className="cta-button"
                    >
                        Get In Touch
                        <ArrowRight size={18} />
                    </a>

                </div>
            </div>
        </section>
    );
};

export default CTA;
import "./Footer.css";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-content">

                    <div className="footer-links">

                        <a
                            href="mailto:YOUR_EMAIL"
                            className="footer-link"
                        >
                            <FiMail size={18} />
                            <span>scoopsy@gmail.com</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/graeme-taylor-0414bb27/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <FaLinkedin size={18} />
                            <span>linkedin.com/in/graemetaylor</span>
                        </a>

                        <a
                            href="https://github.com/graemetaylor50"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <FaGithub size={18} />
                            <span>github.com/graemetaylor</span>
                        </a>

                    </div>

                    <p className="copyright">
                        © {new Date().getFullYear()} Graeme Taylor. All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
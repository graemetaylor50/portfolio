import "./Experience.css";

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">

                <div className="section-heading">
                    <span className="section-tag">Experience</span>

                    <h2>My Professional Journey</h2>

                    <p>
                        Over the last nine years I've helped build and maintain
                        enterprise applications used by educators around the
                        world, collaborating with cross-functional teams to
                        deliver scalable, high-quality software.
                    </p>
                </div>

                <div className="experience-stats">

                    <div className="experience-stat">
                        <h3>15+</h3>
                        <span>Years Experience</span>
                    </div>

                    <div className="experience-stat">
                        <h3>3</h3>
                        <span>Companies</span>
                    </div>

                    <div className="experience-stat">
                        <h3>Enterprise</h3>
                        <span>Applications</span>
                    </div>

                    <div className="experience-stat">
                        <h3>React</h3>
                        <span>Specialist</span>
                    </div>

                </div>

                <div className="experience-list">

                    {/* HMH */}

                    <article className="experience-card">

                        <div className="experience-header">

                            <div>
                                <h3>Senior Software Engineer</h3>

                                <h4>Houghton Mifflin Harcourt</h4>
                            </div>

                            <span className="experience-date">
                                May 2017 — October 2025
                            </span>

                        </div>

                        <div className="experience-tags">

                          <span>React</span>
                          <span>TypeScript</span>
                          <span>GraphQL</span>
                          <span>Apollo Client</span>
                          <span>Jest</span>
                          <span>Playwright</span>
                          <span>Jenkins</span>
                          <span>AWS</span>

                        </div>

                       <ul>

                          <li>
                              Owned frontend implementation of major product features from technical planning through production deployment.
                          </li>

                          <li>
                              Led frontend development across multiple initiatives within a four-engineer Agile team.
                          </li>

                          <li>
                              Partnered with Product Managers to refine requirements, estimate work and deliver customer-focused solutions.
                          </li>

                          <li>
                              Collaborated closely with UX Designers to translate complex workflows into intuitive React user interfaces.
                          </li>

                          <li>
                              Developed reusable React components integrating GraphQL services through Apollo Client.
                          </li>

                          <li>
                              Improved maintainability by introducing modern frontend libraries, reusable components and engineering best practices.
                          </li>

                          <li>
                              Performed code reviews and helped establish frontend coding standards across the team.
                          </li>

                          <li>
                              Mentored engineers in React development, automated testing and frontend best practices.
                          </li>

                          <li>
                              Expanded automated testing with Jest and Playwright, improving product quality and reducing regressions.
                          </li>

                          <li>
                              Contributed to Jenkins pipeline scripts supporting continuous integration and deployment to AWS.
                          </li>

                          <li>
                              Worked closely with backend engineers to improve API integration, application performance and overall user experience.
                          </li>

                      </ul>

                    </article>

                    {/* Fleetmatics */}

                    <article className="experience-card">

                        <div className="experience-header">

                            <div>
                                <h3>Senior QA Engineer</h3>

                                <h4>Fleetmatics</h4>
                            </div>

                            <span className="experience-date">
                                2015 — 2017
                            </span>

                        </div>

                        <div className="experience-tags">

                            <span>Java</span>
                            <span>Selenium</span>
                            <span>SQL</span>
                            <span>Automation</span>

                        </div>

                        <ul>

                            <li>
                                Designed and implemented the company's first mobile automation framework using 
                                Appium
                            </li>

                            <li>
                                Improved quality across the Reveal mobile platform through automation and exploratory 
                                testing. 
                            </li>

                            <li>
                                Collaborated with UX teams to improve user experience.
                            </li>

                            <li>
                               Mentored engineers during rapid team growth.
                            </li>
                             <li>
                                Investigated production issues alongside development and customer support teams. 
                            </li>

                        </ul>

                    </article>
                     <article className="experience-card">

                        <div className="experience-header">

                            <div>
                                <h3>QA Engineer</h3>

                                <h4>IBM</h4>
                            </div>

                            <span className="experience-date">
                                2008 — 2015
                            </span>

                        </div>

                        <div className="experience-tags">

                            <span>Java</span>
                            <span>Rational TestManager</span>
                            <span>Appium</span>
                            <span>Automation</span>

                        </div>

                        <ul>

                            <li>
                                Built enterprise automation frameworks across desktop, web and mobile platforms. 
                            </li>

                            <li>
                                Led testing activities across international engineering teams.
                            </li>

                            <li>
                                Delivered technical training and established automation standards
                            </li>

                            <li>
                                Worked closely with development, support and sales organisations to improve product 
                                quality. 
                            </li>

                        </ul>

                    </article>
                </div>

            </div>
        </section>
    );
};

export default Experience;
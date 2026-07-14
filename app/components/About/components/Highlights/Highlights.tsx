const highlights = [
    {
        title: "Modernised a Large React Codebase",
        text: "Incrementally migrated legacy features while maintaining production stability."
    },
    {
        title: "Reusable Component Libraries",
        text: "Built reusable UI components used across multiple applications."
    },
    {
        title: "Performance Optimisation",
        text: "Reduced unnecessary renders and improved application responsiveness."
    },
     {
        title: "Mentoring & Leadership",
        text: "Mentored engineers through code reviews, testing strategies and React best practices."
    },
     {
        title: "Cross-Functional Collaboration",
        text: "Partnered with Product Managers, UX Designers and backend engineers to deliver customer-focused solutions."
    },
      {
        title: "Engineering Excellence",
        text: "Championed coding standards, code reviews and automated testing to improve software quality."
    },
];

const Highlights = () => {
    return (
        <div className="highlight-column">

            <p className="section-label">
                PROFESSIONAL HIGHLIGHTS
            </p>

            {highlights.map(item => (
                <div className="highlight-card" key={item.title}>

                    <div className="highlight-icon">
                        ⚡
                    </div>

                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>

                </div>
            ))}

        </div>
    );
};

export default Highlights;
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
    }
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

            <a href="#experience" className="view-more">
                View experience →
            </a>

        </div>
    );
};

export default Highlights;
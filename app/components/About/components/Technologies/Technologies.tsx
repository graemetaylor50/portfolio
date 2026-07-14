const tech = [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "GraphQL",
    "Apollo Client",
    "Redux",
    "Tailwind",
    "Jest",
    "Playwright",
    "Testing Library",
    "Git",
    "Docker",
    "CI/CD",
    "Material UI",
    "React Query",
];

const Technologies = () => {
    return (
        <div className="tech-column">

            <p className="section-label">
                TECHNOLOGIES
            </p>

            <div className="tech-grid">
                {tech.map(item => (
                    <div className="tech-pill" key={item}>
                        {item}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Technologies;
"use client";
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiGraphql,
    SiApollographql,
    SiRedux,
    SiTailwindcss,
    SiJest,
    SiDocker,
    SiGit,
    SiReactquery,
    SiMui,
    SiGithubactions,
    SiTestinglibrary,
} from "react-icons/si";
import { MdOutlineBugReport } from "react-icons/md"

const tech = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Apollo Client", icon: SiApollographql, color: "#311C87" },
    { name: "React Query", icon: SiReactquery, color: "#FF4154" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Playwright", icon: MdOutlineBugReport, color: "#45BA63" },
    { name: "Testing Library", icon: SiTestinglibrary, color: "#E33332" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
];

const Technologies = () => {
  return (
    <div className="tech-grid">
    {tech.map(({ name, icon: Icon, color }) => (
        <div className="tech-pill" key={name}>
            <Icon
                className="tech-icon"
                style={{ color }}
            />

            <span className="tech-name">
                {name}
            </span>
        </div>
    ))}
</div>
  );
};

export default Technologies;
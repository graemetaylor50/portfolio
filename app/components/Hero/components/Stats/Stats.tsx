"use client";
import "./Stats.css";
import {
  BriefcaseBusiness,
  Code2,
  Building2,
  Globe2,
  CircleCheckBig,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    number: "15+",
    title: "Years Experience",
  },
  {
    icon: Code2,
    number: "8+",
    title: "Years React",
  },
  {
    icon: Building2,
    number: "Enterprise",
    title: "Commercial Software",
  },
  {
    icon: Globe2,
    number: "Global",
    title: "Distributed Teams",
  },
  {
    icon: CircleCheckBig,
    number: "Available",
    title: "Open to Work",
  },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article className="stat" key={stat.title}>
                <Icon className="stat-icon" />

                <h3>{stat.number}</h3>

                <p>{stat.title}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
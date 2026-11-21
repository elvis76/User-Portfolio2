import { useState } from "react";
import { projects } from "../data.js";


export default function Projects() {
  return (
    <section id="work">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => {
          const external = p.href.startsWith("http");
          return (
            <article className="card project" key={p.title}>
              <div className="thumb">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                {p.label && <span className="label">{p.label}</span>}
              </div>
              <div className="body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a
                  className="more"
                  href={p.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  View project <span className="arrow">→</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
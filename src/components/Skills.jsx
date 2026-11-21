import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills">
      <h2>About</h2>
      <div className="grid">
        {skills.map((s) => (
          <article className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div>
              {s.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

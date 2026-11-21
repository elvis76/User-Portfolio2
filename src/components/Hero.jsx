import { profile } from "../data.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      {profile.openToWork && (
        <span className="badge">
          <span className="dot" /> Open to opportunities
        </span>
      )}
      <h1> {profile.name} </h1>
      <p className="role">{profile.role}</p>
      <p className="lead">{profile.bio}</p>
      <a className="btn" href="/resume.pdf" download="Elvis-Duru-Resume.pdf">Resume</a>
      <a className="btn alt" href="#work">Projects</a>
    </section>
  );
}

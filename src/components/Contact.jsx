import { profile } from "../data.js";

export default function Contact() {
  return (
    <section id="contact">
      <div className="cta">
        <h2>Let's Build Something Incredible</h2>
        <p className="lead">
          I’m open to discussing new opportunities and collaborations.
        </p>
        <a className="btn with-icon" href={`mailto:${profile.email}`}>
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          Email Me
          </a>
      </div>
    </section>
  );
}
